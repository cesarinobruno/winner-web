import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "../pages/Home";
import Login from "../pages/Login/Login";

function MainRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default MainRoutes;
