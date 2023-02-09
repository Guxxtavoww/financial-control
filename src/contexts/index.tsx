import { Suspense } from 'react';

import { FCWithChildren } from '@/types';
import { ComposeProviders } from '@/components';
import { ScreenLoader } from '@/styles/global';

import { ThemeProvider } from './Theme';
import { MobileProvider } from './Mobile';
import { SnackbarProvider } from './Snackbar';
import { FinancesProvider } from './FinancesContext';

const Contexts: FCWithChildren<{}, true> = ({ children }) => (
  <Suspense fallback={<ScreenLoader />}>
    <ComposeProviders
      with={[
        ThemeProvider,
        SnackbarProvider,
        MobileProvider,
        FinancesProvider,
      ]}
    >
      {children}
    </ComposeProviders>
  </Suspense>
);

export default Contexts;
