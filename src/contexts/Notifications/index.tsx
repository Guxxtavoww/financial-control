import { createContext, useContext, useCallback, useState } from 'react';

import { FCWithChildren } from '@/types';
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';
import usePersitedState from '@/hooks/usePersitedState';

interface INotificationsContextProps {
  pushNotification: (title: string, options?: NotificationOptions) => void;
}

const NotificationContext = createContext<INotificationsContextProps>({} as INotificationsContextProps);

export const NotificationsProvider: FCWithChildren<{}, true> = ({ children }) => {
  const [isFirstTime, setIsFirstTime] = usePersitedState('isFirstTime', true);
  const [userAllowNotifications, setUserAllowNotifications] = useState<boolean>(Notification.permission === 'granted');
  
  const pushNotification = useCallback((title: string, options?: NotificationOptions) => {
    if (!userAllowNotifications) return;
    new Notification(title, options);
  }, [userAllowNotifications]);
  
  useIsomorphicLayoutEffect(() => {
    if (!isFirstTime && userAllowNotifications) return;

    Notification.requestPermission((res) => {
      setUserAllowNotifications(res === 'granted');
      setIsFirstTime(false);
    });
  }, [isFirstTime, userAllowNotifications]);

  return (
    <NotificationContext.Provider value={{ pushNotification }}>
      {children}
    </NotificationContext.Provider>
  );
};

export function useNotification() {
  return useContext(NotificationContext);
}
