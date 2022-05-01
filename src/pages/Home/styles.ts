import { styled } from "@mui/material/styles";

export const Container = styled("section")`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 30px;
  align-items: center;

  .link-carousel {
    padding: 10px;
    border-radius: 10px;
    font-weight: bold;

    /* prettier-ignore */
    :hover {
      color: ${({ theme }) => theme.palette.primary.main};
      backdrop-filter: blur(8px);
      background-color: ${(props) =>
      props.theme.palette.mode === "dark"
        ? "rgba(87, 87, 87, 0.18)"
        : "rgba(135, 135, 135, 0.13)"};
    }
  }
`;

export const Row = styled("section")`
  display: flex;
  width: 100%;
  align-items: baseline;
  justify-content: space-between;
`;
