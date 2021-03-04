import React, { useState, useEffect } from "react";
import axiosWithAuth from "../../utils/axiosWithAuth";
import { useParams, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { addItemForSale } from "../../actions/itemsActions";
import styled from "styled-components";

const Center = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-transform: lowercase;
`;

const Span = styled.span`
  font-size: 4rem;
`;
const Button = styled.button`
  background: #68773c;
  border-radius: 8px;
  color: white;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  padding-top: 7px;
  padding-bottom: 7px;
`;

const Input = styled.input`
  padding: 10px;
  border: 0;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  width: 80%;
  text-transform: lowercase;
`;

const Names = styled.span`
  font-family: "Homemade Apple", cursive;
  font-size: 14px;
`;

const Select = styled.select`
  outline: 0;
  background: white;
  width: 85%;
  height: 100%;
  color: black;
  cursor: pointer;
  border: 1px solid white;
  border-radius: 8px;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  padding: 8px;
  text-transform: lowercase;
`;

const AddItem = (props) => {
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
  const [isDisabled, setIsDisabled] = useState(true);
  const { id } = useParams();
  const { push } = useHistory();

  useEffect(() => {
    props.setIsLoggedIn(true);
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
    let value = e.target.value;
    if (e.target.name === "price") {
      if (isNaN(e.target.value)) value = "";
    }
    setItem({
      ...item,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addItemForSale(id, item);
    push(`/${id}/ownerProfile`);
  };

  return (
    <Center>
      <Span role="img" aria-label="corn and vase emoji">
        🌾🏺🌾
      </Span>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name" /> <Names>Edit Item Name</Names>:<br></br>
        <Input
          id="name"
          type="text"
          name="name"
          value={item.name}
          onChange={onChange}
        />
        <br></br>
        <label htmlFor="description" /> <Names>Edit Item Description</Names>:
        <Input
          id="description"
          type="text"
          name="description"
          value={item.description}
          onChange={onChange}
        />
        <br></br>
        <label htmlFor="price" /> <Names>Edit Item Price</Names>:<br></br>
        <Input
          id="price"
          type="text"
          name="price"
          value={item.price}
          onChange={onChange}
        />
        <br></br>
        <label htmlFor="category" /> <Names>Edit Item Category</Names>:<br></br>
        <Select
          id="category"
          name="category"
          value={item.category}
          onChange={onChange}
          defaultValue="pickOne"
        >
          <option value="pickOne">--- Pick One ---</option>
          {categories
            .sort((a, b) => a.id - b.id)
            .map((category) => {
              return (
                <option key={category.id} value={category.category}>
                  {category.category}
                </option>
              );
            })}
        </Select>
        <br></br>
        <label htmlFor="market" /> <Names>Edit Market Location</Names>:<br></br>
        <Select
          id="market"
          name="market"
          value={item.market}
          onChange={onChange}
          defaultValue="pickOne"
        >
          <option value="pickOne">--- Pick One ---</option>
          {markets
            .sort((a, b) => a.id - b.id)
            .map((market) => {
              return (
                <option key={market.id} value={market.market}>
                  {market.market}
                </option>
              );
            })}
        </Select>
        <br></br>
        <label htmlFor="country" /> <Names>Edit Country Location</Names>:
        <br></br>
        <Select
          id="country"
          name="country"
          value={item.country}
          onChange={onChange}
          defaultValue="pickOne"
        >
          <option value="pickOne">--- Pick One ---</option>
          {countries
            .sort((a, b) => a.id - b.id)
            .map((country) => {
              return (
                <option key={country.id} value={country.country}>
                  {country.country}
                </option>
              );
            })}
        </Select>
        <br></br>
        <Button type="submit">update item</Button>
      </form>
    </Center>
  );
};

export default connect(null, { addItemForSale })(AddItem);
