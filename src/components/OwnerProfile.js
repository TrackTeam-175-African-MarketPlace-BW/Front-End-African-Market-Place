import React, { useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

// NOTE baseURL/api /${id}/profile

const OwnerProfile = () => {
  // REVIEW can I only view the user profile if I am currently logged in as that user?

  useEffect(() => {
    axiosWithAuth()
      .get("users/1")
      .then((response) => {
        console.log(("OwnerProfile success response", response));
      })
      .catch((error) => {
        console.log("OwnerProfile error", error.response.data.message);
      });
  }, []);

  return (
    <div>
      <p>Hello From Owner Profile!</p>
    </div>
  );
};

export default OwnerProfile;
