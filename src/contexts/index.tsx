import { Suspense } from 'react';
import { CircularProgress } from '@material-ui/core';

import { FCWithChildren } from '@/types';
import { ComposeProviders } from '@/components';

import { SnackbarProvider } from './Snackbar';
import { MobileProvider } from './Mobile';
import { NotificationsProvider } from './Notifications';
import { FinancesProvider } from './FinancesContext';
import { ThemeProvider } from './Theme';

const Contexts: FCWithChildren<{}, true> = ({ children }) => (
  <Suspense fallback={<CircularProgress />}>
    <ComposeProviders
      with={[
        ThemeProvider,
        SnackbarProvider,
        NotificationsProvider,
        MobileProvider,
        FinancesProvider,
      ]}
    >
      {children}
    </ComposeProviders>
  </Suspense>
);

export default Contexts;
