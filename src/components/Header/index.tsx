import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  Container,
  ContainerAvatar,
  ContainerLogo,
  ContainerLogos,
  ContainerUserMenu,
} from "./styles";
import { Logo } from "../SVG/Logo";
import { LogoCompact } from "../SVG/LogoCompact";
import { Avatar } from "../SVG/Avatar";
import { InputSearch } from "../InputSearch";
import { ThemeSwitch } from "../ThemeSwitch";
import { Navigation } from "../Navigation";

export const Header = () => {
  const handleClickMenu = () => {
    alert("Click");
  };

  return (
    <Container>
      <ContainerLogos>
        <ContainerLogo>
          <Logo />
        </ContainerLogo>
        <Link to="/">
          <button type="button">
            <LogoCompact />
          </button>
        </Link>
        <Navigation />
      </ContainerLogos>
      <ContainerUserMenu>
        <InputSearch />
        <ContainerAvatar>
          <Avatar />
        </ContainerAvatar>
        <KeyboardArrowDownIcon
          onClick={handleClickMenu}
          className="iconArrowDown"
        />
        <ThemeSwitch />
      </ContainerUserMenu>
    </Container>
  );
};
