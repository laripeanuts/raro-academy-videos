import { FormEvent, useContext, useEffect, useState } from "react";
import { Button, Input } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export const Login = () => {
  const auth = useAuth();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent) => {
    setLoading(true);
    event.preventDefault();
    await auth.authenticate(email, senha);
    if (auth.error) {
      setEmail("");
      setSenha("");
    }
    setLoading(false);
  };

  useEffect(() => {
    if (auth.isAuthenticated) navigate("/");
  }, [auth.isAuthenticated, navigate]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Input
            type="text"
            name="email"
            placeholder="Login"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            name="senha"
            placeholder="********"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <div>
            status:
            {auth.error}
          </div>
          <Button type="submit" disabled={loading}>
            {loading ? "Carregando..." : "Login"}
          </Button>
        </div>
      </form>
    </div>
  );
};
