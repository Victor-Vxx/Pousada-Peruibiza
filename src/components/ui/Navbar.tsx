"use client";

import { useState, useEffect } from "react";
import { Menu, X, Waves } from "lucide-react";

const navLinks = [
    { href: "#sobre", label: "Sobre" },
    { href: "#quartos", label: "Quartos" },
    { href: "#estrutura", label: "Estrutura" },
    { href: "#galeria", label: "Galeria" },
    { href: "#avaliacoes", label: "Avaliações" },
    { href: "#localizacao", label: "Localização" },
];

const BOOKING_URL =
    "https://www.booking.com/searchresults.pt.html?dest_id=6856957&highlighted_hotels=6856957&dest_type=hotel";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? "bg-white/95 backdrop-blur-md shadow-md py-3"
                    : "bg-transparent py-5"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <nav className="flex items-center justify-between">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-2 group">
                        <div
                            className={`p-1.5 rounded-lg transition-colors ${scrolled ? "bg-primary/10" : "bg-white/20"
                                }`}
                        >
                            <Waves
                                className={`w-6 h-6 ${scrolled ? "text-primary" : "text-white"
                                    }`}
                            />
                        </div>
                        <span
                            className={`font-serif font-bold text-lg leading-tight transition-colors ${scrolled ? "text-neutral-dark" : "text-white"
                                }`}
                        >
                            Pousada<br />
                            <span className="text-accent text-sm font-medium tracking-wider">
                                PERUIBIZA
                            </span>
                        </span>
                    </a>

                    {/* Desktop links */}
                    <ul className="hidden md:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className={`text-sm font-medium transition-colors hover:text-accent ${scrolled ? "text-neutral-dark" : "text-white/90"
                                        }`}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* CTA */}
                    <div className="hidden md:block">
                        <a
                            href={BOOKING_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 ${scrolled
                                    ? "bg-primary text-white hover:bg-primary-dark shadow-sm"
                                    : "bg-white text-primary hover:bg-accent hover:text-white"
                                }`}
                        >
                            Reservar Agora
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? "text-neutral-dark" : "text-white"
                            }`}
                        aria-label="Abrir menu"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </nav>

                {/* Mobile menu */}
                {isOpen && (
                    <div className="md:hidden mt-4 pb-4 bg-white rounded-2xl shadow-xl p-5 border border-gray-100">
                        <ul className="flex flex-col gap-1">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="block px-4 py-3 text-neutral-dark hover:text-primary hover:bg-surface rounded-lg font-medium transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-4 pt-4 border-t border-gray-100">
                            <a
                                href={BOOKING_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full text-center bg-primary text-white font-semibold px-5 py-3 rounded-xl hover:bg-primary-dark transition-colors"
                            >
                                Reservar Agora
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}
