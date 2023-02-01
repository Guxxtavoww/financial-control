import styled from 'styled-components';

export const InfoCardContainer = styled.div`
  border-radius: 6px;
  padding: 14px 1.8rem;
  background-color: ${props => props.theme.colors.cardBg};
  cursor: pointer;
`;

export const InfoCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  .titleDesc {
    font-size: 13px;
    font-weight: 400;
    color: ${props => props.theme.colors.importantTextColor};
  }

  .iconBx {
    fill: ${props => props.theme.colors.importantTextColor};
    color: ${props => props.theme.colors.importantTextColor};
  }
`;

export const Amount = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: ${props => props.theme.colors.importantTextColor};
`;
