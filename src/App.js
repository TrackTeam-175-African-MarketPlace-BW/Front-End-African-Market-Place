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
import LandingPage from "./components/LandingPage";
import EditItem from "./components/ITEMS/EditItem";
import NewPasswordSuccess from "./components/NewPasswordSuccess";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Navigation isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Switch>
        <PrivateRoute path="/:id/ownerProfile">
          <OwnerProfile setIsLoggedIn={setIsLoggedIn} />
        </PrivateRoute>
        <PrivateRoute path="/itemsList">
          <ItemsList setIsLoggedIn={setIsLoggedIn} />
        </PrivateRoute>
        <PrivateRoute path="/singleItem/:item.id">
          <SingleItem setIsLoggedIn={setIsLoggedIn} />
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
        <Route path="/newpassword">
          <NewPasswordSuccess />
        </Route>
        <Route exact path="/">
          <LandingPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
