import React from 'react';
import { Link } from "react-router-dom";
import logo from '/img/logo2.png';
import facebook from '/img/IconoFacebook.png';
import instagram from '/img/instagramLoggo.png';


const Navbar = () => {
    return (
    <div id="navBar" className="navbar bg-white ">
        <div className="navbar__seccionIzq__container">
            <Link to="/" className="btn btn-ghost normal-case text-xl navbar__logo__margen">
                <img src={ logo } alt="Logo de Monarquia Perruna" className="logoNavbar" />
            </Link>
        </div>
        <div id="navBar__menu__container" className="flex-none">
            <ul className="menu menu-horizontal px-1">
                <li>
                    <Link className="navbar__menu__texto" to="/Nosotros">Nosotros</Link>
                </li>
                <li tabIndex={0}>
                    <a className="navbar__menu__texto">
                        Productos
                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                    </a>
                    <ul id="navBar__menuDesplegable" className="p-2 bg-base-100">
                        <li>
                            <Link className="navbar__menu__texto" to="/Productos">Chalecos</Link>
                        </li>
                        <li>
                            <Link className="navbar__menu__texto" to="/dogId">Dog ID</Link>
                        </li>
                    </ul>
                </li>
                
                <li>
                    <Link className="navbar__menu__texto" to="/Contacto">Contáctanos</Link>
                </li>
                <li className="navbar__logo__facebook">
                    <a  href="https://www.facebook.com/profile.php?id=100083939684486"><img src={ facebook } alt="Icono de facebook para acceder al perfil de Monarquía Perruna" /></a>
                </li>
                <li className="navbar__logo__instagram">
                    <a href="https://www.instagram.com/monarquia_perruna/"><img src={ instagram } alt="Icono de instagram para acceder al perfil de Monarquía Perruna" /></a>
                </li>
            </ul>
        </div>
        <div id="navBar__menuMobile__container">
        {/* The button to open modal */}

        <label htmlFor="my-modal-3" tabIndex={0} className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
        </label>
        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <div className="modal">
            <div className="modal-box relative menuDesplegable__container">
                <div>
                    <label htmlFor="my-modal-3" className="absolute right-3 top-2 menuHamburguesa__btnCierre">✕</label>
                    <li >
                        <Link to="/Nosotros" className="justify-between ">Nosotros</Link>
                    </li>
                    <li>
                        <Link to="/Productos">Chalecos</Link>
                    </li>
                    <li>
                        <Link to="/dogId">Dog ID</Link>
                    </li>
                    <li>
                        <Link to="/Contacto">Contáctanos</Link>
                    </li>
                </div>
            </div>
        </div>
        </div>
    </div>
    )
}

export default Navbar;