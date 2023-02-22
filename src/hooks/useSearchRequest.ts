import { useState, useLayoutEffect } from 'react';
import axios, { Method } from 'axios';

import api from '@/services/api';

interface IUseSearchRequestProps<T> {
  endpoint: string;
  params: T;
  method?: Method;
}

interface IUseSearchRequestResponse<T = any> {
  data: T | null;
  errorMessage: string | undefined;
  isLoading: boolean;
}

function useSearchRequest<T = any, P extends object = {}>({
  endpoint,
  params,
  method,
}: IUseSearchRequestProps<P>): IUseSearchRequestResponse<T> {
  const [data, setData] = useState<T | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);

  useLayoutEffect(() => {
    const controller = new AbortController();
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    setIsLoading(true);

    (async () => {
      await api<T>({
        method: method || 'GET',
        url: endpoint,
        params,
        cancelToken: source.token,
        signal: controller.signal,
      })
        .then(response => {
          setData(response.data);
          setErrorMessage(undefined);
        })
        .catch(err => {
          setData(null);
          setErrorMessage(err.message);
        })
        .finally(() => {
          setIsLoading(false);
        });
    })();

    return () => {
      controller.abort();
      source.cancel('Operation canceled by the user.');
    };
  }, [params, endpoint, method]);

  return { data, errorMessage, isLoading };
}

export default useSearchRequest;
