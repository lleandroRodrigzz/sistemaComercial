import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

export default function FormCadastroFornecedor(props) {
    return (
        <>
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Digite o nome do fornecedor aqui"
                        />
                        <Form.Control.Feedback>Correto!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label>Categoria</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Digite a categoria aqui"
                        />
                        <Form.Control.Feedback>Correto!</Form.Control.Feedback>
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
                                Digite um email valido.
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
                            Forneça um estado valido.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom05">
                        <Form.Label>CNPJ</Form.Label>
                        <Form.Control type="text" placeholder="Digite o CNPJ aqui" required />
                        <Form.Control.Feedback type="invalid">
                            Forneça um CNPJ valido.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Button variant="outline-warning" type="submit">Cadastrar Fornecedor</Button>
            </Form>
        </>
    )
}