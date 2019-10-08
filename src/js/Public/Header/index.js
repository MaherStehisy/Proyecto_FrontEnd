import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
      <header className="header">
        <nav className="nav">
          <ul className="menu">
            <li className="menu-item">
              <Link to="/" className="menu-item-link">Inicio</Link>
            </li>
            <li className="menu-item">
              <Link to="/login" className="menu-item-link">Iniciar Sesion</Link>
            </li>
            <li className="menu-item">
              <Link to="/signup" className="menu-item-link">Registrarse</Link>
            </li>
            <li className="menu-item">
              <Link to="/about" className="menu-item-link">Acerca de</Link>
            </li>
            <li className="menu-item">
              <Link to="/contact" className="menu-item-link">Contáctanos</Link>
            </li>
          </ul>
        </nav>
      </header>
    )
  }  
  export default Header;