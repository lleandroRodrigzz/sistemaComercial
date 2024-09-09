import { Container, Button, Table } from 'react-bootstrap';

export default function TabelaCliente(props) {
    return (
        <>
            <Container>
                <Button className='mb-3' variant='primary'
                    onClick={() => {
                        props.setExibirTabela(false);
                    }}>Adicionar
                </Button>
                <Table striped bordered hover>
                    <thead>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Cidade</th>
                        <th>Estado</th>
                        <th>CPF</th>
                    </thead>
                    <tbody>
                        {
                            props.listaDeClientes?.map((cliente) => {
                                return (
                                    <tr>
                                        <td>{cliente.nome}</td>
                                        <td>{cliente.email}</td>
                                        <td>{cliente.cidade}</td>
                                        <td>{cliente.estado}</td>
                                        <td>{cliente.cpf}</td>
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