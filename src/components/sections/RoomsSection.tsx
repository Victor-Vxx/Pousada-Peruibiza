"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Wifi, Wind, Tv, Users, Moon } from "lucide-react";

const BOOKING_URL =
    "https://www.booking.com/searchresults.pt.html?dest_id=6856957&highlighted_hotels=6856957&dest_type=hotel";

const roomAmenities = [
    { icon: Wifi, label: "Wi-Fi grátis" },
    { icon: Wind, label: "Ar-condicionado" },
    { icon: Tv, label: "TV a cabo + Frigobar" },
    { icon: Users, label: "Até 4 pessoas" },
    { icon: Moon, label: "Café da manhã disponível" },
];

export default function RoomsSection() {
    return (
        <section id="quartos" className="section-padding bg-white">
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
                        Acomodações
                    </span>
                    <h2 className="section-title mt-3 mb-4">
                        Seu quarto em <span className="text-primary">Peruíbe</span>
                    </h2>
                    <div className="accent-line mx-auto mb-5" />
                    <p className="section-subtitle max-w-xl mx-auto">
                        Quartos aconchegantes e bem equipados, pensados para o seu descanso
                        após um dia de praia.
                    </p>
                </motion.div>

                {/* Room card - full width (single room type) */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7 }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="grid md:grid-cols-2 bg-white rounded-3xl overflow-hidden card-shadow-hover shadow-xl border border-gray-100 group">
                        {/* Images carousel (simplified) */}
                        <div className="relative h-72 md:h-auto overflow-hidden bg-surface">
                            <Image
                                src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80"
                                alt="Quarto duplo com cama de casal - Pousada Peruibiza"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            {/* Room type badge */}
                            <div className="absolute top-4 left-4 bg-accent text-neutral-dark text-xs font-bold px-3 py-1.5 rounded-full">
                                Disponível
                            </div>

                            {/* Twin option overlay */}
                            <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                                <span className="bg-white/90 backdrop-blur-sm text-neutral-dark text-xs font-semibold px-3 py-1.5 rounded-full">
                                    🛏 Casal
                                </span>
                                <span className="bg-white/90 backdrop-blur-sm text-neutral-dark text-xs font-semibold px-3 py-1.5 rounded-full">
                                    🛏 🛏 Twin
                                </span>
                            </div>
                        </div>

                        {/* Room info */}
                        <div className="p-8 md:p-10 flex flex-col justify-between">
                            <div>
                                <h3 className="font-serif text-2xl md:text-3xl font-bold text-neutral-dark mb-3">
                                    Apartamento Standard
                                </h3>
                                <p className="text-neutral-mid mb-6 leading-relaxed">
                                    Quarto aconchegante disponível em configuração casal (cama de casal)
                                    ou twin (duas camas de solteiro). Ideal para casais, amigos ou
                                    famílias com crianças pequenas.
                                </p>

                                {/* Amenities list */}
                                <ul className="space-y-3 mb-8">
                                    {roomAmenities.map((item) => {
                                        const Icon = item.icon;
                                        return (
                                            <li key={item.label} className="flex items-center gap-3">
                                                <div className="w-8 h-8 bg-surface rounded-lg flex items-center justify-center flex-shrink-0">
                                                    <Icon className="w-4 h-4 text-primary" />
                                                </div>
                                                <span className="text-sm text-neutral-dark font-medium">
                                                    {item.label}
                                                </span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>

                            {/* Price + CTA */}
                            <div className="border-t border-gray-100 pt-6">
                                <div className="flex items-end justify-between mb-4">
                                    <div>
                                        <p className="text-xs text-neutral-mid">A partir de</p>
                                        <p className="font-serif text-3xl font-bold text-primary">
                                            Ver preço
                                        </p>
                                        <p className="text-xs text-neutral-mid">no Booking.com</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs text-neutral-mid">Capacidade</p>
                                        <p className="text-sm font-semibold text-neutral-dark">
                                            👤 até 4 hóspedes
                                        </p>
                                    </div>
                                </div>

                                <a
                                    href={BOOKING_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-primary-dark text-white font-semibold py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                                >
                                    Reservar este Quarto
                                    <ArrowRight className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
