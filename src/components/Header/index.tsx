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
import { SwitchComponent } from "../SwitchComponent";

export const Header = () => (
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
    </ContainerLogos>
    {/* <SwitchComponent /> */}
    <ContainerUserMenu>
      <InputSearch />
      <ContainerAvatar>
        <Avatar />
      </ContainerAvatar>
      <KeyboardArrowDownIcon className="iconArrowDown" fontSize="small" />
    </ContainerUserMenu>
  </Container>
);
