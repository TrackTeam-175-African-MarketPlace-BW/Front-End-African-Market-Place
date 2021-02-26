import React from "react";
import styled from "styled-components";
import axiosWithAuth from "../utils/axiosWithAuth";

const Center = styled.div`
  display: flex;
  justify-content: center;
`;

const Register = () => {
  return (
    <Center>
      <form onSubmit="">
        <label htmlFor="name" />
        name:<br></br>
        <input
          type="name"
          name="name"
          value=""
          onChange=""
          placeholder="name required"
        />
        <br></br>
        <label htmlFor="password" />
        password:<br></br>
        <input
          type="password"
          name="password"
          value=""
          onChange=""
          placeholder="password required."
        />
        <br></br>
        <label htmlFor="country_id" />
        location: <br></br>
        <input
          type="text"
          name="country_id"
          value=""
          onChange=""
          placeholder="country location?"
        />
        <br></br>
        <label htmlFor="user_photo" />
        user photo?<br></br>
        <input
          type="text"
          name="user_photo"
          value=""
          onChange=""
          placeholder="user photo?"
        />
        <br></br>
        <label htmlFor="user_info" />
        tell us about yourself!<br></br>
        <input
          type="text"
          name="user_info"
          value=""
          onChange=""
          placeholder="bio?"
        />
        <br></br>
        <button style={{ marginTop: "5px" }}>Ready to register?</button>
      </form>
    </Center>
  );
};

export default Register;
