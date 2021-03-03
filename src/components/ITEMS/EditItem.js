import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import axiosWithAuth from "../../utils/axiosWithAuth";
import { updateSingleItem } from '../../actions/itemsActions';

const EditItem = (props) => {
  const [item, setItem] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    market: "",
    country: "",
  });
  const [countries, setCountries] = useState([]);
  const [categories, setCategories] = useState([]);
  const [markets, setMarkets] = useState([]);

  const { push } = useHistory();
  const { id, itemId } = useParams();

  useEffect(() => {
    axiosWithAuth()
      .get(`users/${id}/items/${itemId}`)
      .then((res) => {
        console.log("cd: EditItem.js, axios.get response: ", res);
        setItem({
          name: res.data.name,
          description: res.data.description,
          price: res.data.price,
          category: res.data.category,
          market: res.data.market,
          country: res.data.country,
        });
      })
      .catch((err) => {
        console.log("cd: EditItem.js: axios.get error: ", { err });
      });
    axiosWithAuth()
      .get("/countries")
      .then((res) => setCountries(res.data))
      .catch((err) => console.log(err));
    axiosWithAuth()
      .get("/categories")
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err));
    axiosWithAuth()
      .get("/markets")
      .then((res) => setMarkets(res.data))
      .catch((err) => console.log(err));
  }, []);

  const onChange = (e) => {
    const value =
      e.target.name === "price" ? parseInt(e.target.value, 10) : e.target.value;
    setItem({
      ...item,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.updateSingleItem(id, itemId, item)
    push(`/${id}/ownerProfile`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name" /> Edit Item Name
      <input
        id="name"
        type="text"
        name="name"
        value={item.name}
        onChange={onChange}
      />
      <label htmlFor="description" /> Edit Item Description
      <input
        id="description"
        type="text"
        name="description"
        value={item.description}
        onChange={onChange}
      />
      <label htmlFor="price" /> Edit Item Price
      <input
        id="price"
        type="text"
        name="price"
        value={item.price}
        onChange={onChange}
      />
      <label htmlFor="category" /> Edit Item Category
      <select
        id="category"
        name="category"
        value={item.category}
        onChange={onChange}
        defaultValue="pickOne"
      >
        <option value="pickOne">--- Pick One ---</option>
        {categories.map((category) => {
          return (
            <option key={category.id} value={category.category}>
              {category.category}
            </option>
          );
        })}
      </select>
      <label htmlFor="market" /> Edit Market Location
      <select
        id="market"
        name="market"
        value={item.market}
        onChange={onChange}
        defaultValue="pickOne"
      >
        <option value="pickOne">--- Pick One ---</option>
        {markets.map((market) => {
          return (
            <option key={market.id} value={market.market}>
              {market.market}
            </option>
          );
        })}
      </select>
      <label htmlFor="country" /> Edit Country Location
      <select
        id="country"
        name="country"
        value={item.country}
        onChange={onChange}
        defaultValue="pickOne"
      >
        <option value="pickOne">--- Pick One ---</option>
        {countries.map((country) => {
          return (
            <option key={country.id} value={country.country}>
              {country.country} 
            </option>
          );
        })}
      </select>
      <button type='submit'>Update Item</button>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    item_id: state.SIR.selectedItem.id,
    id: state.ORS.owner_id,
    item: state.SIR.selectedItem,
  };
};

export default connect(mapStateToProps, {updateSingleItem})(EditItem);
