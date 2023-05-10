import React from "react";
import '../../css/Home/Headers.css'
import imgReact from "../../assets/perfil.jpg";
const Headers = () => {
  return (
    <>
      <div className="headers">
        <div className="caja1">
          <img className="img-perfil" src={imgReact} alt="PerfilImg" />
        </div>
        <div className="caja2">
          <h1 className="h1">Diego Flores Aguirres</h1>
        </div>
      </div>
    </>
  );
};

export default Headers;
