import { useState, useLayoutEffect, useCallback, useRef } from 'react';
import axios, { Method, isCancel, Canceler } from 'axios';

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

  const canceler = useRef<Canceler>();

  const handleRequest = useCallback(async () => {
    setIsLoading(true);

    await api
      .request<T>({
        method: method || 'GET',
        url: endpoint,
        params,
        cancelToken: new axios.CancelToken(c => {
          canceler.current = c;
        }),
      })
      .then(response => {
        setData(response.data);
        setErrorMessage(undefined);
      })
      .catch(err => {
        if (isCancel(err)) return;
        setData(null);
        setErrorMessage(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });

    return () => (canceler.current ? canceler.current() : null);
  }, [endpoint, params, method]);

  useLayoutEffect(() => {
    handleRequest();
  }, [handleRequest]);

  return { data, errorMessage, isLoading };
}

export default useSearchRequest;
