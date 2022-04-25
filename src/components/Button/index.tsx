import { ReactNode } from "react";
import { StyledButton } from "./styles";

export type ButtonProps = {
  children: ReactNode;
  disabled: boolean;
};

const Button = ({ children, disabled }: ButtonProps) => (
  <StyledButton disabled={disabled ?? false}>{children}</StyledButton>
);

export default Button;
