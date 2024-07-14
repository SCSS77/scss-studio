import React from 'react';
import { useParams } from 'react-router-dom';
import projectsData from '../data/projects.json';
import '../assets/scss/pages/project-detail.scss';

interface Project {
    id: number;
    title: string;
    description: string;
    details: string;
    imageUrl: string;
    imagePortfolioUrl: string;
    imagePortfolioBigUrl: string;
    technologies: string[];
}

interface RouteParams {
    [key: string]: string | undefined;
    projectId?: string;
}

const ProjectDetail: React.FC = () => {
    const { projectId } = useParams<RouteParams>();

    if (!projectId) {
        return <div>Proyecto no encontrado.</div>;
    }

    const projectIdNumber = parseInt(projectId);

    const project: Project | undefined = projectsData.find((p: Project) => p.id === projectIdNumber);

    if (!project) {
        return <div>Proyecto no encontrado.</div>;
    }

    return (
        <>
            <section className="project-detail-main project-detail-main--first">
                <section className="project-detail container">
                    <div className="project-image">
                        <img src={project.imagePortfolioUrl} alt={project.title} />
                    </div>
                    <div className="project-content">
                        <h2>{project.title}</h2>
                        <div className="project-description">
                            <p>{project.description}</p>
                        </div>
                        <div className="technologies">
                            <ul>
                                {project.technologies.map((tech, index) => (
                                    <li key={index}>{tech}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
            <section className="project-detail-main project-detail-main--last">
                <section className="project-detail container">
                    <div className="project-image">
                        <img src={project.imagePortfolioBigUrl} alt={project.title} />
                    </div>
                    <div className="project-content">
                        <h3>Descripción</h3>
                        <div className="project-description">
                            <p>{project.details}</p>
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
};

export default ProjectDetail;
