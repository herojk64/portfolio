import React from 'react';

interface SectionLayoutProps {
    id: string;
    label?: string;
    role?: string;
    header: string;
    className: string;
    children: React.ReactNode;
}

export default function SectionLayout(props: SectionLayoutProps) {
    const { id, label, role, header, className, children } = props;

    return (
        <section
            id={id}
            role={role}
            aria-label={label}
            className="mt-24"
        >
            <header className={`mb-8 font-agency tracking-[.10rem] text-center text-3xl ${className}`}>
                {header}
            </header>
            {children}
        </section>
    );
}
