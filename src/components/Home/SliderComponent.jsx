import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderComponent = ({ images }) => {
  const settings = {
    dots: false, // desactivar los botones de control
    autoplay: true, // activar la reproducción automática
    autoplaySpeed: 2000, // establecer el tiempo de cambio de imagen a 1 segundo
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Slide ${index}`} />
        </div>
      ))}
    </Slider>
  );
};

export default SliderComponent;
