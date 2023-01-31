import { FCWithChildren } from '@/types';

import ComposeProvider from '@/components/tools/ComposeProviders';
import { MobileProvider } from './Mobile';
import { NotificationsProvider } from './Notifications';
import { ThemeProvider } from './Theme';

const Contexts: FCWithChildren<{}, true> = ({ children }) => (
  <ComposeProvider
    with={[MobileProvider, NotificationsProvider, ThemeProvider]}
  >
    {children}
  </ComposeProvider>
);

export default Contexts;
