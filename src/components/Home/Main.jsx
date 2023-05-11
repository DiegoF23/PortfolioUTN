import React from "react";
import "../../css/Home/Main.css";
import SliderComponent from "./SliderComponent";
import slider1 from "../../assets/slider 1.jpg";
import slider2 from "../../assets/slider 2.jpg";
//import slider3 from "../../assets/slider 3.jpg";
import slider4 from "../../assets/slider 4.jpg";
import slider5 from "../../assets/slider 5.jpg";
import slider6 from "../../assets/slider 6.jpg";
const Main = () => {
  const images = [slider1, slider2, slider4, slider5, slider6];
  return (
    <>
      <div className="main">
        <div className="slider">
          <SliderComponent images={images} />;
        </div>
        <div className="tarjetaPerfil">
          <h4 className="p">
            Bienvenidos a la presentación de Diego Flores Aguirres, estudiante
            de la carrera Tecnicatura Universitaria en Programación en la
            UTN-FRT, nacido en San José de Metán, Salta, Argentina, con 28 años.
            Diego ha estado desarrollando habilidades en programación durante
            los últimos años y actualmente se encuentra en su último año de la
            carrera. Ha trabajado con lenguajes como C++, Pascal, C#, SQLserver,
            mySQL, HTML, CSS, Bootstrap, JavaScript y React, entre otros. Su
            pasión por la informática lo ha llevado a tener un amplio
            conocimiento en estas áreas. Pero Diego no solo se enfoca en la
            informática, también tiene intereses en la carpintería, finanzas,
            inversiones, cocina, electrónica y disfruta de una amplia variedad
            musical. Esta diversidad de intereses ha ampliado su perspectiva y
            le ha permitido desarrollar habilidades en diferentes campos. Con su
            actitud proactiva y su constante deseo de aprendizaje, Diego está
            seguro de que puede contribuir en cualquier proyecto que se
            proponga. No dudes en contactarlo si estás buscando un profesional
            dedicado y apasionado en su trabajo.
          </h4>
        </div>
      </div>
    </>
  );
};

export default Main;
