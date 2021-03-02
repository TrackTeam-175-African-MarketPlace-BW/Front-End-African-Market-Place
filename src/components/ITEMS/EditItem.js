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
  const [item, setItem] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    market: "",
    country: "",
    owner: "",
    owner_email: "",
  });
  const [countries, setCountries] = useState([]);
  const [categories, setCategories] = useState([]);
  const [markets, setMarkets] = useState([]);

  const { itemId } = useParams();

  useEffect(() => {
    axiosWithAuth()
      .get(`users/${props.id}/items/${itemId}`)
      .then((res) => {
        console.log("cd: EditItem.js, axios.get response: ", res);
        setItem(res.data);
      })
      .catch((err) => {
        console.log("cd: EditItem.js: axios.get error: ", { err });
      });
    axiosWithAuth()
      .get("/countries")
      .then((res) => setCountries(res.data))
      .catch((err) => console.log(err))
    axiosWithAuth()
      .get("/categories")
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err))
    axiosWithAuth()
      .get("/markets")
      .then((res) => setMarkets(res.data))
      .catch((err) => console.log(err))
  }, []);
  

  return (
    <div>
      <p>hello from EditItem.js </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    item_id: state.SIR.selectedItem.id,
    id: state.ORS.owner_id,
    item: state.SIR.selectedItem,
  };
};

export default connect(mapStateToProps, {})(EditItem);
