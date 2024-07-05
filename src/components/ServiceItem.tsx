import React from 'react';

interface ServiceProps {
    id: number;
    title: string;
    description: string;
    image: string;
}

const ServiceItem: React.FC<ServiceProps> = ({ title, description, image }) => {
    return (
        <div className="service-item">
            <img src={image} alt={title} className="service-image" />
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
};

export default ServiceItem;
