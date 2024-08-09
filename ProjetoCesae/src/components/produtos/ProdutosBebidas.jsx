import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './produtos.css'
import * as Icon from 'react-bootstrap-icons';
// IMPORTACAO DO REACT USE CARD PARA INSERÇÃO DO PRODUTO NO CARRINHO
import { useCart } from 'react-use-cart';

// MENU BEBIDAS
const bebidas = [
    {
        "id": 1,
        "name": "Garrafa de 500ml",
        "description": "Água mineral",
        "price": 2.00,
        "size": "500ml",
        imageUrl: "/src/assets/produtos/bebidas/agua.png",
      },
    {
        "id": 2,
        "name": "Guarana Antártica",
        "description": "Refrigerante de guarana",
        "price": 2.50,
        "size": "350ml",
        imageUrl: "/src/assets/produtos/bebidas/guarana.png",
      },
      {
        "id": 3,
        "name": "Coca Cola",
        "description": "Refrigerante de cola",
        "price": 2.50,
        "size": "350ml",
        imageUrl: "/src/assets/produtos/bebidas/coca-cola.png",
      },
      {
        "id": 4,
        "name": "Coca Cola Zero",
        "description": "Refrigerante de cola",
        "price": 2.50,
        "size": "350ml",
        imageUrl: "/src/assets/produtos/bebidas/coca-zero.png",
      },
      {
        "id": 5,
        "name": "Suco natural",
        "description": "Sabor Laranja",
        "price": 2.50,
        "size": "300ml",
        imageUrl: "/src/assets/produtos/bebidas/suco-laranja.png",
      },
      {
        "id": 6,
        "name": "Fanta",
        "description": "Refrigerante de frutas",
        "price": 2.50,
        "size": "350ml",
        imageUrl: "/src/assets/produtos/bebidas/fanta.png",
      },
      {
        "id": 7,
        "name": "Pepsi",
        "description": "Refrigerante Pepsi",
        "price": 2.50,
        "size": "350ml",
        imageUrl: "/src/assets/produtos/bebidas/pepsi.png",
      },
      {
        "id": 8,
        "name": "Ice Tea Limão",
        "description": "Ice Tea sabor limão",
        "price": 2.50,
        "size": "350ml",
        imageUrl: "/src/assets/produtos/bebidas/ice-tea.png",
      },
      {
        "id": 9,
        "name": "Caipirinha",
        "description": "Cachaça, limão e açúcar",
        "price": 8.00,
        "size": "300ml",
        imageUrl: "/src/assets/produtos/bebidas/caipirinha.png",
      },
      {
        "id": 10,
        "name": "Cerveja Heineken",
        "description": "Cerveja holandesa",
        "price": 3.00,
        "size": "330ml",
        imageUrl: "/src/assets/produtos/bebidas/heineken.png",
      },
      {
        "id": 11,
        "name": "Cerveja Super Bock",
        "description": "Cerveja portuguesa",
        "price": 2.50,
        "size": "330ml",
        imageUrl: "/src/assets/produtos/bebidas/super-bock.png",
      },
      {
        "id": 12,
        "name": "Super Bock Stout",
        "description": "Cerveja portuguesa",
        "price": 2.50,
        "size": "330ml",
        imageUrl: "/src/assets/produtos/bebidas/stout.png",
      },
];

function ProdutosBebidas() {
  //CHAMANDO A BIBLIOTECA useCart
  const { addItem } = useCart();

    return (
        <Container>
          <Row >
            <h1 className="title-produtos">BEBIDAS</h1>
            {bebidas.map((produto, i) => (
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

export default ProdutosBebidas;