//Biblioteca essencial para o Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Aqui importamos os componentes das páginas
import Header from "/src/components/header/Header"
import ProdutosSalgados from "/src/components/produtos/ProdutosSalgados"
import ProdutosPratoPrincipal from "/src/components/produtos/ProdutosPratoPrincipal"
import ProdutosMassas from "/src/components/produtos/ProdutosMassas"
import ProdutosSobremesa from "/src/components/produtos/ProdutosSobremesa"
import Bebidas from "/src/components/produtos/ProdutosBebidas"

import Footer from "/src/components/footer/Footer"

import './galeria.css'

function Galeria() {
    return(
        <div className="galeria-container">
            <Header />
            <div style={{ marginTop: '110px' }}>
                <ProdutosSalgados/>
            </div>
            <ProdutosPratoPrincipal/>
            <ProdutosMassas/>
            <ProdutosSobremesa/>
            <Bebidas />
            <Footer/>
        </div>       
    )
}

export default Galeria
