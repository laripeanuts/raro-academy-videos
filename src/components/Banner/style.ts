import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material/";
import { Link } from "react-router-dom";

export const BannerContainer = styled("div")`
  display: flex;

  .progress {
    display: flex;
    height: calc(100vh - 50vh);
    align-items: center;
    justify-content: center;
  }

  @media only screen and (max-width: 900px) {
    width: 100%;
    padding: 20px;
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const BannerInfoContainer = styled("div")`
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

  background-color: ${(props) => props.theme.palette.mode === "dark"
    ? "rgba(87, 87, 87, 0.18)"
    : "rgba(135, 135, 135, 0.13)"};

  @media only screen and (max-width: 900px) {
    width: 100%;
    height: 100%;
    display: flex;
    background: #fff;
  }
`;

export const BannerTitle = styled(Typography)`
  display: flex;
  flex-wrap: wrap;
  text-align: left;
  margin-left: 20px;
  padding-top: 20px;
  background-image: linear-gradient(
    40deg,
    ${(props) => props.theme.palette.primary.main},
    ${(props) => props.theme.palette.secondary.main}
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  text-transform: uppercase;
`;

export const BannerImg = styled("img")`
  width: 100%;
  height: 100%;
  cursor: pointer;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  box-shadow: inset 1px 1px rgba(255, 255, 255, 0.3),
    3px 3px 10px rgba(0, 0, 0, 0.3);

  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

export const BannerImgLink = styled(Link)`
  cursor: pointer;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  box-shadow: inset 1px 1px rgba(255, 255, 255, 0.3),
    3px 3px 10px rgba(0, 0, 0, 0.3);
`;

export const BannerCommentsCircle = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.palette.secondary.main};
  border-radius: 50%;
  width: 50px;
  height: 50px;
`;
