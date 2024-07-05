import React from 'react';
import '../assets/scss/widgets/footer.scss';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <p>© {new Date().getFullYear()} SCSS Studio. Todos los derechos reservados.</p>
        </footer>
    );
};

export default Footer;
