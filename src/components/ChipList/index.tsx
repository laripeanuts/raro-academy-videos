import { Chip, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { Container } from "./styles";

export type ChipListProps = {
  listTags: string[];
};

const ChipList = ({ listTags = [] }: ChipListProps) => {
  function randomColor() {
    const hex = Math.floor(Math.random() * 0xFFFFFF);
    const color = `#${hex.toString(16)}`;
    return color;
  }

  return (
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
                backgroundColor: randomColor(),
              }}
            />
          </Link>
        ))}
      </Stack>
    </Container>
  );
};

export default ChipList;
