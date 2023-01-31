import { FCWithChildren } from '@/types';

import ComposeProvider from '@/components/tools/ComposeProviders';
import { MobileProvider } from './Mobile';
import { NotificationsProvider } from './Notifications';
import { ThemeProvider } from './Theme';

const Contexts: FCWithChildren<{}, true> = ({ children }) => (
  <ComposeProvider
    with={[ThemeProvider, NotificationsProvider, MobileProvider]}
  >
    {children}
  </ComposeProvider>
);

export default Contexts;
