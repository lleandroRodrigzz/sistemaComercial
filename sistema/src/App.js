import { useState } from 'react';
import Pagina from "./componentes/layouts/Pagina";
import Menu from './componentes/layouts/Menu';
import TelaCadastro from "./componentes/layouts/TelaCadastro";
import FormCadastroCliente from "./componentes/layouts/FormCadastroCliente";
import FormCadastroFornecedor from "./componentes/layouts/FormCadastroFornecedor";
import FormCadastroUsuario from "./componentes/layouts/FormCadastroUsuario";
import FormCadastroCategoria from "./componentes/layouts/FormCadastroCategoria";

function App() {
  const [FormAtivado, FormSetAtivado] = useState("cliente");
  const renderizarFormulario = () => {
    switch (FormAtivado) {
      case "cliente":
        return <FormCadastroCliente />;
      case "fornecedor":
        return <FormCadastroFornecedor />;
      case "usuario":
        return <FormCadastroUsuario />;
      case "categoria":
        return <FormCadastroCategoria />;
      default:
        return <FormCadastroCliente />;
    }
  };

  return (
    <div className="App">
      <Pagina>
        <Menu onSelectForm={FormSetAtivado}/>
        <TelaCadastro>
          {renderizarFormulario()}
        </TelaCadastro>
      </Pagina>
    </div>
  );
}

export default App;
