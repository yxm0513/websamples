import React from "react";

export const ConditionalRendering = () => {
  const [showName, setShowName] = React.useState(false);

  return (
    <>
      <h1>06 Conditional Rendering</h1>
      <button onClick={() => setShowName(!showName)}>Toggle show name</button>
      {showName ? (
        <h3>Hello, world!</h3>
      ) : (
        <h5>Click on toggle to show the name</h5>
      )}
    </>
  );
};
