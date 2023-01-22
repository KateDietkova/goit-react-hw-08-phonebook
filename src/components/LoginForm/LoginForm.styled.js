import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const LoginTitle = styled.h1`
  font-size: 30px;
  text-align: center;
  font-weight: 700;
  margin-bottom: 15px;
`;

export const FormStyled = styled(Form)`
  margin: 0 auto;
  padding: 10px;
  width: 600px;
  font-weight: 500;
`;

export const FormGroupPassword = styled.div`
  position: relative;
`;

export const ButtonPassword = styled(Button)`
  width: 40px;
  position: absolute;
  right: 40px;
  bottom: 12px;
  padding: 5px;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonLogin = styled(Button)`
  width: 100px;
`;
