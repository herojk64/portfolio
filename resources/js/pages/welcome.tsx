import { Head } from '@inertiajs/react';
import WelcomeHead from '@/meta/WelcomeHead';
import Header from '@/components/Header';
import Main from '@/components/Main';
import ExperienceWith from '@/components/ExperienceWith';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';

export default function Welcome() {
    return (
        <>
           <WelcomeHead />
            <div className='min-h-screen bg-black text-gray-200'>
                <Header />
                <Main />
                <ExperienceWith />
                <Projects />
                <Experience />
                <Contact />
            </div>

        </>
    );
}
