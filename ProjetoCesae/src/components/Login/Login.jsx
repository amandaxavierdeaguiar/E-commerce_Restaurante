import { useState } from 'react';
import {Button, Modal} from 'react-bootstrap';
// Importacao da utilização do ICON
import * as Icon from 'react-bootstrap-icons';
import './login.css'

function Login(){
  const [show, setShow] = useState(false);
  const [showCadastro, setShowCadastro] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleShowCadastro = () => {
    setShow(false);
    setShowCadastro(true);
  };
  const handleCloseCadastro = () => {
    setShowCadastro(false);
    setShow(true);
  };
  const handleLogin = () => {
    // Aqui você pode adicionar a lógica para realizar o login
    console.log('Login realizado!');
    handleClose();
  };
  const handleCadastro = () => {
    // Aqui você pode adicionar a lógica para realizar o cadastro
    console.log('Cadastro realizado!');
    handleCloseCadastro();
  };

  return (
    <>
      <div id="btnLogin-popup">    
        <span className="btnLogin-popup">
          <Icon.PersonCircle className='iconCartLogin' onClick={handleShow}/>
        </span>
      </div>

      <Modal className='login'
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        style={{ backgroundColor: 'transparent' }}
      >
        <Modal.Header closeButton>
          <Modal.Title className='titleLogin'>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="input-box">
            <span className="icon">
              <Icon.Envelope />
            </span>
            <input type="email" required />
            <label>Email</label>
          </div>
          <div className="input-box">
            <span className="icon">
              <Icon.Lock />
            </span>
            <input type="password" required />
            <label>Password</label>
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Relembre
            </label>
            <a href="#">Esqueceu sua senha?</a>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleShowCadastro}>
            Cadastra-se
          </Button>
          <Button className='btnLoginCadastro' onClick={handleLogin}>Login</Button>
        </Modal.Footer>
      </Modal>

      <Modal className='cadastro'
        show={showCadastro}
        onHide={handleCloseCadastro}
        backdrop="static"
        keyboard={false}
        style={{ backgroundColor: 'transparent' }}
      >
        <Modal.Header closeButton>
          <Modal.Title className='titleCadastro'>Cadastro</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="input-box">
            <span className="icon">
              <Icon.Person />
            </span>
            <input type="text" required />
            <label>Nome</label>
          </div>
          <div className="input-box">
            <span className="icon">
              <Icon.Envelope />
            </span>
            <input type="email" required />
            <label>Email</label>
          </div>
          <div className="input-box">
            <span className="icon">
              <Icon.Lock />
            </span>
            <input type="password" required />
            <label>Password</label>
          </div>
          <div className="input-box">
            <span className="icon">
              <Icon.Lock />
            </span>
            <input type="password" required />
            <label>Confirme a senha</label>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseCadastro}>
            Voltar
          </Button>
          <Button className='btnLoginCadastro' onClick={handleCadastro}>Cadastrar</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Login;