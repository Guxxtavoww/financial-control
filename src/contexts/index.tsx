import { FCWithChildren } from '@/types';
import { MobileProvider } from './Mobile';
import { NotificationsProvider } from './Notifications';
import { ThemeProvider } from './Theme';

const Contexts: FCWithChildren<{}, true> = ({ children }) => (
  <ThemeProvider>
    <NotificationsProvider>
      <MobileProvider>
        {children}
      </MobileProvider>
    </NotificationsProvider>
  </ThemeProvider>
);

export default Contexts;
