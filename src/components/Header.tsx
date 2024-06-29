import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/scss/widgets/header.scss';

const Header: React.FC = () => {
    return (
        <header className="header">
            <h1>Mi Portfolio</h1>
            <nav>
                <Link to="/">Inicio</Link>
                <Link to="/services">Servicios</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/contact">Contacto</Link>
            </nav>
        </header>
    );
};

export default Header;
