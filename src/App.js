import "./App.css";
import * as React from "react";
import Album from "./Album";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import CardComponent from "./CardComponent";

function App() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <Router>
        <Navbar />
        <div className="App">
          <Switch>
            <Route exact path={"/"}>
              <Album />
            </Route>
            <Route path={"/raisec"}>
              <CardComponent />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
