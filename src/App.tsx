import { BrowserRouter } from "react-router-dom";
import RoutesApp from "./routes";

import GlobalStyles from "./styles/global";

const App = () => (
  <>
    <BrowserRouter>
      <RoutesApp />
    </BrowserRouter>
    <GlobalStyles />
  </>
);

export default App;
