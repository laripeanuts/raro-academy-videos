import { StyledButton } from "./styles";

export type ButtonProps = {
  text: String;
  disabled?: boolean;
};

const Button = ({ text, disabled }: ButtonProps) => (
  <StyledButton disabled={disabled ?? false}>
    { text }
  </StyledButton>
);

export default Button;
