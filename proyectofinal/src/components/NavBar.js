import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" activeClassName="active">Inicio</NavLink>
        </li>
        <li>
          <NavLink to="/category/remera" activeClassName="active">Remeras</NavLink>
        </li>
        <li>
          <NavLink to="/category/pantalon" activeClassName="active">Pantalones</NavLink>
        </li>
        <li>
          <NavLink to="/category/campera" activeClassName="active">Camperas</NavLink>
        </li>
        <li>
          <NavLink to="/category/zapatillas" activeClassName="active">Zapatillas</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
