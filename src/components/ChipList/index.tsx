import { Chip, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { randomBlueColor } from "../../utils/randomColors";
import { Container } from "./styles";

export type ChipListProps = {
  listTags: string[];
};

const ChipList = ({ listTags = [] }: ChipListProps) => (
  <Container>
    <Stack
      alignItems="center"
      direction={{ xs: "column", sm: "row" }}
      spacing={2}
    >
      {listTags.map((tag) => (
        <Link to={`/tag/${tag}`}>
          <Chip
            key={listTags.indexOf(tag)}
            label={tag}
            color="primary"
            size="small"
            style={{
              backgroundColor: randomBlueColor(),
              cursor: "pointer",
            }}
          />
        </Link>
      ))}
    </Stack>
  </Container>
);

export default ChipList;
