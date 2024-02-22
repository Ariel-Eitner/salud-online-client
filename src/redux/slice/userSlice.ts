// userSlice.js
import { createSlice } from "@reduxjs/toolkit";
// interfaces/User.ts o en el mismo archivo donde la necesites
export interface UserType {
  id: number;
  type: string;
}

export interface UserInfo {
  id: number;
  user_id: number;
  dni: string;
  phone: string;
  birth_date: string;
  gender: {
    id: number;
    name: string;
  };
  doctorDetails: null | any; // Reemplaza 'any' con una interfaz específica si es necesario
  patientDetails: null | any; // Reemplaza 'any' con una interfaz específica si es necesario
}

export interface NewUser {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  user_type: UserType;
  user_info: UserInfo;
}

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null as NewUser | null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    updateUser: (state, action) => {
      // Asumiendo que action.payload contiene solo los campos que necesitas actualizar
      state.user = { ...state.user, ...action.payload };
    },
  },
});

export const { setUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
