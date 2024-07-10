import React from "react";
import { useSelector } from "react-redux";
import LoggedInRouter from "./LoggedInRouter";
import LoggedOutRouter from "./LoggedOutRouter";
import { BrowserRouter as Router } from "react-router-dom";
import TokenValidation from "../hooks/TokenValidation";

import { getCookie } from "../utils/cookies";
const MainRouter = () => {
  const loading = TokenValidation(); // 훅 호출
  const loggedIn = useSelector((state) => state.user.loggedIn);
  if (loading) {
    return <div>Loading...</div>; // 로딩 중일 때 표시할 컴포넌트
  }

  console.log(loggedIn);
  return <Router>{loggedIn ? <LoggedInRouter /> : <LoggedOutRouter />}</Router>;
};

export default MainRouter;
