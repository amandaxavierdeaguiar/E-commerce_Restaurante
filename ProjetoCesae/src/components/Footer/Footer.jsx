import { Row, Col, Container, Image } from 'react-bootstrap';
// Importacao da utilização do ICON
import * as Icon from 'react-bootstrap-icons';

function Footer(){

    //Imagem Background
    const backgroundFooter = 'src/assets/background/footer1.png'
    //Imagem Logo
    const logo = "/src/assets/logo.png";

    // Funcao para ler data
    /*&copy; {new Date().getFullYear()} Sabores da Terra. All rights reserved.*/

    return (
          <footer className="footer mt-5 py-3" style={{ backgroundImage: `url(${backgroundFooter})`, 
          backgroundSize: 'cover', 
          backgroundRepeat: 'no-repeat',   
          backgroundPosition: 'center', 
          overflowY: 'auto', height: 'auto'}}>
              <Container fluid>
                <Row className="justify-content-center">
                    <Col xs={6} sm={6} md={3} lg={3} xl={3} className="text-center">
                      <Image
                      src={logo}
                      alt="Sabores da Terra"
                      rounded
                      width={100}
                      />
                      <p className="text-black" style={{marginTop: '5px', fontFamily:'Franklin Gothic Medium'}}>Restaurante Brasileiro</p>
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
                  <Col xs={12} sm={6} md={6} lg={6} xl={6} className="text-center">
                  {/** CONTATOS */}
                    <h4 className="text-black" style={{marginTop: '0px', fontFamily:'Franklin Gothic Medium'}}>Nossos Contatos</h4>
                    <p className="text-black" style={{marginTop: '10px', fontFamily:'Franklin Gothic'}}><Icon.Telephone color="black" style={{margin: '5px'}}/>+351 200 000 000 </p>
                    <p className="text-black" style={{fontFamily:'Franklin Gothic'}}><Icon.GeoAlt color="black" style={{margin: '5px'}}/>R. de Ciríaco Cardoso 186,<br></br> 4150-212 Porto </p>
                  </Col>
                  <Col xs={12} sm={6} md={3} lg={3} xl={3} className="text-center">
                    {/** HORARIOS ATENDIMENTO */}
                    <h4 className="text-black" style={{marginTop: '0px', fontFamily:'Franklin Gothic Medium'}}>Horário de Atendimento</h4>
                    <h6 className="text-black" style={{fontFamily:'Franklin Gothic Medium'}}>Segunda a Sexta</h6>
                    <p className="text-black" style={{marginTop: '0px', fontFamily:'Franklin Gothic'}}><Icon.ClockFill color="black" style={{marginRight: '5px'}}/>8:00 às 22:00</p>
                    <h6 className="text-black" style={{fontFamily:'Franklin Gothic Medium'}}>Sábados e Domingos</h6>
                    <p className="text-black" style={{marginTop: '5px', fontFamily:'Franklin Gothic'}}><Icon.ClockFill color="black" style={{marginRight: '5px'}}/>9:00 às 22:00</p>
                  </Col>     
                <Row className="justify-content-center">
                  <Col className="text-center">
                    {/** DIREITOS RESERVADOS */}
                    <p className="text-black mb-0"> 
                      &copy; {new Date().getFullYear()} Sabores da Terra. All rights reserved.
                    </p>
                  </Col>
                </Row>
                </Row>
              </Container>
            </footer>
      );
    }

export default Footer;