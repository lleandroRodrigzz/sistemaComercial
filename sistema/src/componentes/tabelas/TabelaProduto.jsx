import { Button, Container, Table } from "react-bootstrap";

export default function TabelaProdutos(props) {
    return (
        <>
            <Container>
                <Button className="mb-3" variant="info"
                    onClick={() => {
                        props.setExibirTabela(false);
                    }}>
                    Adicionar
                </Button>
                <Table striped bordered hover>
                    <thead>
                        <th>Código</th>
                        <th>Descrição</th>
                        <th>Preço de custo</th>
                        <th>Preço de venda</th>
                        <th>Qtd. em estoque</th>
                        <th>Imagem</th>
                        <th>Validade</th>
                    </thead>
                    <tbody>
                        {
                            props.listaDeProdutos?.map((produto) => {
                                return (
                                    <tr>
                                        <td>{produto.codigo}</td>
                                        <td>{produto.descricao}</td>
                                        <td>{produto.precoCusto}</td>
                                        <td>{produto.precoVenda}</td>
                                        <td>{produto.qtdEstoque}</td>
                                        <td><img src={produto.urlImagem} alt="foto do produto" /></td>
                                        <td>{produto.dataValidade}</td>
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