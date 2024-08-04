import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { HydrationOverlay } from '@builder.io/react-hydration-overlay';

import { Toaster } from '@/components/ui/toaster';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Simulador de eleição',
  description: 'Simula',
};

export default async function RootLayout({ children }: WithChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HydrationOverlay>
          {children}
          <Toaster />
        </HydrationOverlay>
      </body>
    </html>
  );
}
