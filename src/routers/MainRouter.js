import React from "react";
import { useSelector } from "react-redux";
import LoggedInRouter from "./LoggedInRouter";
import LoggedOutRouter from "./LoggedOutRouter";
import { BrowserRouter as Router } from "react-router-dom";
import TokenValidation from "../hooks/TokenValidation";

const MainRouter = () => {
  const loading = TokenValidation(); 
  const loggedIn = useSelector((state) => state.user.loggedIn);
  if (loading) {
    return <div>Loading...</div>;
  }

  return <Router>{loggedIn ? <LoggedInRouter /> : <LoggedOutRouter />}</Router>;
};

export default MainRouter;
