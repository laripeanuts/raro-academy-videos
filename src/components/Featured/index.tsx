import { SxProps, Theme } from "@mui/material";
import { WithChildren } from "../../common/childrenType";
import { Container } from "./styles";

type FeaturedProps = WithChildren<{
  sx?: SxProps<Theme>;
}>;

export const Featured = ({ children, sx = [] }: FeaturedProps) => (
  <Container
    sx={[
      {
        padding: "30px",
        flexDirection: "column",
        alignItems: "center",
        gap: "30px",
      },
      ...(Array.isArray(sx) ? sx : [sx]),
    ]}
  >
    {children}
  </Container>
);
