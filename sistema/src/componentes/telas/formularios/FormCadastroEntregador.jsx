import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';

export default function FormCadastroCliente(props) {

    const entregadorVazio = {
        id: "",
        nome: "",
        cnh: "",
        fotoCnh: "",
        veiculo: "",
        placaV: "",
        capacidadeMax: ""
    };

    const [formValidado, setFormValidado] = useState(false);
    const estadoEntregador = props.entregadorSelecionado;
    const [entregador, setEntregador] = useState(estadoEntregador);

    function manipularSubmissao(evento) {
        const form = evento.currentTarget;
        if (form.checkValidity()) {
            if (!props.modoEdicao) {
                props.setListaDeEntregadores([...props.listaDeEntregadores, entregador]);
            }
            else {
                props.setListaDeEntregadores([...props.listaDeEntregadores.filter((item) => item.cnh !== entregador.cnh), entregador]);
                props.setModoEdicao(false);
                props.setEntregadorSelecionado(entregadorVazio);
            }
            props.setExibirTabela(true);
            setEntregador(entregadorVazio);
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
        setEntregador({ ...entregador, [elemento]: valor });
        //console.log(`componente: ${elemento} : ${valor}`);
    }

    return (
        <Form validated={formValidado} onSubmit={manipularSubmissao}>
            <Row className="mb-3">
                <Form.Group as={Col} md="6">
                    {
                        props.modoEdicao ?
                            <fieldset disabled>
                                <Form.Group as={Col}>
                                    <Form.Label>ID</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        id="id"
                                        name='id'
                                        value={entregador.id}
                                        onChange={manipularMudanca}
                                        placeholder="Digite o ID do entregador aqui"
                                        style={props.modoEdicao ? {
                                            /*backgroundColor: "#f0f8ff",*/
                                            borderColor: "black",
                                            cursor: 'not-allowed',
                                            opacity: 0.7,
                                            pointerEvents: 'none'
                                        } : {}}
                                    />
                                    <Form.Control.Feedback type="invalid">Digite o ID!</Form.Control.Feedback>
                                </Form.Group>
                            </fieldset> :
                            <Form.Group as={Col}>
                                <Form.Label>ID</Form.Label>
                                <Form.Control
                                    style={{ borderColor: "black", /*backgroundColor: "#f0f8ff"*/ }}
                                    required
                                    type="text"
                                    id="id"
                                    name='id'
                                    value={entregador.id}
                                    onChange={manipularMudanca}
                                    placeholder="Digite o ID do entregador aqui"
                                />
                                <Form.Control.Feedback type="invalid">Digite o ID!</Form.Control.Feedback>
                            </Form.Group>
                    }
                </Form.Group>
                <Form.Group as={Col} md="6">
                    <Form.Label>Nome</Form.Label>
                    <InputGroup hasValidation>
                        <Form.Control
                            style={{ borderColor: "black", /*backgroundColor: "#f0f8ff"*/ }}
                            type="text"
                            id="nome"
                            name='nome'
                            placeholder="Digite o nome do entregador aqui"
                            required
                            value={entregador.nome}
                            onChange={manipularMudanca}
                        />
                        <Form.Control.Feedback type="invalid">Por favor, digite o nome!</Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="6">
                    <Form.Label>N° da CNH</Form.Label>
                    <Form.Control
                        style={{ borderColor: "black", /*backgroundColor: "#f0f8ff"*/ }}
                        type="text"
                        id="cnh"
                        name='cnh'
                        placeholder="Digite a CNH do entregador aqui"
                        required
                        value={entregador.cnh}
                        onChange={manipularMudanca}
                    />
                    <Form.Control.Feedback type="invalid">Digite uma CNH valida.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6">
                    <Form.Label>Foto da CNH</Form.Label>
                    <Form.Control
                        style={{ borderColor: "black", /*backgroundColor: "#f0f8ff"*/ }}
                        type="text"
                        id="fotoCnh"
                        name="fotoCnh"
                        placeholder="Cole o link da foto do CNH aqui"
                        required
                        value={entregador.fotoCnh}
                        onChange={manipularMudanca}
                    />
                    <Form.Control.Feedback type="invalid">Por favor, cole o link da foto!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4">
                    <Form.Group as={Col}>
                        <Form.Label>Veiculo</Form.Label>
                        <Form.Control
                            style={{ borderColor: "black", /*backgroundColor: "#f0f8ff"*/ }}
                            type="text"
                            id="veiculo"
                            name='veiculo'
                            placeholder="Digite o tipo do veiculo aqui"
                            required
                            value={entregador.veiculo}
                            onChange={manipularMudanca}
                        />
                        <Form.Control.Feedback type="invalid">Digite um tipo de veiculo!</Form.Control.Feedback>
                    </Form.Group>
                </Form.Group>
                <Form.Group as={Col} md="4">
                    <Form.Group as={Col}>
                        <Form.Label>Placa do Veiculo</Form.Label>
                        <Form.Control
                            style={{ borderColor: "black", /*backgroundColor: "#f0f8ff"*/ }}
                            type="text"
                            id="placaV"
                            name='placaV'
                            placeholder="ABC-1234 | ABC1D23"
                            required
                            value={entregador.placaV}
                            onChange={manipularMudanca}
                        />
                        <Form.Control.Feedback type="invalid">Digite a placa do veiculo!</Form.Control.Feedback>
                    </Form.Group>
                </Form.Group>
                <Form.Group as={Col} md="4">
                    <Form.Group as={Col}>
                        <Form.Label>Capacidade Maxima KG</Form.Label>
                        <Form.Control
                            style={{ borderColor: "black", /*backgroundColor: "#f0f8ff"*/ }}
                            type="text"
                            id="capacidadeMax"
                            name='capacidadeMax'
                            placeholder="Digite o peso da capacidade do veiculo aqui"
                            required
                            value={entregador.capacidadeMax}
                            onChange={manipularMudanca}
                        />
                        <Form.Control.Feedback type="invalid">Digite a capacidade maxima!</Form.Control.Feedback>
                    </Form.Group>
                </Form.Group>
            </Row>
            <Row className='mt-2 mb-2'>

                <Col md={1}>
                    <Button variant="secondary" type="submit" style={{ borderColor: 'black' }}>
                        {
                            props.modoEdicao ?
                                "Alterar" :
                                "Cadastrar"
                        }
                    </Button>
                </Col>

                <Col md={{ offset: 1 }}>
                    <Button variant="secondary" type="submit" style={{ borderColor: 'black' }} onClick={() => {
                        props.setExibirTabela(true);
                        props.setModoEdicao(false);
                        props.setEntregadorSelecionado(entregadorVazio);
                    }}>Voltar</Button>
                </Col>
            </Row>
        </Form>
    )
}