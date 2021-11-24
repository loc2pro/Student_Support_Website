import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export default function About() {
  return (
    <Row className="mt-5">
      <Col className="text-center">
        <Button
          href="https://www.facebook.com/profile.php?id=100007769777444"
          variant="primary"
          size="lg"
        >
          My Profile
        </Button>
      </Col>
    </Row>
  );
}
