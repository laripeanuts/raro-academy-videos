import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "../../contexts/AuthProvider";
import RoutesApp from "../../routes";

import GlobalStyles from "../../styles/global";
import { ThemeProvider } from "../../contexts/ThemeProvider";
import { useTheme } from "../../hooks/useTheme";
import { AppBackground } from "./styles";

const App = () => {
  const theme = useTheme();
  return (
    <AuthProvider>
      <ThemeProvider>
        <AppBackground>
          <BrowserRouter>
            <RoutesApp />
          </BrowserRouter>
          <GlobalStyles />
        </AppBackground>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
