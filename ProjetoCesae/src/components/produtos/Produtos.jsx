import { Button, Card} from 'react-bootstrap';

{/** MERAMENTE ILUSTRATIVO, APENAS PARA CONSEGUIMOS POR PARA FUNCIONAR O CODIGO. DEPOIS CUIDAMOS DO LAYOUT */}

//Lista para os produtos
const menu_comida = [
  {
    nome: 'Frango a parmegiana',
    imagem: "/src/assets/produtos/parmegiana.png",
    descricao: "Experimente o nosso suculento Frango à Parmegiana! Nossos filés de frango são cuidadosamente empanados e fritos até ficarem dourados. Em seguida, cobrimos com um molho de tomate caseiro, feito com ingredientes frescos e temperos selecionados. Por cima, derretemos uma camada generosa de queijo mussarela, criando uma combinação irresistível de sabores.",
    price: 20.00
  },
];

// POR ENQUANTO ESTA SENDO CHAMADA EM INDICE 0, A PARTIR DO MOMENTO QUE TIVER MAIS IMAGENS, VAMOS TER QUE FAZER COM CONTADOR.

function Produtos() {
    return (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={menu_comida[0].imagem}/> {/*Chamando a imagem da lista*/}
          <Card.Body>
            <Card.Title>{menu_comida[0].nome}</Card.Title>
            <Card.Text>
                {menu_comida[0].descricao}
            </Card.Text>
            <Button variant="primary">Encomendar</Button>
          </Card.Body>
        </Card>
      );
    }

export default Produtos;