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
                                        <InputGroup.Text style={{ borderColor: "#175c27", /*backgroundColor: "#95e88b"*/ }}>@</InputGroup.Text>
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
                    <InputGroup hasValidation>
                        <InputGroup.Text style={{ borderColor: "#175c27", /*backgroundColor: "#95e88b"*/ }}>
                            <Col>
                                <Button
                                    variant="outline-success"
                                    onClick={() => setSenhaVisivel(!senhaVisivel)} // Alterna a visibilidade
                                >
                                    {senhaVisivel ?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" fill="currentColor" class="bi bi-eye-slash-fill" viewBox="0 0 16 16">
                                            <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7 7 0 0 0 2.79-.588M5.21 3.088A7 7 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474z" />
                                            <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12z" />
                                        </svg> :
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                                        </svg>}
                                </Button>
                            </Col>
                        </InputGroup.Text>
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
                    </InputGroup>
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

                <Col md={2}>
                    <Button variant="success" type="submit">
                        {
                            props.modoEdicao ?
                                "Alterar" :
                                "Cadastrar"
                        }
                    </Button>
                </Col>

                <Col md={2}>
                    <Button variant="success" type="submit" onClick={() => {
                        props.setExibirTabela(true);
                        props.setModoEdicao(false);
                        props.setUsuarioSelecionado(usuarioVazio);
                    }}>Voltar</Button>
                </Col>
            </Row>
        </Form>
    )
}