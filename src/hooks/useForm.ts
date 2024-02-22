import { useState } from "react";
import { UserInformationService } from "../services/user-informationService";
import { useNavigate, useParams } from "react-router-dom";
import { UserService } from "../services/userService";
import { useDispatch } from "react-redux";
import { updateUser } from "../redux/slice/userSlice";

export const useForm = (initialValues: any) => {
  const [formData, setFormData] = useState(initialValues);
  const userInformationService = new UserInformationService();
  const userService = new UserService();
  const { userId } = useParams(); // Obtiene el userId de la URL
  const user_id = Number(userId);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInputChange = (event: any) => {
    const { id, value } = event.target;
    if (id === "gender") {
      // Convierte el valor de gender a número antes de actualizar el estado
      setFormData((prevFormData: any) => ({
        ...prevFormData,
        [id]: Number(value),
      }));
    } else {
      // Para todos los demás campos, no cambia el tipo de valor
      setFormData((prevFormData: any) => ({
        ...prevFormData,
        [id]: value,
      }));
    }
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      if (!user_id) {
        return;
      }

      const userInformationId = await userInformationService.postInformation(
        formData,
        user_id
      );

      const updatedUser = await userService.patchUser(user_id, {
        user_type: formData.user_type,
        user_info: userInformationId,
      });
      console.log(formData, 51);
      dispatch(updateUser(updatedUser));

      navigate("/home");
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
  };

  return {
    formData,
    handleInputChange,
    handleSubmit,
  };
};
