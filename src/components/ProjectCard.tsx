import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../interfaces/projects';
import '../assets/scss/widgets/project-card.scss';

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <div className="project-card">
            <Link to={`/project/${project.id}`} className="project-card-link">
                <div className="project-image">
                    <img src={project.imageUrl} alt={project.title} loading="lazy" />
                </div>
                <div className="project-details">
                    <h2>{project.title}</h2>
                    <div className="technologies">
                        <ul>
                            {project.technologies.map((tech, index) => (
                                <li key={index}>{tech}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ProjectCard;
