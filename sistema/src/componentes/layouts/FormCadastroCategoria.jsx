import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';

export default function FormCadastroCategoria(props) {

    const categoriaVazia = {
        id: 0,
        nomeCat: "",
        tipo: ""
    }

    const [formValidado, setFormValidado] = useState(false);
    const estadoCategoria = props.categoriaSelecionada;
    const [categoria, setCategoria] = useState(estadoCategoria);

    function manipularSubmissao(evento) {
        const form = evento.currentTarget;
        if (form.checkValidity()) {
            if (!props.modoEdicao) {
                props.setListaDeCategorias([...props.listaDeCategorias, categoria]);
            } else {
                props.setListaDeCategorias([...props.listaDeCategorias.filter((item) => item.id !== categoria.id), categoria]);
                props.setModoEdicao(false);
                props.setCategoriaSelecionada(categoriaVazia);
            }
            props.setExibirTabela(true);
            setCategoria(categoriaVazia);
            setFormValidado(false);
        } else {
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
                                    required
                                    type="number"
                                    id='id'
                                    name='id'
                                    value={categoria.id}
                                    onChange={manipularMudanca}
                                    placeholder="Digite o ID da categoria"
                                />
                                <Form.Control.Feedback>Correto!</Form.Control.Feedback>
                            </fieldset> :
                            <>
                                <Form.Label>ID da Categoria</Form.Label>
                                <Form.Control
                                    required
                                    type="number"
                                    id='id'
                                    name='id'
                                    value={categoria.id}
                                    onChange={manipularMudanca}
                                    placeholder="Digite o ID da categoria"
                                />
                                <Form.Control.Feedback>Correto!</Form.Control.Feedback>
                            </>
                    }
                </Form.Group>
                <Form.Group as={Col} md="6">
                    <Form.Label>Nome da Categoria</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        id='nomeCat'
                        name='nomeCat'
                        value={categoria.nomeCat}
                        onChange={manipularMudanca}
                        placeholder="Digite o nome da categoria aqui"
                    />
                    <Form.Control.Feedback>Correto!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="6">
                    <Form.Label>Tipo de Categoria</Form.Label>
                    <Form.Select
                        id='tipo'
                        name='tipo'
                        value={categoria.tipo}
                        onChange={manipularMudanca}
                        required
                    >
                        <option selected disabled>Selecione o Tipo de Categoria</option>
                        <option value="Alimenticio">Alimenticio</option>
                        <option value="Mecanico">Mecanico</option>
                        <option value="Tecnologia">Tecnologia</option>
                        <option value="Educação">Educação</option>
                        <option value="Vestuario">Vestuario</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">Selecione um tipo de categoria válido.</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mt-2 mb-2">
                <Col md={1}>
                    <Button variant="danger" type="submit">
                        {props.modoEdicao ? "Alterar" : "Cadastrar"}
                    </Button>
                </Col>

                <Col md={{ offset: 1 }}>
                    <Button variant="danger" type="button" onClick={() => {
                        props.setExibirTabela(true);
                        props.setModoEdicao(false);
                        props.setCategoriaSelecionada(categoriaVazia);
                    }}>Voltar</Button>
                </Col>
            </Row>
        </Form>
    );
}
