import { useState, useLayoutEffect } from 'react';
import axios, { Method } from 'axios';

import api from '@/services/api';

interface IUseRequestProps<T> {
  endpoint: string;
  params?: T;
  body?: T;
  method?: Method;
}

interface IUseRequestResponse<T = any> {
  data: T | null;
  errorMessage: string | undefined;
  isLoading: boolean;
}

function useRequest<T = any, P extends object = {}>({
  endpoint,
  params,
  body,
  method,
}: IUseRequestProps<P>): IUseRequestResponse<T> {
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
        ...body,
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
  }, [params, endpoint, method, body]);

  return { data, errorMessage, isLoading };
}

export default useRequest;
