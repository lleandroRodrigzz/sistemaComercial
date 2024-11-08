import TelaCadastroCliente from './componentes/layouts/TelaCadastroCliente';
import TelaCadastroFornecedor from './componentes/layouts/TelaCadastroFornecedor';
import TelaCadastroCategoria from './componentes/layouts/TelaCadastroCategoria';
import TelaCadastroUsuario from './componentes/layouts/TelaCadastroUsuario';
import TelaCadastroProduto from './componentes/layouts/TelaCadastroProduto';
import TelaCadastroEntregador from './componentes/layouts/TelaCadastroEntregador';
import TelaMenu from "./componentes/layouts/TelaMenu";
import Tela404 from "./componentes/layouts/Tela404";
import Sobre from './componentes/layouts/Sobre';
import TelaLogin from './componentes/layouts/TelaLogin';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import { useState, createContext } from 'react';

export const contextoUsuario = createContext();

function App() {

  const [usuario, setUsuario] = useState({
    "usuario": "",
    "logado": false
  });

  if (!usuario.logado) {
    return (
      <contextoUsuario.Provider value={{ usuario, setUsuario }}>
        <TelaLogin />
      </contextoUsuario.Provider>
    );
  }
  else {
    return (
      <div className="App">
        <contextoUsuario.Provider value={{ usuario, setUsuario }}>
          <BrowserRouter>
            { //A ordem das rotas é importante 
            }
            <Routes>
              <Route path="/cliente" element={<TelaCadastroCliente />} />
              <Route path="/fornecedor" element={<TelaCadastroFornecedor />} />
              <Route path="/produto" element={<TelaCadastroProduto />} />
              <Route path="/usuario" element={<TelaCadastroUsuario />} />
              <Route path="/categoria" element={<TelaCadastroCategoria />} />
              <Route path='/entregador' element={<TelaCadastroEntregador />} />
              <Route path='/sobre' element={<Sobre />} />
              <Route path="/" element={<TelaMenu />} />
              <Route path="*" element={<Tela404 />} />
            </Routes>
          </BrowserRouter>
        </contextoUsuario.Provider>
      </div>
    );
  }
}

export default App;
