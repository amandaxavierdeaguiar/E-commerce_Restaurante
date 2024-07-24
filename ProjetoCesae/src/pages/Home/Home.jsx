//Biblioteca essencial para o Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Aqui chamamos os componentes das páginas
import Header from "/src/components/header/Header"

function Home() {
    return(
        <body>    
            <Header/> 
            {/** Chamar os componentes da página desta forma. Nao esquecer de importa-los */}
        </body>
    )
}

export default Home