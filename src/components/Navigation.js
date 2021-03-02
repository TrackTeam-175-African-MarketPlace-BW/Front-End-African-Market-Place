import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MainDiv = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  //   width: 100vw;
  padding: 0 40px;
  padding-bottom: 20px;
  align-items: baseline;
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
      <h2>Sauti African Market Place</h2>
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
