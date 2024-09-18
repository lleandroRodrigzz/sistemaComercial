import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';

export default function FormCadastroFornecedor(props) {

    const fornecedorVazio = {
        nome: "",
        categoria: "",
        email: "",
        cidade: "",
        estado: "",
        cnpj: ""
    };

    const [formValidado, setFormValidado] = useState(false);
    const estadoFornecedor = props.fornecedorSelecionado;
    const [fornecedor, setFornecedor] = useState(estadoFornecedor);

    function manipularSubmissao(evento) {
        const form = evento.currentTarget;
        if (form.checkValidity()) {
            if (!props.modoEdicao) {
                props.setListaDeFornecedores([...props.listaDeFornecedores, fornecedor]);
            }
            else {
                props.setListaDeFornecedores([...props.listaDeFornecedores.filter((item) => item.cnpj !== fornecedor.cnpj), fornecedor]);
                props.setModoEdicao(false);
                props.setFornecedorSelecionado(fornecedorVazio);
            }
            props.setExibirTabela(true);
            setFornecedor(fornecedorVazio);
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
        setFornecedor({ ...fornecedor, [elemento]: valor });
        //console.log(`componente: ${elemento} : ${valor}`);
    }

    return (
        <Form validated={formValidado} onSubmit={manipularSubmissao}>
            <Row className="mb-3">
                <Form.Group as={Col} md="4">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control
                        style={{ borderColor: "#999431", /*backgroundColor: "#e8e35f"*/ }}
                        required
                        type="text"
                        id="nome"
                        name="nome"
                        value={fornecedor.nome}
                        onChange={manipularMudanca}
                        placeholder="Digite o nome do fornecedor aqui"
                    />
                    <Form.Control.Feedback type="invalid">Digite o nome!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4">
                    <Form.Label>Categoria</Form.Label>
                    <Form.Control
                        style={{ borderColor: "#999431", /*backgroundColor: "#e8e35f"*/ }}
                        required
                        type="text"
                        id='categoria'
                        name='categoria'
                        value={fornecedor.categoria}
                        onChange={manipularMudanca}
                        placeholder="Digite a categoria aqui"
                    />
                    <Form.Control.Feedback type="invalid">Digite uma categoria!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4">
                    <Form.Label>Email</Form.Label>
                    <InputGroup hasValidation>
                        <InputGroup.Text id="inputGroupPrepend" style={{ borderColor: "#999431", /*backgroundColor: "#e8e35f"*/ }}>@</InputGroup.Text>
                        <Form.Control
                            style={{ borderColor: "#999431", /*backgroundColor: "#e8e35f"*/ }}
                            type="text"
                            id='email'
                            name='email'
                            value={fornecedor.email}
                            onChange={manipularMudanca}
                            placeholder="Digite seu email aqui"
                            aria-describedby="inputGroupPrepend"
                            required
                        />
                        <Form.Control.Feedback type="invalid">Digite um email valido.</Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="4">
                    <Form.Label>Cidade</Form.Label>
                    <Form.Control
                        style={{ borderColor: "#999431", /*backgroundColor: "#e8e35f"*/ }}
                        type="text"
                        id='cidade'
                        name='cidade'
                        value={fornecedor.cidade}
                        onChange={manipularMudanca}
                        placeholder="Digite sua cidade aqui"
                        required
                    />
                    <Form.Control.Feedback type="invalid">Digite uma cidade!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4">
                    <Form.Label>Estado</Form.Label>
                    <Form.Control
                        style={{ borderColor: "#999431", /*backgroundColor: "#e8e35f"*/ }}
                        type="text"
                        id='estado'
                        name='estado'
                        value={fornecedor.estado}
                        onChange={manipularMudanca}
                        placeholder="Digite seu estado aqui"
                        required
                    />
                    <Form.Control.Feedback type="invalid">Forneça um estado!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4">
                {
                    props.modoEdicao ?
                        <fieldset disabled>
                            <Form.Group as={Col}>
                                <Form.Label>CNPJ</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id='cnpj'
                                        name='cnpj'
                                        placeholder="Digite o CNPJ aqui"
                                        value={fornecedor.cnpj}
                                        onChange={manipularMudanca}
                                        required
                                        style={props.modoEdicao ? {
                                            //backgroundColor: "#e8e35f",
                                            borderColor: "#999431",
                                            cursor: 'not-allowed',
                                            opacity: 0.7,
                                            pointerEvents: 'none'
                                        } : {}}
                                    />
                                <Form.Control.Feedback type="invalid">Forneça um CNPJ!</Form.Control.Feedback>
                            </Form.Group>
                        </fieldset> :
                        <Form.Group as={Col}>
                            <Form.Label>CNPJ</Form.Label>
                            <Form.Control
                                style={{ borderColor: "#999431", 
                                    /*backgroundColor: "#e8e35f"*/ }}
                                type="text"
                                id='cnpj'
                                name='cnpj'
                                value={fornecedor.cnpj}
                                onChange={manipularMudanca}
                                placeholder="Digite o CNPJ aqui"
                                required
                            />
                            <Form.Control.Feedback type="invalid">Forneça um CNPJ!</Form.Control.Feedback>
                        </Form.Group>
                }
                </Form.Group>
            </Row>
            <Row className='mt-2 mb-2'>

                <Col md={1}>
                    <Button variant="warning" type="submit">
                        {
                            props.modoEdicao ?
                                "Alterar" :
                                "Cadastrar"
                        }
                    </Button>
                </Col>

                <Col md={{ offset: 1 }}>
                    <Button variant="warning" type="submit" onClick={() => {
                        props.setExibirTabela(true);
                        props.setModoEdicao(false);
                        props.setFornecedorSelecionado(fornecedorVazio);
                    }}>Voltar</Button>
                </Col>
            </Row>
        </Form>
    )
}