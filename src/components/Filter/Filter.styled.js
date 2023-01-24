import styled from 'styled-components';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export const FloatingLabelStyled = styled(FloatingLabel)`
  margin-bottom: 0;
`;

export const FilterInput = styled(Form.Control)`
  width: 600px;
`;

export const FilterWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 30px;
`;

export const InputGroupStyled = styled(InputGroup)`
  width: 55%;
`;
