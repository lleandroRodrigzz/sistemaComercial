import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';

export default function FormCadProdutos(props) {
    
    const prodVazio = {
        codigo: "",
        descricao: "",
        precoCusto: "",
        precoVenda: "",
        qtdEstoque: "",
        urlImagem: "",
        dataValidade: ""
    };

    const [formValidado, setFormValidado] = useState(false);
    const estadoProduto = props.produtoSelecionado;
    const [produto, setProduto] = useState(estadoProduto);

    function manipularSubmissao(evento) {
        const form = evento.currentTarget;
        if (form.checkValidity()) {
            if (!props.modoEdicao) {
                //cadastrar produto
                props.setListaDeProdutos([...props.listaDeProdutos, produto]); // Array vazio está recebendo o conteúdo da lista espalhada mais o produto
                // Exibir tabela com o produto incluído
                //props.setExibirTabela(true);
            }
            else {
                props.setListaDeProdutos([...props.listaDeProdutos.filter((item) => item.codigo !== produto.codigo), produto]);
                props.setModoEdicao(false);
                props.setProdutoSelecionado(prodVazio);
            }
            props.setExibirTabela(true);
            setProduto(prodVazio);
            setFormValidado(false);
        }
        else {
            setFormValidado(true);
        }
        evento.preventDefault();
        evento.stopPropagation();
    }

    function manipularMudanca(evento) {
        const elemento = evento.target.name;
        const valor = evento.target.value;
        setProduto({ ...produto, [elemento]: valor });
        //console.log(`componente: ${elemento} : ${valor}`);
    }

    return (
        <Form validated={formValidado} onSubmit={manipularSubmissao}>
            <Row className="mb-4">
                {
                    props.modoEdicao ?
                        <fieldset disabled>
                            <Form.Group as={Col} md="4">
                                <Form.Label>Código</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    id="codigo"
                                    name="codigo"
                                    value={produto.codigo}
                                    onChange={manipularMudanca}
                                    placeholder="Digite o codigo aqui"
                                    style={props.modoEdicao ? {
                                        borderColor: "#007bff",
                                        /*backgroundColor: '#e9ecef'*/
                                        cursor: 'not-allowed',
                                        opacity: 0.7,
                                        pointerEvents: 'none'
                                    } : {}}
                                />
                                <Form.Control.Feedback type='invalid'>Por favor, informe o código do produto!</Form.Control.Feedback>
                            </Form.Group>
                        </fieldset> :

                        <Form.Group as={Col} md="4">
                            <Form.Label>Código</Form.Label>
                            <Form.Control
                                style={{ /*backgroundColor: "#f0f8ff",*/ borderColor: "#007bff" }}
                                required
                                type="text"
                                id="codigo"
                                name="codigo"
                                value={produto.codigo}
                                onChange={manipularMudanca}
                                placeholder="Digite o codigo aqui"
                            />
                            <Form.Control.Feedback type='invalid'>Por favor, informe o código do produto!</Form.Control.Feedback>
                        </Form.Group>
                }
            </Row>
            <Row className="mb-4">
                <Form.Group as={Col} md="12">
                    <Form.Label>Descrição</Form.Label>
                    <Form.Control
                        style={{ /*backgroundColor: "#f0f8ff"*/ borderColor: "#007bff", color: "#000" }}
                        required
                        type="text"
                        id="descricao"
                        name="descricao"
                        value={produto.descricao}
                        onChange={manipularMudanca}
                        placeholder="Digite a descrição aqui"
                    />
                    <Form.Control.Feedback type="invalid">Por favor, informe a descrição do produto!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-4">
                <Form.Group as={Col} md="4">
                    <Form.Label>Preço de Custo:</Form.Label>
                    <InputGroup hasValidation>
                        <InputGroup.Text id="precoCusto" style={{ /*backgroundColor: "#f0f8ff",*/ borderColor: "#007bff", color: "#000" }}>R$</InputGroup.Text>
                        <Form.Control
                            style={{ /*backgroundColor: "#f0f8ff",*/ borderColor: "#007bff", color: "#000" }}
                            type="text"
                            id="precoCusto"
                            name="precoCusto"
                            value={produto.precoCusto}
                            onChange={manipularMudanca}
                            aria-describedby="precoCusto"
                            placeholder="Digite o preço de custo aqui"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor, informe o preço de custo!
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="precoVenda">
                    <Form.Label>Preço de Venda:</Form.Label>
                    <InputGroup hasValidation>
                        <InputGroup.Text id="precoVenda" style={{ /*backgroundColor: "#f0f8ff",*/ borderColor: "#007bff", color: "#000" }}>R$</InputGroup.Text>
                        <Form.Control
                            style={{ /*backgroundColor: "#f0f8ff",*/ borderColor: "#007bff", color: "#000" }}
                            type="text"
                            id="precoVenda"
                            name="precoVenda"
                            value={produto.precoVenda}
                            onChange={manipularMudanca}
                            placeholder="Digite o preço de venda aqui"
                            aria-describedby="precoVenda"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor, informe o preço de venda!
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
                <Form.Group as={Col} md="4">
                    <Form.Label>Qtd em estoque:</Form.Label>
                    <InputGroup hasValidation>
                        <InputGroup.Text id="qtdEstoque" style={{ /*backgroundColor: "#f0f8ff",*/ borderColor: "#007bff", color: "#000" }}>+</InputGroup.Text>
                        <Form.Control
                            style={{ /*backgroundColor: "#f0f8ff",*/ borderColor: "#007bff", color: "#000" }}
                            type="text"
                            id="qtdEstoque"
                            name="qtdEstoque"
                            value={produto.qtdEstoque}
                            onChange={manipularMudanca}
                            placeholder="Digite a quantidade de estoque aqui"
                            aria-describedby="qtdEstoque"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor, informe a quantidade em estoque!
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
            </Row>
            <Row className="mb-4">
                <Form.Group as={Col} md="12">
                    <Form.Label>Url da imagem:</Form.Label>
                    <Form.Control
                        style={{ /*backgroundColor: "#f0f8ff",*/ borderColor: "#007bff", color: "#000" }}
                        required
                        type="text"
                        id="urlImagem"
                        name="urlImagem"
                        value={produto.urlImagem}
                        onChange={manipularMudanca}
                        placeholder="Cole o url aqui"
                    />
                    <Form.Control.Feedback type="invalid">Por favor, informe a url da imagem do produto!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-4">
                <Form.Group as={Col} md="12">
                    <Form.Label>Válido até:</Form.Label>
                    <Form.Control
                        style={{ /*backgroundColor: "#f0f8ff",*/ borderColor: "#007bff", color: "#000" }}
                        required
                        type="text"
                        id="dataValidade"
                        name="dataValidade"
                        value={produto.dataValidade}
                        onChange={manipularMudanca}
                        placeholder="XX/XX/XXXX"
                    />
                    <Form.Control.Feedback type="invalid">Por favor, informe a data de validade do produto!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className='mt-2 mb-2'>

                <Col md={1}>
                    <Button variant="info" type="submit">
                        {
                            props.modoEdicao ?
                                "Alterar" :
                                "Cadastrar"
                        }
                    </Button>
                </Col>

                <Col md={{ offset: 1 }}>
                    <Button variant="info" type="submit" onClick={() => {
                        props.setExibirTabela(true);
                        props.setModoEdicao(false);
                        props.setProdutoSelecionado(prodVazio);
                    }}>Voltar</Button>
                </Col>
            </Row>
        </Form>

    );
}