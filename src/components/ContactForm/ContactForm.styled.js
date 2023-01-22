import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const FormStyled = styled(Form)`
  margin: 0 auto;
  padding: 10px;
  width: 600px;
  font-weight: 500;
`;

export const ContactFormTitle = styled.h2`
  font-size: 30px;
  text-align: center;
  font-weight: 700;
  margin-bottom: 15px;
`;

export const ButtonAdd = styled(Button)`
  display: block;
  width: 120px;
  padding: 8px;
  margin: 0 auto;
`;
