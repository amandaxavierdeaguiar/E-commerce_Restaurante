//Biblioteca essencial para o Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Aqui importamos os componentes das páginas
import Header from "/src/components/Header/Header"
import Produtos from "/src/components/produtos/Produtos"

function Galeria() {
    return(
        <body>    
            <Header/> 
            <Produtos/>
        </body>
    )
}

export default Galeria
