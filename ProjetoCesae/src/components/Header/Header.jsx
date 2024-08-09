import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Nav, Navbar} from 'react-bootstrap'
import LoginCadastro from '/src/components/login/Login.jsx'
import Carrinho from '/src/components/carrinhoCompras/CarrinhoCompras.jsx'

import './header.css'

function Header() {

    // Importando logo
    const logo = "/src/assets/logo.png";

    return (
        <Navbar expand="sm" fixed="top" className="bg-body-tertiary m-0 navbar-sm"> 
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
                  <Navbar.Collapse id="navbarScroll" className="justify-content-center">
                      <Nav
                          className="me-auto" 
                          style={{ maxHeight: '100px' }}
                          navbarScroll
                      >
                      </Nav>
                      <Nav.Link className='Menu' href="/menuprincipal">Menu</Nav.Link> 
                      <Nav.Link className='Menu' href="/galeriafotos">Galeria Fotos</Nav.Link>
                      <Nav.Link className='Menu' href="/contato">Contato</Nav.Link>
                    
                  </Navbar.Collapse>
            <Navbar.Collapse className="justify-content-end">
            </Navbar.Collapse>
            <div className="d-flex justify-content-end" style={{gap: '10px'}}>
                {/** COLOCANDO O COMPONENTE LOGIN E CARRINHO NO HEADER */}
                <LoginCadastro />
                <Carrinho />
            </div>
        </Container>
      </Navbar>
    );
  }

export default Header;
