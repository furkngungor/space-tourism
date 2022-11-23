import React from "react";
import {
  Switch,
  Route,
  useLocation,
  useRouteMatch
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home"; 
import Destinations from "./components/Destinations";
import Crew from "./components/Crew";
import Technology from "./components/Technology";



function App() {
  let {path, url} = useRouteMatch();
  const location = useLocation().pathname;
  const newClass = location.split("/")[1];
  console.log(url);
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
