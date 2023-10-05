import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Admin from "./admin";
import Home from "./home";
import Landing from "./landing";
import SignInModal from "../components/signInModal";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* <Route path="*" element={<FOF />} /> */}
        <Route path="/admin" element={<Admin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignInModal />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
