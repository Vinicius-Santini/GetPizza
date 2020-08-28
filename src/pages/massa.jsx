import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PizzaForm from "../components/form/PizzaForm.jsx";

const Massa = ({ listaMassas, nextStep, lastStep, handleChange, values }) => {
  const continuar = (e) => {
    e.preventDefault();
    nextStep();
  };

  const final = (e) => {
    e.preventDefault();
    lastStep();
  };

  const passo = "massa";

  return (
    <>
      <Container className="orderContainer">
        <Row className="d-flex justify-content-center">
          <h2 className="titles">Monte a sua pizza</h2>
        </Row>
        <Row>
          <Col>
            <PizzaForm
              lista={listaMassas}
              handleChange={handleChange}
              passo={passo}
            />
          </Col>
        </Row>
        <Row className="firstStepRow">
          <Button variant="info" onClick={continuar}>
            Próximo
          </Button>
        </Row>
      </Container>
      <div className="d-flex justify-content-center mt-4">
        <h3 className="titles">Ou você pode...</h3>
      </div>
      <Container className="orderContainer d-flex flex-column">
        <Row className="justify-content-center">
          <h2 className="titles">Pedir a pizza do dia</h2>
        </Row>
        <Row className="justify-content-center mt-2 pizzaDayText">
          <p className="pizzaDayText">
            Pedindo a nossa pizza do dia você ganha pontos do GetPizza! Você
            pode juntar estes ponto e troca-los por uma pizza do dia!
          </p>
        </Row>
        <Row className="justify-content-center mt-2 pizzaDayText">
          <p className="pizzaDayText">
            A pizza do dia é de tamanho médio e de massa do tipo pan.
          </p>
        </Row>
        <Row className="justify-content-center mt-1 ">
          <h5 className="selectLabel">A pizza do dia é: Frango</h5>
        </Row>
        <Row className="justify-content-center mt-3 mb-2">
          <Button variant="warning" onClick={final}>
            Pedir
          </Button>
        </Row>
      </Container>
    </>
  );
};

export default Massa;
