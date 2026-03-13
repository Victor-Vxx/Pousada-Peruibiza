"use client";

import { motion } from "framer-motion";
import { Calendar, Phone } from "lucide-react";

const BOOKING_URL =
    "https://www.booking.com/searchresults.pt.html?dest_id=6856957&highlighted_hotels=6856957&dest_type=hotel";
const WHATSAPP_URL = "https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre a Pousada Peruibiza.";

export default function CtaSection() {
    return (
        <section className="py-20 relative overflow-hidden">
            {/* Background with parallax effect simulation */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-fixed"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1920&q=80')"
                }}
            />
            {/* Heavy overlay to ensure text readability */}
            <div className="absolute inset-0 bg-primary/95 backdrop-blur-sm" />

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 leading-tight">
                        Pronto para sua viagem <br />
                        <span className="text-accent-light">a Peruíbe?</span>
                    </h2>

                    <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                        Garanta sua reserva com as melhores tarifas e venha aproveitar
                        momentos inesquecíveis na Pousada Peruibiza.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href={BOOKING_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 bg-accent hover:bg-accent-light text-neutral-dark font-bold text-lg px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto"
                        >
                            <Calendar className="w-5 h-5" />
                            Garantir minha reserva
                        </a>

                        <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-lg px-8 py-4 rounded-xl border border-white/20 transition-all duration-200 hover:shadow-lg w-full sm:w-auto"
                        >
                            <Phone className="w-5 h-5" />
                            Falar no WhatsApp
                        </a>
                    </div>

                    <p className="text-sm text-white/70 mt-8">
                        ✅ Cancelamento grátis em opções selecionadas • Sem taxas ocultas
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
