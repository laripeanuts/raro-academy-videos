import { styled } from "@mui/material";

export const FormStyle = styled("section")`
  align-self: center;
  width: 40%;

  @media only screen and (max-width: 1250px) {
    width: 50%;
  }

  @media only screen and (max-width: 950px) {
    width: 65%;
  }

  @media only screen and (max-width: 780px) {
    width: 75%;
  }

  @media only screen and (max-width: 680px) {
    width: 100%;
  }

  button {
    width: 120px;
    place-self: end;
  }

  input {
    transition: 0.2s ease;
  }

  form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  h4 {
    place-self: start;
  }

  .linksContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .link {
    margin: 10px 0;
  }

  .messages {
    margin: auto;
    height: 30px;
    place-self: center;

    .error {
      color: ${(props) => props.theme.palette.error.main};
    }
    .success {
      color: ${(props) => props.theme.palette.success.main};
    }
  }

  .bottom {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;
