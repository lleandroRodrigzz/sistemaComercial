import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { contextoUsuario } from "../../App";
import logo from "../../assets/imagens/iconeLeandroM.png";

export default function Menu(props) {
    const { usuario, setUsuario } = useContext(contextoUsuario);

    return (
        <Navbar expand="lg" className="navbar-custom">
            <Container>
                <Navbar.Brand href="#" as={Link} to='/home'>{<img src={logo} alt="logoLeandro" style={{width:"4.5rem", height:"4rem"}}/>}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Cadastros" id="basic-nav-dropdown">
                            <NavDropdown.Item href='#' as={Link} to='/produto'>Produtos</NavDropdown.Item>
                            <NavDropdown.Item href='#' as={Link} to='/categoria'>Categorias</NavDropdown.Item>
                            <NavDropdown.Item href='#' as={Link} to='/usuario'>Usuários</NavDropdown.Item>
                            <NavDropdown.Item href='#' as={Link} to='/cliente'>Clientes</NavDropdown.Item>
                            <NavDropdown.Item href='#' as={Link} to='/fornecedor'>Fornecedores</NavDropdown.Item>
                            <NavDropdown.Item href='#' as={Link} to='/entregador'>Entregadores (Dados "Mockados")</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Operações" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#" as={Link} to='*'>Compras</NavDropdown.Item>
                            <NavDropdown.Item href="#" as={Link} to='*'>Vendas</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Relatórios" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#" as={Link} to='*'>Clientes</NavDropdown.Item>
                            <NavDropdown.Item href="#" as={Link} to='*'>Fornecedores</NavDropdown.Item>
                            <NavDropdown.Item href="#" as={Link} to='*'>Estoque</NavDropdown.Item>
                            <NavDropdown.Item href="#" as={Link} to='*'>Vendas</NavDropdown.Item>
                            <NavDropdown.Item href="#" as={Link} to='*'>Compras</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#" as={Link} to='/sobre'>Sobre</Nav.Link>
                        <Nav.Link
                            as={Link}
                            className="logout" // Classe personalizada para "Sair"
                            onClick={() => {
                                setUsuario({
                                    "usuario": "",
                                    "logado": false
                                });
                            }}
                        >
                            Sair
                        </Nav.Link>
                        <Nav.Link className="welcome-text">
                            Bem-Vindo {usuario.usuario + " :)"}
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}