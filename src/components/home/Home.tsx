import { useSelector } from "react-redux";
import { NewUser } from "../../redux/slice/userSlice";
import { LoadingPage } from "../loadingPage/LoadingPage";

export const Home = () => {
  const newUser = useSelector((state: any) => state.user.user) as NewUser;
  console.log(newUser);

  if (!newUser) {
    return <LoadingPage />;
  }

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">Ficha Técnica del Usuario</div>
        <div className="card-body">
          <h5 className="card-title">{`${newUser.first_name} ${newUser.last_name}`}</h5>
          <p className="card-text">Email: {newUser.email}</p>
          <p className="card-text">
            Tipo de Usuario: {newUser.user_type?.type}
          </p>
          <p className="card-text">DNI: {newUser.user_info?.dni}</p>
          <p className="card-text">Teléfono: {newUser.user_info?.phone}</p>
          <p className="card-text">
            Fecha de Nacimiento:{" "}
            {new Date(newUser.user_info?.birth_date).toLocaleDateString(
              "es-ES",
              {
                year: "numeric",
                month: "long",
                day: "numeric",
              }
            )}
          </p>
          <p className="card-text">Género: {newUser.user_info?.gender?.name}</p>
          {/* Puedes añadir más campos según sea necesario */}
        </div>
      </div>
    </div>
  );
};

export default Home;
