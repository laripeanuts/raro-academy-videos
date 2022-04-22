import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  max-height: 80px;
  background: ${(props) => props.theme.colors.blue.medium};
  color: ${(props) => props.theme.colors.white};

  svg {
    fill: ${(props) => props.theme.colors.white};
    width: 100%;
    height: 100%;
  }
`;

export const ContainerLogos = styled.div`
  display: flex;
  align-items: center;

  max-width: 280px;
  gap: 20px;
`;

export const ContainerLogo = styled.div`
  max-width: 85px;
  stroke-width: 15px;
  stroke: ${(props) => props.theme.colors.white};
`;
