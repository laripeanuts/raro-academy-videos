import { styled } from "@mui/material";

export const FormStyle = styled("footer")`
  top: 20px;
  display: flex;
  flex-direction: column;
  min-width: 600px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media only screen and (max-width: 650px) {
    padding-top: 60px;
    min-width: 90%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -45%);
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
