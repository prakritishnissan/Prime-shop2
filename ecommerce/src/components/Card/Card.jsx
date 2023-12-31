import React from "react";
import { Link } from "react-router-dom";
import { CardStyle } from "./CardStyled";

const linkStyle = {
  textDecoration: "none",
  color: "black",
};
const Card = ({ item }) => {
  return (
    <Link
      to={`/product/${item.id}`}
      className="link"
      style={linkStyle}
    >
      <CardStyle>
        <div className="image">
          {item?.attributes.isNew && <span>New Season</span>}
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL +
              item.attributes?.img?.data?.attributes?.url
            }
            alt=""
            className="mainImg"
          />
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL +
              item.attributes?.img2?.data?.attributes?.url
            }
            alt=""
            className="secondImg"
          />
        </div>

        <h2>{item?.attributes.title}</h2>
        <div className="prices">
          <h3> ₹{item.oldPrice || item?.attributes.price + 500} </h3>
          <h3> ₹{item?.attributes.price} </h3>
        </div>
      </CardStyle>
    </Link>
  );
};

export default Card;
