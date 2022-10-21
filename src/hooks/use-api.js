import { useContext, useState, useCallback } from "react";
import { AuthContext } from "../store/auth-context";

const useApi = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const authCtx = useContext(AuthContext);

  const sendRequest = useCallback(
    async (requestConfig, applyData) => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(requestConfig.url, {
          method: requestConfig.method ? requestConfig.method : "POST",
          body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
          headers: authCtx.token
            ? {
                "Content-Type": "application/json",
                Authorization: `Bearer ${authCtx.token}`,
              }
            : {
                "Content-Type": "application/json",
              },
        });
        if (!response.ok) {
          throw new Error("Request Failed!");
        }

        const data = await response.json();
        console.log(data);
        applyData(data);
      } catch (error) {
        setError(error.message || "Something went wrong");
      }
      setIsLoading(false);
    },
    [authCtx.token]
  );

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useApi;
