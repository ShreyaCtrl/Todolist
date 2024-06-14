import { useState } from "react";
import { CustomErrorAlert } from "../utils/general.js";

const useGetUser = (setUser) => {
  const [isLoading, setIsLoading] = useState(false);

  const fetchUser = async (username, password) => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:5000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: username, password: password }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setUser(data.user);
    } catch (error) {
      CustomErrorAlert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { fetchUser, isFetchingUser: isLoading };
};

export default useGetUser;
