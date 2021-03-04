import React from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";

const MainDiv = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  /* width: 100vw; */
  padding: 0 40px;
  align-items: center;
  color: rgb(69, 73, 30);
`;

const NavDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 500px;
  align-items: baseline;
`;
const Button = styled.button`
  background: #a54623;
  border-radius: 3px;
  color: white;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
`;

const Navigation = (props) => {
  const { push } = useHistory();
  const logOut = () => {
    window.localStorage.removeItem("token");
    props.setIsLoggedIn(false);
    push("/");
  };
  return (
    <MainDiv>
      <h2>Sauti African Market Place</h2>
      {props.isLoggedIn ? (
        <Button
          onClick={() => {
            logOut();
          }}
        >
          Log Out
        </Button>
      ) : (
        <></>
      )}
      <NavDiv>
        {props.isLoggedIn ? (
          <></>
        ) : (
          <Link to="/login"> Current Users: Log In</Link>
        )}
        {props.isLoggedIn ? <></> : <Link to="/register">Register Here</Link>}

        <Link to="/team">Meet The BW Team</Link>
        <Link to="/">Home</Link>
        {props.isLoggedIn && (
          <Link to={`/${props.id}/ownerProfile`}>Your Profile</Link>
        )}
        {props.isLoggedIn && (
          <Link to={`/${props.id}/itemsList`}>Items List</Link>
        )}
      </NavDiv>
    </MainDiv>
  );
};

const mapStateToProps = (state) => {
  return {
    id: state.ORS.ownerProfile.id,
  };
};

export default connect(mapStateToProps, {})(Navigation);
