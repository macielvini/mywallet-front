import { Route, Routes } from "react-router-dom";
import SignIn from "../pages/SignInPage/SignIn";
import SignUp from "../pages/SignUpPage/SignUp";

export default function AuthRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </>
  );
}
