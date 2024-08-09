//importacoes gerais essenciais para podermos rotear as páginas.
// Biblioteca do Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// IMPORTANDO FUNCAO PARA FUNCIONAR CARRINHO DE COMPRAS
import { CartProvider } from 'react-use-cart';

// Endereços das páginas
import Home from './pages/home/Home'
// import Reservas from './pages/reservas/Reservas'
import Menu from './pages/menu/Menu'
import GaleriaFotos from './pages/galeriaFotos/GaleriaFotos'
import MenuPrincipal from './pages/menuPrincipal/MenuPrincipal'
import Contato from './pages/contato/Contato'

// import Sobre from './pages/sobre/Sobre'
// Inportacoes ja preparadas para o Arranque quando as páginas estiverem prontas


function App() {

  return (
    <div>
      <BrowserRouter>
        <CartProvider> {/** PARA CARRINHO COMPRAS RODAR */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/galeriafotos" element={<GaleriaFotos/>} />
            {/** FAZENDO NOVA PÁGINA PARA MENU PRINCIPAL */}
            <Route path="/menuprincipal" element={<MenuPrincipal/>} />
            {/* <Route path="/reservas" element={<Reservas />} />
            <Route path="/sobre" element={<Sobre />} />*/}
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>

  )
}

export default App;
