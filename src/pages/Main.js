import { useState } from "react";
import { useSelector } from "react-redux";
import MonthlySection from "../components/section/MonthlySection";
import LoggedInLayout from "../components/layouts/LoggedInLayout";

const Main = () => {
  const storeUser = useSelector((state) => state.user);
  const [createLockerUserModal, setCreateLockerUserModal] = useState(null);
  return (
    <LoggedInLayout>
      {
        <>
          <MonthlySection setCreateLockerUserModal={setCreateLockerUserModal} />

          <div>!!!</div>
        </>
      }
    </LoggedInLayout>
  );
};

export default Main;
