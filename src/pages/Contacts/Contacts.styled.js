import styled from 'styled-components';
import img from '../../images/background-contacts.png';

export const SectionContacts = styled.section`
  padding: 30px 0;
  min-height: 700px;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
`;

export const ButtonWTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  padding: 10px 30px;
`;
