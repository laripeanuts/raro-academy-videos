import { Chip, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { randomBlueColor } from "../../utils/randomColors";
import { removeRepeated } from "../../utils/removeRepeated";
import { ChipListContainer, Container } from "./styles";

export type ChipListProps = {
  listTags: string[];
};

const ChipList = ({ listTags = [] }: ChipListProps) => (
  <Container>
    <ChipListContainer>
      {removeRepeated(listTags).map((tag) => (
        <Link to={`/tag/${tag}`} key={listTags.indexOf(tag)}>
          <Chip
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
    </ChipListContainer>
  </Container>
);

export default ChipList;
