import { Container, Form, Button } from "react-bootstrap";
import { contextoUsuario } from "../../App";
import { useContext, useRef } from "react";

export default function TelaLogin() {
    const nomeUsuario = useRef();
    const senhaUsuario = useRef();
    const {usuario, setUsuario} = useContext(contextoUsuario);

    function manipularSubmissao(evento){
        const usuarioDigitado = nomeUsuario.current.value;
        const senhaDigitada = senhaUsuario.current.value;
        if(usuarioDigitado === 'admin' && senhaDigitada === 'admin'){
            setUsuario({
                "usuario": usuarioDigitado,
                "logado": true
            });
        }
        evento.preventDefault();
        evento.stopPropagation();
    }

    return (
        <Container className="w-25 border p-2" style={{marginTop:"15%"}}>
            <Form onSubmit={manipularSubmissao}>
                <Form.Group className="mb-3">
                    <Form.Label>Usuario:</Form.Label>
                    <Form.Control id="usuario" name="usuario" type="text" placeholder="Informe o usuario" ref={nomeUsuario}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control id="senha" name="senha" type="password" placeholder="Digite sua senha" ref={senhaUsuario}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </Container>
    );
}