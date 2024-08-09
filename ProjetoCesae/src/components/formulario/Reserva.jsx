import { Button, Modal, Form } from 'react-bootstrap';
import { useState } from 'react';
import './formulario.css'

function Reserva() {
  // Controla a visibilidade do modal
  const [show, setShow] = useState(false);
  // Armazena o nome do usuário
  const [nome, setNome] = useState('');
  const [numeroPessoas, setNumeroPessoas] = useState('');
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');
  const [contato, setContato] = useState('');
  const [erros, setErros] = useState({});
  const [mostrarMensagens, setMostrarMensagens] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Função que envia o formulário
  const handleSubmit = (event) => {
    // Previne o comportamento
    event.preventDefault();
    const erros = {};

    if (!nome || !numeroPessoas || !data || !hora || !contato) {
      erros.all = 'Preencha todos os campos';
    }

    if (numeroPessoas < 1) {
      erros.numeroPessoas = 'O número de pessoas deve ser maior que 0';
    }

    // Verifica se há erros de validação
    if (Object.keys(erros).length > 0) {
      setErros(erros);
    } else {
      alert('Reserva efetuada com sucesso!');
      handleClose();
    }

    // visibilidade das mensagens de erro
    setMostrarMensagens(true);
  };

  return (
    <>
      <div className="buttonReserva">
        <button className="btn-reserva" onClick={handleShow}>
          Reserve Agora
        </button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Reserva</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="nome">
              <Form.Label>Nome:</Form.Label>
              <Form.Control
                type="text"
                value={nome}
                onChange={(event) => setNome(event.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="numeroPessoas">
              <Form.Label>Número de Pessoas:</Form.Label>
              <Form.Control
                type="number"
                value={numeroPessoas}
                onChange={(event) => setNumeroPessoas(event.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="data">
              <Form.Label>Data:</Form.Label>
              <Form.Control
                type="date"
                value={data}
                onChange={(event) => setData(event.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="hora">
              <Form.Label>Hora:</Form.Label>
              <Form.Control
                type="time"
                value={hora}
                onChange={(event) => setHora(event.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="contato">
              <Form.Label>Contato:</Form.Label>
              <Form.Control
                type="text"
                value={contato}
                onChange={(event) => setContato(event.target.value)}
              />
            </Form.Group>
            {mostrarMensagens && (
              <div>
                {erros.all && <p style={{ color: 'red' }}>{erros.all}</p>}
                {erros.numeroPessoas && <p style={{ color: 'red' }}>{erros.numeroPessoas}</p>}
              </div>
            )}

            <div className="d-flex justify-content-center" style={{paddingTop: '20px'}}>
              <Button className="btn-reserva" type="submit">
                Enviar
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Reserva;