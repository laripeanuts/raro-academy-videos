import { styled } from "@mui/material/styles";

export type ContainerProps = {
  buttonsGap?: string;
  carouselPadding?: string;
  carouselWidth?: string;
};

export const Container = styled("section", {
  shouldForwardProp: (prop) => (prop !== "buttonsGap" && prop !== "carouselPadding" && prop !== "carouselWidth"),
})<ContainerProps>(({ carouselWidth, carouselPadding, buttonsGap }) => ({
  gap: buttonsGap || "20px",
  width: carouselWidth || "100%",
  padding: carouselPadding || "0px",
  display: "flex",
  height: "fit-content",
  alignItems: "center",
}));

export type ContentProps = {
  itemsGap?: string;
};

export const Content = styled("div", {
  shouldForwardProp: (prop) => (prop !== "itemsGap"),
})<ContentProps>`
  display: flex;
  gap: ${({ itemsGap }) => itemsGap || "20px"};
  overflow: hidden;
  width: 100%;
  scroll-snap-type: x mandatory;
`;
