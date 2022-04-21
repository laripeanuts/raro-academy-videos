import styled, { css } from "styled-components";

import { ButtonProps } from ".";

export const Wrapper = styled.button<Omit<ButtonProps, "children">>`
  cursor: pointer;
  border: none;
  padding: 0.8rem 1.6rem;
  text-decoration: none;

  ${({ fullWidth, theme }) => css`
    color: ${(props) => props.theme.colors.white};
    border-radius: ${(props) => props.theme.border.radius.default};
    font-size: ${(props) => props.theme.font.sizes.xsmall};
    font-weight: ${(props) => props.theme.font.weight.bold};
    background-color: ${(props) => props.theme.colors.secondary.main};
    line-height: 1.9rem;

    ${fullWidth &&
    css`
      width: 100%;
      padding: 1.6rem;
      border-radius: ${(props) => props.theme.border.radius.other};
      font-size: ${(props) => props.theme.font.sizes.medium};
    `}
  `}
`;