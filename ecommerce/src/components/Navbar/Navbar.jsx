import React, { useState } from "react";
import {
  KeyboardArrowDown,
  Search,
  PersonOutlineOutlined,
  FavoriteBorderOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { StyledLink, Nav, Wrapper, Left, Center, Right, Item, Image, Icons, CartIcon} from "./NavbarStyled";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";


const Navbar = () => {
  const [open,setOpen] = useState(false)
  const products = useSelector((state) => state.cart.products);
  return (
    <Nav>
      <Wrapper>
        <Left>
          <Item>
            <Image src="/img/Flag_of_India.png" alt="india" />
            <KeyboardArrowDown />
          </Item>
          <Item>
            <span>IND</span>
            <KeyboardArrowDown />
          </Item>

          <Item>
            <StyledLink to="/products/1"> Women </StyledLink>
          </Item>
          <Item>
            <StyledLink to="/products/2"> Men </StyledLink>
          </Item>
          <Item>
            <StyledLink to="/products/3"> Children </StyledLink>
          </Item>
        </Left>

        <Center>
          <StyledLink to="/">PRIME</StyledLink>
        </Center>

        <Right>
          <Item>
            <StyledLink to="/">Homepage</StyledLink>
          </Item>
          <Item>
            <StyledLink to="/">About</StyledLink>
          </Item>
          <Item>
            <StyledLink to="/">Contacts</StyledLink>
          </Item>
          <Icons>
            <Search/>
            <PersonOutlineOutlined/>
            <FavoriteBorderOutlined/>
            <CartIcon onClick={()=>setOpen(!open)}>
              <ShoppingCartOutlined/>
              <span>{products.length}</span>
            </CartIcon>
          </Icons>

        </Right>
      </Wrapper>
      {open && <Cart/>}
    </Nav>
  );
};

export default Navbar;
