// import { createPortal } from 'react-dom';
// import { Overlay, ModalStyled } from './Modal.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
// import { useState } from 'react';

// const modalRoot = document.querySelector('#modal-root');

// export const ModalAddContact = () => {
//   return createPortal(
//     <Overlay >
//       <ModalStyled>
//         <ContactForm />
//       </ModalStyled>
//     </Overlay>,
//     modalRoot
//   );
// };

export const ModalAddContact = ({onClose}) => {
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Add contact</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ContactForm onClose={onClose} />
      </Modal.Body>
    </>
  );
};
