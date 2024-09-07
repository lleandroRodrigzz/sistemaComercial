import { Alert } from "react-bootstrap";
import FormCadastroUsuario from "./FormCadastroUsuario";
import Pagina from "./Pagina";

export default function TelaCadastroUsuario(props) {
    return (
        <div>
            <Pagina>
                <Alert className='text-center' variant='success' style={{fontSize: "42px"}}>
                    <h2>
                        Cadastro de Usuario
                    </h2>
                </Alert>
                <FormCadastroUsuario />
            </Pagina>
        </div>
    );
}