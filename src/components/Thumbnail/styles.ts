import { styled } from "@mui/material/styles";

export const TumbnailContainer = styled("div")`
  width: 240px;
  min-width: 240px;
  height: 135px;
  position: relative;
  cursor: pointer;
  display:
`;

export const TumbnailImage = styled("img")`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

/* prettier-ignore */
export const InfoTumblr = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3px 13px;
  align-items: center;
  width: 100%;
  height: fit-content;
  position: absolute;
  bottom: 0;
  z-index: 1;
  backdrop-filter: blur(20px);
  background-color: ${({ theme }) => (theme.palette.mode === "dark"
    ? "rgba(0, 0, 0, 0.55)"
    : "rgba(255, 255, 255, 0.1)")};
  border-radius: 10px;
`;

export const TextTumblr = styled("div")`
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  width: calc(100% - 46px);
`;
