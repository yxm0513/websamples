import React from "react";
import { ELEMENTS } from "./constants";

export const Demo = () => {
  const [list, setList] = React.useState<boolean[]>(
    Array.from({ length: ELEMENTS }, () => true)
  );

  const [texts, setTexts] = React.useState<string[]>(
    Array.from({ length: ELEMENTS }, (_, i) => `element ${i + 1}`)
  );

  const handleChange = (index: number) =>
    React.useCallback((checked: boolean) => {
      setList((current) => {
        const next = [...current];
        next[index] = checked;
        return next;
      });
    }, []);

  const handleTextChange = (index: number) =>
    React.useCallback((value: string) => {
      setTexts((current) => {
        const next = [...current];
        next[index] = value;
        return next;
      });
    }, []);

  return (
    <>
      <h1>Hello React !!</h1>
      {list.map((_, i) => (
        <div key={i}>
          <Checkbox value={list[i]} onChange={handleChange(i)} />
          <Input value={texts[i]} onChange={handleTextChange(i)} />
        </div>
      ))}
    </>
  );
};

interface CheckboxProps {
  value: boolean;
  onChange: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = React.memo((props) => {
  const { value: checked, onChange } = props;
  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
    />
  );
});

interface InputProps {
  value: string;
  onChange: (value: string) => void;
}

const Input: React.FC<InputProps> = React.memo((props) => {
  const { value, onChange } = props;
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
});
