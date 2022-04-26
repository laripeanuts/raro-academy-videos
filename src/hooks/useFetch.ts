import { useState } from "react";
import axios from "axios";

export function useFetch(requestsWrapper: () => Promise<void>) {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const execute = async () => {
    try {
      setErrorMessage("");
      setLoading(true);

      await requestsWrapper();
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 401) {
        setErrorMessage("Faça login para realizar esta operação");
      } else {
        setErrorMessage(
          "Um erro inesperado ocorreu, entre em contato com o suporte ou tente novamente",
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    execute,
    loading,
    errorMessage,
  };
}
