import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "/src/components/header/Header"
import Footer from "/src/components/footer/Footer"
// IMPORTANDO COMPONENTS DA PAGE
import Formulario from "/src/components/formulario/Formulario"
import Mapa from "/src/components/mapa/Mapa"

function Contato(){
    return(
        <body>
            <Header />
            <div className='formularioContato' >
                <Formulario />
            </div>
            <div className='mapaContato' style={{marginBottom: '-50px'}}>
                <Mapa />
            </div>
            <Footer />
        </body>
    )
}

export default Contato