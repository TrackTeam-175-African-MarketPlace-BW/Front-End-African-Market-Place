import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Navigation from "./components/Navigation";
import OwnerProfile from "./components/OwnerProfile";
import ItemsList from "./components/ITEMS/ItemsList";
import "./App.css";
import TeamInfo from "./components/TeamInfo";
import Register from "./components/Register";
import LogIn from "./components/LogIn";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";
import EditItem from "./components/ITEMS/EditItem";
import NewPasswordSuccess from "./components/NewPasswordSuccess";
import AddItem from "./components/ITEMS/AddItem";
import ShoppingCart from './components/ShoppingCart';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Navigation isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Switch>
        <PrivateRoute path="/:id/ownerProfile">
          <OwnerProfile setIsLoggedIn={setIsLoggedIn} />
        </PrivateRoute>
        <PrivateRoute path="/:id/itemsList">
          <ItemsList setIsLoggedIn={setIsLoggedIn} />
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
        <Route path="/:id/editItem/:itemId">
          <EditItem />
        </Route>
        <Route path="/:id/addItem">
          <AddItem setIsLoggedIn={setIsLoggedIn}/>
        </Route>
        <Route path="/newpassword">
          <NewPasswordSuccess />
        </Route>
        <Route path="/car">
          <ShoppingCart />
        </Route>
        <Route exact path="/">
          <LandingPage />
        </Route>
      </Switch>
      <Footer isLoggedIn={isLoggedIn} />
    </>
  );
}

export default App;
