import { useState } from "react";
import {
  CustomSuccessAlert,
  CustomErrorAlert,
  defaultTodo,
} from "../utils/general.js";

// const useAddTodos = (fetchTodos, page, limit, setNewTodo) => {
//   const [isLoading, setIsLoading] = useState(false);

//   const addTodo = async (todo) => {
//     try {
//       setIsLoading(true);
//       const response = await fetch("http://localhost:5000/todos", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(todo),
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       await fetchTodos(page, limit);
//       setNewTodo(defaultTodo);
//       CustomSuccessAlert("New Todo added successfully");
//     } catch (error) {
//       CustomErrorAlert(error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return { addTodo, isAddingTodo: isLoading };
// };

// export default useAddTodos;

const useAddTodos = (fetchTodos, page, limit, setNewTodo) => {
  const [isLoading, setIsLoading] = useState(false);

  const addTodo = async (todo) => {
    const token = localStorage.getItem("token");
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://todolist-or9l.onrender.com/todos/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(todo),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      await fetchTodos(page, limit);
      setNewTodo(defaultTodo);
      CustomSuccessAlert("New Todo added successfully");
    } catch (error) {
      CustomErrorAlert(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { addTodo, isAddingTodo: isLoading };
};

export default useAddTodos;
