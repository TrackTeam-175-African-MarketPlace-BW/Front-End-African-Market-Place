import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterStyle = styled.div`
    height: auto;
    padding: 2rem 0rem;
    text-align: center;
    width: 100%;
`;

const FooterDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
`;

const Footer =  ({ isLoggedIn }) => {
    return (
        <FooterStyle>
            {/* <center> */}
                {/* <h1>footer footer footer</h1> */}
                <FooterDiv>
                    <Link to="/">Home</Link>
                    {isLoggedIn ? <></> : <Link to="/login">Current Users: Log In</Link>}
                    {isLoggedIn ? <></> : <Link to="/register">Register Here</Link>}
                    <Link to="/team">Meet The BW Team</Link>
                    {isLoggedIn && <Link to="/:id/ownerProfile">Your Profile</Link>}
                    {isLoggedIn && <Link to="/:id/itemsList">Items List</Link>}
                </FooterDiv>
            {/* </center> */}
        </FooterStyle>
    );
};

export default Footer;