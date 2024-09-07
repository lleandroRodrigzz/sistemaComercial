import { Alert } from "react-bootstrap";
import FormCadastroFornecedor from "./FormCadastroFornecedor";
import Pagina from "./Pagina";

export default function TelaCadastroFornecedor(props) {
    return (
        <div>
            <Pagina>
                <Alert className='text-center' variant='warning' style={{ fontSize: "42px" }}>
                    <h2>
                        Cadastro de Fornecedor
                    </h2>
                </Alert>
                <FormCadastroFornecedor />
            </Pagina>
        </div>
    );
}