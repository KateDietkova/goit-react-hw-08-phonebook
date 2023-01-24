import Modal from 'react-bootstrap/Modal';

export const ModalContact = ({
  title,
  component: Component,
  onClose,
  id,
  userName,
  userNumber,
}) => {
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Component
          onClose={onClose}
          id={id}
          userName={userName}
          userNumber={userNumber}
        />
      </Modal.Body>
    </>
  );
};
