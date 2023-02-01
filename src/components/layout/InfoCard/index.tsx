import React from 'react';

import { formatToCurrency } from '@/utils/formatToCurrency';

import { handleCardType } from './helpers';
import { InfoCardContainer, InfoCardHeader, Amount } from './styles';

export interface IInfoCardProps {
  card_type: 'in' | 'out' | 'result';
  amout: number;
}

const InfoCard: React.FC<IInfoCardProps> = ({ amout, card_type }) => (
  <InfoCardContainer>
    <InfoCardHeader>
      <span className="titleDesc">{handleCardType(card_type)}</span>
      <div className="iconBx">{handleCardType(card_type, true)}</div>
    </InfoCardHeader>
    <Amount>{formatToCurrency(amout)}</Amount>
  </InfoCardContainer>
);

export default InfoCard;
