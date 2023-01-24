import styled from 'styled-components';

export const ContactListStyled = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

export const ContactListItemStyled = styled.li`
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 15px;
  min-width: 450px;
  max-width: 500px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: rgba(255, 255, 255, 0.5);
`;
