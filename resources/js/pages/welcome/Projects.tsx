import SectionLayout from '@/layouts/SectionLayout';
import { ReactNode, useContext } from 'react';
import { ProjectsContext } from '@/context/ProjectsContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {faShareSquare} from '@fortawesome/free-solid-svg-icons';
import { Swiper,SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import { Card,CardContent, CardHeader } from '@/components/ui/card';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Projects() {
    const projectContext = useContext(ProjectsContext);

    if (!projectContext) throw new Error('Something went wrong with the context provider');

    const { projects } = projectContext;

    return (
        <SectionLayout id={'projects'} header={'Projects'} label='Projects' className={'text-transparent bg-clip-text bg-gradient-to-r from-neutral-500 from-20% to-60% to-neutral-600'}>
            <Swiper
                slidesPerView={1}
                slidesPerGroup={1}
                spaceBetween={10}
                grabCursor={true}
                speed={1600}
                loop={true}
                autoplay={{
                    delay: 1000,
                    pauseOnMouseEnter: true
                }}
                modules={[Autoplay]}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    } as SwiperOptions,
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    } as SwiperOptions,
                }}
                className={`w-[95vw] px-4 max-w-4xl mx-auto`}>
                    {projects && projects.map((project) => (
                        <SwiperSlide key={project.id} className={'!h-auto'}>
                            <article className="h-full overflow-hidden rounded-2xl shadow-md bg-foreground">
        <Card className="h-full flex flex-col bg-transparent shadow-none p-0">
            <img
                src={`/storage/${project.thumbnail}`}
                alt={`${project.title} Preview`}
                className="w-full h-48 object-cover"
            />
            <CardHeader className="text-neutral-700 text-lg font-bold px-4 mb-0">
                        {project.title}
                    </CardHeader>
            <CardContent className="pb-3 mt-0 px-4">
                {(project.live_url || project.repo_url) && (
                    <a
                        href={project.live_url || project.repo_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-gray-400 hover:underline"
                    >
                            <FontAwesomeIcon icon={faShareSquare} className="w-5 h-5" />
                        Click here to visit
                    </a>
                )}
            </CardContent>
        </Card>
    </article>
                        </SwiperSlide>
                    )) as ReactNode}
            </Swiper>
        </SectionLayout>
    );
}
