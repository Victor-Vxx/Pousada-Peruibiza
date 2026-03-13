"use client";

import { Waves, MapPin, Phone, Mail, Instagram } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-neutral-dark text-white/80 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <a href="#" className="flex items-center gap-2 mb-4 group inline-flex">
                            <div className="bg-primary/20 p-1.5 rounded-lg">
                                <Waves className="w-6 h-6 text-primary-light" />
                            </div>
                            <span className="font-serif font-bold text-xl text-white">
                                Pousada<br />
                                <span className="text-accent text-sm font-medium tracking-wider">
                                    PERUIBIZA
                                </span>
                            </span>
                        </a>
                        <p className="text-sm leading-relaxed mb-6 text-white/60">
                            Transformando seus dias de descanso em Peruíbe em memórias inesquecíveis
                            com muito conforto, lazer e um atendimento familiar.
                        </p>
                        <div className="flex items-center gap-4">
                            <a
                                href="https://instagram.com/pousadaperuibiza"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary transition-colors hover:text-white"
                                aria-label="Siga-nos no Instagram"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">A Pousada</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#sobre" className="hover:text-accent transition-colors">Nossa História</a></li>
                            <li><a href="#quartos" className="hover:text-accent transition-colors">Acomodações</a></li>
                            <li><a href="#estrutura" className="hover:text-accent transition-colors">Comodidades</a></li>
                            <li><a href="#galeria" className="hover:text-accent transition-colors">Galeria de Fotos</a></li>
                            <li><a href="#avaliacoes" className="hover:text-accent transition-colors">Avaliações</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="lg:col-span-2">
                        <h4 className="text-white font-semibold mb-4">Contato & Localização</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                <span>
                                    Rua Erasmo Pinheiro Ribas, 33 - Centro<br />
                                    Peruíbe - SP, 11750-000
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                                <span>+55 11 99999-9999 (WhatsApp)</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                                <span>contato@pousadaperuibiza.com.br</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
                    <p>© {currentYear} Pousada Peruibiza. Todos os direitos reservados.</p>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
                        <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
