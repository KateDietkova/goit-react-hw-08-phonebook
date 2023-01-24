import styled from 'styled-components';
import img from '../../images/background-header-dark.png';

export const Header = styled.header`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;

  border-radius: 5px;
`;


