import { useState, useCallback } from 'react';
import axios, { Method } from 'axios';

import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect';

function useRequest<T>(endpoint: string, method: Method) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useIsomorphicLayoutEffect(() => {
    const abortController = new AbortController();

    setIsLoading(true);

    const axiosInstance = axios.create({
      baseURL: 'vem do .env',
      signal: abortController.signal,
    });

    axios.request<T>({ method,  })
  }, [endpoint, method]);
}
