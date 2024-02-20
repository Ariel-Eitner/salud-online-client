import { useAuth0 } from "@auth0/auth0-react";
import { CSSProperties } from "react";

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  const styles: CSSProperties = {
    border: "none",
    backgroundColor: "transparent",
  };

  return (
    <button style={styles} onClick={() => loginWithRedirect()}>
      Login
    </button>
  );
};
