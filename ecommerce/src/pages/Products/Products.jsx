import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import {
  ProductDiv,
  Left,
  FilterItem,
  InputItem,
  Right,
  CatImg,
} from "./ProductsStyled";
import List from "../../components/List/List";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const Products = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(9999);
  const [validSort, setValidSort] = useState('ASC');

  // date : 7jul :

  const [selectedSubCats, setSelectedSubCats] = useState([]);
  const { data, loading, error } = useFetch(
    `/sub-categories?populate=*&[filters][categories][id][$eq]=${catId}`
  ); 
  console.log('sub :', data)
  // const {bannerImg} = useFetch(`/categories?populate=*&[filters][products][id][$eq]=${catId}`);
  // console.log('Banner :' , bannerImg);
  // console.log(data);

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };

  return (
    <>
      <Navbar />

      <ProductDiv>
        <Left>
          <FilterItem>
            <h2>Product Categories</h2>
            {data?.map((item) => (
              <InputItem key={item.id}>
                <input
                  type="checkbox"
                  id={item.id}
                  value={item.id}
                  onChange={handleChange}
                />
                <label htmlFor={item.id}>{item.attributes.title}</label>
              </InputItem>
            ))}
          </FilterItem>

          <FilterItem>
            <h2> Filter by price</h2>
            <span>0</span>
            <input
              type="range"
              min={0}
              max={10000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </FilterItem>

          <FilterItem>
            <h2> Sort by</h2>
            <InputItem>
              <input
                type="radio"
                id="asc"
                value="asc"
                name="price"
                onChange={(e) =>  setValidSort('ASC')}
              />
              <label htmlFor="asc"> Price Lowest to Highest </label>
            </InputItem>
            <InputItem>
              <input
                type="radio"
                id="desc"
                value="desc"
                name="price"
                onChange={(e) =>  setValidSort('DESC')}
              />
              <label htmlFor="asc"> Price Highest to Lowest </label>
            </InputItem>
          </FilterItem>
        </Left>

        <Right>
          <CatImg
            src="https://images.pexels.com/photos/3404200/pexels-photo-3404200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="category image"
          />

          <List
            catId={catId}
            maxPrice={maxPrice}
            vsort={validSort}
            subCats={selectedSubCats}
          />
        </Right>
      </ProductDiv>

      <Footer />
    </>
  );
};

export default Products;
