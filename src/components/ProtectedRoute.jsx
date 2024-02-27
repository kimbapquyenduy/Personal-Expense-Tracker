import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthConext";
export const ProtectRoute = ({ children }) => {
  const { user } = UserAuth();
  if (!user) {
    return <Navigate to={"/login"} />;
  } else return children;
};
