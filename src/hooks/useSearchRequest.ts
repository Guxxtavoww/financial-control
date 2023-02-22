import { useState, useLayoutEffect } from 'react';
import axios, { Method, Canceler } from 'axios';

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
    setIsLoading(true);
    let canceler: Canceler;

    (async () => {
      await api<T>({
        method: method || 'GET',
        url: endpoint,
        params,
        cancelToken: new axios.CancelToken(c => {
          canceler = c;
        }),
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

    return () => canceler();
  }, [params, endpoint, method]);

  return { data, errorMessage, isLoading };
}

export default useSearchRequest;
