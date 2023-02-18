import { useState } from 'react';
import { Method } from 'axios';

import api from '@/services/api';
import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect';

interface HookResponse<T> {
  data: T | null;
  isLoading: boolean;
  errorMessage?: string;
}

function useRequest<T = any>(
  endpoint: string,
  method: Method
): HookResponse<T> {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>();

  useIsomorphicLayoutEffect(() => {
    const { signal, abort } = new AbortController();

    setIsLoading(true);

    api
      .request<T>({ method, url: endpoint, signal })
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

    return () => abort();
  }, [endpoint, method]);

  return { data, isLoading, errorMessage };
}

export default useRequest;

// usage -> const { data: SomeType | defaultType = any, isLoading, errorMessage } = useRequest<SomeType>('/endpoint', 'GET');
