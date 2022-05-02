import { styled } from "@mui/material/styles";

export const Container = styled("section")`
  padding-top: 15px;
  width: 100%;
  height: 88%;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  place-content: center;
  transform: rotateY(180deg);

  .go-down-button {
    display: flex;
    justify-content: center;
    margin-left: 8%;
  }

  .load-more-button {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    place-content: center;
    align-items: center;
    opacity: 0.5;

    :hover {
      opacity: 1;
    }
  }

  .progress {
    display: flex;
    height: calc(100vh - 50vh);
    align-items: center;
    justify-content: center;
  }

  .scroll {
    margin-top: 50px;
    width: 100%;
    height: 100%;
    overflow: auto;
    float: left;
    margin: 0 10px;
    transform: rotateY(-180deg);
  }

  .scroll2::-webkit-scrollbar {
    padding-top: 20px;
    width: 5px;
  }

  .scroll2::-webkit-scrollbar-thumb {
    padding-top: 20px;
    background: #666;
  }
`;
