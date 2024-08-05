'use client';

import { FinanceForm } from './_components/finance-form';
import { FinanceTable } from './_components/finance-table';
import { Header } from './_components/header';

export default function Home() {
  return (
    <main className="min-h-svh p-5 space-y-4">
      <Header />
      <FinanceForm />
      <FinanceTable />
    </main>
  );
}
