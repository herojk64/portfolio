import React, { createContext, JSX, ReactNode, useEffect, useState } from 'react';
import ExperiencesInterface from '@/interfaces/ExperiencesInterface';
import ProjectsInterface from '@/interfaces/ProjectsInterface';

interface ProjectsContextExperiences {
    projects: ProjectsInterface[];
    setProjects: React.Dispatch<React.SetStateAction<ProjectsInterface[]>>;
}

const ProjectsContext = createContext<ProjectsContextExperiences | undefined>(undefined);

const fetchData = async (): Promise<ProjectsInterface[]> => {
    const request = await fetch('api/projects/get', {
        method: 'GET',
    });

    const response = await request.json();
    return response;
};

const ProjectsProvider = ({ children }: { children:  ReactNode | JSX.Element[] }) => {
    const [projects, setProjects] = useState<ProjectsInterface[]>([]);

    useEffect(() => {
        const cached = localStorage.getItem('projects');
        const timestamp = localStorage.getItem('projects_timestamp');

        const isStale = !timestamp || (Date.now() - parseInt(timestamp)) > 1000 * 60 * 60; // 1 hour

        try {
            if (cached && !isStale) {
                const parsed = JSON.parse(cached);
                setProjects(parsed);
            } else {
                fetchData().then(data => {
                    setProjects(data);
                    localStorage.setItem('projects', JSON.stringify(data));
                    localStorage.setItem('projects_timestamp', Date.now().toString());
                });
            }
        } catch (e) {
            console.error("Error parsing localStorage data", e);
        }
    }, []);

    return (
        <ProjectsContext.Provider value={{ projects, setProjects }}>
            {children}
        </ProjectsContext.Provider>
    );
};

export { ProjectsProvider, ProjectsContext };
