import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

export default function FormCadastroUsuario(props) {
    return (
        <>
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCustom01">
                        <Form.Label>Nome de Usuario</Form.Label>
                        <Form.Control
                            style={{ borderColor: "#175c27" }}
                            required
                            type="text"
                            placeholder="Digite o nome de Usuario aqui"
                        />
                        <Form.Control.Feedback>Correto!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                        <Form.Label>Email</Form.Label>
                        <InputGroup hasValidation>
                            <InputGroup.Text id="inputGroupPrepend" style={{ borderColor: "#175c27" }}>@</InputGroup.Text>
                            <Form.Control
                                style={{ borderColor: "#175c27" }}
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
                        <Form.Control
                            style={{ borderColor: "#175c27" }}
                            type="text"
                            placeholder="Digite sua senha aqui"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Digite uma senha valida.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom05">
                        <Form.Label>Tipo de Usuario</Form.Label>
                        <Form.Select as={Col} md="5" style={{ borderColor: "#175c27" }}>
                            <option disabled>Selecione o Tipo de Usuario</option>
                            <option value="1">Administrador</option>
                            <option value="2">Comum</option>
                            <option value="3">Convidado</option>
                        </Form.Select>
                    </Form.Group>
                </Row>
                <Row className='mt-2 mb-2'>

                    <Col md={1}>
                        <Button variant="success" type="submit">Cadastrar</Button>
                    </Col>

                    <Col md={{ offset: 1 }}>
                        <Button variant="success" type="submit" onClick={() => {
                            props.setExibirTabela(true);
                        }}>Voltar</Button>
                    </Col>
                </Row>
            </Form>
        </>
    )
}