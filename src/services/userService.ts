import axios from "axios";
import { backendURL } from "../utils/API/apiExports";
import { UserInfo, UserType } from "../redux/slice/userSlice";

const baseURL = `${backendURL}/users`;

interface User {
  email?: string;
  email_verified?: boolean;
  family_name?: string;
  given_name?: string;
  locale?: string;
  name?: string;
  nickname?: string;
  picture?: string;
  updated_at?: string;
}
interface UserUpdate {
  user_type: UserType;
  user_info: UserInfo;
}

export class UserService {
  async createUser(user: User) {
    try {
      const response = await axios.post(`${baseURL}`, user);

      return response.data;
    } catch (error) {
      console.error("Error al crear el usuario", error);
    }
  }

  async patchUser(userId: number, updateData: UserUpdate) {
    try {
      const response = await axios.patch(`${baseURL}/${userId}`, updateData);
      return response.data;
    } catch (error) {
      console.error("Error al actualizar el usuario", error);
    }
  }
}
