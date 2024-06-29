import React from 'react';
import '../assets/scss/pages/portfolio.scss';

interface Project {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    technologies: string[];
}

const projects: Project[] = [
    {
        id: 1,
        title: 'Proyecto 1',
        description: 'Descripción del Proyecto 1.',
        imageUrl: '/assets/images/project1.jpg',
        technologies: ['React', 'Node.js', 'MongoDB'],
    },
    {
        id: 2,
        title: 'Proyecto 2',
        description: 'Descripción del Proyecto 2.',
        imageUrl: '/assets/images/project2.jpg',
        technologies: ['Vue.js', 'Express', 'MySQL'],
    },
    {
        id: 3,
        title: 'Proyecto 3',
        description: 'Descripción del Proyecto 3.',
        imageUrl: '/assets/images/project3.jpg',
        technologies: ['Angular', 'Firebase', 'GraphQL'],
    },
];

const Portfolio: React.FC = () => {
    return (
        <div className="portfolio">
            <h1>Mi Portafolio</h1>
            <p>Aquí puedes ver algunos de mis proyectos destacados y las tecnologías que utilizo.</p>

            <div className="projects">
                {projects.map((project) => (
                    <div key={project.id} className="project-item">
                        <img src={project.imageUrl} alt={project.title} className="project-image" />
                        <div className="project-details">
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                            <div className="technologies">
                                <strong>Tecnologías utilizadas:</strong>
                                <ul>
                                    {project.technologies.map((tech, index) => (
                                        <li key={index}>{tech}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
