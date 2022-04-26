import { styled } from "@mui/material";

export const Container = styled("section")`
  width: 100%;
  height: 100%;
  color: ${(props) => props.theme.palette.text.primary};
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25px;

  .main {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 25px;
  }

  @media only screen and (max-width: 650px) {
    width: 100%;
    height: 100%;
    padding: 90px 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 25px;

    .main {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      place-content: center;
      align-items: center;
    }
  }
`;

export const ContainerPlaylist = styled("div")`
  color: ${(props) => props.theme.palette.text.primary};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: red;
`;

export const ContainerVideo = styled("div")`
  width: 60%;
  height: 100%;
  color: ${(props) => props.theme.palette.text.primary};

  @media only screen and (max-width: 650px) {
    width: 100%;
    height: 100%;
  }
`;

export const ContainerComments = styled("div")`
  width: 40%;
  height: 100%;

  @media only screen and (max-width: 650px) {
    width: 100%;
    height: 100%;
  }
`;
// color: ${(props) => (props.theme.palette.mode === "dark" ? "#fff" : "#000")};
