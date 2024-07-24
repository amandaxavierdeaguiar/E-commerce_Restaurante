//importacoes gerais essenciais para podermos rotear as páginas.

// Biblioteca do Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Endereços das páginas
import Home from './pages/home/Home'
// import Reservas from './pages/reservas/Reservas'
// import Galeria from './pages/galeria/Galeria'
// import Contato from './pages/contato/Contato'
// import Sobre from './pages/sobre/Sobre'
// Inportacoes ja preparadas para o Arranque quando as páginas estiverem prontas

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Paginas já roteada para quando estiverem prontas, ja descomentar. */}
          {/* <Route path="/reservas" element={<Reservas />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />*/}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App


