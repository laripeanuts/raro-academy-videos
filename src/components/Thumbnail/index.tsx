import Typography from "@mui/material/Typography";
import {
  InfoTumblr,
  TextTumblr,
  TumbnailContainer,
  TumbnailImage,
} from "./styles";
import { WithChildren } from "../../common/childrenType";

type TumbnailType = {
  tumbnail: string;
  name: string;
  publishedAt: string;
};

export const Tumbnail = ({
  tumbnail,
  name,
  publishedAt,
  children,
}: WithChildren<TumbnailType>) => (
  <TumbnailContainer>
    <TumbnailImage src={tumbnail} alt={name} />
    <InfoTumblr>
      <TextTumblr>
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          {name}
        </Typography>
        <Typography variant="body2">{publishedAt}</Typography>
      </TextTumblr>
      {children}
    </InfoTumblr>
  </TumbnailContainer>
);
