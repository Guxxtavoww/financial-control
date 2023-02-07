import { useState, useCallback, RefObject } from 'react';

import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect';

function useClickOutside(currentRef: RefObject<HTMLElement>): boolean {
  const [isClickedOutside, setIsClickedOutside] = useState<boolean>(false);

  const handleDocumentClick = useCallback(
    (e: MouseEvent) => {
      const clickedOutside = !currentRef.current?.contains(e.target as Node);

      return setIsClickedOutside(clickedOutside);
    },
    [currentRef]
  );

  useIsomorphicLayoutEffect(() => {
    document.addEventListener('mousedown', handleDocumentClick);

    return () => document.removeEventListener('mousedown', handleDocumentClick);
  }, [handleDocumentClick]);

  return isClickedOutside;
}

export default useClickOutside;
