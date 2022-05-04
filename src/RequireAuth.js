import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectUser } from "./features/UserSlice";

function RequireAuth({ children }) {
  const user = useSelector(selectUser);

  if (user === null) {
    return <Navigate to="/signin" />;
  }
  return children;
}

export default RequireAuth;
