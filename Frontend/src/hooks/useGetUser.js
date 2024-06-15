// import { useState } from "react";
// import { CustomErrorAlert } from "../utils/general.js";

// // const useGetUser = (setUser) => {
// //   const [isLoading, setIsLoading] = useState(false);

// //   const fetchUser = async (username, password) => {
// //     setIsLoading(true);
// //     try {
// //       const response = await fetch("http://localhost:5000/users/login", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify({ username: username, password: password }),
// //       });

// //       if (!response.ok) {
// //         throw new Error(`HTTP error! status: ${response.status}`);
// //       }

// //       const data = await response.json();
// //       setUser(data.user);
// //     } catch (error) {
// //       CustomErrorAlert(error.message);
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   return { fetchUser, isFetchingUser: isLoading };
// // };

// // export default useGetUser;

// const useGetUser = (setUser) => {
//   const [isLoading, setIsLoading] = useState(false);

//   const fetchUser = async (username, password) => {
//     setIsLoading(true);
//     try {
//       const response = await fetch("http://localhost:5000/users/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ username, password }),
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const data = await response.json();
//       localStorage.setItem("token", data.token); // Store token in localStorage
//       setUser(data.user);
//     } catch (error) {
//       CustomErrorAlert(error.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return { fetchUser, isFetchingUser: isLoading };
// };

// export default useGetUser;

import { useState } from "react";
import { CustomErrorAlert } from "../utils/general.js";

const useGetUser = (setUser) => {
  const [isLoading, setIsLoading] = useState(false);

  const fetchUser = async (username, password) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://todolist-or9l.onrender.com/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      localStorage.setItem("token", data.token);
      setUser(data);
      setIsLoading(false); // Set loading to false after user is set
      return data; // Return the fetched user data
    } catch (error) {
      CustomErrorAlert(error.message);
      setIsLoading(false); // Set loading to false in case of error
      return null; // Return null in case of error
    }
  };

  return { fetchUser, isFetchingUser: isLoading };
};

export default useGetUser;

