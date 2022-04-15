import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

  html {
    min-height: 100%;
    height:100%;
  }
  
  html, body, #root {
    min-height: 100% !important;
    height: 100%;
    font-size: 100%;
    font-family: "Plus Jakarta Sans",  "Open Sans", "Roboto", "Helvetica", sans-serif;
}
`;

export default GlobalStyles;