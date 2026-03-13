"use client";

import { motion } from "framer-motion";
import { Wifi, Car, Waves, Flame, Wind, Tv, Utensils, Sun } from "lucide-react";

const amenities = [
    {
        icon: Waves,
        title: "Piscina",
        description: "Piscina ampla para adultos e crianças, perfeita para se refrescar.",
        color: "text-primary",
        bg: "bg-surface",
    },
    {
        icon: Wifi,
        title: "Wi-Fi Gratuito",
        description: "Internet de alta velocidade em todos os ambientes da pousada.",
        color: "text-primary",
        bg: "bg-surface",
    },
    {
        icon: Car,
        title: "Estacionamento",
        description: "Estacionamento gratuito e seguro para os hóspedes.",
        color: "text-primary",
        bg: "bg-surface",
    },
    {
        icon: Wind,
        title: "Ar-condicionado",
        description: "Todos os quartos com ar-condicionado para maior conforto.",
        color: "text-primary",
        bg: "bg-surface",
    },
    {
        icon: Tv,
        title: "TV e Frigobar",
        description: "Televisão a cabo e frigobar em todos os apartamentos.",
        color: "text-primary",
        bg: "bg-surface",
    },
    {
        icon: Flame,
        title: "Churrasqueira",
        description: "Área de churrasqueira para momentos especiais em família.",
        color: "text-primary",
        bg: "bg-surface",
    },
    {
        icon: Sun,
        title: "Área de Lazer",
        description: "Espaços de convivência e descanso para toda a família.",
        color: "text-primary",
        bg: "bg-surface",
    },
    {
        icon: Utensils,
        title: "Quartos Familiares",
        description: "Acomodações espaçosas ideais para famílias com crianças.",
        color: "text-primary",
        bg: "bg-surface",
    },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AmenitiesSection() {
    return (
        <section id="estrutura" className="section-padding bg-sand">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-14"
                >
                    <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                        Comodidades
                    </span>
                    <h2 className="section-title mt-3 mb-4">
                        Tudo que você precisa <br />
                        <span className="text-primary">para relaxar</span>
                    </h2>
                    <div className="accent-line mx-auto mb-5" />
                    <p className="section-subtitle max-w-2xl mx-auto">
                        Pensamos em cada detalhe para que a sua estada seja confortável,
                        divertida e inesquecível.
                    </p>
                </motion.div>

                {/* Grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={containerVariants}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
                >
                    {amenities.map((amenity) => {
                        const Icon = amenity.icon;
                        return (
                            <motion.div
                                key={amenity.title}
                                variants={itemVariants}
                                className="group bg-white rounded-2xl p-5 text-center card-shadow card-shadow-hover transition-all duration-300 hover:-translate-y-1 cursor-default"
                            >
                                <div className="flex justify-center mb-4">
                                    <div className="w-14 h-14 bg-surface rounded-2xl flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                                        <Icon className={`w-7 h-7 ${amenity.color} group-hover:scale-110 transition-transform`} />
                                    </div>
                                </div>
                                <h3 className="font-semibold text-neutral-dark mb-2 text-sm md:text-base">
                                    {amenity.title}
                                </h3>
                                <p className="text-neutral-mid text-xs md:text-sm leading-relaxed hidden md:block">
                                    {amenity.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
