import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Fast from '@fortawesome/free-brands-svg-icons';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import SectionLayout from '@/layouts/SectionLayout';

type IconType = 'fa' | 'svg' | 'png' | 'jpg'

interface ExperiencesInterface{
    type: IconType,
    prefix: IconDefinition | string
}

export default function ExperienceWith() {
    const experiences: ExperiencesInterface[] = [
        { type: 'fa', prefix: Fast.faLaravel },
        { type: 'fa', prefix: Fast.faPhp },
        { type: 'fa', prefix: Fast.faReact },
        { type: 'fa', prefix: Fast.faHtml5 },
        { type: 'fa', prefix: Fast.faCss3Alt },
        { type: 'fa', prefix: Fast.faJs },
        { type: 'svg', prefix: '/assets/tailwindcss.svg' },
        { type: 'fa', prefix: Fast.faBootstrap },
      ];

    return (
        <SectionLayout id={'experience_with'} header={'Experience With'} className={'bg-neutral-700 bg-clip-text'} role={'container'}
                       label={'Author Experiences'}>
            <div className="flex items-center flex-wrap justify-evenly max-w-2xl mx-auto px-8 gap-3"
                 role="Language Experiences"
                 aria-label="ExperienceWith with programming languages">
                {experiences && experiences.map((experience, index) => (
                    <Logo key={index} type={experience.type} prefix={experience.prefix} />
                ))}
            </div>
        </SectionLayout>
    );
}

function Logo({ type, prefix }:ExperiencesInterface) {
    if (type === 'fa') return <FontAwesomeIcon icon={prefix as IconDefinition} className="!h-12 !w-12 text-neutral-700" />;
    if (type === 'svg') return <img src={prefix as string} alt="Icon" className={`!h-12 !w-12`} />;
}
