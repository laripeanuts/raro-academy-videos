import { ThemeProvider } from "styled-components";

import GlobalStyles from "./styles/global";
import { useTheme } from "./contexts/useTheme";

import { Home } from "./pages/Home";

function App() {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={ theme }>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  );
};

export default App;
