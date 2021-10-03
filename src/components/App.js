import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "../router/Home";
import Detail from "../router/Detail";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Home}></Route>
      <Route path="/:id" exact component={Detail}></Route>
    </Router>
  );
};

export default App;
