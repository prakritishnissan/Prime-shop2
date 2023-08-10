import React from "react";
import {
  StyledFooter,
  Top,
  Item,
  Bottom,
  Left,
  Right
} from "./FooterStyled";

const Footer = () => {
  return (
    <>
      <StyledFooter>
        <Top>
          <Item>
            <h1>Categories</h1>
            <span>Women</span>
            <span>Men</span>
            <span>Shoes</span>
            <span>Accessories</span>
            <span>New Arrivals</span>
          </Item>

          <Item>
            <h1>Links</h1>
            <span>FAQ</span>
            <span>Pages</span>
            <span>Stores</span>
            <span>Compare</span>
            <span>Cookies</span>
          </Item>

          <Item>
            <h1>About</h1>
            <span>
              Introducing PRIME, your ultimate destination for modern clothing
              online. At PRIME, we cater to individuals of all ages and genders,
              offering a diverse range of clothing options for men, women, and
              kids. With a keen focus on contemporary fashion, our store brings
              you the latest trends and styles to keep you looking effortlessly
              stylish. Whether you're seeking trendy outfits for a night out,
              comfortable everyday wear, or adorable ensembles for your little
              ones, PRIME has it all. Our curated collection is thoughtfully
              designed to reflect the latest fashion sensibilities, ensuring
              that you always stay ahead of the style game. Embrace the modern
              aesthetic and elevate your wardrobe with PRIME's exceptional
              clothing selection. 
            </span>
          </Item>

          <Item>
            <h1>Contacts</h1>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              perspiciatis veritatis quaerat expedita earum sed cum illum unde
              aliquid incidunt.
            </span>
          </Item>
        </Top>
        <Bottom>
          <Left>
            <span  className="logo">Primestore</span>
            <span className="copyright">
              © {new Date().getFullYear()}. All Rights Reserved
            </span>
          </Left>

          <Right>
            <img src="./img/payment.png" alt="" />
          </Right>
        </Bottom>
      </StyledFooter>
    </>
  );
};

export default Footer;
