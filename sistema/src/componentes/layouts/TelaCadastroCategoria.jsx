import { Alert } from "react-bootstrap";
import FormCadastroCategoria from "./FormCadastroCategoria";
import TabelaCategoria from "../tabelas/TabelaCategoria";
import { categorias } from "../dados/mockCategorias";
import Pagina from "./Pagina";
import { useState } from "react";

export default function TelaCadastroCategoria(props){
    const[exibirTabela, setExibirTabela] = useState(true);
    return(
        <div>
            <Pagina>
                <Alert className='text-center' variant='danger' style={{ fontSize: "42px" }}>
                    <h2>Cadastro de Categoria</h2>
                </Alert>
                {
                    exibirTabela ? 
                    <TabelaCategoria listaDeCategorias={categorias} setExibirTabela={setExibirTabela}/> : 
                    <FormCadastroCategoria setExibirTabela={setExibirTabela}/>
                }
            </Pagina>
        </div>
    );
}