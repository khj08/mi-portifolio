import React from 'react';
import logo from "../logo.png";
//React Fontawesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
    <div className="container">
      
      <a className="navbar-brand" href="#"> <img src={logo} alt='logo...'/>  </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      < FontAwesomeIcon icon={faBars} style={{color:"#fff"}} />
      </button>
  
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Inicio<span className="visually-hidden">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Sobre mí</a>
          </li>  
          <li className="nav-item">
            <a className="nav-link" href="#">Skills</a>
          </li>  
          <li className="nav-item">
            <a className="nav-link" href="#">Proyectos</a>
          </li>  
          <li className="nav-item">
            <a className="nav-link" href="#">Contacto</a>
          </li>  
        </ul>
      </div>

    </div>
    </nav>

  )
};

export default Navbar;

