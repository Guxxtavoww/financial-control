import { FCWithChildren } from '@/types';

import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';
import { useMobile } from '@/contexts/Mobile';

const Test: FCWithChildren = () => {
  const { isMobileDevice } = useMobile();

  useIsomorphicLayoutEffect(() => {
    console.log({ isMobileDevice });
  }, [isMobileDevice]);
  
  return (
    <div className="a">
      <a href="">b</a>
    </div>
  );
};

export default Test;
