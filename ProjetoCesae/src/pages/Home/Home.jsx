//Biblioteca essencial para o Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Aqui chamamos os componentes das páginas
import Header from "/src/components/header/Header"
import Banner from "/src/components/banner/Banner"
import Sobre from "/src/components/sobre/Sobre"
import Footer from "/src/components/footer/Footer"

function Home() {


    return(
        <body>    
            <Header/>             
            {/** Chamar os componentes da página desta forma. Nao esquecer de importa-los */}
            <Banner/>
            <Sobre/>
            <Footer/>
        </body>
    )
}

export default Home