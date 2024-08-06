'use client';

import { Button } from '@/components/ui/button';

export default function GlobalError({ error, reset }: ErrorPageProps) {
  return (
    <html>
      <body className="w-screen min-h-svh grid place-items-center">
        <div className="m-4">
          <h2>Something went wrong!</h2>
          <p>{error.message}</p>
          <Button onClick={reset}>Try again</Button>
        </div>
      </body>
    </html>
  );
}
