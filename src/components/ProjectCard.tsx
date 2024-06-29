import React from 'react';
import { Project } from '../interfaces/projects';
import '../assets/scss/widgets/project-card.scss';

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <div className="project-card">
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
    );
};

export default ProjectCard;
