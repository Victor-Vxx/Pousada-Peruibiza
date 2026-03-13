"use client";

import { motion } from "framer-motion";
import { Heart, MapPin, Users } from "lucide-react";

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function AboutSection() {
    return (
        <section id="sobre" className="section-padding bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Image side */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUp}
                        className="relative"
                    >
                        <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80"
                                alt="Área de lazer e piscina da Pousada Peruibiza"
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                        </div>

                        {/* Floating card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="absolute -bottom-6 -right-4 md:right-0 bg-white rounded-2xl shadow-xl p-5 max-w-[200px] border border-gray-100"
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-10 h-10 bg-surface rounded-xl flex items-center justify-center">
                                    <Users className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-neutral-dark font-serif">500+</p>
                                    <p className="text-xs text-neutral-mid">hóspedes felizes</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Beach proximity badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="absolute top-6 -left-4 bg-accent text-white rounded-2xl shadow-lg p-4 text-center"
                        >
                            <MapPin className="w-5 h-5 mx-auto mb-1" />
                            <p className="text-xs font-semibold leading-tight">Próximo<br />à praia</p>
                        </motion.div>
                    </motion.div>

                    {/* Text side */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUp}
                    >
                        {/* Badge */}
                        <div className="flex items-center gap-2 mb-4">
                            <Heart className="w-4 h-4 text-accent" />
                            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                                Nossa História
                            </span>
                        </div>

                        {/* Title */}
                        <h2 className="section-title mb-4">
                            Um cantinho especial <br />
                            <span className="text-primary">no litoral paulista</span>
                        </h2>

                        <div className="accent-line mb-6" />

                        {/* Text */}
                        <p className="section-subtitle mb-5">
                            A Pousada Peruibiza nasceu do amor por Peruíbe e pela arte de
                            receber bem. Localizada no coração da cidade, a poucos passos do
                            mar, nossa pousada foi pensada para oferecer o equilíbrio perfeito
                            entre conforto e proximidade com a natureza.
                        </p>

                        <p className="section-subtitle mb-8">
                            Aqui, cada detalhe é cuidado para que sua estada seja
                            memorável — dos quartos aconchegantes à piscina refrescante,
                            passando pelas áreas de lazer pensadas para famílias e casais que
                            buscam qualidade sem complicação.
                        </p>

                        {/* Highlights */}
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { icon: "🏖️", label: "Próximo à praia" },
                                { icon: "👨‍👩‍👧", label: "Ideal para famílias" },
                                { icon: "🌴", label: "Ambiente tranquilo" },
                                { icon: "⭐", label: "Ótimo custo-benefício" },
                            ].map((item) => (
                                <div
                                    key={item.label}
                                    className="flex items-center gap-3 bg-surface rounded-xl p-3"
                                >
                                    <span className="text-xl">{item.icon}</span>
                                    <span className="text-sm font-medium text-neutral-dark">
                                        {item.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
