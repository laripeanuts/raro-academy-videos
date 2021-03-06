import { styled } from "@mui/material";

/* prettier-ignore */
export const FooterContainer = styled("footer")`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 25px;
  width: 100%;
  height: 80px;
  z-index: 1;

  box-shadow: inset 1px 1px rgba(255, 255, 255, 0.3),
    3px 3px 10px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(8px);

  background-color: ${(props) => (
    props.theme.palette.mode === "dark"
      ? "rgba(87, 87, 87, 0.18)"
      : "rgba(135, 135, 135, 0.13)"
  )};

  @media only screen and (max-width: 500px) {
    height: 60px;
  }

  img {
    height: 40px;
    width: 40px;
    transition: filter 0.2s;
    scale: 0.3s ease-in-out;
    transition: 0.3s;

    &:hover {
      filter: opacity(0.5);
      transform: scale(1.1);
      transform: translateY(-5px);
    }
  }
`;
