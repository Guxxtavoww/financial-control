import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.header`
  width: 100%;
  padding: 10px 10px 0 10px;
  height: 140px;
  background-color: ${props => props.theme.colors.greenBg};
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const HeaderTitle = styled.h2`
  font-size: clamp(1rem, 5vmin, 3rem);
  color: #fff;
  font-weight: 600;
  letter-spacing: 2px;
  text-align: center;
`;

export const ChildrenBox = styled.div`
  position: relative;
  width: 100%;
  transform: translateY(-30px);
  z-index: 3;
  max-width: 1350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  gap: 1rem;
`;
