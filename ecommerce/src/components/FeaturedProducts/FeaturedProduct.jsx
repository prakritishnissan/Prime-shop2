import React from "react";
import { Featured } from "./FeaturedProductsStyled";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

const FeaturedProduct = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <Featured>
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni nihil
          doloribus ex, quis neque dolorem vero quibusdam! Veritatis, modi cum.
        </p>
      </div>
      <div className="bottom">
        {error
          ? "Something went wrong"
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </Featured>
  );
};

export default FeaturedProduct;
