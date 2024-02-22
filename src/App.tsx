import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { MainNavbar } from "./components/NavBar/NavBar";
import { RegistrationForm } from "./components/registracion/ResgistrationForm";

import { Home } from "./components/home/Home";
import { Welcome } from "./components/welcomeScreen/Welcome";
import { LoadingPage } from "./components/loadingPage/LoadingPage";
import { UserService } from "./services/userService";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/slice/userSlice";

function App() {
  const dispatch = useDispatch();

  const navigate = useNavigate(); // Agrega esto
  const { isAuthenticated, isLoading, user } = useAuth0();
  const userService = new UserService();

  const createUser = async () => {
    if (!user) {
      return;
    }
    try {
      const newUser = await userService.createUser(user);
      const userId = newUser.id;
      dispatch(setUser(newUser));

      if (!newUser.user_type) {
        navigate(`/register/${userId}`);
      }
    } catch (error) {}
  };

  useEffect(() => {
    createUser();
  }, [user]);

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
          path="/register/:userId"
          element={isAuthenticated ? <RegistrationForm /> : <Navigate to="/" />}
        />
      </Routes>
    </>
  );
}

export default App;
