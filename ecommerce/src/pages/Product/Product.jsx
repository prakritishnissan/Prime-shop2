import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { ProductContainer } from "./ProductStyled";
import { AddShoppingCart, Balance, FavoriteBorder } from "@mui/icons-material";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";

const Product = () => {
  const id = useParams().id;
  console.log("ID:", id);
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);

  // 7 july :
  const dispatch = useDispatch(); 
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);
  const uploadUrl = process.env.REACT_APP_UPLOAD_URL;
  console.log(data);
  return (
    <>
      <Navbar />
      <ProductContainer>
        { loading ? (
          " loading pls wait !"
        ) : (
          <>
            <div className="left">
              <div className="images">
                <img
                  src={
                    uploadUrl +
                    data?.attributes?.img?.data?.attributes?.url
                  }
                  alt=""
                  onClick={(e) => setSelectedImg("img")}
                />
                <img
                  src={
                    uploadUrl +
                    data?.attributes?.img2?.data?.attributes?.url
                  }
                  alt=""
                  onClick={(e) => setSelectedImg("img2")}
                />
              </div>
              <div className="mainImg">
                <img
                  src={
                    uploadUrl +
                    data?.attributes[selectedImg]?.data?.attributes?.url
                  }
                  alt=""
                  onClick={(e) => setSelectedImg(0)}
                />
              </div>
            </div>
            <div className="right">
              <h1>{data?.attributes?.title}</h1>
              <span>₹{data?.attributes?.price}</span>
              <p>{data?.attributes?.desc}</p>
              <div className="quantity">
                <button
                  onClick={() =>
                    setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                  }
                >
                  -
                </button>
                {quantity}
                <button onClick={() => setQuantity((prev) => prev + 1)}>
                  +
                </button>
              </div>
              <button
                className="add"
                onClick={() =>
                  dispatch(
                    addToCart({
                      id: data.id,
                      title: data.attributes.title,
                      desc: data.attributes.desc,
                      price: data.attributes.price,
                      img: data.attributes.img.data.attributes.url,
                      quantity,
                    })
                  )
                }
              >
                <AddShoppingCart /> ADD TO CART
              </button>
              <div className="links">
                <div className="item">
                  <FavoriteBorder /> ADD TOO WISHLIST
                </div>
                <div className="item">
                  <Balance /> ADD TO COMPARE
                </div>
              </div>
              {/* info part */}
              <div className="info">
                <span>Vendor: Bonkers</span>
                <span>Product Type: T-Shirt</span>
                <span>Tag: T-Shirt, Jersey</span>
              </div>
              <hr />
              <div className="info">
                <span>DESCRIPTION</span>
                <hr />
                <span>ADDITIONAL INFORMATION</span>
                <hr />
                <span>FAQ</span>
              </div>
            </div>
          </>
        )}
      </ProductContainer>
      <Footer />
    </>
  );
};

export default Product;
