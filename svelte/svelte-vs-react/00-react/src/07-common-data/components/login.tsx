import React from "react";
import { MyContext } from "../context/user.context";

export const Login = () => {
  const myContext = React.useContext(MyContext);

  return (
    <>
      <h3>Enter your name:</h3>
      <input
        type="text"
        value={myContext.username}
        onChange={(e) => myContext.setUsername(e.target.value)}
      />
    </>
  );
};
