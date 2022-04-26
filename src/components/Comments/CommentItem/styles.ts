import { styled } from "@mui/material/styles";

export const Container = styled("div")`
  padding-right: 8px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  content-align: center;

  img {
    aspect-ratio: 1;
    width: 63px;
    height: 63px;
    border-radius: 50%;
  }

  .commentListHeader {
    margin-left: 78px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 3px 0;
  }

  .commentListBody {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 15px;

    p {
      width: 100%;
      padding: 10px;
      border-radius: 10px;
      background: ${(props) => props.theme.palette.grey[700]};
    }
  }

  .commentListFooter {
    margin-left: 78px;
    padding: 5px 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 15px;
  }

  .vote {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 7px;
  }
`;
