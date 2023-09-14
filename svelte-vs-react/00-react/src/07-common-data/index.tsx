import React from "react";
import { Login } from "./components/login";
import { ShowUser } from "./components/showuser";
import { MyContextProvider } from "./context/user.context";

export const CommonData = () => {
  return (
    <MyContextProvider>
      <h1>07 Common Data</h1>
      <Login />
      <ShowUser />
    </MyContextProvider>
  );
};
