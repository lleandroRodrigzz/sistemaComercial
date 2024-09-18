import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';

export default function FormCadastroCliente(props) {

    const clienteVazio = {
        nome: "",
        email: "",
        cidade: "",
        estado: "",
        cpf: ""
    };

    const [formValidado, setFormValidado] = useState(false);
    const estadoCliente = props.clienteSelecionado;
    const [cliente, setCliente] = useState(estadoCliente);

    function manipularSubmissao(evento) {
        const form = evento.currentTarget;
        if (form.checkValidity()) {
            if (!props.modoEdicao) {
                props.setListaDeClientes([...props.listaDeClientes, cliente]);
            }
            else {
                props.setListaDeClientes([...props.listaDeClientes.filter((item) => item.cpf !== cliente.cpf), cliente]);
                props.setModoEdicao(false);
                props.setClienteSelecionado(clienteVazio);
            }
            props.setExibirTabela(true);
            setCliente(clienteVazio);
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
        setCliente({ ...cliente, [elemento]: valor });
        //console.log(`componente: ${elemento} : ${valor}`);
    }

    return (
        <Form validated={formValidado} onSubmit={manipularSubmissao}>
            <Row className="mb-3">
                <Form.Group as={Col} md="6">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control
                        style={{ borderColor: "#0B2CA1", /*backgroundColor: "#f0f8ff"*/ }}
                        required
                        type="text"
                        id="nome"
                        name='nome'
                        value={cliente.nome}
                        onChange={manipularMudanca}
                        placeholder="Digite seu nome aqui"
                    />
                    <Form.Control.Feedback type="invalid">Digite o nome!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6">
                    <Form.Label>Email</Form.Label>
                    <InputGroup hasValidation>
                        <InputGroup.Text id="inputGroupPrepend" style={{ borderColor: "#0B2CA1" }}>@</InputGroup.Text>
                        <Form.Control
                            style={{ borderColor: "#0B2CA1", /*backgroundColor: "#f0f8ff"*/ }}
                            type="text"
                            id="email"
                            name='email'
                            placeholder="Digite seu email aqui"
                            aria-describedby="inputGroupPrepend"
                            required
                            value={cliente.email}
                            onChange={manipularMudanca}
                        />
                        <Form.Control.Feedback type="invalid">Por favor, digite um email!</Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="6">
                    <Form.Label>Cidade</Form.Label>
                    <Form.Control
                        style={{ borderColor: "#0B2CA1", /*backgroundColor: "#f0f8ff"*/ }}
                        type="text"
                        id="cidade"
                        name='cidade'
                        placeholder="Digite sua cidade aqui"
                        required
                        value={cliente.cidade}
                        onChange={manipularMudanca}
                    />
                    <Form.Control.Feedback type="invalid">Digite uma cidade valida.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3">
                    <Form.Label>Estado</Form.Label>
                    <Form.Control
                        style={{ borderColor: "#0B2CA1", /*backgroundColor: "#f0f8ff"*/ }}
                        type="text"
                        id="estado"
                        name="estado"
                        placeholder="Digite seu estado aqui"
                        required
                        value={cliente.estado}
                        onChange={manipularMudanca}
                    />
                    <Form.Control.Feedback type="invalid">Por favor, digite um estado!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3">
                    {
                        props.modoEdicao ?
                            <fieldset disabled>
                                <Form.Group as={Col}>
                                    <Form.Label>CPF</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Digite seu CPF aqui"
                                        id="cpf"
                                        name='cpf'
                                        required
                                        value={cliente.cpf}
                                        onChange={manipularMudanca}
                                        style={props.modoEdicao ? {
                                            /*backgroundColor: "#f0f8ff",*/
                                            borderColor: "#0B2CA1",
                                            cursor: 'not-allowed',
                                            opacity: 0.7,
                                            pointerEvents: 'none'
                                        } : {}}
                                    />
                                    <Form.Control.Feedback type="invalid">Digite um CPF valido</Form.Control.Feedback>
                                </Form.Group>
                            </fieldset> :
                            <Form.Group as={Col}>
                                <Form.Label>CPF</Form.Label>
                                <Form.Control
                                    style={{ borderColor: "#0B2CA1", /*backgroundColor: "#f0f8ff"*/ }}
                                    type="text"
                                    id="cpf"
                                    name='cpf'
                                    placeholder="Digite seu CPF aqui"
                                    required
                                    value={cliente.cpf}
                                    onChange={manipularMudanca}
                                />
                                <Form.Control.Feedback type="invalid">Digite um CPF!</Form.Control.Feedback>
                            </Form.Group>
                    }
                </Form.Group>
            </Row>
            <Row className='mt-2 mb-2'>

                <Col md={1}>
                    <Button variant="primary" type="submit">
                        {
                            props.modoEdicao ?
                                "Alterar" :
                                "Cadastrar"
                        }
                    </Button>
                </Col>

                <Col md={{ offset: 1 }}>
                    <Button variant="primary" type="submit" onClick={() => {
                        props.setExibirTabela(true);
                        props.setModoEdicao(false);
                        props.setClienteSelecionado(clienteVazio);
                    }}>Voltar</Button>
                </Col>
            </Row>
        </Form>
    )
}