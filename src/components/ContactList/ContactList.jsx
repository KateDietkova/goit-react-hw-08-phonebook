import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { ContactListStyled, ContactListItemStyled } from './ContactList.styled';
import { selectVisibleContacts } from 'redux/contacts/contacts-selectors';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <ContactListStyled>
      {contacts.map(contact => (
        <ContactListItemStyled key={contact.id}>
          <ContactItem contact={contact} />
        </ContactListItemStyled>
      ))}
    </ContactListStyled>
  );
};

//
