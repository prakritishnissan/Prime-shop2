import React from "react";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

import styled from "styled-components";

const ListCon = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const List = ({ subCats, maxPrice, vsort, catId }) => {
  // console.log('valid sort',  vsort);
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrice}&sort=price:${vsort}`
  );

  return (
    <ListCon>
      {loading
        ? "loading please wait"
        : data?.map((item) => <Card item={item} key={item.id} />)}
    </ListCon>
  );
};

export default List;
