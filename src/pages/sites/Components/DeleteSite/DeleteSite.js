import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function DeleteSite({state , handleShow , handleClose ,deleteConfirm  }) {

  return (
    <>
      <Button size='sm' variant="danger" onClick={handleShow}>
      <i class="fa-solid fa-trash-can"></i>
      </Button>

      <Modal
        show={state}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don not even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          إغلاق 
        </Button>
        <Button variant="primary" onClick={deleteConfirm}>تأكيد الحذف </Button>
      </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteSite;