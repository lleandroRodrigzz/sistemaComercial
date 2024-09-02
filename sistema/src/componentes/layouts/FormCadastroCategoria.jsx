/*import { useState } from 'react';*/
import { Alert } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
/*import InputGroup from 'react-bootstrap/InputGroup';*/
import Row from 'react-bootstrap/Row';

export default function FormCadastroCategoria(props) {
    return (
        <>
            <Alert className='text-center' variant='danger' style={{fontSize: "42px"}}>Tela de Cadastro de Categoria</Alert>
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCustom01">
                        <Form.Label>Nome da Categoria</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Digite o nome da categoria aqui"
                        />
                        <Form.Control.Feedback>Correto!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom05">
                        <Form.Label>Tipo de Categoria</Form.Label>
                        <Form.Select as={Col} md="5">
                            <option>Selecione o Tipo de Categoria</option>
                            <option value="1">Alimenticio</option>
                            <option value="2">Mecanica</option>
                            <option value="3">Materiais de Construção</option>
                        </Form.Select>
                    </Form.Group>
                </Row>
                <Button variant="outline-danger" type="submit">Cadastrar Categoria</Button>
            </Form>
        </>
    )
}