/*import { useState } from 'react';*/
import { Alert } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

export default function FormCadastroCliente(props) {
    return (
        <>
            <Alert className='text-center' variant='primary' style={{fontSize: "42px"}}>Tela de Cadastro de Cliente</Alert>
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Digite seu nome aqui"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label>Sobrenome</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Digite seu sobrenome aqui"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustomUsername">
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
                                Please choose a username.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                        <Form.Label>Cidade</Form.Label>
                        <Form.Control type="text" placeholder="Digite sua cidade aqui" required />
                        <Form.Control.Feedback type="invalid">
                            Digite uma cidade valida.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom04">
                        <Form.Label>Estado</Form.Label>
                        <Form.Control type="text" placeholder="Digite seu estado aqui" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid state.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom05">
                        <Form.Label>CPF</Form.Label>
                        <Form.Control type="text" placeholder="Digite seu CPF aqui" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid zip.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Button variant="outline-primary" type="submit">Cadastrar Cliente</Button>
            </Form>
        </>
    )
}