import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// Importacao da utilização do ICON
import * as Icon from 'react-bootstrap-icons';

function CarrinhoCompras() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <div id="cart">
            <Icon.Cart className='iconCart' onClick={handleShow}/>
        </div>

        <Modal className='carrinho'
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title className='titleLogin'>carrinhoCompras</Modal.Title>
          </Modal.Header>
          <Modal.Body className='bodyLogin'>
            I will not close if you click outside me. Do not even try to press
            escape key.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary">Understood</Button>
          </Modal.Footer>
        </Modal>  
      </>
    );
  }

export default CarrinhoCompras