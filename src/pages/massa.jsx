import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PizzaForm from "../components/form/PizzaForm.jsx";
import Image from "react-bootstrap/Image";
import ImagemMassa from "../massa-pizza.png";

const Massa = ({ listaMassas, nextStep, handleChange, values }) => {
  const continuar = (e) => {
    e.preventDefault();
    nextStep();
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
      <div className="d-flex justify-content-center">
        <h2 className="titles">Você também pode:</h2>
      </div>
      <Container className="orderContainer"></Container>
    </>
  );
};

export default Massa;
