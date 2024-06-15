import { useState } from "react";
import { CustomErrorAlert } from "../utils/general.js";

// const useGetTodos = (setTodos, setNumOfPages, setPage) => {
//   const [isLoading, setIsLoading] = useState(true);

//   const fetchTodos = async (page, limit) => {
//     setIsLoading(true);
//     try {
//       const response = await fetch(
//         `http://localhost:5000/todos?page=${page}&limit=${limit}`
//       );
//       const data = await response.json();
//       setTodos(data.todos);
//       setNumOfPages(data.numOfPages);
//       if (page > data.numOfPages) setPage(data.numOfPages);
//     } catch (error) {
//       CustomErrorAlert(error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return { fetchTodos, isFetchingTodos: isLoading };
// };

// export default useGetTodos;


const useGetTodos = (setTodos, setNumOfPages, setPage) => {
  const [isLoading, setIsLoading] = useState(true);

  const fetchTodos = async (page, limit) => {
    const token = localStorage.getItem("token");
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://todolist-or9l.onrender.com/todos/get?page=${page}&limit=${limit}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      setTodos(data.todos);
      setNumOfPages(data.numOfPages);
      if (page > data.numOfPages) setPage(data.numOfPages);
    } catch (error) {
      CustomErrorAlert(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { fetchTodos, isFetchingTodos: isLoading };
};

export default useGetTodos;
