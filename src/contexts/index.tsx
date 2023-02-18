import { Suspense } from 'react';

import { FCWithChildren } from '@/types';
import { ComposeProviders } from '@/components';
import { ScreenLoader } from '@/styles/global';

import { ThemeProvider } from './Theme';
import { MobileProvider } from './Mobile';
import { SnackbarProvider } from './Snackbar';
import { FinancesProvider } from './FinancesContext';

const Contexts: FCWithChildren<{}, true> = ({ children }) => (
  <ComposeProviders
    with={[ThemeProvider, SnackbarProvider, MobileProvider, FinancesProvider]}
  >
    <Suspense fallback={<ScreenLoader />}>{children}</Suspense>
  </ComposeProviders>
);

export default Contexts;
