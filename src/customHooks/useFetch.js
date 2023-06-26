import { useState, useEffect } from "react";

function useFetch(apiConfig, params = '') {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    apiCall();
  }, [params]);
  const apiCall = async () => {
    try {
        const res = await fetch(apiConfig.url+params);
        const data = await res.json();
        setData(data);
    } catch (error) {
        console.log(error);
        setIsError(true);
    }
  }
  return [ isLoading, isError, data]
}

export default useFetch;