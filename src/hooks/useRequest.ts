import { useState } from 'react';
import axios, { Method } from 'axios';

import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect';

interface HookResponse<T> {
  data: T | null;
  isLoading: boolean;
  errorMessage?: string;
}

function useRequest<T>(endpoint: string, method: Method): HookResponse<T> {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>();

  useIsomorphicLayoutEffect(() => {
    const abortController = new AbortController();

    const axiosInstance = axios.create({
      baseURL: 'vem do .env',
      signal: abortController.signal,
    });

    setIsLoading(true);

    axiosInstance
      .request<T>({ method, url: endpoint })
      .then(res => {
        setData(res.data);
        setErrorMessage(undefined);
      })
      .catch(err => {
        setData(null);
        setErrorMessage(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });

    return () => abortController.abort();
  }, [endpoint, method]);

  return { data, isLoading, errorMessage };
}

export default useRequest;
