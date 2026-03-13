"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Fernanda M.",
        origin: "São Paulo - SP",
        rating: 5,
        text: "Lugar maravilhoso! Quartos limpos, piscina ótima e localização perfeita perto da praia. Com certeza voltaremos com as crianças!",
        avatar: "F",
        date: "Janeiro 2025",
    },
    {
        name: "Carlos e Ana R.",
        origin: "Curitiba - PR",
        rating: 5,
        text: "Atendimento super atencioso e acolhedor. A pousada é exatamente como nas fotos. Peruíbe é linda e a Peruibiza tornou tudo ainda melhor.",
        avatar: "C",
        date: "Fevereiro 2025",
    },
    {
        name: "Juliana S.",
        origin: "Sorocaba - SP",
        rating: 5,
        text: "Estou na minha segunda visita e cada vez gosto mais. Estacionamento, piscina e os quartos são muito confortáveis. Preço justo para tanta qualidade!",
        avatar: "J",
        date: "Março 2025",
    },
    {
        name: "Roberto P.",
        origin: "Campinas - SP",
        rating: 4,
        text: "Ótima pousada familiar. Localização privilegiada, próximo ao centro e à praia. Recomendo para quem busca tranquilidade no litoral paulista.",
        avatar: "R",
        date: "Fevereiro 2025",
    },
    {
        name: "Marta e João L.",
        origin: "Santos - SP",
        rating: 5,
        text: "Simplesmente perfeito para um final de semana! A área de churrasqueira é um plus incrível. Já recomendamos para vários amigos.",
        avatar: "M",
        date: "Janeiro 2025",
    },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function TestimonialsSection() {
    return (
        <section id="avaliacoes" className="section-padding bg-surface overflow-hidden">
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
                        Avaliações
                    </span>
                    <h2 className="section-title mt-3 mb-4">
                        O que dizem nossos <span className="text-primary">hóspedes</span>
                    </h2>
                    <div className="accent-line mx-auto mb-5" />

                    {/* Rating summary */}
                    <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-sm border border-gray-100">
                        <div className="flex">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                            ))}
                        </div>
                        <span className="font-bold text-neutral-dark text-xl">4.9</span>
                        <span className="text-neutral-mid text-sm">/ 5.0 no Booking.com</span>
                    </div>
                </motion.div>

                {/* Testimonials grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={containerVariants}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={t.name}
                            variants={itemVariants}
                            className={`bg-white rounded-2xl p-6 card-shadow border border-gray-50 flex flex-col ${i === 0 ? "md:col-span-2 lg:col-span-1" : ""
                                }`}
                        >
                            {/* Quote icon */}
                            <Quote className="w-8 h-8 text-primary/20 mb-4 flex-shrink-0" />

                            {/* Stars */}
                            <div className="flex gap-0.5 mb-3">
                                {[...Array(t.rating)].map((_, j) => (
                                    <Star key={j} className="w-4 h-4 text-accent fill-accent" />
                                ))}
                            </div>

                            {/* Text */}
                            <p className="text-neutral-dark text-sm leading-relaxed flex-grow mb-5 italic">
                                &quot;{t.text}&quot;
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                                <div className="w-10 h-10 bg-gradient-to-br from-primary to-ocean rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                                    {t.avatar}
                                </div>
                                <div>
                                    <p className="font-semibold text-neutral-dark text-sm">
                                        {t.name}
                                    </p>
                                    <p className="text-neutral-mid text-xs">
                                        {t.origin} · {t.date}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
