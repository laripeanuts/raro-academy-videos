import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    line-height: 1.5;
  }

  html, body, #root {
    min-height: 100vh;
    font-size: 100%;
    font-family: "Plus Jakarta Sans",  "Open Sans", "Roboto", "Helvetica", sans-serif;
    -webkit-font-smoothing: antialiased;

    button {
      cursor: pointer;
    }

    a {
      text-decoration: none;
    }

    ul {
      list-style-type: none;
    }
}
`;

export default GlobalStyles;
