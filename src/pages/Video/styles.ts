import { styled } from "@mui/material";

export const Container = styled("section")`
  margin-top: 20px;
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
    max-height: 60%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 25px;
  }

  .progress {
    display: flex;
    height: calc(100vh - 50vh);
    align-items: center;
    justify-content: center;
  }

  @media only screen and (max-width: 750px) {
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
`;

export const ContainerVideo = styled("div")`
  width: 60%;
  color: ${(props) => props.theme.palette.text.primary};

  @media only screen and (max-width: 750px) {
    width: 100%;
  }
`;

export const ContainerComments = styled("div")`
  width: 40%;

  @media only screen and (max-width: 750px) {
    width: 100%;
  }
`;
