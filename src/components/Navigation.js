import React from "react";
import { connect } from 'react-redux';
import { Link, useHistory } from "react-router-dom";
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

const Navigation = (props) => {

  const { push } = useHistory();
  const logOut = () => {
    window.localStorage.removeItem("token");
    props.setIsLoggedIn(false)
    push('/')
  }
  return (
    <MainDiv>
      <h1>Sauti African Market Place</h1>
      {props.isLoggedIn ? <button onClick={() => {logOut()}}>Log Out</button> : <></> }
      <NavDiv>

        {props.isLoggedIn ? <></> : <Link to="/login"> Current Users: Log In</Link>}
        {props.isLoggedIn ? <></> : <Link to="/register">Register Here</Link>}

        <Link to="/team">Meet The BW Team</Link>
        <Link to="/">Home</Link>
        {props.isLoggedIn && <Link to={`/${props.id}/ownerProfile`}>Your Profile</Link>}
        {props.isLoggedIn && <Link to={`/${props.id}/itemsList`}>Items List</Link>}
      </NavDiv>
    </MainDiv>
  );
};

const mapStateToProps = (state) => {
  return {
    id: state.ORS.ownerProfile.id
  }
}

export default connect(mapStateToProps, {})(Navigation);
