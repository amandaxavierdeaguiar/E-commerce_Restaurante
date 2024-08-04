import {Container} from 'react-bootstrap'
import './sobre.css'

function Sobre(){

    // foto Restaurante e proprietario
    const restauranteProprietario = "/src/assets/fotoConjunto.png";

    return (
        <Container className='container'>
            <div className="image-container">
                <img src={restauranteProprietario} alt="Restaurant image"/>
            </div>
            <div className="content">
                <h1>Sobre nós</h1>
                <h2>A combinação perfeita entre sabores e ritmos brasileiros.</h2>
                <p>Nossos pratos são preparados com ingredientes frescos e selecionados, cuidadosamente elaborados para proporcionar uma experiência única de sabores e aromas da culinária brasileira. Além disso, oferecemos um serviço de delivery rápido e eficiente, para que você possa desfrutar de nossas delícias no conforto da sua casa.<br></br>No nosso restaurante, você pode desfrutar de um ambiente acolhedor e descontraído, com um atendimento atencioso e personalizado. Além disso, contamos com um sistema de pedidos online, para que você possa fazer sua escolha de forma rápida e prática, garantindo a entrega dos seus pratos favoritos com segurança e comodidade.</p>
                <button className="reservation-button">Reserve Agora</button>
            </div>
        </Container>
    )
}

export default Sobre