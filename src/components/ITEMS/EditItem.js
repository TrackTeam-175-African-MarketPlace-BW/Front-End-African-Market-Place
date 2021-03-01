import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import axiosWithAuth from "../../utils/axiosWithAuth";

const initialState = {
  name: "",
  description: "",
  price: "",
  category: [],
  market: [],
  country: [],
};

const EditItem = (props) => {

  const [item, setItem] = useState(initialState);
  const { id } = useParams();

  useEffect(() => {
      axiosWithAuth()
          .get(`users/${id}/items/${item.id}`)
          .then((res) => { })
          .catch((err) => { })
      props.isLoggedIn(true);
  }, []);

  return (
    <div>
      <p>hello from EditItem.js </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, {})(EditItem);
