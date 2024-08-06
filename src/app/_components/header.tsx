'use client';

import { useFinances } from '@/contexts/finances.context';

import { InfoCard } from './info-card';

export function Header() {
  const { income, outcome, balance } = useFinances();

  return (
    <div className="flex justify-center items-center gap-3 w-full">
      <InfoCard amount={income} card_type="in" />
      <InfoCard amount={outcome} card_type="out" />
      <InfoCard amount={balance} card_type="result" />
    </div>
  );
}
