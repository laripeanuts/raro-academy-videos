import { styled } from "@mui/material/styles";

export const Container = styled("section")`
  padding-top: 15px;
  width: 100%;
  height: 88%;
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-start;
  align-items: flex-start;
  transform: rotateY(180deg);

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
