"use client";

import { ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";

const BOOKING_URL =
    "https://www.booking.com/searchresults.pt.html?dest_id=6856957&highlighted_hotels=6856957&dest_type=hotel";

export default function HeroSection() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
            aria-label="Hero - Pousada Peruibiza"
        >
            {/* Background image with overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=1920&q=80')",
                }}
                role="img"
                aria-label="Vista da praia de Peruíbe ao entardecer"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-ocean-deep/70 via-primary/50 to-neutral-dark/80" />

            {/* Wave decoration at bottom */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg
                    viewBox="0 0 1440 80"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    className="w-full h-16 md:h-20"
                >
                    <path
                        d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
                        fill="white"
                    />
                </svg>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center text-white">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full px-4 py-2 mb-6"
                >
                    <div className="flex">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 text-accent fill-accent" />
                        ))}
                    </div>
                    <span className="text-sm font-medium">Peruíbe · Litoral Sul de SP</span>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-5 leading-tight"
                >
                    Pousada{" "}
                    <span className="text-accent-light">Peruibiza</span>
                </motion.h1>

                {/* Subheading */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-lg sm:text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed"
                >
                    Conforto e tranquilidade a poucos passos das praias de Peruíbe.{" "}
                    <span className="text-accent-light font-medium">Família, piscina e boa vida</span> esperam por você.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a
                        href={BOOKING_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-accent hover:bg-accent-light text-neutral-dark font-bold text-lg px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-2xl hover:-translate-y-0.5 w-full sm:w-auto justify-center"
                    >
                        Ver Disponibilidade
                        <ArrowRight className="w-5 h-5" />
                    </a>
                    <a
                        href="#sobre"
                        className="btn-outline w-full sm:w-auto justify-center"
                    >
                        Conheça a Pousada
                    </a>
                </motion.div>

                {/* Trust badges */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-14 flex flex-wrap items-center justify-center gap-6 text-white/70 text-sm"
                >
                    {[
                        "✅ Melhor preço garantido",
                        "🏖️ Próximo à praia",
                        "🅿️ Estacionamento grátis",
                        "🏊 Piscina inclusa",
                    ].map((badge) => (
                        <span key={badge} className="font-medium">
                            {badge}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
