import { styled } from "@mui/material/styles";

export const Container = styled("section")`
  box-shadow: inset 1px 1px rgba(255, 255, 255, 0.3),
    3px 3px 10px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(8px);
  /* background-color: rgba(255, 255, 255, 0.02); */
  display: flex;
  border-radius: 10px;

  background-color: ${(props) => (props.theme.palette.mode === "dark"
    ? "rgba(87, 87, 87, 0.18)"
    : "rgba(135, 135, 135, 0.13)")};
`;
