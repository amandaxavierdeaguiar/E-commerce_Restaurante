import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './produtos.css'
import * as Icon from 'react-bootstrap-icons';
// IMPORTACAO DO REACT USE CARD PARA INSERÇÃO DO PRODUTO NO CARRINHO
import { useCart } from 'react-use-cart';

// MENU DE SALGADOS
const produtos = [
    {
        id: 25,
        name: 'Bolinho Caipira',
        description: 'Massa de mandioca, recheado com queijo e presunto.',
        price: 8.00,
        units: 12,
        imageUrl: "/src/assets/produtos/salgados/bolinho-caipira.png",
      },
      {
        id: 26,
        name: 'Coxinha',
        description: 'Coxinha de frango, recheada com frango desfiado e catupiry.',
        price: 7.00,
        units: 15,
        imageUrl: "/src/assets/produtos/salgados/coxinhas.png",
      },
      {
        id: 27,
        name: 'Quibe',
        description: 'Quibe de carne, recheado com carne moída e especiarias.',
        price: 9.00,
        units: 10,
        imageUrl: "/src/assets/produtos/salgados/quibe.png",
      },
      {
        id: 28,
        name: 'Empadinhas',
        description: 'Recheadas com frango desfiado e catupiry.',
        price: 8.00,
        units: 12,
        imageUrl: "/src/assets/produtos/salgados/empadinha.png",
      },
      {
        id: 29,
        name: 'Rolinho de Salsicha',
        description: 'Rolinho de salsicha frito, recheado com salsicha. Com ou sem queijo.',
        price: 6.00,
        units: 15,
        imageUrl: "/src/assets/produtos/salgados/rolinho-salsichas.png",
      },
      {
        id: 30,
        name: 'Mini Quiches',
        description: 'Mini quiches de queijo e presunto, ideais para um lanche rápido.',
        price: 10.00,
        units: 8,
        imageUrl: "/src/assets/produtos/salgados/quiche.png",
      },
];

function ProdutosSalgados() {
  //CHAMANDO A BIBLIOTECA useCart
  const { addItem } = useCart();
    return (
      <Container>
        <Row >
          <h1 className="title-produtos">MENU SALGADOS</h1>
          {produtos.map((produto, i) => (
            <Col md={4} className="mb-4" key={produto.id}>
              <Card className="card-produto">
                <Row>
                  <Col md={4} >
                    <img className='image-circle' src={produto.imageUrl} alt={produto.name} />
                  </Col>
                  <Col md={8}>
                    <Card.Title className='titleProduct'>{produto.name}</Card.Title>
                    <Card.Text className='txtProduct'>{produto.description} Quantidade: {produto.units}</Card.Text>
                    <Card.Text className='priceProduct'>{produto.price.toFixed(2)}€</Card.Text>
                    {/** INSERINDO LIGACAO DO ONCLICK COM A BOBLIOTECA DE ADD ITEM */}
                    <button className="payProduct" onClick={() => addItem(produto)}>
                        Comprar <Icon.CartPlus/>
                      </button>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }

export default ProdutosSalgados;