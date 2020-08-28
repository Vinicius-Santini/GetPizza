import React from "react";
import Toast from "react-bootstrap/Toast";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ToastPontos = ({ pontos, recomendacaoAceita, hideToast }) => {
  return (
    <>
      <Row className="fixed-top position-absolute mt-5 ml-2">
        <Col xs={6}>
          <Toast
            onClose={hideToast}
            show={recomendacaoAceita}
            delay={4500}
            autohide
          >
            <Toast.Header>
              <strong className="mr-auto">Parabéns</strong>
            </Toast.Header>
            <Toast.Body>
              Você escolheu uma pizza do dia e vai ganhar {pontos} pontos!
            </Toast.Body>
          </Toast>
        </Col>
      </Row>
    </>
  );
};

export default ToastPontos;
