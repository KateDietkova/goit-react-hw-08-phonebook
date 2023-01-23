import Modal from 'react-bootstrap/Modal';


export const ModalContact = ({title, component: Component, onClose, id}) => {
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Component onClose={onClose} id={id} />
      </Modal.Body>
    </>
  );
};
