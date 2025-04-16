import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    return (
        <header className="bg-primary-100 shadow-md px-6 py-4 w-full z-50">
            <div className="flex items-center justify-between sm:justify-evenly px-0">

                <h1 className="text-2xl font-bold text-primary-800">Amit Dhakal</h1>

                {/* Mobile menu toggle */}
                <button
                    className="md:hidden text-primary-700"
                    onClick={() => setIsMenuOpen(true)}
                    aria-label="Open menu"
                >
                    <Menu size={28} />
                </button>

                {/* Desktop Nav */}
                <nav className="hidden md:block">
                    <ol className="flex space-x-6">
                        <li><a href="#home" className="text-primary-700 hover:text-primary-900 transition-colors">Home</a></li>
                        <li><a href="#projects" className="text-primary-700 hover:text-primary-900 transition-colors">Projects</a></li>
                        <li><a href="#experience" className="text-primary-700 hover:text-primary-900 transition-colors">Experience</a></li>
                        <li><a href="#contact" className="text-primary-700 hover:text-primary-900 transition-colors">Contact</a></li>
                    </ol>
                </nav>
            </div>

            {/* Off-canvas mobile nav */}
            <div
                className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
                    isMenuOpen ? "bg-black bg-opacity-50" : "pointer-events-none opacity-0"
                }`}
                onClick={() => setIsMenuOpen(false)}
            >
                <div
                    className={`fixed top-0 left-0 h-full w-64 bg-primary-100 p-6 shadow-lg transform transition-transform duration-300 ${
                        isMenuOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-semibold text-primary-800">Menu</h2>
                        <button
                            className="text-primary-700"
                            onClick={() => setIsMenuOpen(false)}
                            aria-label="Close menu"
                        >
                            <X size={24} />
                        </button>
                    </div>
                    <nav>
                        <ol className="space-y-4">
                            <li><a href="#home" onClick={()=>setIsMenuOpen(false)} className="block text-primary-700 hover:text-primary-900 py-4">Home</a></li>
                            <li><a href="#projects" onClick={()=>setIsMenuOpen(false)} className="block text-primary-700 hover:text-primary-900 py-4">Projects</a></li>
                            <li><a href="#experience" onClick={()=>setIsMenuOpen(false)} className="block text-primary-700 hover:text-primary-900 py-4">Experience</a></li>
                            <li><a href="#contact" onClick={()=>setIsMenuOpen(false)} className="block text-primary-700 hover:text-primary-900 py-4">Contact</a></li>
                        </ol>
                    </nav>
                </div>
            </div>
        </header>
    );
}
