import{ React, useState }from "react";
import { SliderStyle } from "./SliderStyled";
import { EastOutlined, WestOutlined } from "@mui/icons-material";

const Slider = () => {

const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    "https://images.pexels.com/photos/757279/pexels-photo-757279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://scontent.fjrh2-1.fna.fbcdn.net/v/t1.6435-9/123806630_2696288730621336_2057433489364257525_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=e3f864&_nc_ohc=dw1vSplEHikAX-14_-e&_nc_ht=scontent.fjrh2-1.fna&oh=00_AfBFkoE48v6AOFdtXRJdVePe3ZA7ceBDYT75qCSUL--_bA&oe=64C528BE",
    "https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8yNTYxOTU1NS9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTc0NTExNzY1Nn0.Q5Z9swhbfXE0B13JztcNQ7XQ70pLw4RDwmCLq8kw3kQ/img.jpg?width=1200&height=800&quality=85&coordinates=0%2C16%2C0%2C853",
  ];

  const prevSlide = () =>{
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  }
  const nextSlide = () =>{
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  }

  return (
    <SliderStyle>
      <div className="container" style ={{transform: `translateX(-${currentSlide * 100}vw)`}}>
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>

      <div className="icons">
        <div className="icon" onClick = {prevSlide}>
          <WestOutlined />
        </div>
        <div className="icon" onClick = {nextSlide}>
          <EastOutlined />
        </div>
      </div>
    </SliderStyle>
  );
};

export default Slider;
