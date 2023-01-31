import { FCWithChildren } from '@/types';
import { MobileProvider } from './Mobile';
import { NotificationsProvider } from './Notifications';

const Contexts: FCWithChildren<{}, true> = ({ children }) => (
  <NotificationsProvider>
    <MobileProvider>
      {children}
    </MobileProvider>
  </NotificationsProvider>
);

export default Contexts;
