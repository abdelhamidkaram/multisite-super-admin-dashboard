import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function UpdateSite({state , handleShow , handleClose , updateConfirm}) {

  return (
    <>
      <Button size='sm' variant="info" onClick={handleShow}>
      <i className="fa-solid fa-pen-to-square"></i>
      </Button>

      <Modal
        show={state}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title > <p style={{marginInline:20}}>تعديل الموقع </p></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
          <Form.Text></Form.Text>
        
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            إغلاق 
          </Button>
          <Button variant="primary" onClick={(e)=>{
            e.preventDefault();
            updateConfirm();
          }}>تعديل </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UpdateSite;