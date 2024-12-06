import { Container, Button, Table } from 'react-bootstrap';
import { deletarUsuario } from '../../../servicos/servicoUsuario';
import toast, { Toaster } from "react-hot-toast";

export default function TabelaUsuario(props) {

    function excluirUsuario(usuario){
        if (window.confirm("Deseja realmente excluir o usuario " + usuario.nomeUsuario + " ?")) {
            deletarUsuario(usuario)
                .then((resultado) => {
                    if (resultado.status) {
                        props.setListaDeUsuarios(props.listaDeUsuarios.filter(
                            (item) => {
                                return item.codigo !== usuario.codigo
                            }
                        ));
                        toast.success("Usuario excluido com sucesso!");
                    }
                    else {
                        toast.error(resultado.mensagem);
                    }
                })
        }
    }

    return (
        <>
            <Container className='text-center'>
                <Button className="telaCad-button mb-3" variant="link" style={{ textDecoration: "none", color: "#1BFD9C" }} 
                        onClick={() => props.setExibirTabela(false)}
                    >
                    Adicionar
                </Button>
                <Table striped bordered hover responsive variant="dark" style={{backgroundColor:"black"}}>
                    <thead style={{textAlign:"center", verticalAlign: "middle"}}>
                        <th>ID</th>
                        <th>Nome de Usuario</th>
                        <th>Email</th>
                        <th>Senha</th>
                        <th>Tipo de Usuario</th>
                        <th>Ações</th>
                    </thead>
                    <tbody>
                        {
                            props.listaDeUsuarios?.map((usuario) => {
                                return (
                                    <tr key={usuario.codigo}>
                                        <td>{usuario.codigo}</td>
                                        <td>{usuario.nomeUsuario}</td>
                                        <td>{usuario.emailUsuario}</td>
                                        <td>{"*********"}</td>
                                        <td>{usuario.tipoUsuario}</td>
                                        <td>
                                            <Button onClick={() => {
                                                props.setExibirTabela(false);
                                                props.setUsuarioSelecionado(usuario);
                                                props.setModoEdicao(true);
                                            }}variant="warning">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                                            </svg>
                                            </Button> <Button onClick={() => {
                                                excluirUsuario(usuario);
                                                }} variant="danger">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                                            </svg>
                                            </Button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </Container>
            Quantidade de Usuarios Cadastrados: <span style={{color:"#1BFD9C"}}>{props.listaDeUsuarios.length}</span>
            <Toaster position="top-center" />
        </>
    );
}