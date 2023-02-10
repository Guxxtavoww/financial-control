import { useLayoutEffect, useEffect } from 'react';

const useIsomorphicLayoutEffect: typeof useEffect | typeof useLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export default useIsomorphicLayoutEffect;
