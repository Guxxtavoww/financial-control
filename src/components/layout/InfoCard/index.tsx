import React from 'react';

import { formatToCurrency } from '@/utils/formatValues';

import { handleCardType } from './helpers';
import { InfoCardContainer, InfoCardHeader, Amount } from './styles';

export interface IInfoCardProps {
  card_type: 'in' | 'out' | 'result';
  amount: number;
}

const InfoCard: React.FC<IInfoCardProps> = ({ amount, card_type }) => (
  <InfoCardContainer>
    <InfoCardHeader>
      <span className="titleDesc">{handleCardType(card_type)}</span>
      <div className="iconBx">{handleCardType(card_type, true)}</div>
    </InfoCardHeader>
    <Amount>{formatToCurrency(amount)}</Amount>
  </InfoCardContainer>
);

export default InfoCard;
