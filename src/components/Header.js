import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wraper">
        <div className="main-info">
            <h1>Portafolio de proyectos</h1>
            <Typed 
                className="typed-text"
                strings={["Web developer", "Front-end"]}
                typeSpeed={40}
                backSpeed={60}
                loop
            />
            <a href="#" className="btn-main-offer">CONTÁCTAME</a>
        </div>
    </div>
  )
}

export default Header;