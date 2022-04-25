import { SxProps, Theme } from "@mui/material";
import { WithChildren } from "../../common/childrenType";
import { Container } from "./styles";

type FeaturedProps = WithChildren<{
  sx?: SxProps<Theme>;
  padding?: number;
}>;

export const Featured = ({ children, sx = [], padding }: FeaturedProps) => {
  padding = padding || 10;
  return (
    <Container
      sx={[
        {
          padding: `${padding}px`,
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
};
