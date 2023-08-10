import styled from "styled-components";
export const StyledFooter = styled.div`
  margin: 100px 200px 20px 200px;
`;
export const Top = styled.div`
  display: flex;
  gap: 50px;
`;
export const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;
`;
export const Left = styled.div`
  display: flex;
  align-items: center;

  .logo {
    color: #2879fe;
    font-weight: bold;
    font-size: 24px;
  }

  .copyright {
    margin-left: 20px;
    font-size: 12px;
    color: gray;
  }
`;
export const Item = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: justify;
  font-size: 14px;

  h1 {
    font-size: 18px;
    font-weight: 500;
    color: black;
  }

  span {
    color: gray;
  }
`;

export const Right = styled.div`
  img {
    height: 50px;
  }
`;
