// Importacao CSS
import './header.css'
// Importacao Bootstrap Essencial
import 'bootstrap/dist/css/bootstrap.min.css';
// Importacao dos components utilizados do BOOTSTRAP
import {Container, Nav, Navbar} from 'react-bootstrap'
// Importacao da utilização do ICON
import * as Icon from 'react-bootstrap-icons';

// Função da página principal, representada por /
function Header() {

    // Colocar o endereço das fotos aqui. como este exemplo: 
    const logo = "/src/assets/logo.png";

    {/** TODA A FUNÇÃO DENTRO DO RETURN - LINGUAGEM HTML E BOOTSTRAP */}
    return (
      <div className='navAll'>
        <Navbar expand="lg" className="align-items-center justify-content-center">
              <Container className='containerBot' fluid>
                <Navbar.Brand className='logo-container'>
                  <a href="/"><img className='logo' src={logo}/></a>
                </Navbar.Brand>
                <Navbar.Toggle className='navToggle'  aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll ">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                    </Nav>
                    <Nav.Link className='Menu' href="/">Quem somos</Nav.Link>
                    <Nav.Link className='Menu' href="/galeria">Galeria</Nav.Link> 
                    <Nav.Link className='Menu' href="/">Contatos</Nav.Link>
                  
                </Navbar.Collapse>
                <div id="card">
                  <Icon.Cart className='iconCard'/>
                </div>
              </Container>
            </Navbar>
      </div>      
    );
}
export default Header;
