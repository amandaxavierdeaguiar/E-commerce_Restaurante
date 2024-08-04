// Importacao CSS
// Importacao Bootstrap Essencial
import 'bootstrap/dist/css/bootstrap.min.css';
// Importacao dos components utilizados do BOOTSTRAP
import {Container, Nav, Navbar} from 'react-bootstrap'
// Importacao do Login
import LoginCadastro from '/src/components/login/Login.jsx'
import Carrinho from '/src/components/carrinhoCompras/CarrinhoCompras.jsx'
import './header.css'

// Função da página principal, representada por /
function Header() {

    // Importando logo
    const logo = "/src/assets/logo.png";

    return (
        <Navbar expand="sm" fixed="top" className="bg-body-tertiary m-0 navbar-sm"> {/** acrescentei navbar-sm */}
        <Container>
            <Navbar.Brand href="/">
                <img
                src={logo}
                width="60"
                height="60"
                className="d-inline-block align-top"
                alt="Logo Sabores da Terra"
                />
            </Navbar.Brand>
            <Navbar.Toggle className='navToggle'  aria-controls="navbarScroll" />
                  <Navbar.Collapse id="navbarScroll" className="justify-content-center"> {/** Acrescentei className="justify-content-end" */}
                    {/** me-auto my-2 my-lg-0 */}
                      <Nav
                          className="me-auto" 
                          style={{ maxHeight: '100px' }}
                          navbarScroll
                      >
                      </Nav>
                      <Nav.Link className='Menu' href="/">Quem somos</Nav.Link>
                      <Nav.Link className='Menu' href="/galeria">Menu</Nav.Link> 
                      <Nav.Link className='Menu' href="/">Contatos</Nav.Link>
                    
                  </Navbar.Collapse>
            <Navbar.Collapse className="justify-content-end">
            </Navbar.Collapse>
            <div className="d-flex justify-content-end">
                <LoginCadastro />
                <Carrinho />
            </div>
        </Container>
      </Navbar>
    );
  }

export default Header;
