import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar.js";
import Login from "./Components/Login/Login.js";
import Signup from "./Components/Signup/Signup.js";
function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact="true">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/whale"></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
