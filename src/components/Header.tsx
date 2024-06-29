import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/scss/widgets/header.scss';

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="container">
                <h1 className="logo">SCSS</h1>
                <nav className="nav">
                    <ul>
                        <li><Link to="/">inicio</Link></li>
                        <li><Link to="/services">servicios</Link></li>
                        <li><Link to="/portfolio">portfolio</Link></li>
                        <li><Link to="/contact">contacto</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
