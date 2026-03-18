"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

const galleryImages = [
    {
        src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
        alt: "Piscina da Pousada Peruibiza",
        span: "col-span-2 row-span-2",
    },
    {
        src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80",
        alt: "Quarto standard com cama de casal",
        span: "",
    },
    {
        src: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=600&q=80",
        alt: "Banheiro moderno do apartamento",
        span: "",
    },
    {
        src: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80",
        alt: "Área de lazer e convivência da pousada",
        span: "",
    },
    {
        src: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
        alt: "Fachada e jardim da Pousada Peruibiza",
        span: "",
    },
    {
        src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
        alt: "Praia de Peruíbe ao pôr do sol",
        span: "col-span-2",
    },
];

export default function GallerySection() {
    const [lightbox, setLightbox] = useState<string | null>(null);

    return (
        <section id="galeria" className="section-padding bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-12"
                >
                    <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                        Galeria
                    </span>
                    <h2 className="section-title mt-3 mb-4">
                        Conheça nossa <span className="text-primary">pousada</span>
                    </h2>
                    <div className="accent-line mx-auto" />
                </motion.div>

                {/* Grid */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
                    style={{ gridAutoRows: "200px" }}
                >
                    {galleryImages.map((img, i) => (
                        <motion.div
                            key={img.src}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.07 }}
                            className={`relative overflow-hidden rounded-2xl group cursor-pointer ${img.span}`}
                            onClick={() => setLightbox(img.src)}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                                <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-8 h-8" />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Lightbox */}
            {lightbox && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4"
                    onClick={() => setLightbox(null)}
                >
                    <button
                        onClick={() => setLightbox(null)}
                        className="absolute top-4 right-4 text-white hover:text-accent transition-colors"
                        aria-label="Fechar galeria"
                    >
                        <X className="w-8 h-8" />
                    </button>
                    <div className="relative w-full max-w-5xl h-[85vh]">
                        <Image
                            src={lightbox}
                            alt="Foto em destaque da Pousada Peruibiza"
                            fill
                            className="object-contain rounded-xl"
                            onClick={(e) => e.stopPropagation()}
                            sizes="100vw"
                        />
                    </div>
                </motion.div>
            )}
        </section>
    );
}
