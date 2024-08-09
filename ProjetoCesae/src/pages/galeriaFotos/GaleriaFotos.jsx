//Biblioteca essencial para o Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "/src/components/header/Header"
import Footer from "/src/components/footer/Footer"
import './galeriaFotos.css'
import Reserva from '/src/components/formulario/Reserva.jsx'

function GaleriaFotos() {
    const feijoada = '/src/assets/galeria/feijoada-brasileira.png';
    const festivalCoxinha = '/src/assets/galeria/festival-coxinha.png';
    const restaurante = '/src/assets/galeria/restaurant.png';
    const restaurante2 = '/src/assets/galeria/restaurant2.png';
    const restaurante3 = '/src/assets/galeria/restaurant3.png';

    return(
        <div className="galeria-container">
            <Header />
            
            <h1 className="titleEvent" style={{paddingTop: '140px'}}>Nosso Restaurante</h1>
            <div className='container'>
                <div className="image-container">
                    <img src={restaurante} alt="Restaurante" className="img-fluid"/>
                </div>
                <div className="image-container">
                    <img src={restaurante2} alt="Restaurante" className="img-fluid img-restaurante" />
                    <img src={restaurante3} alt="Restaurante" className="img-fluid img-restaurante" />
                </div>
            </div>
              
            <h1 className="titleEvent">Eventos</h1>
            <div className='container'>
                <div className="image-container" style={{paddingTop: '30px'}}>
                    <img src={feijoada} alt="Feijoada Brasileira"/>
                </div>
                <div className="content">
                    <h1>Sábados da Feijoada</h1>
                    <h2>Para comer no nosso restaurante ou entregarmos no conforto da sua casa</h2>
                    {/** Puxando o componente Reserva */}
                    <Reserva />
                </div>
            </div>
            <div className='container' style={{paddingTop: '10px'}}>
                <div className="content">
                    <h1>Festival de Coxinha</h1>
                    <h2>Apenas no primeiro domingo de cada mês. Atendemos apenas mediante reserva</h2>
                    {/** Puxando o componente Reserva */}
                    <Reserva />
                </div>
                <div className="image-container" style={{paddingTop: '30px'}}>
                    <img src={festivalCoxinha} alt="Festival de Coxinha"/>
                </div>
            </div>
            <Footer/>
        </div>       
    )
}

export default GaleriaFotos