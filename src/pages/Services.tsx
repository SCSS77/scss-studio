import React from 'react';
import ServiceItem from '../components/ServiceItem';
import servicesData from '../data/services.json';
import '../assets/scss/pages/services.scss';

interface Service {
    id: number;
    title: string;
    description: string;
    image: string;
}

const services: Service[] = servicesData;

const Services: React.FC = () => {
    return (
        <div className="services">
            <h1>Nuestros Servicios</h1>
            <p>Ofrecemos una amplia gama de servicios para satisfacer todas tus necesidades digitales.</p>
            <div className="service-list">
                {services.map(service => (
                    <ServiceItem
                        key={service.id}
                        id={service.id}
                        title={service.title}
                        description={service.description}
                        image={service.image}
                    />
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
