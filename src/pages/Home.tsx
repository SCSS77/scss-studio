import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { Project } from '../interfaces/projects';
import '../assets/scss/pages/home.scss';
import projectsData from '../data/projects.json';

const Home: React.FC = () => {
    const projects: Project[] = projectsData;

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
