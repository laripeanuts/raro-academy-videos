import styled from "styled-components";

export const TumbnailContainer = styled("div")`
  padding: 0;
  margin: 0;
  margin-left: 10px;
  width: 229.2px;
  height: 150px;
  border-radius: 10px;
  position: relative;
`;

export const TumbnailImage = styled("img")`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  cursor: pointer;
`;

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
  z-index: 20;
  backdrop-filter: blur(20px);
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
`;

export const TextTumblr = styled("div")`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 3px;
`;
