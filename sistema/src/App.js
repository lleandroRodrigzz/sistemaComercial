import TelaCadastroCliente from './componentes/telas/TelaCadastroCliente';
import TelaCadastroFornecedor from './componentes/telas/TelaCadastroFornecedor';
import TelaCadastroCategoria from './componentes/telas/TelaCadastroCategoria';
import TelaCadastroUsuario from './componentes/telas/TelaCadastroUsuario';
import TelaCadastroProduto from './componentes/telas/TelaCadastroProduto';
import TelaCadastroEntregador from './componentes/telas/TelaCadastroEntregador';
import TelaMenu from "./componentes/telas/TelaMenu";
import Tela404 from "./componentes/telas/Tela404";
import Sobre from './componentes/telas/Sobre';
import TelaLogin from './componentes/telas/TelaLogin';
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
              <Route path="/home" element={<TelaMenu />} />
              <Route path="/cliente" element={<TelaCadastroCliente />} />
              <Route path="/fornecedor" element={<TelaCadastroFornecedor />} />
              <Route path="/produto" element={<TelaCadastroProduto />} />
              <Route path="/usuario" element={<TelaCadastroUsuario />} />
              <Route path="/categoria" element={<TelaCadastroCategoria />} />
              <Route path='/entregador' element={<TelaCadastroEntregador />} />
              <Route path='/sobre' element={<Sobre />} />
              <Route path="*" element={<Tela404 />} />
            </Routes>
          </BrowserRouter>
        </contextoUsuario.Provider>
      </div>
    );
  }
}

export default App;
