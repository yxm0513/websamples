import React from "react";

interface Props {
  name: string;
}

export const HelloWorld = (props: Props) => {
  return <h1>00 Hello {props.name}</h1>;
};
