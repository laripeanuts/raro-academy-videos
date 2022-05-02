import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

export const Container = styled("section")`
  padding-top: 20px 0;
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 30px;
  align-items: center;
`;

export const LinkText = styled(Typography)`
  padding: 10px;
  border-radius: 10px;
  font-weight: bold;
  opacity: 0.7;
  color: ${({ theme }) => theme.palette.text.primary};

  :hover {
    color: ${({ theme }) => theme.palette.primary.main};
    opacity: 1;
    backdrop-filter: blur(8px);
    background-color: ${(props) => props.theme.palette.mode === "dark"
    ? "rgba(87, 87, 87, 0.18)"
    : "rgba(135, 135, 135, 0.13)"};
  }
`;

export const Row = styled("section")`
  display: flex;
  width: 100%;
  align-items: baseline;
  justify-content: space-between;
`;
