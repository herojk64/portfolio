import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faFonticonsFi, faUpwork } from '@fortawesome/free-brands-svg-icons';
import { Link } from '@inertiajs/react';

export default function Contact(){
    const startDate = new Date('2023-01-01');
    const now = new Date();
    const experienceYears = ((now - startDate) / (1000 * 60 * 60 * 24 * 365)).toFixed(1);

    return (
        <footer id={`contact`} className={`mt-24 py-16 bg-foreground`}>
            <div className={'py-2 px-6 lg:p-2 max-w-4xl mx-auto space-y-6'}>
                <header className={'text-2xl font-bold'}>Contact</header>
                <p className={'sm:text-justify text-gray-400'}>Experienced Full Stack Laravel Developer with {experienceYears}+ years of building scalable, high-performance web applications. Proficient in both front-end and back-end development with a strong focus on clean architecture and modern Laravel practices.</p>

                <a href='mailto:herojk64@gmail.com' target='_blank' className={'block text-neutral-800 hover:underline'}>
                    <FontAwesomeIcon icon={faEnvelope} className={'me-2'}/>
                    herojk64@gmail.com
                </a>

                <Link href={route('privacy-policy')} className='block'>
                Privacy Policy
                </Link>

                <div className={'space-x-6'}>
                    <a href='https://www.linkedin.com/in/herojk64/' target='_blank' className={`text-neutral-800`}>
                        <FontAwesomeIcon icon={faLinkedin} className={'!w-6 !h-6'}/>
                    </a>
                    <a href='https://www.fiverr.com/herojk64/' target='_blank' className={`text-neutral-800`}>
                        <FontAwesomeIcon icon={faFonticonsFi} className={'!w-6 !h-6'}/>
                    </a>
                    <a href='https://www.upwork.com/freelancers/~01d362a701e1fc7717?mp_source=share' target='_blank'  className={`text-neutral-800`}>
                        <FontAwesomeIcon icon={faUpwork} className={'!w-6 !h-6'}/>
                    </a>
                </div>
            </div>
        </footer>
    )
}
