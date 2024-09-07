import TelaCadastroCliente from './componentes/layouts/TelaCadastroCliente';
import TelaCadastroFornecedor from './componentes/layouts/TelaCadastroFornecedor';
import TelaCadastroCategoria from './componentes/layouts/TelaCadastroCategoria';
import TelaCadastroUsuario from './componentes/layouts/TelaCadastroUsuario';
import TelaMenu from "./componentes/layouts/TelaMenu";
import Tela404 from "./componentes/layouts/Tela404";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        { //A ordem das rotas é importante 
        }
        <Routes>
          <Route path="/cliente" element={<TelaCadastroCliente/>}/>
          <Route path="/fornecedor" element={<TelaCadastroFornecedor/>}/>
          <Route path="/usuario" element={<TelaCadastroUsuario/>}/>
          <Route path="/categoria" element={<TelaCadastroCategoria/>}/>
          <Route path="/" element={<TelaMenu/>} />
          <Route path="*" element={<Tela404/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
