import React from 'react';
import { useSelector } from 'react-redux';
import LoggedInRouter from './LoggedInRouter';
import LoggedOutRouter from './LoggedOutRouter';

const MainRouter = () => {
  const loggedIn = useSelector((state) => state.user.loggedIn);

  return (
    <div>
      {loggedIn ? <LoggedInRouter /> : <LoggedOutRouter />}
    </div>
  );
};

export default MainRouter;
