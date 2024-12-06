import { Button, Col, Form, InputGroup, Row, Spinner } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { consultarCategoria } from "../../../servicos/servicoCategoria.js"
import { alterarProduto, gravarProduto } from "../../../servicos/servicoProduto.js"
import toast, { Toaster } from "react-hot-toast";

export default function FormCadProdutos(props) {

    const [produto, setProduto] = useState(props.produtoSelecionado);
    const [formValidado, setFormValidado] = useState(false);
    const [categorias, setCategorias] = useState([]);
    const [temCategorias, setTemCategorias] = useState(false);

    useEffect(() => {
        consultarCategoria().then((resultado) => {
            if (Array.isArray(resultado)) {
                setCategorias(resultado);
                setTemCategorias(true);
            }
            else {
                toast.error("Não foi possível carregar as categorias");
            }
        }).catch((erro) => {
            setTemCategorias(false);
            toast.error("Não foi possível carregar as categorias");
        });

    }, []); //didMount

    function selecionarCategoria(evento) {
        setProduto({
            ...produto,
            categoria: {
                codigo: evento.currentTarget.value
            }
        });
    }

    function manipularSubmissao(evento) {
        const form = evento.currentTarget;
        if (form.checkValidity()) {

            if (!props.modoEdicao) {
                //cadastrar o produto
                gravarProduto(produto)
                    .then((resultado) => {
                        if (resultado.status) {
                            //exibir tabela com o produto incluído
                            props.setExibirTabela(true);
                        }
                        else {
                            toast.error(resultado.mensagem);
                        }
                    });
            }
            else {
                //editar o produto
                alterarProduto(produto)
                    .then((resultado) => {
                        if (resultado.status) {
                            props.setListaDeProdutos(props.listaDeProdutos.map((item) =>
                                item.codigo !== produto.codigo ? item : produto
                            ));
                        }
                        else {
                            toast.error(resultado.mensagem);
                        }
                    });
                //voltar para o modo de inclusão
                props.setModoEdicao(false);
                props.setExibirTabela(true);
                props.setProdutoSelecionado({
                    codigo: "",
                    descricao: "",
                    precoCusto: "",
                    precoVenda: "",
                    qtdEstoque: "",
                    urlImagem: "",
                    dataValidade: "",
                    categoria: {}
                });
            }
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
    }

    return (
        <Form validated={formValidado} onSubmit={manipularSubmissao}>
            <Row className="mb-4">
                <Form.Group as={Col} md="6">
                    <Form.Label>Código:</Form.Label>
                    <Form.Control
                        className="custom-placeholder"
                        style={{ backgroundColor: "#000000", borderColor: "#1BFD9C", color:"white" }}
                        required
                        type="text"
                        id="codigo"
                        name="codigo"
                        disabled
                        value={produto.codigo}
                        onChange={manipularMudanca}
                        placeholder="Não precisa digitar o codigo, eu vou cuidar disso para você ;)"
                    />
                    <Form.Control.Feedback type='invalid'>Por favor, informe o código do produto!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6">
                    <Form.Label>Descrição:</Form.Label>
                    <Form.Control
                        className="custom-placeholder"
                        style={{ backgroundColor: "#000000", borderColor: "#1BFD9C", color:"white" }}
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
                        <InputGroup.Text id="precoCusto" style={{ backgroundColor: "#000000", borderColor: "#1BFD9C", color:"white" }}>R$</InputGroup.Text>
                        <Form.Control
                        className="custom-placeholder"
                            style={{ backgroundColor: "#000000", borderColor: "#1BFD9C", color:"white" }}
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
                        <InputGroup.Text id="precoVenda" style={{ backgroundColor: "#000000", borderColor: "#1BFD9C", color:"white" }}>R$</InputGroup.Text>
                        <Form.Control
                        className="custom-placeholder"
                            style={{ backgroundColor: "#000000", borderColor: "#1BFD9C", color:"white" }}
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
                        <InputGroup.Text id="qtdEstoque" style={{ backgroundColor: "#000000", borderColor: "#1BFD9C", color:"white" }}>+</InputGroup.Text>
                        <Form.Control
                        className="custom-placeholder"
                            style={{ backgroundColor: "#000000", borderColor: "#1BFD9C", color:"white" }}
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
                    className="custom-placeholder"
                        style={{ backgroundColor: "#000000", borderColor: "#1BFD9C", color:"white" }}
                        required
                        type="text"
                        id="urlImagem"
                        name="urlImagem"
                        value={produto.urlImagem}
                        onChange={manipularMudanca}
                        placeholder="Cole a URL da imagem aqui"
                    />
                    <Form.Control.Feedback type="invalid">Por favor, informe a url da imagem do produto!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-4">
                <Form.Group as={Col} md="6">
                    <Form.Label>Válido até:</Form.Label>
                    <Form.Control
                    className="custom-placeholder"
                        style={{ backgroundColor: "#000000", borderColor: "#1BFD9C", color:"white" }}
                        required
                        type="text"
                        id="dataValidade"
                        name="dataValidade"
                        value={produto.dataValidade}
                        onChange={manipularMudanca}
                        placeholder="DD/MM/AAAA"
                    />
                    <Form.Control.Feedback type="invalid">Por favor, informe a data de validade do produto!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md={5} className="mb-3">
                    <Form.Label>Categoria:</Form.Label>
                    <Form.Select id="categoria"
                        name="categoria"
                        className="custom-placeholder"
                        style={{ backgroundColor: "#000000", borderColor: "#1BFD9C", color:"white" }}
                        onChange={selecionarCategoria}>
                        <option value="" selected disabled>Selecione uma categoria</option>
                        {
                            // Criar em tempo de execução as categorias existentes no banco de dados
                            categorias.map((categoria) => {
                                return <option value={categoria.codigo}>
                                    {categoria.descricao}
                                </option>;
                            })
                        }
                    </Form.Select>
                </Form.Group>
                <Form.Group as={Col} md={1} style={{ backgroundColor: "#212121"}}>
                    {
                        !temCategorias ? <Spinner className='mt-4' animation="border" variant="success" />
                            : ""
                    }
                </Form.Group>
            </Row>
            <Row className='mt-2 mb-2'>
                <Col md={1}>
                    <Button variant="link" className='telaCad-button' type="submit" 
                            disabled={!temCategorias} 
                            style={{ textDecoration: "none", color: "#1BFD9C" }}>
                                {props.modoEdicao ? "Alterar" : "Confirmar"}
                    </Button>
                </Col>

                <Col md={{ offset: 1 }}>
                    <Button variant="link" className='telaCad-button' type="submit" style={{ textDecoration: "none", color: "#1BFD9C" }} onClick={() => {
                        props.setExibirTabela(true);
                    }}>Voltar</Button>
                </Col>
            </Row>
            <Toaster position="top-center" />
        </Form>
    );
}