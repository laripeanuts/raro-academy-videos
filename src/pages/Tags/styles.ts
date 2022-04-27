import { styled } from "@mui/material";

export const Container = styled("div")`
  margin-top: 20px;
  width: 100%;
  height: 100%;
  color: ${(props) => props.theme.palette.text.primary};
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25px;

  .progress {
    display: flex;
    height: calc(100vh - 50vh);
    align-items: center;
    justify-content: center;
  }
`;
