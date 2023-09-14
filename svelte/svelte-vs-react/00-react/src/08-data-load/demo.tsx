import React from "react";
import { ELEMENTS } from "./constants";

export const Demo = () => {
  const [list, setList] = React.useState<boolean[]>(
    Array.from({ length: ELEMENTS }, () => true)
  );

  const [texts, setTexts] = React.useState<string[]>(
    Array.from({ length: ELEMENTS }, (_, i) => `element ${i + 1}`)
  );

  const handleChange =
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const { checked } = e.target;
      setList((current) => {
        const next = [...current];
        next[index] = checked;
        return next;
      });
    };

  const handleTextChange =
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setTexts((current) => {
        const next = [...current];
        next[index] = value;
        return next;
      });
    };

  return (
    <>
      <h1>Hello React !!</h1>
      {list.map((_, i) => (
        <div key={i}>
          <input type="checkbox" checked={list[i]} onChange={handleChange(i)} />
          <input type="text" value={texts[i]} onChange={handleTextChange(i)} />
        </div>
      ))}
    </>
  );
};
