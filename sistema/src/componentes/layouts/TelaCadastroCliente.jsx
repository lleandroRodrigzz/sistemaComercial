import { Alert } from "react-bootstrap";
import FormCadastroCliente from './FormCadastroCliente';
import Pagina from "./Pagina";

export default function TelaCadastroCliente(props) {
    return (
        <div>
            <Pagina>
                <Alert className='text-center' variant='primary' style={{ fontSize: "42px" }}>
                    <h2>
                        Cadastro de Cliente
                    </h2>
                </Alert>
                <FormCadastroCliente />
            </Pagina>
        </div>
    );

}