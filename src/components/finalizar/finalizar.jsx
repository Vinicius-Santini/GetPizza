import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Finalizar = ({ nextStep, prevStep, values }) => {
  const continuar = (e) => {
    e.preventDefault();
    nextStep();
  };
  const voltar = (e) => {
    e.preventDefault();
    prevStep();
  };
  return (
    <>
      <Container className="orderContainer">
        <Form>
          <Form.Group>
            <h3 className="titles">Confira seu pedido!</h3>
            <Form.Label className="selectLabel">Massa:</Form.Label>
            <Form.Control
              value={values.massa}
              readOnly
              className="font-weight-bold"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className="selectLabel">Recheio:</Form.Label>
            <Form.Control
              value={values.recheio}
              readOnly
              className="font-weight-bold"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className="selectLabel">Tamanho:</Form.Label>
            <Form.Control
              value={values.tamanho}
              readOnly
              className="font-weight-bold"
            />
          </Form.Group>
        </Form>
        <Row className="stepsRow">
          <Button variant="danger" onClick={voltar} className="voltarButton">
            Voltar
          </Button>
          <Button variant="info" onClick={continuar} className="proximoButton">
            Próximo
          </Button>
        </Row>
      </Container>
    </>
  );
};

export default Finalizar;
