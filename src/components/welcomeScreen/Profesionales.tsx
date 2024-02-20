import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import doctorImage from "../../assets/doctor.jpeg";
import { useState } from "react";

export const Profesionales = () => {
  const [index, setIndex] = useState(0);
  const profesionalesPorPagina = 3;
  // Simula datos de profesionales
  const profesionales = [
    {
      id: 1,
      nombre: "Dr. Juan Pérez",
      info: "Cardiólogo",
      imagen: doctorImage,
    },
    {
      id: 2,
      nombre: "Dra. Ana Gómez",
      info: "Dermatóloga",
      imagen: doctorImage,
    },
    {
      id: 3,
      nombre: "Dra. Ana Gómez",
      info: "Dermatóloga",
      imagen: doctorImage,
    },
    {
      id: 4,
      nombre: "Dra. Ana Gómez",
      info: "Dermatóloga",
      imagen: doctorImage,
    },
    {
      id: 5,
      nombre: "Dra. Ana Gómez",
      info: "Dermatóloga",
      imagen: doctorImage,
    },
    // Agrega más profesionales aquí
  ];

  const cardStyle = {
    width: "250px", // Ancho fijo
    height: "350px", // Alto fijo, mayor que el ancho para que sea más alta que ancha
    marginBottom: "20px", // Margen inferior para separar las tarjetas
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Sombra opcional para un efecto visual
  };

  const renderCard = (profesional) => (
    <Col key={profesional.id}>
      <Card style={cardStyle}>
        <Card.Img
          variant="top"
          src={profesional.imagen}
          style={{ height: "150px", objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title>{profesional.nombre}</Card.Title>
          <Card.Text>{profesional.info}</Card.Text>
          <Button variant="primary">Contactar Profesional</Button>
        </Card.Body>
      </Card>
    </Col>
  );
  const handlePrev = () => {
    if (index - profesionalesPorPagina < 0) {
      // Si estamos al inicio de la lista, vamos al final
      setIndex(profesionales.length - profesionalesPorPagina);
    } else {
      // Mover hacia atrás en la lista
      setIndex(index - profesionalesPorPagina);
    }
  };

  const handleNext = () => {
    if (index + profesionalesPorPagina >= profesionales.length) {
      // Si estamos al final de la lista, volvemos al inicio
      setIndex(0);
    } else {
      // Mover hacia adelante en la lista
      setIndex(index + profesionalesPorPagina);
    }
  };

  return (
    <Container className="mt-5">
      <Row className="text-center">
        <h2>Conozca a nuestros profesionales</h2>
      </Row>
      <Row className="text-center">
        <p>Breve descripción de los profesionales y sus especialidades.</p>
      </Row>
      <Row>
        <Col
          xs={1}
          className="d-flex align-items-center justify-content-center"
        >
          <AiOutlineLeft size={30} onClick={handlePrev} />
        </Col>
        <Col xs={10} className="">
          <Row className="d-flex align-items-center justify-content-between">
            {profesionales
              .slice(index, index + profesionalesPorPagina)
              .map((profesional) => renderCard(profesional))}
          </Row>
        </Col>
        <Col
          xs={1}
          className="d-flex align-items-center justify-content-center"
        >
          <AiOutlineRight size={30} onClick={handleNext} />
        </Col>
      </Row>
    </Container>
  );
};
