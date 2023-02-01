import { FCWithChildren } from '@/types';
import { ComposeProviders } from '@/components';

import { MobileProvider } from './Mobile';
import { NotificationsProvider } from './Notifications';
import { FinancesProvider } from './FinancesContext';
import { ThemeProvider } from './Theme';

const Contexts: FCWithChildren<{}, true> = ({ children }) => (
  <ComposeProviders
    with={[
      ThemeProvider,
      NotificationsProvider,
      MobileProvider,
      FinancesProvider,
    ]}
  >
    {children}
  </ComposeProviders>
);

export default Contexts;
