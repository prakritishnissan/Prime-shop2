import {
  Facebook,
  Instagram,
  Twitter,
  Google,
} from "@mui/icons-material";

import styled from "styled-components";

const ContactContainer = styled.div`
  background-color: #ffea20;
  //background-image: url("https://static.vecteezy.com/system/resources/previews/002/752/888/original/floral-pattern-pretty-flowers-on-white-background-printing-with-small-pink-flowers-ditsy-print-seamless-texture-cute-flower-patterns-elegant-template-for-fashionable-printers-vector.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: black;
  padding: 15px;
  display: flex;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Mail = styled.div``;
const Icons = styled.div`
  display: flex;
  gap: 10px;
  cursor: pointer;
`;
const Icon = styled(Icons)`
  &:hover {
    color: #F94C66;
  }
`;
const Input = styled.input`
  padding: 10px;
  border: none;
  border-radius: 5px 0 0 5px;
`;
const Button = styled.button`
  padding: 10px;
  color: white;
  background: #333;
  border-radius: 0 5px 5px 0;
  border: none;
  cursor: pointer;
`;

const ContactUs = () => {
  return (
    <ContactContainer>
      <Wrapper>
        <span> Be in contact with us :</span>
        <Mail>
          <Input type="text" placeholder="Enter your e-mail..." />
          <Button>JOIN US</Button>
        </Mail>
        <Icons>
          <Icon>
            <Facebook />
          </Icon>
          <Icon>
            <Instagram />
          </Icon>
          <Icon>
            <Twitter />
          </Icon>
          <Icon>
            <Google />
          </Icon>
        </Icons>
      </Wrapper>
    </ContactContainer>
  );
};

export default ContactUs;
