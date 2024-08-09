import React, { useState } from 'react';
import { useCart } from 'react-use-cart';
import './pagamento.css';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Pagamento({ show, handleClose }) {
  const [endereco, setEndereco] = useState({
    rua: '',
    numero: '',
    cidade: '',
    cep: '',
  });

  const [formaPagamento, setFormaPagamento] = useState({
    cartao: '',
    nomeCartao: '',
    numeroCartao: '',
    validadeCartao: '',
    cvvCartao: '',
  });

  const { cartTotal, items } = useCart();

  const handleSubmit = (event) => {
    event.preventDefault();
    const { rua, numero, cidade, cep } = endereco;
    const { nomeCartao, numeroCartao, validadeCartao, cvvCartao } = formaPagamento;
  
    if (!rua || !numero || !cidade || !cep || !nomeCartao || !numeroCartao || !validadeCartao || !cvvCartao) {
      alert("Por favor, preencha todos os campos obrigatórios!"); // Mensagem de ERRO
      return;
    }
  
    // API pagamento se tivesse! 
    alert("Pagamento realizado com sucesso!"); // Mensagem de SUCESSO
    handleClose();
  };

  return (
    <Offcanvas show={show} onHide={handleClose} scrollable={true}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className='teste'>PAGAMENTO</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <div className="pagamento">
            <form onSubmit={handleSubmit}>
              <div className="forma-pagamento">
                <h6 style={{color: '#FF5733'}}>Digite os dados do Seu Cartão: </h6>
                <input
                  type="text"
                  value={formaPagamento.nomeCartao}
                  onChange={(event) => setFormaPagamento({ ...formaPagamento, nomeCartao: event.target.value })}
                  placeholder="Nome do Cartão"
                />
                <input
                  type="text"
                  value={formaPagamento.numeroCartao}
                  onChange={(event) => setFormaPagamento({ ...formaPagamento, numeroCartao: event.target.value })}
                  placeholder="Número do Cartão"
                  pattern="[0-9]{16}" // 16 numeros de 0 a 9
                />
                <input
                  type="text"
                  value={formaPagamento.validadeCartao}
                  onChange={(event) => setFormaPagamento({ ...formaPagamento, validadeCartao: event.target.value })}
                  placeholder="Validade do Cartão"
                  pattern="[0-9]{2}/[0-9]{4}" //2x numero de 0 a 9 dividido por /
                />
                <input
                  type="text"
                  value={formaPagamento.cvvCartao}
                  onChange={(event) => setFormaPagamento({ ...formaPagamento, cvvCartao: event.target.value })}
                  placeholder="CVV do Cartão"
                  pattern="[0-9]{3,4}" //pode ser 3 ou 4 numeros
                />
              </div>
              <div className="endereco">
                <h6 style={{color: '#FF5733'}}>Digite seu endereço para entrega:</h6>
                  <input
                    type="text"
                    value={endereco.rua}
                    onChange={(event) => setEndereco({ ...endereco, rua: event.target.value })}
                    placeholder="Rua"
                  />
                  <input
                    type="text"
                    value={endereco.numero}
                    onChange={(event) => setEndereco({ ...endereco, numero: event.target.value })}
                    placeholder="Número"
                  />
                  <input
                    type="text"
                    value={endereco.cidade}
                    onChange={(event) => setEndereco({ ...endereco, cidade: event.target.value })}
                    placeholder="Cidade"
                  />
                  <input
                    type="text"
                    value={endereco.cep}
                    onChange={(event) => setEndereco({ ...endereco, cep: event.target.value })}
                    placeholder="Código Postal"
                    pattern="[0-9]{4}-[0-9]{3}" // 4 numeros de 0 a 9 com - e mais 3 numeros de 0 a 9
                  />
              </div>
              <div className="total">
                <h2>Total: {cartTotal}€</h2>
              </div>
              <button type="submit">Realizar Pagamento</button>
            </form>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default Pagamento;