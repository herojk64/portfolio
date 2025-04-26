import { Button } from '@/components/ui/button'

export default function Main() {
    const startDate = new Date('2023-01-01');
    const now = new Date();
    const experienceYears = ((now - startDate) / (1000 * 60 * 60 * 24 * 365)).toFixed(1);

    return (
        <main className="mt-8" id="home">
            <img src="/assets/avatar.svg" alt="Avatar Logo" className="mx-auto" />
            <header className="mt-8 text-4xl text-center font-bold">
                I do code and<br />
                make content{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-primary-400">
                    about it!
                </span>
            </header>
            <p className="mt-4 text-center max-w-2xl mx-auto px-4 text-lg text-gray-400 leading-relaxed">
                I’m a passionate full-stack software engineer with over <strong>{experienceYears}+</strong> years of hands-on experience.
                I specialize in building scalable, high-performance web applications using the Laravel framework on the backend,
                paired with modern frontend tools like Alpine.js, React, and other cutting-edge technologies.
                I love clean code, efficient architecture, and bringing ideas to life through robust software.
            </p>
            <div className="mt-6 text-center flex items-center justify-center gap-4" aria-label='Content Information'>
                <Button asChild variant={'default'} className='rounded-full py-4 px-6 bg-foreground text-black hover:bg-foreground/50 dark:bg-white/80 dark:hover:bg-white transition-colors text-lg'>
                <a
                    href="mailto:herojk64@gmail.com"
                    >
                    Get in touch
                </a>
                    </Button>
                    <Button className='rounded-full py-2 px-6 bg-transparent text-lg' asChild variant={'outline'}>
                <a
                    href="/assets/cv.pdf"
                    download
                >
                    Download CV
                </a>
                </Button>
            </div>
        </main>
    );
}
