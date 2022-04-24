import { createRoot } from "react-dom/client";

import App from "./pages/App";

const root = createRoot(document.getElementById("root") as Element);

root.render(<App />);
