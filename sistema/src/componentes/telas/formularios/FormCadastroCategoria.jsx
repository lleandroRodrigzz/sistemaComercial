import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';
import { gravarCategoria, alterarCategoria } from '../../../servicos/servicoCategoria';
import toast, { Toaster } from "react-hot-toast";

export default function FormCadastroCategoria(props) {

    const categoriaVazia = {
        id: "",
        descricao: ""
    }

    const [formValidado, setFormValidado] = useState(false);
    const estadoCategoria = props.categoriaSelecionada;
    const [categoria, setCategoria] = useState(estadoCategoria);

    function manipularSubmissao(evento) {
        const form = evento.currentTarget;
        if (form.checkValidity()) {

            if (!props.modoEdicao) {
                //cadastrar a categoria
                gravarCategoria(categoria)
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
                alterarCategoria(categoria)
                    .then((resultado) => {
                        if (resultado.status) {
                            props.setListaDeCategorias(props.listaDeCategorias.map((item) =>
                                item.codigo !== categoria.codigo ? item : categoria
                            ));
                        }
                        else {
                            toast.error(resultado.mensagem);
                        }
                    });
                //voltar para o modo de inclusão
                props.setModoEdicao(false);
                props.setExibirTabela(true);
                props.setCategoriaSelecionada({
                    codigo: "",
                    descricao: ""
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
        setCategoria({ ...categoria, [elemento]: valor });
    }

    return (
        <Form Form validated={formValidado} onSubmit={manipularSubmissao}>
            <Row className="mb-3">
                <Form.Group as={Col} md="6">
                    {
                        props.modoEdicao ?
                            <fieldset disabled>
                                <Form.Label>ID da Categoria</Form.Label>
                                <Form.Control
                                    className="custom-placeholder"
                                    style={{ backgroundColor: "#000000", borderColor: "#1BFD9C", color:"white" }}
                                    type="number"
                                    id='codigo'
                                    name='codigo'
                                    disabled
                                    value={categoria.codigo}
                                    onChange={manipularMudanca}
                                    placeholder="Não precisa digitar o ID, eu vou cuidar disso para você ;)"
                                />
                                <Form.Control.Feedback>Correto!</Form.Control.Feedback>
                            </fieldset> :
                            <>
                                <Form.Label>ID da Categoria</Form.Label>
                                <Form.Control
                                    className="custom-placeholder"
                                    style={{ backgroundColor: "#000000", borderColor: "#1BFD9C", color:"white" }}
                                    type="number"
                                    id='codigo'
                                    name='codigo'
                                    disabled
                                    value={categoria.codigo}
                                    onChange={manipularMudanca}
                                    placeholder="Não precisa digitar o ID, eu vou cuidar disso para você ;)"
                                />
                                <Form.Control.Feedback>Correto!</Form.Control.Feedback>
                            </>
                    }
                </Form.Group>
                <Form.Group as={Col} md="6">
                    <Form.Label>Nome da Categoria</Form.Label>
                    <Form.Control
                        style={{ backgroundColor: "#000000", borderColor: "#1BFD9C", color:"white" }}
                        className="custom-placeholder"
                        required
                        type="text"
                        id='descricao'
                        name='descricao'
                        value={categoria.descricao}
                        onChange={manipularMudanca}
                        placeholder="Digite o nome da categoria aqui"
                    />
                    <Form.Control.Feedback>Correto!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mt-2 mb-2">
                <Col md={1}>
                    <Button variant="link" style={{ textDecoration: "none", color: "#1BFD9C" }} className='telaCad-button' type="submit">
                        {props.modoEdicao ? "Alterar" : "Cadastrar"}
                    </Button>
                </Col>

                <Col md={{ offset: 1 }}>
                    <Button variant="link" style={{ textDecoration: "none", color: "#1BFD9C" }} className='telaCad-button' type="button" onClick={() => {
                        props.setExibirTabela(true);
                        props.setModoEdicao(false);
                        props.setCategoriaSelecionada(categoriaVazia);
                    }}>Voltar</Button>
                </Col>
            </Row>
            <Toaster position="top-center" />
        </Form>
    );
}
