import React from "react";
import { useSelector } from "react-redux";
const Home = () => {
  const storeUser = useSelector((state) => state.user);

  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the Home page!</p>
      <div>
        {storeUser &&
          Object.entries(storeUser).map(([key, value]) => (
            <div key={key}>
              <strong>{key}:</strong> {value}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
