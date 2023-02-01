import styled from 'styled-components';

export const InfoCardContainer = styled.div`
  min-height: 130px;
  border-radius: 6px;
  padding: 14px 1.8rem;
  background-color: ${props => props.theme.colors.cardBg};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  & > * {
    flex: 1;
    width: 100%;
  }
`;

export const InfoCardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .titleDesc {
    font-size: 13px;
    font-weight: 400;
    color: ${props => props.theme.colors.importantTextColor};
  }

  .iconBx > * {
    fill: ${props => props.theme.colors.importantTextColor} !important;
    color: ${props => props.theme.colors.importantTextColor} !important;
  }
`;

export const Amount = styled.p`
  font-size: 26px;
  font-weight: 700;
  color: ${props => props.theme.colors.importantTextColor};
  text-align: center;
`;
