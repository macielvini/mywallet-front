import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./assets/css/globalStyles";
import AuthRoutes from "./routes/AuthRoutes";
import HomeRoutes from "./routes/HomeRoutes";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <AuthRoutes />
        <HomeRoutes />
      </BrowserRouter>
    </>
  );
}
