import { Container, Form, Button } from "react-bootstrap";
import { contextoUsuario } from "../../App";
import { useContext, useRef } from "react";

export default function TelaLogin() {
    const nomeUsuario = useRef();
    const senhaUsuario = useRef();
    const { usuario, setUsuario } = useContext(contextoUsuario);

    function manipularSubmissao(evento) {
        const usuarioDigitado = nomeUsuario.current.value;
        const senhaDigitada = senhaUsuario.current.value;
        if (usuarioDigitado === 'admin' && senhaDigitada === 'admin') {
            setUsuario({
                "usuario": usuarioDigitado,
                "logado": true
            });
        }
        evento.preventDefault();
        evento.stopPropagation();
    }

    return (
        <Container fluid className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: "#212121" }}>
            <Container className="w-25" style={{
                padding: "1%",
                backgroundColor: "black",
                border: "2px solid #1BFD9C", // Adiciona uma borda de 2px para torná-la visível
                borderColor: "#1BFD9C", // Define a cor da borda
                borderRadius: "10px",
                color: "white"
            }}>
                <h1 style={{textAlign:"center", color: "#1BFD9C"}}>{"ACME</System>"}</h1>
                <Form onSubmit={manipularSubmissao}>
                    <Form.Group className="mb-3">
                        <Form.Label style={{color:"#1BFD9C"}}>Usuario:</Form.Label>
                        <Form.Control id="usuario" name="usuario" type="text" placeholder="Informe o usuario" 
                        ref={nomeUsuario} className="custom-placeholder" style={{borderColor:"#4f4f4f" ,
                                                                                 backgroundColor:"#212121", 
                                                                                 color: "#1BFD9C"
                                                                                }}/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label style={{color:"#1BFD9C"}}>Senha:</Form.Label>
                        <Form.Control id="senha" name="senha" type="password" placeholder="Digite sua senha" 
                        ref={senhaUsuario} className="custom-placeholder" style={{borderColor:"#4f4f4f",
                                                                                  backgroundColor:"#212121", 
                                                                                  color: "#1BFD9C"
                                                                                }}/>
                    </Form.Group>
                    <Button variant="link" type="submit" className="login-button" style={{ textDecoration: "none", color: "#1BFD9C" }}>
                        Login
                    </Button>
                </Form>
            </Container>
        </Container>
    );
}