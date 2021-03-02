import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MainDiv = styled.div`
  display: flex;
  justify-content: space-between;
  height: auto;
  //   width: 100vw;
  padding: 0 40px;
  align-items: center;
  color: rgb(69, 73, 30);
`;

const NavDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 500px;
`;

const Navigation = ({ isLoggedIn }) => {
  return (
    <MainDiv>
      <h1>Sauti African Market Place</h1>
      <NavDiv>
        {isLoggedIn ? <></> : <Link to="/login">Current Users: Log In</Link>}
        {isLoggedIn ? <></> : <Link to="/register">Register Here</Link>}
        <Link to="/team">Meet The BW Team</Link>
        <Link to="/">Home</Link>
        {isLoggedIn && <Link to="/:id/ownerProfile">Your Profile</Link>}
        {isLoggedIn && <Link to="/:id/itemsList">Items List</Link>}
      </NavDiv>
    </MainDiv>
  );
};

export default Navigation;
