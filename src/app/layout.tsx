import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { HydrationOverlay } from '@builder.io/react-hydration-overlay';

import { cn } from '@/utils/cn.util';
import { Contexts } from '@/contexts';
import { Toaster } from '@/components/ui/toaster';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Controle Financeiro',
  description: 'Um app de controle financeiro',
  keywords: ['controle financeiro', 'finanças'],
  authors: [
    {
      name: 'Gustavo',
      url: 'https://gustavo-augusto-portfolio.vercel.app/',
    },
  ],
};

export const viewport: Viewport = {
  colorScheme: 'dark light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default async function RootLayout({ children }: WithChildren) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body
        className={cn(
          'bg-background font-sans antialiased',
          inter.className
        )}
      >
        <HydrationOverlay>
          <Contexts
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </Contexts>
        </HydrationOverlay>
      </body>
    </html>
  );
}
