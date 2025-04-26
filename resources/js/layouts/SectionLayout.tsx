import React from 'react';

interface SectionLayoutProps {
    id: string;
    header: string;
    className: string;
    role?:string;
    label?:string;
    children: React.ReactNode;
}

export default function SectionLayout(props: SectionLayoutProps) {
    const { id, header, className,role ="region",label,children } = props;

    return (
        <section
            id={id}
            className="mt-24"
            role={role}
            aria-labelledby={label}
        >
            <header className={`mb-8 font-agency tracking-[.10rem] !text-transparent text-center text-3xl ${className}`}>
                {header}
            </header>
            {children}
        </section>
    );
}
