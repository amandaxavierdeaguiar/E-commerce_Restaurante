// IMPORTAÇÃO
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import './menuPrincipal.css'
import Header from "/src/components/header/Header"
import Footer from "/src/components/footer/Footer"

// pegar fragmento da pagina com produtos
import { Link } from 'react-router-dom';

function MenuPrincipal(){
    // CODIGO HTML RODRIGO
    
    const massas = "/src/assets/menuprincipal/massas.png";
    const pratoPrincipal = "/src/assets/menuprincipal/pratoPrincipal.png";
    const bebidas = "/src/assets/menuprincipal/bebidas.png";
    const sobremesa = "/src/assets/menuprincipal/quindim.png";
    const snacks = "/src/assets/menuprincipal/salgados.png";
    const bandeira = "/src/assets/menuprincipal/bandeira1.png";

    return(
        <body className='bodyprincipal'>
            <Header/>
            <h1 className="title-produtos" style={{paddingTop: '150px'}}>Comidas Regionais<img src={bandeira} alt="bandeira Brasil" className="bandeirinha" style={{height: '50px'}}/></h1> 
            <Container className='menu' >            
                <Link to="/menu#bebidas"><img src={bebidas} alt="Bebidas" className="img"/></Link>
                <Link to="/menu#prato-principal"><img src={pratoPrincipal} alt="Prato Principal" className="img"/></Link>
                <Link to="/menu#salgados"><img src={snacks} alt="Salgados" className="img"/></Link>
                
            </Container>
            <Container className='menu2' style={{marginTop: '-120px'}} >            
                <Link to="/menu#massas"><img src={massas} alt="Massas" className="imgBaixo1"/></Link>
                <Link to="/menu#sobremesa"><img src={sobremesa} alt="Sobremesa" className="imgBaixo2" /></Link>
            </Container>
            <Footer/> 
        </body>
    );
}

export default MenuPrincipal
