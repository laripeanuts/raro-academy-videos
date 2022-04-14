import { ThemeProvider } from "styled-components";

import GlobalStyles from "./styles/global";
import light from "./styles/themes/light";

import { Home } from "./pages/home";

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  );
};

export default App;
