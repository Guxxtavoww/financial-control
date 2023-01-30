import { Dispatch, SetStateAction, useState } from 'react';

import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect';

type HookResponse<T> = [T, Dispatch<SetStateAction<T>>];

function usePersitedState<T>(key: string, initialValue: T): HookResponse<T> {
  const [state, setState] = useState<T>(() => {
    const storageValue = localStorage.getItem(key);

    if (!storageValue) return initialValue;

    return JSON.parse(storageValue) as T;
  });

  useIsomorphicLayoutEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default usePersitedState;
