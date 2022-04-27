import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { Avatar, IconButton, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { ContainerMenu, ContainerUserMenu } from "./styles";
import { ThemeSwitch } from "../ThemeSwitch";

export const AccountMenu = () => {
  const { user, logout } = useAuth();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const navigate = useNavigate();
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
          <MenuItem>{`Olá, ${user.nome}`}</MenuItem>
          <Link to="/videos">
            <MenuItem onClick={handleClose}>Todos os vídeos</MenuItem>
          </Link>
          <Link to="/videos/favoritos">
            <MenuItem color="primary" onClick={handleClose}>
              Vídeos favoritos
            </MenuItem>
          </Link>
          <MenuItem onClick={logout}>Logout</MenuItem>
          <span className="theme">
            <Typography variant="h6">Tema</Typography>
            <ThemeSwitch />
          </span>
        </ContainerMenu>
      </Menu>
    </div>
  );
};
