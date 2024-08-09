import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
// Importacao da utilização do ICON
import * as Icon from 'react-bootstrap-icons';
// IMPORT PARA FUNCIONAR CARRINHO DE COMPRAS
import { useCart } from 'react-use-cart';
import './carrinhoCompras.css'
// IMPORTANDO PAGINA PAGAMENTO
import Pagamento from './Pagamento.jsx';


function CarrinhoCompras() {
    const [show, setShow] = useState(false);

    // Funcao para aparecer a pagina de pagamento
    const [showPayment, setShowPayment] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //FUNCAO APARECER OU NAO A PAGINA DE PAGAMENTO
    const handlePayment = () => {
      setShow(false);
      setShowPayment(true);
    };

    // CONST CARRINHO
    const {
            items,
            totalItems,
            cartTotal,
            updateItemQuantity,
            removeItem,
        } = useCart();
        
  
    return (
      <>
        <div id="cart-container">
            <div id="cart">
                <Icon.Cart className='iconCart' onClick={handleShow} />
                <span className='cart-counter'>{totalItems}</span>
            </div>
        </div>
        <>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>SEU PEDIDO</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <table className='table table-light table-hover m-0'>
            <tbody>
                {items.map((produto, index)=>{
                    return(
                        <tr key = {index}>
                            <td className='d-flex justify-content-between align-items-center'>
                                <img className='image-circle' src={produto.imageUrl} alt={produto.name} />
                                <td className='btn-group me-2'>
                                <button className='btnCarrinho' onClick={() => updateItemQuantity(produto.id, produto.quantity -1)}>-</button>
                                <button className='btnCarrinho' onClick={() => updateItemQuantity(produto.id, produto.quantity + 1)}>+</button>
                                <button className='btnCarrinho1' onClick={() => removeItem(produto.id)}>Excluir itens</button>
                              </td>
                            </td>
                            <div className='text-left '>
                              <td>{produto.name}</td>
                              {/*<td className='nome'>{produto.price}€</td>*/}
                              <td className='nome'>Valor unitário: {produto.price.toFixed(2)}€</td>
                              <td>Quantidade: {produto.quantity} </td>
                            </div>
                        </tr>
                    )
                })}
            </tbody>
          </table>
          <div className='col-auto ms-auto'>
            <h4>Total: {cartTotal.toFixed(2)}€ </h4>
          </div>
          {/** FINALIZAR COMPRA. APARECE SOMENTE SE TIVER ALGUM PRODUTO NO CARRINHO */}
          {items.length > 0 && (
            <div className="text-center">
              <button className="btnFinalizarCompra" onClick={handlePayment}>
                Finalizar Compra
              </button>
            </div>
          )}
          
        </Offcanvas.Body>
      </Offcanvas>

      {showPayment && <Pagamento show={showPayment} handleClose={() => setShowPayment(false)} />}
    </>
</>
);
}

export default CarrinhoCompras
