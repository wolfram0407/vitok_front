import { Route, Routes } from "react-router-dom";
import Footer from "../components/common/Footer";
import styled from "styled-components";
import LoggedOutHeader from "../components/common/LoggedOutHeader";


import Welecome from "../pages/Welecome";
import Login from "../pages/user/Login";
import Register from "../pages/user/Register";

const RootView = styled.div`
  width: 100vw;
  height: calc(100vh - 26rem);
`;

const LoggedOutRouter = () => {
  return (
    <>
      <LoggedOutHeader />
      <RootView>
        <Routes>
          <Route path="/" element={<Welecome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register  />} />
        </Routes>
      </RootView>
      <Footer />
    </>
  );
};

export default LoggedOutRouter;