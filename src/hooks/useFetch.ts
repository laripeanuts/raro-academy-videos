import axios from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export function useFetch<T = unknown>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await apiClient.get(url);
        setData(response.data);
      } catch (error: any) {
        setHasError(true);
        setErrorMessage(error.message);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  return {
    data,
    hasError,
    errorMessage,
    isLoading,
  };
}
