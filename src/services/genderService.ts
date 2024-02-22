import axios from "axios";
import { backendURL } from "../utils/API/apiExports";

const baseURL = `${backendURL}/gender`;

export interface Gender {
  id: number;
  name: string;
}

export class GenderService {
  async getGenders() {
    try {
      const response = await axios.get(baseURL);
      return response.data; // Suponiendo que los datos vienen en esta propiedad
    } catch (error) {
      console.error("Error al obtener géneros:", error);
      throw error; // O manejar el error de alguna otra forma
    }
  }
}
