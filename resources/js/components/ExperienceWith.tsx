import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaravel, faReact, faJs, faHtml5, faCss3Alt, faPhp, faBootstrap } from '@fortawesome/free-brands-svg-icons';
import SectionLayout from '@/layouts/SectionLayout';

export default function ExperienceWith() {
    const experiences = [
        {
            type: 'fa',
            prefix: faLaravel
        },
        {
            type: 'fa',
            prefix: faPhp
        }, {
            type: 'fa',
            prefix: faReact
        }, {
            type: 'fa',
            prefix: faHtml5
        }, {
            type: 'fa',
            prefix: faCss3Alt
        }, {
            type: 'fa',
            prefix: faJs
        },
        {
            type: 'svg',
            prefix: '/assets/tailwindcss.svg'
        },
        {
            type: 'fa',
            prefix: faBootstrap
        }
    ];

    return (
        <SectionLayout id={'experience'} header={'Experience With'} className={'text-white'} role={'container'}
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

function Logo({ type, prefix }) {
    if (type === 'fa') return <FontAwesomeIcon icon={prefix} className="!h-12 !w-12" />;
    if (type === 'svg') return <img src={prefix} alt="Icon" className={`!h-12 !w-12`} />;
}
