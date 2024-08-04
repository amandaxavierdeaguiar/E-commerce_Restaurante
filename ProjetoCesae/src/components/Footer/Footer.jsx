import { Row, Col, Container, Image } from 'react-bootstrap';
// Importacao da utilização do ICON
import * as Icon from 'react-bootstrap-icons';

function Footer(){

    //Imagem Background
    const backgroundFooter = 'src/assets/background/footer1.png'
    //Imagem Logo
    const logo = "/src/assets/logo.png";

    // para por a data e direitos reservados
    //<p className="mb-0">&copy; {new Date().getFullYear()} Sabores da Terra. All rights reserved.</p>

    return (
        <footer className="footer mt-5 py-3 text-white" style={{ backgroundImage: `url(${backgroundFooter})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',}}>
              <Container>
                <Row>
                    <Col md={3}>
                    <Image
                    src={logo}
                    alt="Sabores da Terra"
                    rounded
                    width={100}
                    />
                    <p className="text-black" style={{marginTop: '10px', fontFamily:'Franklin Gothic Medium'}}>Novo Estilo de comida Brasileira</p>
                    {/** ICONS COM LIGACOES PARA AS PÁGINAS */}
                    <a href="#" target="_blank">
                        <Icon.Youtube color="black" style={{margin: '5px'}}/>
                    </a>
                    <a href="#" target="_blank">
                    <Icon.Instagram color="black" style={{margin: '5px'}}/>
                    </a>
                    <a href="#" target="_blank">
                    <Icon.Facebook color="black" style={{margin: '5px'}}/>
                    </a>
                    <a href="#" target="_blank">
                    <Icon.Whatsapp color="black" style={{margin: '5px'}}/>
                    </a>
                  </Col>
                  <Col md={6} className="text-md-center">
                  {/** CONTATOS */}
                    <h3 className="text-black" style={{marginTop: '10px', fontFamily:'Franklin Gothic Medium'}}>Nossos Contatos</h3>
                    <p className="text-black" style={{marginTop: '55px', fontFamily:'Franklin Gothic'}}><Icon.Telephone color="black" style={{margin: '5px'}}/>+351 200 000 000 </p>
                    <p className="text-black" style={{marginTop: '10px', fontFamily:'Franklin Gothic'}}><Icon.GeoAlt color="black" style={{margin: '5px'}}/>R. de Ciríaco Cardoso 186,<br></br> 4150-212 Porto </p>
                  </Col>
                  <Col md={3} className="text-md-end">
                    {/** HORARIOS ATENDIMENTO */}
                    <h3 className="text-black" style={{marginTop: '10px', fontFamily:'Franklin Gothic Medium'}}>Horário de Atendimento</h3>
                    <h5 className="text-black" style={{marginTop: '20px', fontFamily:'Franklin Gothic Medium'}}>Segunda a Sexta</h5>
                    <p className="text-black" style={{marginTop: '10px', fontFamily:'Franklin Gothic'}}><Icon.ClockFill color="black" style={{margin: '5px'}}/>8:00 às 22:00</p>
                    <h5 className="text-black" style={{marginTop: '20px', fontFamily:'Franklin Gothic Medium'}}>Sábados e Domingos</h5>
                    <p className="text-black" style={{marginTop: '10px', fontFamily:'Franklin Gothic'}}><Icon.ClockFill color="black" style={{margin: '5px'}}/>9:00 às 22:00</p>
                  </Col>     
                  {/** DIREITOS RESERVADOS */}
                    <p className="text-black text-center mb-0"> 
                      &copy; {new Date().getFullYear()} Sabores da Terra. All rights reserved.
                    </p>
                </Row>
              </Container>
            </footer>
      );
    }

export default Footer
