import { TextField } from "@mui/material";
import styled from "styled-components";

export const StyledInputSearch = styled(TextField)(({ theme }) => ({
  "& label.Mui-focused": {
    color: theme.colors.white,
  },

  "& .MuiInputBase-input": {
    color: theme.colors.white,
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: theme.colors.white,
  },
  "& .MuiInput-underline:before": {
    borderBottomColor: theme.colors.grayscale.light,
  },
}));
