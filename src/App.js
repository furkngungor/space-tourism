import React from "react";
import {
  Switch,
  Route,
  useLocation
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home"; 
import Destinations from "./components/Destinations";
import Crew from "./components/Crew";
import Technology from "./components/Technology";



function App() {
  const location = useLocation().pathname;
  const newClass = location.split("/")[1];

  return (
    <div className={"page " + ("page-" + newClass)}>
        <Header />
        <Switch>
          <Route path="/destination">
            <Destinations></Destinations>
          </Route>
          <Route path="/crew">
            <Crew></Crew>
          </Route>
          <Route path="/technology">
            <Technology></Technology>
          </Route>
          <Route path="/" exact>
            <Home></Home>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
