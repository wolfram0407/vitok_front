import React from "react";
import { useSelector } from "react-redux";
import LoggedInRouter from "./LoggedInRouter";
import LoggedOutRouter from "./LoggedOutRouter";
import { BrowserRouter as Router } from "react-router-dom";

const MainRouter = () => {
  const loggedIn = useSelector((state) => state.user.loggedIn);

  return <Router>{loggedIn ? <LoggedInRouter /> : <LoggedOutRouter />}</Router>;
};

export default MainRouter;
