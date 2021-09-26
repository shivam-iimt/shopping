import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const footer = () => {
  return (
    <>
      <footer>
        <Container>
          <Row>
            <Col md={12} className="text-center">
              <span>Copyright &copy; Shivam</span>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default footer;
