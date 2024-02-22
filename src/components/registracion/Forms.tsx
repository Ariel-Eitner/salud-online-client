import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { Gender, GenderService } from "../../services/genderService";

export const CommonFormFields = ({ onChange }: any) => {
  const [genders, setGenders] = useState<Gender[]>([]);

  useEffect(() => {
    const fetchGenders = async () => {
      try {
        const genderService = new GenderService();
        const loadedGenders = await genderService.getGenders();
        setGenders(loadedGenders);
      } catch (error) {
        console.error("Error al cargar géneros:", error);
      }
    };

    fetchGenders();
  }, []);

  return (
    <>
      <Form.Group controlId="dni">
        <Form.Label>DNI</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Ingresa tu DNI"
          onChange={onChange}
        />
      </Form.Group>
      <Form.Group controlId="phone">
        <Form.Label>Teléfono</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Ingresa tu número de teléfono"
          onChange={onChange}
        />
      </Form.Group>
      <Form.Group controlId="birth_date">
        <Form.Label>Fecha de Nacimiento</Form.Label>
        <Form.Control required type="date" onChange={onChange} />
      </Form.Group>
      <Form.Group controlId="gender">
        <Form.Label>Género</Form.Label>
        <Form.Control as="select" required onChange={onChange}>
          <option value="">Seleccionar...</option>
          {genders.map((gender) => (
            <option key={gender.id} value={gender.id}>
              {gender.name}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
    </>
  );
};

// export const CommonFormFields = ({ onChange }: any) => (
//   <>
//     <Form.Group controlId="dni">
//       <Form.Label>DNI</Form.Label>
//       <Form.Control
//         required
//         type="text"
//         placeholder="Ingresa tu DNI"
//         onChange={onChange}
//       />
//     </Form.Group>
//     <Form.Group controlId="phone">
//       <Form.Label>Teléfono</Form.Label>
//       <Form.Control
//         required
//         type="text"
//         placeholder="Ingresa tu número de teléfono"
//         onChange={onChange}
//       />
//     </Form.Group>
//     <Form.Group controlId="birthDate">
//       <Form.Label>Fecha de Nacimiento</Form.Label>
//       <Form.Control required type="date" onChange={onChange} />
//     </Form.Group>
//     <Form.Group controlId="gender">
//       <Form.Label>Género</Form.Label>
//       <Form.Control as="select" required onChange={onChange}>
//         <option value="">Seleccionar...</option>
//         {/* Agrega opciones de género aquí */}
//       </Form.Control>
//     </Form.Group>
//   </>
// );

export const PacienteForm = ({ onChange }: any) => (
  <>
    <CommonFormFields onChange={onChange} />
    <Form.Group controlId="pacienteInfo">
      <Form.Label>Información Adicional del Paciente</Form.Label>
      <Form.Control
        required
        type="text"
        placeholder="Ingresa información adicional"
        onChange={onChange}
      />
    </Form.Group>
    {/* Agrega más campos según sea necesario */}
  </>
);

export const MedicoForm = ({ onChange }: any) => (
  <>
    <CommonFormFields onChange={onChange} />
    <Form.Group controlId="medicoInfo">
      <Form.Label>Información Adicional del Médico</Form.Label>
      <Form.Control
        required
        type="text"
        placeholder="Ingresa tu especialidad"
        onChange={onChange}
      />
    </Form.Group>
    {/* Agrega más campos según sea necesario */}
  </>
);
