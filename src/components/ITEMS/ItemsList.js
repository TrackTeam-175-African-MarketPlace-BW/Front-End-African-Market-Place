import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getItems, showSingleItem } from "../../actions/itemsActions";

const ItemsList = (props) => {
  useEffect(() => {
    props.getItems();
    props.setIsLoggedIn(true);
  }, []);

  return (
    <div>
      
        {props.items.map((item) => {
          return (
            <div key={item.id}>
              <h5>{item.name}</h5>
              <p>{item.description}</p>
              <p><strong>{item.price}</strong></p>
              <p>{item.category}</p>
              <p>{item.market}</p>
              <p>{item.country}</p>
            </div>
          )
        })}
      
      
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.IRS.items,
    error: state.IRS.error,
    deletingItem: state.IRS.deletingItem,
    showUpdate: state.SIR.showUpdate,
    selectedItem: state.SIR.selectedItem,
  };
};

export default connect(mapStateToProps, { getItems, showSingleItem })(ItemsList);
