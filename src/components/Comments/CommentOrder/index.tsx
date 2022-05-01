import { IconButton } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

type CommentFilterProps = {
  order: boolean;
  onClick: () => void;
};

export const CommentOrder = ({ order, onClick }: CommentFilterProps) => (
  <IconButton color="primary" aria-label="order-by-date" onClick={onClick}>
    {order ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
  </IconButton>
);
