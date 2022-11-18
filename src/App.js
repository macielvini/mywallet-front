import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./assets/css/globalStyles";
import SignIn from "./pages/SignInPage/SignIn";
import AuthRoutes from "./routes/AuthRoutes";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <AuthRoutes />
      </BrowserRouter>
    </>
  );
}
