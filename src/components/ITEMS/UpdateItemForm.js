import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axiosWithAuth from "../../utils/axiosWithAuth";
import { connect } from "react-redux";

const initialState = {
  name: "",
  description: "",
  price: "",
  category: [],
  market: [],
  country: [],
};

const UpdateItemForm = () => {
  const [updateItem, setUpdateItem] = useState(initialState);
  const { id } = useParams();

  useEffect(() => {
    axiosWithAuth();
  }, []);

  return (
    <div>
      <p>hello from UpdateItemForm.js</p>
    </div>
  );
};

export default UpdateItemForm;
