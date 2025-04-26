import '../css/app.css';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import { ExperiencesProvider } from '@/context/ExperiencesContext';
import { ProjectsProvider } from '@/context/ProjectsContext';
import { initializeTheme } from './hooks/use-appearance';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob('./pages/**/*.tsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <ExperiencesProvider>
                <ProjectsProvider>
                    <App {...props} />
                </ProjectsProvider>
            </ExperiencesProvider>
        );
    },
    progress: {
        color: '#4B5563',
    },
});

initializeTheme();
