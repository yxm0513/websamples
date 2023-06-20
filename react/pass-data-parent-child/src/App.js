import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import ChildComponent from "./ChildComponent";

function App() {
  const [message, setMessage] = useState("");

  return (
    <div className="App-container">
      <div className="card">
        <div className="card-header">
          <h4 className="title">Parent Component</h4>
        </div>

        <div className="card-body">
          <p className="label">Message</p>
          <input
            type="text"
            value={message}
            onChange={({ target }) => {
              setMessage(target.value);
            }}
            placeholder='Enter Message'
          />
        </div>
      </div>

      <ChildComponent messageString={message} />
    </div>
  );
}

export default App;
