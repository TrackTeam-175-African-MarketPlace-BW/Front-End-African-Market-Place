import React, {useEffect} from "react";
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

const Span = styled.span`
  display: inline-block;
  position: relative;
  top: -8px;
  left: 0px;
  font-weight: bold;
  line-height: 18px;
  text-align: center;
  background: lightcoral;
  border-radius: 100%;
  width: 18px;
  height: 18px;
  color: white;
`;

const Navigation = (props) => {
  const { push } = useHistory();
  useEffect(() => {}, [props.cart])

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
        {props.isLoggedIn && (
          <Link to={`/${props.id}/cart`}>
            Shopping Cart <Span>{props.cart.length}</Span>
          </Link>
        )}
      </NavDiv>
    </MainDiv>
  );
};

const mapStateToProps = (state) => {
  return {
    id: state.ORS.ownerProfile.id,
    cart: state.ORS.shoppingCart,
  };
};

export default connect(mapStateToProps, {})(Navigation);
