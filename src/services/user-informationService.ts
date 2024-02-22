import axios from "axios";
import { backendURL } from "../utils/API/apiExports";

const baseURL = `${backendURL}/user-information`;

export class UserInformationService {
  async postInformation(data: any, userId: number) {
    try {
      const response = await axios.post(`${baseURL}`, {
        ...data,
        user_id: userId,
      });
      return response.data;
    } catch (error) {
      console.error("Error al enviar la información del usuario:", error);
      throw error;
    }
  }
}
