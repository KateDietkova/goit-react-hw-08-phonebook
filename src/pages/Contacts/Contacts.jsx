import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contacts-operations';
import { selectContacts } from 'redux/contacts/contacts-selectors';
import { useEffect, useState } from 'react';
import { SectionContacts, ButtonWTitleWrapper } from './Contacts.styled';
import { IoMdPersonAdd } from 'react-icons/io';
import { Button } from 'react-bootstrap';
import { ModalAddContact } from 'components/Modal/Modal';
import Modal from 'react-bootstrap/Modal';

const Contacts = () => {
  const { items, isLoading, error } = useSelector(selectContacts);
  const dispatch = useDispatch();
  // const [isOpenModal, setIsOpenModal] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // const handleClick = () => {
  //   setIsOpenModal(true);
  // };

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
      {items.length > 0 ? (
        <ContactList />
      ) : (
        <div>You haven't any contacts yet</div>
      )}
      {show && (
        <Modal show={show} onHide={handleClose}>
          <ModalAddContact onClose={handleClose} />
        </Modal>
      )}
    </SectionContacts>
  );
};

export default Contacts;
