import { FooterContainer } from "./styles";
import twitter from "../../assets/social_midia/twitter.svg";
import linkedin from "../../assets/social_midia/linkedin.svg";
import instagram from "../../assets/social_midia/instagram.svg";
import youtube from "../../assets/social_midia/youtube.svg";

export const Footer = () => (
  <FooterContainer>
    <a
      href="https://www.instagram.com/raroacademy/"
      target="_bank"
      rel="noreferrer"
    >
      <img src={instagram} alt="Instagram" />
    </a>
    <a href="https://twitter.com/RaroAcademy" target="_bank" rel="noreferrer">
      <img src={twitter} alt="Twitter" />
    </a>
    <a
      href="https://www.linkedin.com/showcase/raroacademy/"
      target="_bank"
      rel="noreferrer"
    >
      <img src={linkedin} alt="LinkedIn" />
    </a>
    <a
      href="https://www.youtube.com/channel/UCAUAbOc54PreKLahvnt5jrw"
      target="_bank"
      rel="noreferrer"
    >
      <img src={youtube} alt="Youtube" />
    </a>
  </FooterContainer>
);
