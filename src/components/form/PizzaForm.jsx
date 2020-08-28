import React from "react";
import Form from "react-bootstrap/Form";

const PizzaForm = ({ lista, passo, handleChange }) => {
  return (
    <>
      <Form.Group>
        <Form.Label>
          <h4 className="selectLabel">Selecione o/a {passo}:</h4>
        </Form.Label>
        <Form.Control
          className="optionInput"
          onChange={handleChange(passo)}
          as="select"
        >
          {lista.map((opcao) => (
            <option>{opcao}</option>
          ))}
        </Form.Control>
      </Form.Group>
    </>
  );
};

export default PizzaForm;
