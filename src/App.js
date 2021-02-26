import React from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Navigation from "./components/Navigation";
import OwnerProfile from "./components/OwnerProfile";
import ItemsList from "./components/ItemsList";
import "./App.css";
import TeamInfo from "./components/TeamInfo";
import Register from "./components/Register";
import LogIn from "./components/LogIn";

function App() {

  return (
    <>
      <Navigation />
      <Switch>
        <PrivateRoute path="/ownerProfile">
          <OwnerProfile />
        </PrivateRoute>
        <PrivateRoute path="/itemsList">
          <ItemsList />
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
        <Route exact path="/">
          <p>Hello from the Home page</p>
        </Route>
      </Switch>
    </>
  );
}



export default App;
