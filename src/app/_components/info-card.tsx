// @ts-nocheck

import { CircleArrowDown, CircleArrowUp, CircleDollarSign } from 'lucide-react';

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { cn } from '@/utils/cn.util';
import { formatToCurrency } from '@/utils/currency.util';
import { Icon, type IconType } from '@/components/tools/icon';

export interface IInfoCardProps {
  card_type: IFinance['type'] | 'result';
  amount: number;
}

export function handleCardType<T extends boolean = false>(
  cardType: IInfoCardProps['card_type'],
  isRenderIcon: T = false
): T extends false ? string : IconType {
  switch (cardType) {
    case 'in':
      return !isRenderIcon ? 'Entradas' : CircleArrowUp;
    case 'out':
      return !isRenderIcon ? 'Saídas' : CircleArrowDown;
    default:
      return !isRenderIcon ? 'Total' : CircleDollarSign;
  }
}

export function InfoCard({ amount, card_type }: IInfoCardProps) {
  return (
    <Card className="flex-[1] text-center">
      <CardHeader>
        <CardTitle className="inline-flex items-center justify-center gap-2">
          {handleCardType(card_type)}
          <Icon icon={handleCardType(card_type, true)} size="sm" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardTitle
          className={cn('font-bold', {
            'text-destructive': card_type === 'result' && amount < 0,
          })}
        >
          {formatToCurrency(amount)}
        </CardTitle>
      </CardContent>
    </Card>
  );
}
