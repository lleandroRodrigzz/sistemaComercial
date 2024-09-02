/*import { useState } from 'react';*/
import { Alert } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

export default function FormCadastroUsuario(props) {
    return (
        <>
            <Alert className='text-center' variant='success' style={{fontSize: "42px"}}>Tela de Cadastro de Fornecedor</Alert>
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCustom01">
                        <Form.Label>Nome de Usuario</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Digite o nome de Usuario aqui"
                        />
                        <Form.Control.Feedback>Correto!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                        <Form.Label>Email</Form.Label>
                        <InputGroup hasValidation>
                            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                            <Form.Control
                                type="text"
                                placeholder="Digite seu email aqui"
                                aria-describedby="inputGroupPrepend"
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Digite um email valido.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="text" placeholder="Digite sua senha aqui" required />
                        <Form.Control.Feedback type="invalid">
                            Digite uma senha valida.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom05">
                        <Form.Label>Tipo de Usuario</Form.Label>
                        <Form.Select as={Col} md="5">
                            <option>Selecione o Tipo de Usuario</option>
                            <option value="1">Administrador</option>
                            <option value="2">Gerente</option>
                            <option value="3">Cliente</option>
                        </Form.Select>
                    </Form.Group>
                </Row>
                <Button variant="outline-success" type="submit">Cadastrar Usuario</Button>
            </Form>
        </>
    )
}