import "./App.css";
import { useState } from "react";
import ChildComponent from "./ChildComponent";

function App() {
  const [userMessage, setUserMessage] = useState("");

  const handleInput = (value)=>{
    setUserMessage(value)
  }
  
  return (
    <div className="App-container">
      <div className="card">
        <div className="card-header">
          <h4 className="title">Parent Component</h4>
        </div>

        <div className="card-body">
          <p className="label">Your Message</p>
          <p className="text">{userMessage}</p>
        </div>
      </div>

      <ChildComponent valueChangeCallback={handleInput} />
    </div>
  );
}

export default App;
