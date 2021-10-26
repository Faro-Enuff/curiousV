import React, { useState, useEffect } from "react";
import axios from "axios";

export const useFetch = (method, url, body, header) => {
  const [isLoading, setIsLoading] = useState(false);
  const [apiData, setApiData] = useState(null);
  const [serverError, setServerError] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const resp = await axios({
          method: method,
          url: url,
          data: body,
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": header,
          },
        });
        const data = await resp?.data;
        const suc = await resp;
        setApiData(data);
        setSuccess(suc);
        setIsLoading(false);
      } catch (error) {
        setServerError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url, method, body]);

  return { isLoading, apiData, serverError, success };
};
