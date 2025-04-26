import React from 'react';
import { cn } from '@/lib/utils'; // (optional if you're using shadcn cn helper)
import Header from '@/components/global/Header';
import Contact from '@/components/global/Contact';

interface DefaultThemeProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export default function DefaultTheme({ children, className, ...props }: DefaultThemeProps) {
    return (
        <div
            className={cn('min-h-screen bg-background text-neutral-700 dark:text-neutral-800', className)}
            {...props}
        >
            <Header />
            {children}
            <Contact />
        </div>
    );
}
