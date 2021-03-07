import React from "react";
import { connect } from 'react-redux';
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import NavigationLogin from "./NavigationLogin";

const MainDiv = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    height: auto;
    padding: 2rem;
    color: rgb(69, 73, 30);
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    @media screen and (max-width: 900px) {
        justify-content: center;
    }
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
    @media screen and (max-width: 600px) {
        flex-flow: column wrap;
        justify-content: center;
        align-items: center;
    }
`;

const Button = styled.button`
    background: #68773c;
    border-radius: 3px;
    color: white;
    margin: 0.5em 1em;
    padding: 0.25em 1em;
`;

const Header1 = styled.h1`
    margin-right: 2rem;
    @media screen and (max-width: 900px) {
        text-align: center;
    }
`

const Navigation = (props) => {

    const { push } = useHistory();
        const logOut = () => {
        window.localStorage.removeItem("token");
        props.setIsLoggedIn(false)
        push('/')
    }
    return (
        <div class="header-container">
            <MainDiv>
                <Header1>Sauti African Market Place</Header1>
                <span>
                    {props.isLoggedIn ? <Button onClick={() => {logOut()}}>Log Out</Button> : <></> }
                    {props.isLoggedIn ? <></> : <NavigationLogin />}
                </span>
            </MainDiv>
            <NavDiv>
                <Link to="/">Home</Link>
                <Link to="/info">About SA</Link>
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
