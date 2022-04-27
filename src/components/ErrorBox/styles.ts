import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

export const Container = styled("section")`
  background-color: ${({ theme }) => theme.palette.error.main};
  padding: 1px 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 10px 5px rgba(0, 0, 0, 0.3);
`;

export const Message = styled(Typography)`
  color: ${({ theme }) => theme.palette.common.white};
`;
