import { Route, Routes } from "react-router-dom";
import Home from "../pages/HomePage/Home";

export default function HomeRoutes() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}
