import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';

export default function FormCadastroUsuario(props) {

    const usuarioVazio = {
        nomeUsuario: "",
        emailUsuario: "",
        senhaUsuario: "",
        tipoUsuario: ""
    }

    const [formValidado, setFormValidado] = useState(false);
    const estadoUsuario = props.usuarioSelecionado;
    const [usuario, setUsuario] = useState(estadoUsuario);
    const [senhaVisivel, setSenhaVisivel] = useState(false); // Estado para alternar entre ver/ocultar a senha

    function manipularSubmissao(evento) {
        const form = evento.currentTarget;
        if (form.checkValidity()) {
            if (!props.modoEdicao) {
                props.setListaDeUsuarios([...props.listaDeUsuarios, usuario]);
            }
            else {
                props.setListaDeUsuarios([...props.listaDeUsuarios.filter((item) => item.emailUsuario !== usuario.emailUsuario), usuario]);
                props.setModoEdicao(false);
                props.setUsuarioSelecionado(usuarioVazio);
            }
            props.setExibirTabela(true);
            setUsuario(usuarioVazio);
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
        setUsuario({ ...usuario, [elemento]: valor });
        //console.log(`componente: ${elemento} : ${valor}`);
    }

    return (
        <Form validated={formValidado} onSubmit={manipularSubmissao}>
            <Row className="mb-3">
                <Form.Group as={Col} md="6">
                    <Form.Label>Nome de Usuario</Form.Label>
                    <Form.Control
                        style={{ borderColor: "#175c27", /*backgroundColor: "#95e88b"*/ }}
                        required
                        id='nomeUsuario'
                        name='nomeUsuario'
                        value={usuario.nomeUsuario}
                        onChange={manipularMudanca}
                        type="text"
                        placeholder="Digite o nome de Usuario aqui"
                    />
                    <Form.Control.Feedback>Correto!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6">
                    {
                        props.modoEdicao ?
                            <fieldset disabled>
                                <Form.Group as={Col}>
                                    <Form.Label>Email</Form.Label>
                                    <InputGroup hasValidation>
                                        <InputGroup.Text id="inputGroupPrepend" style={{ borderColor: "#175c27", /*backgroundColor: "#95e88b"*/ }}>@</InputGroup.Text>
                                        <Form.Control
                                            type="text"
                                            placeholder="Digite seu email aqui"
                                            id='emailUsuario'
                                            name='emailUsuario'
                                            value={usuario.emailUsuario}
                                            onChange={manipularMudanca}
                                            aria-describedby="inputGroupPrepend"
                                            required
                                            style={props.modoEdicao ? {
                                                borderColor: "#175c27",
                                                /*backgroundColor: '#95e88b'*/
                                                cursor: 'not-allowed',
                                                opacity: 0.7,
                                                pointerEvents: 'none'
                                            } : {}}
                                        />
                                        <Form.Control.Feedback type="invalid">Digite um email valido.</Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                            </fieldset> :

                            <Form.Group as={Col}>
                                <Form.Label>Email</Form.Label>
                                <InputGroup hasValidation>
                                    <InputGroup.Text id="inputGroupPrepend" style={{ borderColor: "#175c27", /*backgroundColor: "#95e88b"*/ }}>@</InputGroup.Text>
                                    <Form.Control
                                        style={{ borderColor: "#175c27", /*backgroundColor: "#95e88b"*/ }}
                                        type="text"
                                        placeholder="Digite seu email aqui"
                                        id='emailUsuario'
                                        name='emailUsuario'
                                        value={usuario.emailUsuario}
                                        onChange={manipularMudanca}
                                        aria-describedby="inputGroupPrepend"
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">Digite um email valido.</Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                    }
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="6">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control
                        style={{ borderColor: "#175c27", /*backgroundColor: "#95e88b"*/ }}
                        type={senhaVisivel ? "text" : "password"} // Altera entre password e text
                        placeholder="Digite sua senha aqui"
                        id='senhaUsuario'
                        name='senhaUsuario'
                        value={usuario.senhaUsuario}
                        onChange={manipularMudanca}
                        required
                    />
                    <Form.Control.Feedback type="invalid">Digite uma senha valida.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6">
                    <Form.Label>Tipo de Usuario</Form.Label>
                    <Form.Select
                        style={{ borderColor: "#175c27" }}
                        id='tipoUsuario'
                        name='tipoUsuario'
                        value={usuario.tipoUsuario}
                        onChange={manipularMudanca}
                        required
                    >
                        <option disabled value="">Selecione o Tipo de Usuario</option>
                        <option value="Administrador">Administrador</option>
                        <option value="Comum">Comum</option>
                        <option value="Convidado">Convidado</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">Selecione um tipo de usuário válido.</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className='mt-2 mb-2'>

                <Col md={1}>
                    <Button variant="success" type="submit">
                        {
                            props.modoEdicao ?
                                "Alterar" :
                                "Cadastrar"
                        }
                    </Button>
                </Col>

                <Col md={1}>
                    <Button variant="success" type="submit" onClick={() => {
                        props.setExibirTabela(true);
                        props.setModoEdicao(false);
                        props.setUsuarioSelecionado(usuarioVazio);
                    }}>Voltar</Button>
                </Col>

                <Col md={{ offset: 0 }}>
                    <Button
                        variant="outline-success"
                        onClick={() => setSenhaVisivel(!senhaVisivel)} // Alterna a visibilidade
                    >
                        {senhaVisivel ? "Ocultar Senha" : "Mostrar Senha"}
                    </Button>
                </Col>
            </Row>
        </Form>
    )
}