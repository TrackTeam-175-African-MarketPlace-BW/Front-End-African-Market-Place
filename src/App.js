import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Navigation from "./components/Navigation";
import OwnerProfile from "./components/OwnerProfile";
import ItemsList from "./components/ITEMS/ItemsList";
import SingleItem from "./components/ITEMS/SingleItem";
import UpdateItemForm from "./components/ITEMS/UpdateItemForm";
import "./App.css";
import TeamInfo from "./components/TeamInfo";
import Register from "./components/Register";
import LogIn from "./components/LogIn";
import EditItem from "./components/ITEMS/EditItem";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Navigation isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <Switch>

        <PrivateRoute path="/:id/ownerProfile">
          <OwnerProfile setIsLoggedIn={setIsLoggedIn}/>
        </PrivateRoute>
        <PrivateRoute exact path="/:id/itemsList">
          <ItemsList setIsLoggedIn={setIsLoggedIn} />
        </PrivateRoute>
        <PrivateRoute exact path="/singleItem/:item.id">
          <SingleItem setIsLoggedIn={setIsLoggedIn}/>
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
        <Route path="/updateItem">
          <UpdateItemForm />
        </Route>
        <Route exact path="/">
          <p>Hello from the Home page</p>
        </Route>
      </Switch>
    </>
  );
}

export default App;
