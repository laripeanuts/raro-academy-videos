import { styled } from "@mui/material/styles";

export const Container = styled("div")`
  width: 100%;
  padding-right: 8px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  img {
    place-content: center;
    aspect-ratio: 1;
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }

  .commentListHeader {
    margin-left: 78px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 3px 0;
    flex-wrap: nowrap;
    gap: 60px;

    p,
    text {
      color: ${(props) => props.theme.palette.text.primary};
    }
  }

  .commentListBody {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    min-width: 100%;
    justify-content: space-between;
    gap: 15px;
    place-content: center;

    .containerText {
      width: 100%;
      min-height: 60px;
      padding: 10px;
      border-radius: 10px;
      background: #8080808c;
      align-items: center;
      flex-grow: 1;

      .edited {
        opacity: 0.5;
        display: flex;
        justify-content: flex-end;
      }
    }
  }

  .commentListFooter {
    margin-left: 67px;
    padding: 5px 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 10px;
  }

  .commentListActions {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .edit {
      fill: ${(props) => props.theme.palette.text.primary};

      :hover {
        cursor: pointer;
        fill: ${(props) => props.theme.palette.warning.main};
      }
    }

    .delete {
      fill: ${(props) => props.theme.palette.text.primary};

      :hover {
        fill: ${(props) => props.theme.palette.error.main};
        cursor: pointer;
      }
    }
  }

  .vote {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
`;
