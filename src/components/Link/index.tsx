import { StyledLink } from "./styles";

export type LinkProps = {
  text: string;
  href: string;
};

const Link = ({ text, href }: LinkProps) => (
  <StyledLink href={href}>
    { text }
  </StyledLink>
);

export default Link;
