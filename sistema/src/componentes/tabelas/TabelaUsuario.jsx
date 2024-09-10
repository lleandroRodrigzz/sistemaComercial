import { Container, Button, Table } from 'react-bootstrap';

export default function TabelaUsuario(props) {
    return (
        <>
            <Container>
                <Button className='mb-3' variant='success'
                    onClick={() => {
                        props.setExibirTabela(false);
                    }}>Adicionar
                </Button>
                <Table striped bordered hover>
                    <thead>
                        <th>Nome de Usuario</th>
                        <th>Email</th>
                        <th>Senha</th>
                        <th>Tipo de Usuario</th>
                    </thead>
                    <tbody>
                        {
                            props.listaDeUsuarios?.map((usuario) => {
                                return (
                                    <tr>
                                        <td>{usuario.nomeUsuario}</td>
                                        <td>{usuario.emailUsuario}</td>
                                        <td>{usuario.senhaUsuario}</td>
                                        <td>{usuario.tipoUsuario}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </Container>
        </>
    );
}