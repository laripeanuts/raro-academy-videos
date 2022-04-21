import { FC, useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../contexts/AuthProvider/useAuth";

export const RequireAuth: FC = () => {
  const auth = useAuth();

  if (!auth.isAuthenticated) <Navigate to="/" />;

  return <Outlet />;
};
