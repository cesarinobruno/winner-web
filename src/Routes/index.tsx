import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login/Login";
import Novo from "../pages/NewUser/admin";

function MainRoutes(): JSX.Element {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/newUser" element={<Novo />} />
      </Routes>
  );
}

export default MainRoutes;
