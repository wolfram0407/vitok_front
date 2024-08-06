import { Routes, Route, Outlet } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";

import AminDrawer from "../components/AminDrawer";

//볼링장
import FranchiseDrawer from "../components/FranchiseDrawer";

import Main from "../pages/Main";
import LockerSetting from "../pages/user/lockerSetting/LockerSetting";
import Member from "../pages/user/member/Member";

const Container = styled.div`
  width: 100vw;
  min-height: 100%;
  display: flex;
`;

const RootView = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 23rem;
`;

const LoggedInOutlet = ({ grade }) => {
  const token = localStorage.getItem("token") ?? sessionStorage.getItem("token") ?? null;
  const logUserOut = () => {};

  return <Outlet context={{ token, grade }} />;
};

const LoggedInRouter = () => {
  const grade = useSelector((state) => state.user.grade);
  const isAdmin = useSelector((state) => (state.user.grade === 7 ? true : false));

  return (
    <Container>
      {isAdmin ? (
        <></>
      ) : (
        <>
          <FranchiseDrawer grade={grade} />
          <RootView>
            <Routes>
              <Route element={<LoggedInOutlet grade={grade} />}></Route>
              <Route path="/" element={<Main />} />
              <Route path="/lockerSetting" element={<LockerSetting />} />
              <Route path="/member" element={<Member />} />
            </Routes>
          </RootView>
        </>
      )}
      {/* 세로 메뉴 */}
    </Container>
  );
};

export default LoggedInRouter;
