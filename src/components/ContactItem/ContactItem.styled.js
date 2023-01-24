import styled from 'styled-components';
import Button from 'react-bootstrap/Button';


export const ContactInfo = styled.p`
    margin: 0;
`

export const ButtonContactStyled = styled(Button)`
  display: inline-flex;
  gap: 10px;
  padding: 10px 20px;
  border: none;
  text-align: center;
  cursor: pointer;
  background-color: #07bad2;
  border-radius: 5px;
  min-width: 80px;
`;

export const ButtonEditStyled = styled(Button)`
  display: inline-block;
  padding: 10px 20px;
  border: none;
  text-align: center;
  cursor: pointer;
  background-color: #07bad2;
  border-radius: 5px;
  margin-right: 10px;
  min-width: 80px;
`;