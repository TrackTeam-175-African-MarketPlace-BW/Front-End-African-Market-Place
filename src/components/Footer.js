import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterStyle = styled.div`
  height: auto;
  padding: 2rem 2rem 4rem 2rem;
`;

const NavDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 500px;
`;

const Footer = ({ isLoggedIn }) => {
  return (
    <FooterStyle>
      <center>
        <h3>footer footer footer</h3>
        <NavDiv>
          {isLoggedIn ? <></> : <Link to="/login">Current Users: Log In</Link>}
          {isLoggedIn ? <></> : <Link to="/register">Register Here</Link>}
          <Link to="/team">Meet The BW Team</Link>
          <Link to="/">Home</Link>
          {isLoggedIn && <Link to="/:id/ownerProfile">Your Profile</Link>}
          {isLoggedIn && <Link to="/:id/itemsList">Items List</Link>}
        </NavDiv>
      </center>
    </FooterStyle>
  );
};

export default Footer;
