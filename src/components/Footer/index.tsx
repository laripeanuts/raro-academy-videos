import { Link } from "react-router-dom";
import { FooterContainer } from "./styles";
import twitter from "../../assets/social_midia/twitter.svg";
import linkedin from "../../assets/social_midia/linkedin.svg";
import instagram from "../../assets/social_midia/instagram.svg";

export const Footer = () => (
  <FooterContainer>
    <Link to="/"><img src={instagram} alt="Instagram" /></Link>
    <Link to="/"><img src={twitter} alt="Twitter" /></Link>
    <Link to="/"><img src={linkedin} alt="LinkedIn" /></Link>
  </FooterContainer>
);
