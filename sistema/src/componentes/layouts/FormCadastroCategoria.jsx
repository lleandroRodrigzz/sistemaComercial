import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function FormCadastroCategoria(props) {
    return (
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
            <Row className='mt-2 mb-2'>

                <Col md={1}>
                <Button variant="danger" type="submit">Cadastrar</Button>
                </Col>

                <Col md={{offset:1}}>
                <Button variant="danger" type="submit" onClick={() => {
                    props.setExibirTabela(true);
                }}>Voltar</Button>
                </Col>
            </Row>
        </Form>
    )
}