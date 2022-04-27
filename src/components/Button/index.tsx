import { ReactNode } from "react";
import { StyledButton } from "./styles";

export type ButtonProps = {
  children: ReactNode;
  disabled: boolean;
  onClick?: () => void;
};

const Button = ({ children, disabled, onClick }: ButtonProps) => (
  <StyledButton onClick={onClick} disabled={disabled ?? false}>
    {children}
  </StyledButton>
);

export default Button;
