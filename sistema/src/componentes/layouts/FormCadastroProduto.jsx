import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

export default function FormCadProdutos(props) {
    return (
        <Form noValidate>
            <Row className="mb-4">
                <Form.Group as={Col} md="4" controlId="codigo">
                    <Form.Label>Código</Form.Label>
                    <Form.Control
                        style={{ backgroundColor: "#f0f8ff", borderColor: "#007bff"}}
                        required
                        type="text"
                        id="codigo"
                        name="codigo"
                        placeholder="Digite o codigo aqui"
                    />
                    <Form.Control.Feedback type='invalid'>Por favor, informe o código do produto!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-4">
                <Form.Group as={Col} md="12" controlId="descricao">
                    <Form.Label>Descrição</Form.Label>
                    <Form.Control
                        style={{ backgroundColor: "#f0f8ff", borderColor: "#007bff", color: "#000" }}
                        required
                        type="text"
                        id="descricao"
                        name="descricao"
                        placeholder="Digite a descrição aqui"
                    />
                    <Form.Control.Feedback type="invalid">Por favor, informe a descrição do produto!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-4">
                <Form.Group as={Col} md="4" controlId="precoCusto">
                    <Form.Label>Preço de Custo:</Form.Label>
                    <InputGroup hasValidation>
                        <InputGroup.Text id="precoCusto" style={{ backgroundColor: "#f0f8ff", borderColor: "#007bff", color: "#000" }}>R$</InputGroup.Text>
                        <Form.Control
                            style={{ backgroundColor: "#f0f8ff", borderColor: "#007bff", color: "#000" }}
                            type="text"
                            id="precoCusto"
                            name="precoCusto"
                            aria-describedby="precoCusto"
                            placeholder="Digite o preço de custo aqui"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor, informe o preço de custo!
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="precoVenda">
                    <Form.Label>Preço de Venda:</Form.Label>
                    <InputGroup hasValidation>
                        <InputGroup.Text id="precoVenda" style={{ backgroundColor: "#f0f8ff", borderColor: "#007bff", color: "#000" }}>R$</InputGroup.Text>
                        <Form.Control
                            style={{ backgroundColor: "#f0f8ff", borderColor: "#007bff", color: "#000" }}
                            type="text"
                            id="precoVenda"
                            name="precoVenda"
                            placeholder="Digite o preço de venda aqui"
                            aria-describedby="precoVenda"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor, informe o preço de venda!
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="qtdEstoque">
                    <Form.Label>Qtd em estoque:</Form.Label>
                    <InputGroup hasValidation>
                        <InputGroup.Text id="qtdEstoque" style={{ backgroundColor: "#f0f8ff", borderColor: "#007bff", color: "#000" }}>+</InputGroup.Text>
                        <Form.Control
                            style={{ backgroundColor: "#f0f8ff", borderColor: "#007bff", color: "#000" }}
                            type="text"
                            id="qtdEstoque"
                            name="qtdEstoque"
                            placeholder="Digite a quantidade de estoque aqui"
                            aria-describedby="qtdEstoque"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor, informe a quantidade em estoque!
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
            </Row>
            <Row className="mb-4">
                <Form.Group as={Col} md="12" controlId="urlImagem">
                    <Form.Label>Url da imagem:</Form.Label>
                    <Form.Control
                        style={{ backgroundColor: "#f0f8ff", borderColor: "#007bff", color: "#000" }}
                        required
                        type="text"
                        id="urlImagem"
                        placeholder="Cole o url aqui"
                        name="urlImagem"
                    />
                    <Form.Control.Feedback type="invalid">Por favor, informe a url da imagem do produto!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-4">
                <Form.Group as={Col} md="12" controlId="dataValidade">
                    <Form.Label>Válido até:</Form.Label>
                    <Form.Control
                        style={{ backgroundColor: "#f0f8ff", borderColor: "#007bff", color: "#000" }}
                        required
                        type="text"
                        id="dataValidade"
                        placeholder="XX/XX/XXXX"
                        name="dataValidade"
                    />
                    <Form.Control.Feedback type="invalid">Por favor, informe a data de validade do produto!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className='mt-2 mb-2'>

                <Col md={1}>
                    <Button variant="info" type="submit">Cadastrar</Button>
                </Col>

                <Col md={{ offset: 1 }}>
                    <Button variant="info" type="submit" onClick={() => {
                        props.setExibirTabela(true);
                    }}>Voltar</Button>
                </Col>
            </Row>
        </Form>

    );
}