import React from 'react';
import { Link } from "react-router-dom";
import logo from '/img/logo2.png';
import facebook from '/img/IconoFacebook.png';
import instagram from '/img/instagramLoggo.png';


const Navbar = () => {
    return (
    <div id="navBar" className="navbar bg-base-100">
        <div className="navbar__seccionIzq__container">
            <Link to="/" className="btn btn-ghost normal-case text-xl mx-16">
                <img src={ logo } alt="Logo de Monarquia Perruna" className="logoNavbar" />
            </Link>
        </div>
        <div id="navBar__menu__container" className="flex-none">
            <ul className="menu menu-horizontal px-1">
                <li>
                    <Link to="/Nosotros">Nosotros</Link>
                </li>
                <li tabIndex={0}>
                    <a>
                        Productos
                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                    </a>
                    <ul id="navBar__menuDesplegable" className="p-2 bg-base-100">
                        <li>
                            <Link to="/Chalecos">Chalecos</Link>
                        </li>
                        <li>
                            <Link to="/dogId">Dog ID</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="/Contacto">Contáctanos</Link>
                </li>
                <li>
                    <a href="https://www.facebook.com/profile.php?id=100083939684486"><img src={ facebook } alt="Icono de facebook para acceder al perfil de Monarquía Perruna" /></a>
                </li>
                <li>
                    <a href="https://www.instagram.com/monarquia_perruna/"><img src={ instagram } alt="Icono de instagram para acceder al perfil de Monarquía Perruna" /></a>
                </li>
            </ul>
        </div>
    </div>
    )
}

export default Navbar;