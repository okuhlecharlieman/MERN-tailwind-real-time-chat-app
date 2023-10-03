import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Admin from "./admin";
import Home from "./home";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="*" element={<FOF />} /> */}
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
