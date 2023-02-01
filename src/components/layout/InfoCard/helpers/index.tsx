/* eslint-disable indent */
import { MdAttachMoney } from 'react-icons/md';
import { BsArrowUpCircle, BsArrowDownCircle } from 'react-icons/bs';

import { IInfoCardProps } from '../index';

export const handleCardType = (
  cardType: IInfoCardProps['card_type'],
  isRenderIcon?: boolean
): string | JSX.Element => {
  switch (cardType) {
    case 'in':
      return !isRenderIcon ? 'Entradas' : <BsArrowUpCircle />;
    case 'out':
      return !isRenderIcon ? 'Saídas' : <BsArrowDownCircle />;
    default:
      return !isRenderIcon ? 'Total' : <MdAttachMoney />;
  }
};
