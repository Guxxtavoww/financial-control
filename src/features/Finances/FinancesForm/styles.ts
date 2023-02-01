import styled from 'styled-components';
import { Form } from '@unform/web';

export const FormContainer = styled(Form)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 1rem;
  flex-wrap: wrap;
  gap: 4px;
`;

export const InputsWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 1.5rem;
  width: 100%;
  max-width: 680px;
`;

export const ButtonWrapper = styled.div`
  flex: 1;
`;
