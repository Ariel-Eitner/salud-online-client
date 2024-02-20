import { useAuth0 } from "@auth0/auth0-react";
import { CSSProperties } from "react";

import Swal from "sweetalert2";

export const LogoutButton = () => {
  const { logout } = useAuth0();
  const styles: CSSProperties = {
    border: "none",
    backgroundColor: "transparent",
  };

  const Logout = async () => {
    const result = await Swal.fire({
      title: "logout",
      icon: "question",
      cancelButtonText: "No",
      showCancelButton: true,
      confirmButtonText: "yes",
    });

    if (result.isConfirmed) {
      logout({
        logoutParams: {
          returnTo: `${window.location.protocol}//${window.location.host}/login`,
        },
      });
    }
  };
  return (
    <button style={styles} onClick={Logout}>
      Logout
    </button>
  );
};
