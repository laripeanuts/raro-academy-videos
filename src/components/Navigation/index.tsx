import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Navigation = () => {
  const navigate = useNavigate();

  // Substituir por estados globais
  const [isAuthenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    setAuthenticated(localStorage.getItem("access_token") !== null);
  }, []);

  function logout() {
    localStorage.removeItem("access_token");
    localStorage.removeItem("id");
    setAuthenticated(false);
    navigate("/");
  }

  if (!isAuthenticated) {
    return (
      <>
        <Link to="/">HOME</Link>
        <Link to="/login">LOGIN</Link>
        <Link to="/register">NOVO USUÁRIO</Link>
        <Link to="/videos">VIDEOS</Link>
      </>
    );
  }

  return (
    <>
      <Link to="/">HOME</Link>
      <Link to="/" type="button" onClick={() => logout}>
        LOGOUT
      </Link>
    </>
  );
};
