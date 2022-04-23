import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import SunIcon from "../../assets/sun.svg";
import MoonIcon from "../../assets/moon.svg";

export const StyledStwitch = styled(Switch)(({ theme }) => ({
  "&.MuiSwitch-root": {
    width: "48px",
    height: "24px",
    margin: 0,
    padding: 0,
  },
  "& .MuiSwitch-thumb": {
    backgroundImage: `url(${SunIcon})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundColor: "#fff",
    boxShadow: theme.shadows[0],
    width: "18px",
    height: "18px",
  },
  "& .MuiSwitch-track": {
    backgroundColor: theme.palette.primary.main,
    opacity: 1,
    borderRadius: "50px",
  },
  "& .MuiSwitch-switchBase": {
    padding: 0,
    top: "3px",
    left: "3px",
    "&.Mui-checked": {
      transform: "translateX(24px)",

      "& + .MuiSwitch-track": {
        opacity: 1,
      },
      "& .MuiSwitch-thumb": {
        backgroundImage: `url(${MoonIcon})`,
      },
    },
  },
}));
