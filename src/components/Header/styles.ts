import styled from "styled-components";

export const Container = styled.header`
  background: ${(props) => props.theme.colors.background.default};
  color: ${(props) => props.theme.colors.text.primary};
`;
