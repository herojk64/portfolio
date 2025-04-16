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
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Projects() {
    const projectContext = useContext(ProjectsContext);

    if (!projectContext) throw new Error('Something went wrong with the context provider');

    const { projects } = projectContext;

    return (
        <SectionLayout id={'projects'} header={'Projects'} className={'text-transparent bg-clip-text bg-gradient-to-r from-neutral-500 from-20% to-60% to-neutral-600'} role={'container'}
                       label={'Projects'}>
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
                            <article className={`h-full bg-primary-100 overflow-hidden rounded-xl`}>
                                <img src={`/storage/${project.thumbnail}`} alt={`${project.title} Preview`}
                                     className={`w-full h-[15rem] mb-4 object-cover aspect-5/5`} />
                                <a href={project.live_url || project.repo_url} target={'_blank'} aria-disabled={(!!(project.live_url || project.repo_url))} className={` px-2`}>
                                    {(project.live_url || project.repo_url) &&
                                        <span className={`text-gray-400 font-semibold text-xs`}>
                                            CLICK HERE TO VIST
                                        </span>}
                                    <header className={`text-2xl font-bold text-gray-200 flex items-center justify-between px-2`}>
                                        <span>{project.title}</span>
                                        {(project.live_url || project.repo_url) &&
                                            <span>
                                                <FontAwesomeIcon icon={faShareSquare} />
                                            </span>
                                        }
                                    </header>
                                </a>
                            </article>
                        </SwiperSlide>
                    )) as ReactNode}
            </Swiper>
        </SectionLayout>
    );
}
