import { styled } from "@mui/material/styles";

export const ThumbnailContainer = styled("div")`
  width: 240px;
  min-width: 240px;
  height: 135px;
  position: relative;
  cursor: pointer;
  transition: transform 200ms ease-out;

  &:hover {
    transform: scale(0.9);
  }
`;

export const ThumbnailImage = styled("img")`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

/* prettier-ignore */
export const InfoThumblr = styled("div")`
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
  background-color: ${({ theme }) => theme.palette.mode === "dark"
    ? "rgba(0, 0, 0, 0.55)"
    : "rgba(0, 0, 0, 0.3)"};
  border-radius: 10px;
  margin-bottom: -1px;
`;

export const TextThumblr = styled("div")`
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  width: calc(100% - 46px);
`;
