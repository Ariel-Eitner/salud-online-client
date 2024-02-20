import { useState } from "react";
import { Form, Button } from "react-bootstrap";

export const RegistrationForm = () => {
  const [userType, setUserType] = useState("paciente");

  return (
    <Form>
      <Form.Group controlId="userTypeSelect">
        <Form.Label>Tipo de Usuario</Form.Label>
        <Form.Control as="select" onChange={(e) => setUserType(e.target.value)}>
          <option value="paciente">Paciente</option>
          <option value="medico">Médico</option>
        </Form.Control>
      </Form.Group>

      {userType === "paciente" ? (
        // Formulario para pacientes
        <PacienteForm />
      ) : (
        // Formulario para médicos
        <MedicoForm />
      )}

      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
  );
};

const PacienteForm = () => (
  <>
    {/* Campos específicos para pacientes */}
    <Form.Group controlId="pacienteInfo">
      <Form.Label>Información Adicional del Paciente</Form.Label>
      <Form.Control type="text" placeholder="Ingresa información adicional" />
    </Form.Group>
    {/* Agrega más campos según sea necesario */}
  </>
);

const MedicoForm = () => (
  <>
    {/* Campos específicos para médicos */}
    <Form.Group controlId="medicoInfo">
      <Form.Label>Información Adicional del Médico</Form.Label>
      <Form.Control type="text" placeholder="Ingresa tu especialidad" />
    </Form.Group>
    {/* Agrega más campos según sea necesario */}
  </>
);
