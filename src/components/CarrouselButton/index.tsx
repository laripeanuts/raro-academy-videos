import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

type CarrouselButtonProps = {
  left?: true;
} & IconButtonProps;

export const CarrouselButton = ({ left, ...rest }: CarrouselButtonProps) => (
  <IconButton {...rest}>
    {left ? <ArrowBackIosNewIcon /> : <ArrowForwardIosIcon />}
  </IconButton>
);
