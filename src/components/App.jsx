import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Box } from './Box/Box';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { Loader } from './Loader/Loader';

export const App = () => {
  const { items, isLoading, error } = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box display="flex" flexDirection="column" alignItems="center" pt="20px">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        p="10px"
        mb="20px"
      >
        <h1>Phonebook</h1>
        <ContactForm />
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center" p="10px">
        <h2>Contacts</h2>
        <Filter />
        {isLoading && <Loader />}
        {error && <div>Sorry, something went wrong :( Please try again</div>}
        {items.length > 0 && !isLoading && !error && <ContactList />}
      </Box>
    </Box>
  );
};
