import React from "react";

interface UserContext {
  username: string;
  setUsername: (value: string) => void;
}

export const MyContext = React.createContext({
  username: "",
  setUsername: (value) => {},
});

export const MyContextProvider = (props) => {
  const [username, setUsername] = React.useState("John Doe");

  return (
    <MyContext.Provider value={{ username, setUsername }}>
      {props.children}
    </MyContext.Provider>
  );
};
