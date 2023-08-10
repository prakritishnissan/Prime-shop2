import styled from "styled-components";

export const ProductDiv = styled.div`
  padding: 30px 50px;
  display: flex;
`;
export const Left = styled.div`
  flex: 1;
  position: sticky;
  height: 100%;
  top: 50px;
`;
export const FilterItem = styled.div`
  margin-bottom: 30px;
  h2 {
    font-weight: 400;
    margin-bottom: 20px;
  }
`;
export const InputItem = styled.div`
  margin-bottom: 10px;
  label {
    margin-left: 10px;
  }
`;
export const CatImg = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  margin-bottom: 50px;
`;
export const Right = styled.div`
  flex: 3;
`;
