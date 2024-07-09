import React from "react";
import { Routes, Route } from "react-router-dom";
import LoggedOutLayout from "../components/layouts/LoggedOutLayout";

import Home from "../pages/Home";

const LoggedInRouter = () => (
  <>
    <LoggedOutLayout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </LoggedOutLayout>
  </>
);

export default LoggedInRouter;
