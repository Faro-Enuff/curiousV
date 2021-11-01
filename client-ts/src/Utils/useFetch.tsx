import { useState, useEffect } from 'react';
import axios, { Method, AxiosRequestHeaders } from 'axios';

export const useFetch = (
  method: Method,
  url: string,
  body?: any,
  header?: AxiosRequestHeaders
) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [apiData, setApiData] = useState<any | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const resp = await axios({
          method: method,
          url: url,
          data: body,
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        const data = await resp?.data;
        setApiData(data);
        setIsLoading(false);
      } catch (error: any) {
        setServerError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url, method, body, header]);

  return { isLoading, apiData, serverError };
};
