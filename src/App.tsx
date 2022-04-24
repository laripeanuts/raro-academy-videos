import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthProvider";
import RoutesApp from "./routes";

import GlobalStyles from "./styles/global";

const App = () => (
  <AuthProvider>
    <BrowserRouter>
      <RoutesApp />
    </BrowserRouter>
    <GlobalStyles />
  </AuthProvider>
);

export default App;
