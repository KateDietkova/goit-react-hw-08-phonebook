import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const RegisterTitle = styled.h1`
  font-size: 30px;
  text-align: center;
  font-weight: 700;
`;

export const FormStyled = styled(Form)`
  margin: 0 auto;
  padding: 10px;
  width: 600px;
  font-weight: 500;
`;

export const FormGroupPassword = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const ButtonPassword = styled(Button)`
  width: 70px;
  position: absolute;
  right: 40px;
  padding: 3px;
`;

export const ButtonSignUp = styled(Button)`
  width: 100px;
`;
