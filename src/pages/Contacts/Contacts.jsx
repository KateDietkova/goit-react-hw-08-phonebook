import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contacts-operations';
import { selectContacts } from 'redux/contacts/contacts-selectors';
import { useEffect } from 'react';
import { SectionContacts } from './Contacts.styled';

const Contacts = () => {
  const { items, isLoading, error } = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <SectionContacts>
      <h2>Contacts</h2>
      <ContactForm />
      <Filter />
      {isLoading && <Loader />}
      {error && <div>Sorry, something went wrong :( Please try again</div>}
      {items.length > 0 ? (
        <ContactList />
      ) : (
        <div>You haven't any contacts yet</div>
      )}
    </SectionContacts>
  );
};

export default Contacts;