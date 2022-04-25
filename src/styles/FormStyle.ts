import { styled } from "@mui/material";

export const ContainerForm = styled("footer")`
  padding-top: 40px;
  top: 20px;
  display: flex;
  flex-direction: column;
  min-width: 70%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

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

  .link {
    margin: 10px 0;
  }

  .error {
    place-self: center;
    height: 30px;
    color: ${(props) => props.theme.palette.error.main};
  }

  .bottom {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;
