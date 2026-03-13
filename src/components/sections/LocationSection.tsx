"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Car } from "lucide-react";

export default function LocationSection() {
    return (
        <section id="localizacao" className="section-padding bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                            Localização
                        </span>
                        <h2 className="section-title mt-3 mb-4">
                            Perto de tudo que <span className="text-primary">importa</span>
                        </h2>
                        <div className="accent-line mb-6" />

                        <p className="text-neutral-mid text-lg mb-8 leading-relaxed">
                            Estamos localizados no coração de Peruíbe, oferecendo fácil acesso
                            tanto às belas praias quanto ao comércio e gastronomia local.
                        </p>

                        <div className="bg-surface rounded-2xl p-6 mb-8">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0 card-shadow">
                                    <MapPin className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-neutral-dark mb-1">Nosso Endereço</h3>
                                    <p className="text-neutral-mid text-sm leading-relaxed">
                                        Rua Erasmo Pinheiro Ribas, 33 - Centro<br />
                                        Peruíbe - SP, 11750-000
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Distances */}
                        <div className="space-y-4">
                            <h3 className="font-semibold text-neutral-dark">Distâncias principais:</h3>
                            <ul className="space-y-3">
                                {[
                                    { icon: Navigation, label: "Praia do Centro", distance: "600m" },
                                    { icon: Car, label: "Rodoviária de Peruíbe", distance: "1.5km" },
                                    { icon: Navigation, label: "Aquário de Peruíbe", distance: "2km" },
                                    { icon: Car, label: "São Paulo (Capital)", distance: "140km" },
                                ].map((item) => {
                                    const Icon = item.icon;
                                    return (
                                        <li key={item.label} className="flex justify-between items-center pb-3 border-b border-gray-100 last:border-0 last:pb-0">
                                            <div className="flex items-center gap-3">
                                                <Icon className="w-4 h-4 text-primary" />
                                                <span className="text-sm text-neutral-dark">{item.label}</span>
                                            </div>
                                            <span className="text-sm font-semibold text-primary-dark bg-surface px-3 py-1 rounded-full">
                                                {item.distance}
                                            </span>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Map */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="h-[400px] lg:h-[550px] w-full bg-gray-100 rounded-3xl overflow-hidden card-shadow border border-gray-100"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3637.3878772879555!2d-46.99965002367468!3d-24.315579991196425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d1cdc4f39ce019%3A0xc31ec2272e5ae9!2sR.%20Erasmo%20Pinheiro%20Ribas%2C%2033%20-%20Centro%2C%20Peru%C3%ADbe%20-%20SP%2C%2011750-000!5e0!3m2!1spt-BR!2sbr!4v1715090000000!5m2!1spt-BR!2sbr"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Mapa com a localização da Pousada Peruibiza"
                        ></iframe>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
