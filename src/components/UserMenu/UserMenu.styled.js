import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

export const UserMenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const UserImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: block;
`;

export const LogOutBtn = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-width: 120px;
`;
