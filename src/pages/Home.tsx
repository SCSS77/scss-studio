import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { Project } from '../interfaces/projects';
import '../assets/scss/pages/home.scss';

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
    {
        id: 4,
        title: 'Proyecto 4',
        description: 'Descripción del Proyecto 4.',
        imageUrl: '/assets/images/project4.jpg',
        technologies: ['React', 'Node.js', 'MongoDB'],
    },
    {
        id: 5,
        title: 'Proyecto 5',
        description: 'Descripción del Proyecto 5.',
        imageUrl: '/assets/images/project5.jpg',
        technologies: ['Vue.js', 'Express', 'MySQL'],
    },
    {
        id: 6,
        title: 'Proyecto 6',
        description: 'Descripción del Proyecto 6.',
        imageUrl: '/assets/images/project6.jpg',
        technologies: ['Angular', 'Firebase', 'GraphQL'],
    },
    {
        id: 7,
        title: 'Proyecto 7',
        description: 'Descripción del Proyecto 7.',
        imageUrl: '/assets/images/project7.jpg',
        technologies: ['React', 'Node.js', 'MongoDB'],
    },
    {
        id: 5,
        title: 'Proyecto 8',
        description: 'Descripción del Proyecto 8.',
        imageUrl: '/assets/images/project8.jpg',
        technologies: ['Vue.js', 'Express', 'MySQL'],
    },
    {
        id: 9,
        title: 'Proyecto 9',
        description: 'Descripción del Proyecto 9.',
        imageUrl: '/assets/images/project9.jpg',
        technologies: ['Angular', 'Firebase', 'GraphQL'],
    }
];

const Home: React.FC = () => {
    return (
        <div className="home content">
            <h2 className="title">¡Hola!</h2>
            <p className="subtitle">Desarrollo web, diseño y edición de video profesional.</p>

            <div className="projects-grid">
                {projects.slice(0, 9).map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
};

export default Home;
