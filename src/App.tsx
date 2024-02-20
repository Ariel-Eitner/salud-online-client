import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { MainNavbar } from "./components/NavBar/NavBar";
import { RegistrationForm } from "./components/registracion/ResgistrationForm";

import { Home } from "./components/home/Home";
import { Welcome } from "./components/welcomeScreen/Welcome";
import { LoadingPage } from "./components/loadingPage/LoadingPage";

function App() {
  const { isAuthenticated, isLoading, user } = useAuth0();
  console.log(user);
  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <>
      <MainNavbar />

      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <Navigate to="/home" /> : <Welcome />}
        />
        <Route
          path="/home"
          element={isAuthenticated ? <Home /> : <Navigate to="/" />}
        />
        <Route
          path="/register"
          element={isAuthenticated ? <RegistrationForm /> : <Navigate to="/" />}
        />
      </Routes>
    </>
  );
}

export default App;
