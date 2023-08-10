import styled from "styled-components";

export const CategoriesDiv = styled.div`
  display: flex;
  height: 80vh;
  gap: 10px;
  margin: 10px;

  .link {
    text-decoration: none;
  }
`;
export const Row = styled.div`
  flex: 1;
  display: flex;
  gap: 10px;
  position: relative;
  overflow: hidden;
`;
export const Col = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const ColLarge = styled(Col)`
  flex: 2;
`;

export const Button = styled.button`
  position: absolute;
  min-width: 100px;
  width: fit-content;
  height: 50px;
  padding: 10px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  cursor: pointer;
  border: none;
  text-transform: uppercase;
  font-weight: 500;
  text-decoration : none;

  background-color: #fff;
  box-shadow: none;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 0 10px 2px #00ffff;
  }
`;

export const ImageBox = styled.div`
  flex: 1;
  display: flex;
  gap: 10px;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

export default CategoriesDiv;
