import React, { useState } from "react";

function ChildComponent(props) {
  const [message, setMessage] = useState("");

  return (
    <div className="card">
      <div className="card-header">
        <h4 className="title">Child Component</h4>
      </div>

      <div className="card-body">
        <p className="label">Message</p>
        <input
          type="text"
          value={message}
          onChange={({ target }) => {
            setMessage(target.value);
          }}
          placeholder="Enter Message"
        />

        <button
          onClick={() => {
            props.valueChangeCallback(message);
          }}
          className='btn'
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default ChildComponent;
