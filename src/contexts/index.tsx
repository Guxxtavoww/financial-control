'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { ThemeProviderProps } from 'next-themes/dist/types';

import { TooltipProvider } from '@/components/ui/tooltip';

import { FinancesProvider } from './finances.context';

export function Contexts({
  children,
  ...props
}: WithChildren<ThemeProviderProps>): JSX.Element {
  return (
    <NextThemesProvider {...props}>
      <FinancesProvider>
        <TooltipProvider>{children}</TooltipProvider>
      </FinancesProvider>
    </NextThemesProvider>
  );
}
