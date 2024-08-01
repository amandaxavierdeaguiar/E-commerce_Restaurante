//importacoes gerais essenciais para podermos rotear as páginas.

// Biblioteca do Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Endereços das páginas
import Home from './pages/Home/Home'
import Reservas from './pages/reservas/Reservas'
import Galeria from './pages/galeria/Galeria'
 import Contato from './pages/contato/Contato'
import Sobre from './pages/sobre/Sobre'
// Importacoes ja preparadas para o Arranque quando as páginas estiverem prontas

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/galeria" element={<Galeria />} />
          {/* Paginas já roteada para quando estiverem prontas, ja descomentar. */}
          {/* <Route path="/reservas" element={<Reservas />} />
          
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />*/}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App


