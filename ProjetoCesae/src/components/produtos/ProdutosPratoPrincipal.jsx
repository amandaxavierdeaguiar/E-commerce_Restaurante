import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './produtos.css'
import * as Icon from 'react-bootstrap-icons';
// IMPORTACAO DO REACT USE CARD PARA INSERÇÃO DO PRODUTO NO CARRINHO
import { useCart } from 'react-use-cart';

// MENU DE PRATO PRINCIPAL
const menuPrincipal = [
    {
        id: 19,
        name: 'Filé de Frango à Parmegiana',
        description: 'servido com arroz e legumes.',
        price: 18.00,
        imageUrl: "/src/assets/produtos/pratoPrincipal/parmegiana.png",
      },
      {
        id: 20,
        name: 'Bife de Novilho',
        description: 'Bife de novilho macio, servido com arroz e legumes.',
        price: 20.00,
        units: 8,
        imageUrl: "/src/assets/produtos/pratoPrincipal/bife-novilho.png",
      },
      {
        id: 21,
        name: 'Especial da Casa',
        description: 'Carne moída com couve, servido com arroz e legumes.',
        price: 15.00,
        units: 12,
        imageUrl: "/src/assets/produtos/pratoPrincipal/carne-couve.png",
      },
      {
        id: 22,
        name: 'Strogonoff de Carne',
        description: 'Strogonoff de carne, servido com arroz e legumes.',
        price: 18.00,
        units: 10,
        imageUrl: "/src/assets/produtos/pratoPrincipal/strogonoff.png",
      },
      {
        id: 23,
        name: 'Hamburguer',
        description: 'Carne de patinho, servido com batata frita e salada.',
        price: 12.00,
        units: 15,
        imageUrl: "/src/assets/produtos/pratoPrincipal/hamburguer-carne.png",
      },
      {
        id: 24,
        name: 'Hamburguer de Frango',
        description: 'Peito de frango, servido com batata frita e salada.',
        price: 10.00,
        units: 18,
        imageUrl: "/src/assets/produtos/pratoPrincipal/hamburguer-frango.png",
      },
];

function ProdutosPratoPrincipal() {
  //CHAMANDO A BIBLIOTECA useCart
    const { addItem } = useCart();

    return (
        <Container>
          <Row >
            <h1 className="title-produtos">PRATO PRINCIPAL</h1>
            {menuPrincipal.map((produto, i) => (
              <Col md={4} className="mb-4" key={produto.id}>
                <Card className="card-produto">
                  <Row>
                    <Col md={4} >
                      <img className='image-circle' src={produto.imageUrl} alt={produto.name} />
                    </Col>
                    <Col md={8}>
                      <Card.Title className='titleProduct'>{produto.name}</Card.Title>
                      <Card.Text className='txtProduct'>{produto.description}</Card.Text>
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

export default ProdutosPratoPrincipal;