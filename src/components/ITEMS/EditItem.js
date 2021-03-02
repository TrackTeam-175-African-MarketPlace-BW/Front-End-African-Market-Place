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

  // useEffect(() => {
  //     axiosWithAuth()
  //         .get(`users/${props.id}/items/${props.item_id}`)
  //       .then((res) => {
  //           console.log("cd: EditItem.js: axios.get request: response: ",{res})
  //         })
  //       .catch((err) => {
  //           console.log("cd: EditItem.js: axios.get request error: ", {err})
  //         })
     
  // }, []);

  return (
    <div>
      <p>hello from EditItem.js </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    item_id: state.IRS.items.id,
    id: state.ORS.owner_id,
    item: state.SIR.selectedItem,    
  };
};

export default connect(mapStateToProps, {})(EditItem);
