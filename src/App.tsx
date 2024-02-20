import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "./components/NavBar/LoginButton";
import { useEffect } from "react";
import { LogoutButton } from "./components/NavBar/LogoutButton";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { MainNavbar } from "./components/NavBar/NavBar";
import { RegistrationForm } from "./components/registracion/ResgistrationForm";

function App() {
  const { user } = useAuth0();
  console.log(user);
  return (
    <>
      <MainNavbar />

      {user ? <RegistrationForm /> : null}
    </>
  );
}

export default App;
