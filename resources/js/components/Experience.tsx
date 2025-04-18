import SectionLayout from '@/layouts/SectionLayout';
import { useContext } from 'react';
import { ExperiencesContext } from '@/context/ExperiencesContext';

export default function Experience(){
    const experienceContext= useContext(ExperiencesContext);

    if(!experienceContext) throw new Error("Something went wrong with experience context")

    const {experiences} = experienceContext;


    return(
        <SectionLayout id={'experience'} header={'Experience'} className={'text-transparent bg-clip-text bg-gradient-to-r from-neutral-300 from-50% to-100% to-neutral-400'}>
            <div className={`bg-primary-100 py-2 px-6 lg:p-2 max-w-4xl mx-auto space-y-4`}>
            {experiences && experiences.map((experience,index)=>(
                <article className={`space-y-6 ${index !== experiences.length - 1 ? 'border-b-2 border-b-black' : ''} py-6 px-5`} key={experience.id}>
                    <div className={`flex flex-col md:flex-row gap-4 items-center`}>
                        {experience.logo &&
                    <img src={`/storage/${experience.logo}`} alt={`${experience.title} logo`} className={`w-fit lg:w-fit lg:max-w-[11rem] h-12 mb-4 lg:mb-0 col-span-full`}/>
                        }
                            <header className={`text-xl font-bold`}>
                        {experience.title} at {experience.company}
                    </header>
                    <div className={`ms-auto text-end text-gray-500`}>
                        <time dateTime={new Date(experience.from_date).toLocaleDateString()}>{new Date(experience.from_date).toLocaleDateString('default',{month:'short',year:'numeric'})}</time>
                        -
                        <time dateTime={!experience.working?new Date(experience.to_date).toLocaleDateString():new Date().toLocaleDateString()}>
                            {!experience.working?new Date(experience.to_date).toLocaleDateString('default',{month:'short',year:'numeric'}):"Now"}
                        </time>

                    </div>
                    </div>
                    <p className={`w-full sm:text-justify text-lg text-gray-400`}>
                        {experience.description}
                    </p>
                </article>
            ))}
            </div>
        </SectionLayout>
    )
}
