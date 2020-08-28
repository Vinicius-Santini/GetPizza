import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Success = ({ restartStep }) => {
  const restart = (e) => {
    e.preventDefault();
    restartStep();
  };
  return (
    <div className="d-flex justify-content-center">
      <Card className="successCard">
        <Card.Body>
          <Card.Title>
            <h3 className="titles">Prontinho!</h3>
          </Card.Title>
          <Card.Text className="feedbackText">
            Muito obrigado pelo seu pedido! Sua pizza já está sendo preparada!
          </Card.Text>
          <Button variant="danger" onClick={restart}>
            Voltar para o início
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Success;
