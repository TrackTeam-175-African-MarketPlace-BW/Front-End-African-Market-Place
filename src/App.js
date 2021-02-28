import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Navigation from "./components/Navigation";
import OwnerProfile from "./components/OwnerProfile";
import ItemsList from "./components/ItemsList";
import "./App.css";
import TeamInfo from "./components/TeamInfo";
import Register from "./components/Register";
import LogIn from "./components/LogIn";
import SingleItem from "./components/SingleItem";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Navigation isLoggedIn={isLoggedIn} />
      <Switch>
        <PrivateRoute exact path="/:id/ownerProfile">
          <OwnerProfile setIsLoggedIn={setIsLoggedIn}/>
        </PrivateRoute>
        <PrivateRoute path="/:id/itemsList">
          <ItemsList setIsLoggedIn={setIsLoggedIn}/>
        </PrivateRoute>
        <Route path="/team">
          <TeamInfo />
        </Route>
        <Route path="/login">
          <LogIn />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/singleItem">
          <SingleItem />
        </Route>
        <Route exact path="/">
          <p>Hello from the Home page</p>
        </Route>
      </Switch>
    </>
  );
}

export default App;
