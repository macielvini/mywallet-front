import { Route, Routes } from "react-router-dom";
import Home from "../pages/HomePage/Home";
import Transaction from "../pages/TransactionPage.js/Transaction";

export default function HomeRoutes() {
  return (
    <>
      <Routes>
        <Route path="/home/" element={<Home />} />
        <Route path=":type" element={<Transaction />} />
      </Routes>
    </>
  );
}
