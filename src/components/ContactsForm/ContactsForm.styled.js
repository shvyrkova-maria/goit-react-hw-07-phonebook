import { Form } from 'formik';
import styled from '@emotion/styled/macro';

export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-top: 15px;
  margin-bottom: 5px;
`;

export const Button = styled.button`
  display: inline-block;
  width: 300px;
  padding: 12px 12px;
  margin-top: 15px;
  font-size: 12px;
  font-weight: 700;
  color: var(--text-color);
  background-color: lightslategray;
  text-transform: uppercase;
  border-radius: 5px;
  border: 1px solid transparent;
  cursor: pointer;
  &:hover,
  &:focus {
    box-shadow: 4px 3px 12px -1px var(--accent-color);
  }
`;

export const ValidationMessage = styled.div`
  font-size: 12px;
  color: red;
  margin-top: 5px;
  margin-bottom: 5px;
`;
