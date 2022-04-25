import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { Avatar, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { ContainerMenu, ContainerUserMenu } from "./styles";
import { ThemeSwitch } from "../ThemeSwitch";

export const AccountMenu = () => {
  const { user, logout } = useAuth();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <ContainerUserMenu>
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Avatar
            alt={user.nome}
            src={user.foto}
            sx={{ width: 56, height: 56 }}
          />
        </IconButton>
        <IconButton
          color="primary"
          aria-label="add to shopping cart"
          onClick={handleClick}
        >
          <KeyboardArrowDownIcon className="iconArrowDown" />
        </IconButton>
      </ContainerUserMenu>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <ContainerMenu>
          <Link to="/">
            <MenuItem onClick={handleClose}>{`Olá, ${user.nome}`}</MenuItem>
          </Link>
          <Link to="/">
            <MenuItem onClick={handleClose}>Vídeos favoritos</MenuItem>
          </Link>
          <MenuItem onClick={logout}>Logout</MenuItem>
          <span className="theme">
            Tema
            <ThemeSwitch />
          </span>
        </ContainerMenu>
      </Menu>
    </div>
  );
};
