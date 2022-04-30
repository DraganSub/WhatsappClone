import { Navigate } from "react-router";

const RedirectTo = (to) => {
  return <Navigate to={to} />;
};

export default RedirectTo;
