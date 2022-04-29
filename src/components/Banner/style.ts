import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material/";

export const BannerConatiner = styled("div")`
  width: 100%;
  height: 300px;
  display: flex;
`;

export const BannerInfoComtainer = styled("div")`
  width: 45%;
  max-width: 400px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: inset 1px 1px rgba(255, 255, 255, 0.3),
    3px 3px 10px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(8px);
  display: flex;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;


  background-color: ${(props) => (props.theme.palette.mode === "dark"
    ? "rgba(87, 87, 87, 0.18)"
    : "rgba(135, 135, 135, 0.13)")};

`;

export const BannerTitle = styled(Typography)`
  padding-top: 20px;
  background-image: linear-gradient(
      40deg,
      ${(props) => props.theme.palette.primary.main},
      ${(props) => props.theme.palette.secondary.main}
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
`;

export const BannerImg = styled("img")`
  width: 55%;
  height: 100%;
  cursor: pointer;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  box-shadow: inset 1px 1px rgba(255, 255, 255, 0.3),
    3px 3px 10px rgba(0, 0, 0, 0.3);
`;

export const BannerInfoText = styled("div")`
  display: flex;
  align-items: center;
`;
