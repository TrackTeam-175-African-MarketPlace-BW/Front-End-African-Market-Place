import React from "react";
import { Link } from "react-router-dom";

const NewPasswordSuccess = () => {
  return (
    <div>
      You have changed your password successfully!
      <br></br>
      <Link to="/login" style={{ color: "red" }}>
        {" "}
        For security, Please log in with your new password.
      </Link>
    </div>
  );
};

export default NewPasswordSuccess;
