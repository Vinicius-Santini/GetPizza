import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const PizzaRecomendada = ({ lastStep, pizzaRecomendada }) => {
  const reachFinalizar = (e) => {
    e.preventDefault();
    lastStep();
  };

  const passo = "massa";

  return (
    <>
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
          <h5 className="selectLabel">
            A pizza do dia é: {pizzaRecomendada?.recheio}
          </h5>
        </Row>
        <Row className="justify-content-center mt-3 mb-2">
          <Button variant="info" onClick={reachFinalizar}>
            Pedir
          </Button>
        </Row>
      </Container>
    </>
  );
};

export default PizzaRecomendada;
