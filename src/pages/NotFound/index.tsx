import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { BGLogo } from "../../components/BGLogo";
import { Featured } from "../../components/Featured";
import { Container } from "./styles";

type NotFoundPageProps = {
  message?: string;
  buttonText?: string;
};

export const NotFoundPage = ({
  message = "Ops, essa página não foi encontrada!",
  buttonText = "Perdido? Assista uma aula!",
}: NotFoundPageProps) => {
  const navigate = useNavigate();

  const handleClick = () => navigate("/videos");

  return (
    <Container>
      <Featured>
        <Typography variant="h4">{message}</Typography>
        <Button onClick={handleClick}>{buttonText}</Button>
      </Featured>
    </Container>
  );
};
