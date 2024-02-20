import { Container, Row, Col } from "react-bootstrap";
import doctorImage from "../../assets/doctor.jpeg";

export const WelcomeScreen = () => {
  return (
    <Container>
      <Row className="align-items-center mt-2">
        <Col md={6} className="text-section">
          <h1>Bienvenido a SaludOnline</h1>
          <p>
            SaludOnline no es solo una plataforma en línea; es una revolución en
            el acceso a la salud que une a pacientes y profesionales en un
            entorno digital seguro y amigable. Descubre lo que puedes hacer en
            SaludOnline:
          </p>
          <ul>
            <li>
              <strong>Expandir Alcance:</strong> Si eres un profesional de la
              salud, regístrate y proyecta tus servicios a una comunidad en
              línea creciente, llegando a pacientes que realmente necesitan tu
              experiencia.
            </li>
            <li>
              <strong>Conexión Directa:</strong> Como paciente, accede a un
              directorio extenso de profesionales, encuentra el que mejor se
              ajuste a tus necesidades y comunícate con ellos de manera sencilla
              y directa.
            </li>
          </ul>
          <p>
            En SaludOnline, la seguridad y la privacidad de tu información son
            nuestra máxima prioridad. Adoptamos protocolos de seguridad
            avanzados y garantizamos que tu historial clínico se guarda en un
            ambiente encriptado, otorgándote el control total sobre quién puede
            verlo. Con nosotros, tu salud y tu información están en las mejores
            manos.
          </p>
        </Col>
        <Col md={6} className="image-section">
          <img
            src={doctorImage}
            className="mt-2"
            style={{ width: "650px" }}
            alt="Imagen Descriptiva"
          />
        </Col>
      </Row>
    </Container>
  );
};
