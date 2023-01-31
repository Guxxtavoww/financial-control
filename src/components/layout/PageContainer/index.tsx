import { FCWithChildren } from '@/types';

import { Container, Header, HeaderTitle, ChildrenBox } from './styles';

const PageContainer: FCWithChildren = ({ children }) => (
  <Container>
    <Header>
      <HeaderTitle>Controle Financeiro</HeaderTitle>
    </Header>
    <ChildrenBox>{children}</ChildrenBox>
  </Container>
);

export default PageContainer;
