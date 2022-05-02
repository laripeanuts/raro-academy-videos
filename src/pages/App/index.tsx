import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "../../contexts/AuthProvider";
import RoutesApp from "../../routes";

import GlobalStyles from "../../styles/global";
import { ThemeProvider } from "../../contexts/ThemeProvider";
import { useTheme } from "../../hooks/useTheme";
import { AppBackground } from "./styles";
import { CommentsProvider } from "../../contexts/CommentsProvider";

const App = () => {
  const theme = useTheme();
  return (
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider>
          <AppBackground>
            <RoutesApp />
            <GlobalStyles />
          </AppBackground>
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
