import React from "react";
import { connect } from 'react-redux';
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import NavigationLogin from "./NavigationLogin";

const MainDiv = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    height: auto;
    padding: 2rem 5rem;
    align-items: baseline;
    color: rgb(69, 73, 30);
`;

const NavDiv = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80%;
    align-items: flex-start;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 10%;
    padding-right: 10%;
    background-color: rgb(165, 70, 35);
    a {
        color: white;
        text-decoration: none;
        transition: all 0.2s ease;
    }
    a:hover {
        letter-spacing: 2px;
        font-weight: bold;
    }
`;

const Button = styled.button`
    background: #68773c;
    border-radius: 3px;
    color: white;
    margin: 0.5em 1em;
    padding: 0.25em 1em;
`;

const Navigation = (props) => {

    const { push } = useHistory();
        const logOut = () => {
        window.localStorage.removeItem("token");
        props.setIsLoggedIn(false)
        push('/')
    }
    return (
        <div className="headerContainer">
            <MainDiv>
                <h1>Sauti African Market Place</h1>
                {props.isLoggedIn ? <Button onClick={() => {logOut()}}>Log Out</Button> : <></> }
                {props.isLoggedIn ? <></> : <NavigationLogin />}
            </MainDiv>
            <NavDiv>
                <Link to="/">Home</Link>
                {/* {props.isLoggedIn ? <></> : <Link to="/login"> Current Users: Log In</Link>} */}
                <Link to="/team">Meet The BW Team</Link>
                {props.isLoggedIn ? <></> : <Link to="/register">Create an Account</Link>}
                {props.isLoggedIn && <Link to={`/${props.id}/ownerProfile`}>Your Profile</Link>}
                {props.isLoggedIn && <Link to={`/${props.id}/itemsList`}>Items List</Link>}
            </NavDiv>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        id: state.ORS.ownerProfile.id
    }
}

export default connect(mapStateToProps, {})(Navigation);
