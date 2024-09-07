import { Alert } from "react-bootstrap";
import FormCadastroCategoria from "./FormCadastroCategoria";
import Pagina from "./Pagina";

export default function TelaCadastroCategoria(props){
    return(
        <div>
            <Pagina>
                <Alert className='text-center' variant='danger' style={{ fontSize: "42px" }}>
                    <h2>
                        Cadastro de Categoria
                    </h2>
                </Alert>
                <FormCadastroCategoria />
            </Pagina>
        </div>
    );
}