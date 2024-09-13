import { Container, Button, Table } from 'react-bootstrap';

export default function TabelaCategoria(props) {
    return (
        <>
            <Container className='text-center'>
                <Button className='mb-3' variant='danger'
                    onClick={() => {
                        props.setExibirTabela(false);
                    }}>Adicionar
                </Button>
                <Table striped bordered hover>
                    <thead>
                        <th>Nome da Categoria</th>
                        <th>Tipo</th>
                    </thead>
                    <tbody>
                        {
                            props.listaDeCategorias?.map((categoria) => {
                                return (
                                    <tr>
                                        <td>{categoria.nomeCat}</td>
                                        <td>{categoria.tipo}</td>
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