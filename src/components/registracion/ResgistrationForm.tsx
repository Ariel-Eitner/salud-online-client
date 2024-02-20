import { useState } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import { MedicoForm, PacienteForm } from "./Forms";
import { useForm } from "../../hooks/useForm";

export const RegistrationForm = () => {
  const [userType, setUserType] = useState("paciente");
  const { handleInputChange, handleSubmit } = useForm({
    dni: "",
    phone: "",
    birthDate: "",
    gender: "",
  });

  const cardStyle = {
    backgroundColor: "#e6f2ff",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    padding: "20px",
    borderRadius: "15px",
    marginTop: "20px",
  };
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <Card style={cardStyle}>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="userTypeSelect">
                <Form.Label>Tipo de Usuario</Form.Label>
                <Form.Control
                  as="select"
                  onChange={(e) => setUserType(e.target.value)}
                >
                  <option value="paciente">Paciente</option>
                  <option value="medico">Médico</option>
                </Form.Control>
              </Form.Group>

              {userType === "paciente" ? (
                <PacienteForm onChange={handleInputChange} />
              ) : (
                <MedicoForm onChange={handleInputChange} />
              )}

              <Button variant="primary" type="submit">
                Enviar
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
