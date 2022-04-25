import { ReactNode } from "react";
import { StyledLink } from "./styles";

export type LinkProps = {
  children: ReactNode;
  className: string;
  href: string;
};

const Link = ({ children, className = "link", href }: LinkProps) => (
  <StyledLink className={className} href={href}>
    {children}
  </StyledLink>
);

export default Link;
