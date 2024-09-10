import { Container, Button, Table } from 'react-bootstrap';

export default function TabelaFornecedor(props){
    return (
        <>
            <Container>
                <Button className='mb-3' variant='warning'
                    onClick={() => {
                        props.setExibirTabela(false);
                    }}>Adicionar
                </Button>
                <Table striped bordered hover>
                    <thead>
                        <th>Nome</th>
                        <th>Categoria</th>
                        <th>Email</th>
                        <th>Cidade</th>
                        <th>Estado</th>
                        <th>CNPJ</th>
                    </thead>
                    <tbody>
                        {
                            props.listaDeFornecedores?.map((fornecedor) => {
                                return (
                                    <tr>
                                        <td>{fornecedor.nome}</td>
                                        <td>{fornecedor.categoria}</td>
                                        <td>{fornecedor.email}</td>
                                        <td>{fornecedor.cidade}</td>
                                        <td>{fornecedor.estado}</td>
                                        <td>{fornecedor.cnpj}</td>
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