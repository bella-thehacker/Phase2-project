import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomPrevArrow from './CustomPrevArrow'; 
import CustomNextArrow from './CustomNextArrow'; 

const Alumnis = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://phase2-project-mock-backend.vercel.app/Alumnis")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5750,
    pauseOnHover: true,
    prevArrow: <CustomPrevArrow />, 
    nextArrow: <CustomNextArrow />, 
  };

  return (
    <div className="carousel">
      <h1>Our Alumnis</h1>

      <div className="carousel-inn">
        <Slider {...settings}>
          {data.map((data) => (
            <div className="carousel-inn-out" key={data.id}>
              <div className="details">
                <h1>{data.name}</h1>
                <img src={data.img} alt={data.name} className="c-image" />
                <h3>{data.job}</h3>
                <p>{data.review}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Alumnis;
