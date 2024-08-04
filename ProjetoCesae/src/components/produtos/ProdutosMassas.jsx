import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './produtos.css'
import * as Icon from 'react-bootstrap-icons';

// MENU DE PRATO PRINCIPAL MASSAS
const menuMassas = [
      {
        id: 7,
        name: 'Macarrão à Bolonhesa',
        description: 'Com carne moída e molho de tomate.',
        price: 12.00,
        units: 15,
        imageUrl: "/src/assets/produtos/pratoPrincipal/macarrao-bolonhesa.png",
      },
      {
        id: 8,
        name: 'Macarrão Alho e Óleo',
        description: 'Macarrão alho e óleo, servido com alho e óleo.',
        price: 10.00,
        units: 18,
        imageUrl: "/src/assets/produtos/pratoPrincipal/macarrao-alho.png",
      },
      {
        id: 9,
        name: 'Ravioli de Espinafre',
        description: 'Ravioli de espinafre, servido com molho de queijo.',
        price: 15.00,
        units: 12,
        imageUrl: "/src/assets/produtos/pratoPrincipal/ravioli-espinafre.png",
      },
      {
        id: 10,
        name: 'Ravioli Gorgonzola',
        description: 'Ravioli com gorgonzola, servido com molho de queijo.',
        price: 18.00,
        units: 10,
        imageUrl: "/src/assets/produtos/pratoPrincipal/ravioli-gorgonzola.png",
      },
      {
        id: 11,
        name: 'Nhoque de Carne',
        description: 'Nhoque de carne, servido com molho de tomate.',
        price: 12.00,
        units: 15,
        imageUrl: "/src/assets/produtos/pratoPrincipal/nhoque-carne.png",
      },
      {
        id: 12,
        name: 'Nhoque Puro',
        description: 'Nhoque puro, servido com o delicioso molho de queijo da casa.',
        price: 10.00,
        units: 18,
        imageUrl: "/src/assets/produtos/pratoPrincipal/nhoque-puro.png",
      },
];

function ProdutosMassas() {
    return (
        <Container>
          <Row >
            <h1 className="title-produtos">MASSAS</h1>
            {menuMassas.map((produto, i) => (
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
                      <button className="payProduct">
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

export default ProdutosMassas;