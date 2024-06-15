import { useState } from "react";
import { CustomSuccessAlert, CustomErrorAlert } from "../utils/general.js";

const useAddUser = () => {
  const [isLoading, setIsLoading] = useState(false);

  const addUser = async (user) => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://todolist-or9l.onrender.com/users/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      CustomSuccessAlert("User added successfully");
    } catch (error) {
      CustomErrorAlert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { addUser, isAddingUser: isLoading };
};

export default useAddUser;