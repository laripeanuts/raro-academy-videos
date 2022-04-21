import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthProvider/useAuth";

export const Navigation = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  if (!auth.isAuthenticated) {
    return (
      <>
        <Link to="/">HOME</Link>
        <Link to="/login">LOGIN</Link>
        <Link to="/register">NOVO USUÁRIO</Link>
      </>
    );
  }

  return (
    <>
      <Link to="/">HOME</Link>
      <Link to="/videos">VIDEOS</Link>
      <Link to="/" type="button" onClick={() => auth.logout()}>
        LOGOUT
      </Link>
    </>
  );
};
