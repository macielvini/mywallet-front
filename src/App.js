import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./assets/css/globalStyles";
import Home from "./pages/HomePage/Home";
import SignIn from "./pages/SignInPage/SignIn";
import SignUp from "./pages/SignUpPage/SignUp";
import Transaction from "./pages/TransactionPage.js/Transaction";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/type/:type" element={<Transaction />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
