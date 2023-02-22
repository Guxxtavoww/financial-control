import { useCallback, useState } from 'react';

import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect';

function useGeolocation(options?: PositionOptions) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<GeolocationPositionError>();
  const [coords, setCoords] = useState<GeolocationCoordinates | null>(null);

  const sucessHandler = useCallback((sucess: GeolocationPosition) => {
    setError(undefined);
    setIsLoading(false);
    setCoords(sucess.coords);
  }, []);

  const errorHandler = useCallback((error: GeolocationPositionError) => {
    setError(error);
    setIsLoading(false);
    setCoords(null);
  }, []);

  useIsomorphicLayoutEffect(() => {
    navigator.geolocation.getCurrentPosition(
      sucessHandler,
      errorHandler,
      options
    );

    const id = navigator.geolocation.watchPosition(
      sucessHandler,
      errorHandler,
      options
    );

    return () => navigator.geolocation.clearWatch(id);
  }, [options, sucessHandler, errorHandler]);

  return { coords, error, isLoading };
}

export default useGeolocation;
