import { Navigate } from "react-router-dom";
import { useUsuario } from "../context/user.context";

export const RequireAuth = ({ children }) => {
  const [userGlobal] = useUsuario();

  if (userGlobal.token) {
    return children;
  }

  return <Navigate to="/login" replace />;
};
