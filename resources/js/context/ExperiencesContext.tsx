import { createContext, JSX, ReactNode, useEffect, useState } from 'react';
import ExperiencesInterface from '@/interfaces/ExperiencesInterface';

interface ExperiencesContextInterface {
    experiences: ExperiencesInterface[];
    setExperiences: React.Dispatch<React.SetStateAction<ExperiencesInterface[]>>;
}

const ExperiencesContext = createContext<ExperiencesContextInterface | undefined>(undefined);

const fetchData = async (): Promise<ExperiencesInterface[]> => {
    const request = await fetch('api/experiences/get', {
        method: 'GET',
    });

    const response = await request.json();
    return response;
};

const ExperiencesProvider = ({ children }: { children: ReactNode | JSX.Element[] }) => {
    const [experiences, setExperiences] = useState<ExperiencesInterface[]>([]);

    useEffect(() => {
        const cached = localStorage.getItem('experiences');
        const timestamp = localStorage.getItem('experiences_timestamp');

        const isStale = !timestamp || (Date.now() - parseInt(timestamp)) > 1000 * 60 * 60; // 1 hour

        try {
            if (cached && !isStale) {
                const parsed = JSON.parse(cached);
                setExperiences(parsed);
            } else {
                fetchData().then(data => {
                    setExperiences(data);
                    localStorage.setItem('experiences', JSON.stringify(data));
                    localStorage.setItem('experiences_timestamp', Date.now().toString());
                });
            }
        } catch (e) {
            console.error("Error parsing localStorage data", e);
        }
    }, []);

    return (
        <ExperiencesContext.Provider value={{ experiences, setExperiences }}>
            {children}
        </ExperiencesContext.Provider>
    );
};

export { ExperiencesProvider, ExperiencesContext };
