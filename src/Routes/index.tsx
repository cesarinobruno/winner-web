import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login/Login";
import NovoAdm from "../pages/NewUser/admin";
import NovoUser from '../pages/NewUser/user';
import NewManager from '../pages/Home/NewManager';

function MainRoutes(): JSX.Element {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/newUserAdmin" element={<NovoAdm />} />
        <Route path="/newUser" element={<NovoUser />} />
        <Route path="/newManager" element={<NewManager />} />
      </Routes>
  );
}

export default MainRoutes;
