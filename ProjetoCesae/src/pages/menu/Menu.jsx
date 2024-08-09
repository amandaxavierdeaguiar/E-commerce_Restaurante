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

//IMPORTAR PARA USAR FRAGMENTO DA PAGINA
import { useEffect } from 'react';


function Menu() {
    // Para renderização do componente. #
    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
          const element = document.getElementById(hash.slice(1));
          if (element) {
            element.scrollIntoView();
          }
        }
      }, []);
    return(
        <div className="galeria-container">
            <Header />
            <div style={{ marginTop: '110px' }}>
                <div id="salgados">
                  <ProdutosSalgados/>
                </div>
                <div id="prato-principal">
                  <ProdutosPratoPrincipal/>
                </div>
                <div id="massas">
                  <ProdutosMassas/>
                </div>
                <div id="sobremesa">
                  <ProdutosSobremesa/>
                </div>
                <div id="bebidas">
                  <Bebidas />
                </div>
            </div>
            <Footer/>
        </div>       
    )
}

export default Menu
