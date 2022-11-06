import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/Routes";

export function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
