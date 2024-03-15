import React from "react";

export const MyChildComponent = () => {
  return <h4>Hello from Child Component</h4>;
};

export const MyComponent = () => {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    console.log("调用");

    return () => {
      console.log("调用的返回");
    };
  }, []);

  return (
    <>
      {visible && <MyChildComponent />}
      <button onClick={() => setVisible(!visible)}>
        Toggle Child Component Visibility
      </button>
    </>
  );
};
