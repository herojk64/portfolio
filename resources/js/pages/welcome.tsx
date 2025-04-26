import WelcomeHead from '@/meta/WelcomeHead';
import Main from '@/pages/welcome/Main';
import ExperienceWith from '@/pages/welcome/ExperienceWith';
import Projects from '@/pages/welcome/Projects';
import Experience from '@/pages/welcome/Experience';
import DefaultTheme from '@/layouts/DefaultTheme';

export default function Welcome() {
    return (
        <>
           <WelcomeHead />
           <DefaultTheme>
                <Main />
                <ExperienceWith />
                <Projects />
                <Experience />
            </DefaultTheme>
        </>
    );
}
