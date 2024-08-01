import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// Importacao da utilização do ICON
import * as Icon from 'react-bootstrap-icons';


function carrinhoCompras(   ){
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
/* Variável para armazenar o número de itens no carrinho */
let cartCount = 0;
/* Seletor do botão "adicionar ao carrinho" */
const addToCartBtns = document.querySelectorAll('.iconCart');
/* Loop nos botões para adicionar o evento de click */
for (let i = 0; i < addToCartBtns.length; i++){
    addToCartBtns[i].addEventListener('click', function() {
    /* Ao clicar, atualiza o valor da variável "cartCount" e o texto do carrinho */
   cartCount++;
document.querySelector('#cart-count').textContent = cartCount;
});
}
//Botão de resetar o contador do carrinho, colocar funcionalidade dentro da tela do carrinho
function resetCartCount(){
    cartCount = 0
    document.querySelector('#cart-count').textContent = cartCount
}
const remove = document.querySelector('#remove-to-cart')
remove.addEventListener('click', resetCartCount)
 
// Selecione o botão e o bottom sheet
const openBt = document.getElementById('#cart-icon')
const bottomSheet = document.getElementById('#bottom-sheet')
 
// Adicione um evento de clique ao botão para abrir o bottom sheet
openBt.addEventListener('click', () => {
bottomSheet.classList.add('.aberto')
})
// Adicione um evento de clique fora do bottom sheet para fechá-lo
document.addEventListener('click', (e) => {
if(e.target != bottomSheet && !bottomSheet.contains(e.target)){
    bottomSheet.classList.remove('.aberto')
}
})
return (
  <>
    <div id="cart">
        <Icon.Cart className='iconCart' onClick={handleShow}/>
    </div>

    <Modal className='carrinho'
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title className='titleLogin'>Seu pedido</Modal.Title>
      </Modal.Header>
      <Modal.Body className='bodyLogin'>
        I will not close if you click outside me. Do not even try to press
        escape key.
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary">Understood</Button>
      </Modal.Footer>
    </Modal>  
  </>
);
}
export default carrinhoCompras