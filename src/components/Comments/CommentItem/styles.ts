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

  .commentListContainer {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-left: 10px;
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
    display: flex;
    flex-direction: row;
    min-width: 100%;
    justify-content: space-between;
    gap: 15px;
    place-content: center;

    .containerText {
      width: 100%;
      padding: 10px;
      border-radius: 10px;
      background: ${(props) => props.theme.palette.mode === "dark" ? "#404040" : "#c2c2c2"};
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
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  }

  .commentListVotes {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    svg {
      cursor: pointer;
      color: ${(props) => props.theme.palette.text.primary};
      transition: all 0.3s ease-in-out;

      :hover {
        color: ${(props) => props.theme.palette.primary.main};
      }
    }

    .commentListActions {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      fill: ${(props) => props.theme.palette.text.primary};
      gap: 10px;
    }

    .vote {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
    }
  }

  .edit {
    opacity: 0.5;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    margin-right: 10px;

    &:hover {
      fill: ${(props) => props.theme.palette.warning.main};
      opacity: 1;
    }
  }

  .delete {
    fill: ${(props) => props.theme.palette.text.primary};
    opacity: 0.5;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      fill: ${(props) => props.theme.palette.error.main};
      opacity: 1;
    }
  }

  .cancel {
    margin-right: 15px;
    opacity: 0.5;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      opacity: 1;
    }
  }
`;

export const MessageResponse = styled("div")`
  opacity: 0.5;
`;
