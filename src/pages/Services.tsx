import React from 'react';
import '../assets/scss/pages/services.scss';

interface Service {
    id: number;
    title: string;
    description: string;
    image: string;
}

const services: Service[] = [
    {
        id: 1,
        title: 'Desarrollo Frontend',
        description: 'Creación de interfaces de usuario modernas y responsivas utilizando tecnologías como React, Vue, y más.',
        image: '/assets/frontend.jpg',
    },
    {
        id: 2,
        title: 'Diseño UX/UI',
        description: 'Diseño de experiencias de usuario intuitivas y atractivas con herramientas como Figma y Adobe XD.',
        image: '/assets/design.jpg',
    },
    {
        id: 3,
        title: 'Edición de Video',
        description: 'Producción y edición de videos de alta calidad para marketing y contenido digital.',
        image: '/assets/video.jpg',
    },
    {
        id: 4,
        title: 'SEO y Optimización',
        description: 'Optimización de sitios web para mejorar el rendimiento en motores de búsqueda y la experiencia del usuario.',
        image: '/assets/seo.jpg',
    },
];

const Services: React.FC = () => {
    return (
        <div className="services">
            <h1>Nuestros Servicios</h1>
            <p>Ofrecemos una amplia gama de servicios para satisfacer todas tus necesidades digitales.</p>
            <div className="service-list">
                {services.map((service) => (
                    <div key={service.id} className="service-item">
                        <img src={service.image} alt={service.title} className="service-image" />
                        <h2>{service.title}</h2>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
            <div className="call-to-action">
                <h2>¿Interesado en nuestros servicios?</h2>
                <p>Contacta con nosotros para obtener una cotización personalizada y discutir cómo podemos ayudarte a alcanzar tus objetivos.</p>
                <button onClick={() => window.location.href = '/contact'}>Contáctanos</button>
            </div>
        </div>
    );
};

export default Services;
