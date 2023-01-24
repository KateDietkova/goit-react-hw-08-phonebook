import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AuthNavList = styled.div`
  display: flex;
  gap: 10px;
`;

export const AuthNavLink = styled(NavLink)`
  padding: 10px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: #fff;
  font-weight: 500;
  min-width: 120px;
  text-align: center;

  &.active {
    color: #212121;
    background-color: #baeeec;
  }
`;
