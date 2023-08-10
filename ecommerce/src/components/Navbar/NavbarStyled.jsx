import { Link } from "react-router-dom";
import styled from "styled-components";

export const Image = styled.img`
height: 20px;
width: 30px;
`;

export const StyledLink = styled(Link)`
color: #333;
  text-decoration: none;
  color: black;
  letter-spacing: 1.5px;
  

  &:hover {
    text-decoration: underline;
    
  }
`;

export const Nav = styled.div`
  height: 80px;
`;

export const Wrapper = styled.div`
  padding: 10px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color : white;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;

export const Center = styled.div`
  font-size: 30px;
  letter-spacing: 2px;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;

export const Icons = styled.div`
  display: flex;
  gap: 15px;
  color: gray;
  cursor: pointer;
`;

export const CartIcon = styled.div`
  position: relative;

  span {
    font-size: 12px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #2879fe;
    color: white;
    position: absolute; 
    right: -10px;
    top: -10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;