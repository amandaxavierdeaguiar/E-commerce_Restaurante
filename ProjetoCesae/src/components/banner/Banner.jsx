import {Carousel, Image} from 'react-bootstrap'
import './banner.css'

function Banner(){
    const banner1 = 'src/assets/banner/banner1.png'
    const banner2 = 'src/assets/banner/banner2.png'
    const banner3 = 'src/assets/banner/banner3.png'

    return(
    <Carousel interval={6000}>
      <Carousel.Item>
        <Image src={banner1} className='bannerImage'  alt="Prato com arroz, feijao e bife" fluid style={{
          filter: 'brightness(0.5)',
          height: '100vh', // altura da imagem igual a altura da tela
          objectFit: 'cover' // imagem cobre toda a área
        }}/>
        <Carousel.Caption style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff',
          fontSize: '2vw', // tamanho da fonte relativo a largura da tela
        }}>
          <h3 style={{
              position: 'relative',
              top: '-5vh', // posição do texto relativa a altura da tela
              fontSize: '1.5vw', // tamanho da fonte relativo a largura da tela
              fontFamily: 'Franklin Gothic Medium', 
              fontWeight: 'bold',
            }}>
              - Bem Vindo ao melhor restaurante Brasileiro -
            </h3>
            <h1 style={{ 
              fontSize: '4vw', // tamanho da fonte relativo a largura da tela
              fontWeight: 'bold', 
              marginBottom: '2vh', // espaçamento relativo a altura da tela
              fontFamily: 'Franklin Gothic Medium',  
            }}>
              VENHA SABOREAR O MELHOR<br></br>DA CULINÁRIA BRASILEIRA
            </h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={banner2} className='bannerImage'  alt="Caipirinha" fluid style={{
          filter: 'brightness(0.5)',
          height: '100vh', 
          objectFit: 'cover' 
        }}/>
        <Carousel.Caption style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff',
          fontSize: '2vw', 
        }}>
            <h1 style={{ 
              fontSize: '4vw',
              fontWeight: 'bold', 
              marginBottom: '2vh', 
              fontFamily: 'Franklin Gothic Medium',  
            }}>
              A VARIEDADE DE CAIPIRINHAS<br></br>FEITAS NO CAPRICHO
            </h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={banner3} className='bannerImage'  alt="Caipirinha" fluid style={{
          filter: 'brightness(0.5)',
          height: '100vh', 
          objectFit: 'cover' 
        }}/>
        <Carousel.Caption style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff',
          fontSize: '2vw', 
        }}>
            <h1 style={{ 
              fontSize: '4vw', 
              fontWeight: 'bold', 
              marginBottom: '2vh', 
              fontFamily: 'Franklin Gothic Medium',  
            }}>
              PARA FECHAR COM CHAVE DE OURO<br></br>UMA SOBREMESA BRASILEIRA
            </h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner