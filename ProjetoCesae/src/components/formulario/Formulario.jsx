import { Container, Col, Row} from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';

import './formulario.css';

function Formulario() {

    const logo = "/src/assets/fomulario/logo-contorno.png";

    // Alert de mensagem enviada quando enviar o formulario
    const handleSubmit = (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name === '' || email === '' || message === '') {
            alert('Por favor, preencha todos os campos!');
            return;
        }

        // Verificar se o email é válido
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            alert('Email inválido!');
            return;
        }

        // Envio do formulário com sucesso
        alert("Mensagem enviada com sucesso!");
    }

    return (
        <Container className="d-flex justify-content-center align-items-center ">
            <div className="row w-100 rounded p-5 ">
                <h1 className="title-produtos" style={{paddingTop: '70px'}}>Contate-nos</h1> 
                <Col md={6} className="d-flex justify-content-center align-items-center background">
                    <Row className="d-flex justify-content-center align-items-center" style={{padding: '10px'}}>
                        <img src={logo} className="logo" style={{ maxWidth: '70%', maxHeight: '70%' }} />
                        <div className='contatoBackground bg-light'>
                            <h6 className="text-center"><Icon.Telephone color="black" style={{margin: '5px'}}/>+351 200 000 000 </h6>
                            <div className="row">
                                <div className="col-md-6">
                                    <h6 className="text-black" style={{marginTop: '10px', fontFamily:'Franklin Gothic Medium'}}>Segunda <br></br>a Sexta:</h6>
                                    <p className="text-black" style={{marginTop: '10px', fontFamily:'Franklin Gothic'}}><Icon.ClockFill color="black" style={{margin: '5px'}}/>8:00 às 22:00</p>
                                </div>
                                <div className="col-md-6">
                                    <h6 className="text-black" style={{marginTop: '10px', fontFamily:'Franklin Gothic Medium'}}>Sábados e Domingos:</h6>
                                    <p className="text-black" style={{marginTop: '10px', fontFamily:'Franklin Gothic'}}><Icon.ClockFill color="black" style={{margin: '5px'}}/>9:00 às 22:00</p>
                                </div>
                            </div>
                        </div>
                    </Row>
                </Col>
                
                <div className="col-md-6  p-5" style={{backgroundColor: '#198754'}}> {/**bg-light */}
                <form style={{padding: '50px 0px', margin: '10px 0px'}}>
                    <div className="form-group mb-3" style={{paddingBottom: '10px'}}>
                        <input type="text" className="form-control" id="name" placeholder="Nome" required />
                    </div>
                    <div className="form-group mb-3" style={{paddingBottom: '10px'}}>
                        <input type="email" className="form-control" id="email" placeholder="E-mail" required/>
                    </div>
                    <div className="form-group mb-3" style={{paddingBottom: '10px'}}>
                        <textarea className="form-control" id="message" rows="3" placeholder="Em que podemos ajuda-lo?" required></textarea>
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                        <button type="submit" className="btn btn-warning" onClick={handleSubmit}>Enviar Formulário</button>
                    </div>
                </form>
                </div>
            </div>
        </Container>
  );
}

export default Formulario;