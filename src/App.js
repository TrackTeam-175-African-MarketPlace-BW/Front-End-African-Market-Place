import React from "react";
import { connect } from "react-redux";
import "./App.css";

function App() {
  return (
    <main>
      <h1>Hello Track Team 175 to African Market Place Build Week</h1>
      <p>Feb. 23, 2021</p>
    </main>
  );
}

const mapStateToProps = (state) => {
  return {
    ownerName: state.ORS.name,
    itemName: state.IRS.name,
  };
};

export default connect(mapStateToProps, {})(App);
