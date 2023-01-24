import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contacts-operations';
import { selectContacts } from 'redux/contacts/contacts-selectors';
import { useEffect, useState } from 'react';
import {
  SectionContacts,
  ButtonWTitleWrapper,
  NoContacts,
} from './Contacts.styled';
import { IoMdPersonAdd } from 'react-icons/io';
import { Button } from 'react-bootstrap';
import { ModalContact } from 'components/Modal/Modal';
import Modal from 'react-bootstrap/Modal';
import { ContactForm } from 'components/ContactForm/ContactForm';

const Contacts = () => {
  const { items, isLoading, error } = useSelector(selectContacts);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <SectionContacts>
      <ButtonWTitleWrapper>
        <h2>Contacts</h2>
        <Button type="button" onClick={handleShow}>
          <IoMdPersonAdd size="32" />
        </Button>
      </ButtonWTitleWrapper>
      <Filter />
      {isLoading && <Loader />}
      {error && <div>Sorry, something went wrong :( Please try again</div>}
      {items.length > 0 && !isLoading && <ContactList />}
      {!isLoading && items.length === 0 && (
        <NoContacts>You haven't any contacts yet</NoContacts>
      )}
      {show && (
        <Modal
          show={show}
          backdrop="static"
          keyboard={false}
          onHide={handleClose}
        >
          <ModalContact
            title={'Add contact'}
            component={ContactForm}
            onClose={handleClose}
          />
        </Modal>
      )}
    </SectionContacts>
  );
};

export default Contacts;
