import { createContext, useContext, useCallback } from 'react';

import { FCWithChildren } from '@/types';

interface INotificationsContextProps {
  pushNotification: (title: string, options?: NotificationOptions) => void;
}

const NotificationContext = createContext<INotificationsContextProps>({} as INotificationsContextProps);

export const NotificationsProvider: FCWithChildren<{}, true> = ({ children }) => {
  const pushNotification = useCallback((title: string, options?: NotificationOptions) => {
    console.log({ title, options });
  }, []);
  
  return (
    <NotificationContext.Provider value={{ pushNotification }}>
      {children}
    </NotificationContext.Provider>
  );
};

export function useNotification() {
  return useContext(NotificationContext);
}
