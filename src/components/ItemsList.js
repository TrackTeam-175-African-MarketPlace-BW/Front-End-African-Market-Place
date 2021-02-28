import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getItems } from "../actions/itemsActions";

const ItemsList = (props) => {
  useEffect(() => {
    props.getItems();
    props.setIsLoggedIn(true)
  }, []);

  return (
    <div>
      <p>Hello from ItemsList Comp</p>
      {JSON.stringify(props.items, " ", 2)}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.IRS.items,
    error: state.IRS.error,
    isLoading: state.IRS.isLoading,
    isEditing: state.IRS.isEditing,
  };
};

export default connect(mapStateToProps, { getItems })(ItemsList);
