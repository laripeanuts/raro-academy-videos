import { createGlobalStyle } from "styled-components";
import { light } from "./themes/light";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

  html {
    min-height: 100%;
    height:100%;
    background: ${light.colors.primary};
  }
  
  html, body, #root {
    min-height: 100% !important;
    height: 100%;
    font-size: 100%;
    font-family: "Plus Jakarta Sans",  "Open Sans", "Roboto", "Helvetica", sans-serif;
}
`;

export default GlobalStyles;