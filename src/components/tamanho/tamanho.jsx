import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PizzaForm from "../pizza-form/pizzaform.jsx";

const Tamanho = ({
  selected,
  listaTamanhos,
  nextStep,
  prevStep,
  handleChange,
  values,
}) => {
  const continuar = (e) => {
    e.preventDefault();
    nextStep();
  };
  const voltar = (e) => {
    e.preventDefault();
    prevStep();
  };

  const passo = "tamanho";

  return (
    <>
      <Container className="orderContainer">
        <Row>
          <Col>
            <PizzaForm
              selected={selected}
              lista={listaTamanhos}
              handleChange={handleChange}
              passo={passo}
            />
          </Col>
        </Row>
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

export default Tamanho;
