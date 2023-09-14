import React from "react";
import { MyContext } from "../context/user.context";

export const ShowUser = () => {
  const myContext = React.useContext(MyContext);

  return (
    <>
      <h3>The user logged in is: {myContext.username}</h3>
    </>
  );
};
