import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { BGLogo } from "../../components/BGLogo";
import { Featured } from "../../components/Featured";
import { Container } from "./styles";

export const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleClick = () => navigate("/");

  return (
    <Container>
      <Featured>
        <Typography variant="h4">
          Ops, essa página não foi encontrada!
        </Typography>
        <Button onClick={handleClick}>Ir para a home</Button>
      </Featured>
    </Container>
  );
};
