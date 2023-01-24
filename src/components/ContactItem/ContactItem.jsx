import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { deleteContact } from 'redux/contacts/contacts-operations';
import {
  ButtonContactStyled,
  ContactInfo,
  ButtonEditStyled,
} from './ContactItem.styled';
import { ModalContact } from 'components/Modal/Modal';
import Modal from 'react-bootstrap/Modal';
import { ContactFormEdit } from 'components/ContactFormEdit/ContactFormEdit';
import { LoaderButton } from 'components/Loader/Loader';

export const ContactItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [deletingContactId, setDeletingContactId] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <ContactInfo>
        {name}: {number}
      </ContactInfo>
      <div>
        <ButtonEditStyled type="button" onClick={() => handleShow()}>
          Edit
        </ButtonEditStyled>
        <ButtonContactStyled
          type="button"
          onClick={() => {
            setDeletingContactId(id);
            dispatch(deleteContact(id));
          }}
        >
          Delete
          {deletingContactId === id && <LoaderButton/>}
        </ButtonContactStyled>
      </div>
      {show && (
        <Modal show={show} onHide={handleClose}>
          <ModalContact
            title={'Edit contact'}
            component={ContactFormEdit}
            onClose={handleClose}
            id={id}
            userName={name}
            userNumber={number}
            isEdit={true}
          />
        </Modal>
      )}
    </>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
