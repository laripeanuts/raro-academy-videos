import { styled } from "@mui/material/styles";

export const Container = styled("aside")`
  padding: 10px;
  width: 100%;
  height: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 300px;
  color: ${(props) => props.theme.palette.text.primary};

  @media only screen and (min-width: 1300px) {
    height: 70vh;
  }

  @media only screen and (min-width: 1300px) {
    height: 80vh;
  }

  @media only screen and (max-width: 750px) {
    display: flex;
    flex-direction: column;
    height: 50vh;
  }

  .menuFilter {
    position: absolute;
    top: 0;
    right: 25px;
    display: flex;
    justify-content: end;
    align-items: center;
  }

  .makeComment {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;

    p {
      max-height: 40px;
      position: absolute;
    }

    input {
      margin-bottom: 2px;
    }

    .button {
      max-height: 40px;
      margin-top: 23px;
    }
  }
`;
