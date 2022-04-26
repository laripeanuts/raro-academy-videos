import { styled } from "@mui/material/styles";

export const Container = styled("section")`
  padding-top: 15px;
  width: 100%;
  height: 88%;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-around;
  scroll-padding-bottom: auto;

  .progress {
    display: flex;
    height: calc(100vh - 50vh);
    align-items: center;
    justify-content: center;
  }

  .scroll {
    scroll-padding-bottom: revert;
    scroll-padding-bottom: auto;
    margin-top: 50px;
    width: 100%;
    height: 100%;
    overflow: auto;
    float: left;
    margin: 0 10px;
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
