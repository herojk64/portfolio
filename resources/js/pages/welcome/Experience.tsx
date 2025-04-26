import SectionLayout from '@/layouts/SectionLayout';
import { useContext } from 'react';
import { ExperiencesContext } from '@/context/ExperiencesContext';
import { Card, CardContent, CardHeader } from '@/components/ui/card'; // assuming you have Card from Shadcn

export default function Experience() {
    const experienceContext = useContext(ExperiencesContext);

    if (!experienceContext) throw new Error("Something went wrong with experience context");

    const { experiences } = experienceContext;

    return (
        <SectionLayout
            id="experience"
            header="Experience"
            className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-300 from-50% to-100% to-neutral-400"
        >
            <div className="bg-primary-100 py-2 px-6 lg:p-2 max-w-4xl mx-auto space-y-4">
                {experiences && experiences.map((experience) => (
                    <article key={experience.id} className="rounded-xl">
                        <Card className="w-full bg-primary-200/50 backdrop-blur-sm border shadow-sm">
                            <CardHeader className="flex flex-col md:flex-row items-center gap-4">
                                {experience.logo && (
                                    <img
                                        src={`/storage/${experience.logo}`}
                                        alt={`${experience.title} logo`}
                                        className="w-auto max-w-[16rem] h-20 object-contain"
                                    />
                                )}
                                <div className="flex-1 text-center md:text-left">
                                    <h3 className="text-xl font-bold text-neutral-700">
                                        {experience.title} at {experience.company}
                                    </h3>
                                    <div className="text-gray-400 text-sm mt-1">
                                        <time dateTime={new Date(experience.from_date).toISOString()}>
                                            {new Date(experience.from_date).toLocaleDateString('default', { month: 'short', year: 'numeric' })}
                                        </time>
                                        {" - "}
                                        <time dateTime={experience.working ? new Date().toISOString() : new Date(experience.to_date).toISOString()}>
                                            {experience.working
                                                ? "Now"
                                                : new Date(experience.to_date).toLocaleDateString('default', { month: 'short', year: 'numeric' })}
                                        </time>
                                    </div>
                                </div>
                            </CardHeader>

                            <CardContent>
                                <p className="text-gray-400 text-base leading-relaxed text-justify">
                                    {experience.description}
                                </p>
                            </CardContent>
                        </Card>
                    </article>
                ))}
            </div>
        </SectionLayout>
    );
}
