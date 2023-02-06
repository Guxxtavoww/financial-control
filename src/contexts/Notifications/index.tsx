import { createContext, useContext, useCallback, useState } from 'react';

import { FCWithChildren } from '@/types';
import { useIsomorphicLayoutEffect, usePersitedState } from '@/hooks';

interface INotificationsContextProps {
  pushNotification: (title: string, options?: NotificationOptions) => void;
}

const NotificationContext = createContext<INotificationsContextProps>(
  {} as INotificationsContextProps
);

export const NotificationsProvider: FCWithChildren<{}, true> = ({
  children,
}) => {
  const [isFirstTime, setIsFirstTime] = usePersitedState('isFirstTime', true);
  const [userAllowNotifications, setUserAllowNotifications] = useState<boolean>(
    Notification.permission === 'granted'
  );

  const pushNotification = useCallback(
    (title: string, options?: NotificationOptions) => {
      if (!userAllowNotifications) return;

      new Notification(title, {
        icon: './favicon.ico',
        ...options,
      });
    },
    [userAllowNotifications]
  );

  useIsomorphicLayoutEffect(() => {
    if (!isFirstTime && userAllowNotifications) return;

    Notification.requestPermission(res => {
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
  const context = useContext(NotificationContext);

  if (!context)
    throw new Error(
      'Use o hook dentro de um componente, que está dentro do provider'
    );

  return context;
}
