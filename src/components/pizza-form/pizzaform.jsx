import React from "react";
import Form from "react-bootstrap/Form";

const PizzaForm = ({ selected, lista, passo, handleChange }) => {
  return (
    <>
      <Form.Group>
        <Form.Label>
          <h4 className="titles">Selecione o/a {passo}:</h4>
        </Form.Label>
        <Form.Control
          className="font-weight-bold"
          onChange={handleChange(passo)}
          as="select"
          value={selected}
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
