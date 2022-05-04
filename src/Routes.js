import React from "react";
import { Route, Routes } from "react-router-dom";

import RequireAuth from "./RequireAuth";
import TodoHome from "./container/Todo";
import SignIn from "./container/Signin";
import EmiCalculator from "./container/EmiCalculator";

const ApplicationRoutes = () => {
  const userRoutes = [
    {
      path: "/",
      component: <TodoHome />,
      auth: true,
    },
    {
      path: "signin",
      component: <SignIn />,
    },
    {
      path: "emi",
      component: <EmiCalculator />,
      auth: true,
    },
  ];

  return (
    <Routes>
      {userRoutes.map((item) => (
        <Route
          key={item.path}
          path={item.path}
          element={
            item.auth ? (
              <RequireAuth>{item.component}</RequireAuth>
            ) : (
              item.component
            )
          }
        />
      ))}
    </Routes>
  );
};
export default ApplicationRoutes;
