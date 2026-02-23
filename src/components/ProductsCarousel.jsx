import React from 'react';
import { motion } from 'framer-motion';

const carouselImages = [
    '/imagens/carrossel/carrossel1.jpeg',
    '/imagens/carrossel/carrossel2.jpeg',
    '/imagens/carrossel/carrossel3.jpeg',
    '/imagens/carrossel/carrossel4.jpeg',
    '/imagens/carrossel/carrossel5.jpeg',
    '/imagens/carrossel/carrossel6.jpeg',
    '/imagens/carrossel/carrossel7.jpeg',
    '/imagens/carrossel/carrossel8.jpeg',
];

const ProductsCarousel = () => {
    // Double the images for seamless loop
    const duplicatedImages = [...carouselImages, ...carouselImages];

    return (
        <section className="bg-black py-24 overflow-hidden" id="produtos-carousel">
            <div className="container mx-auto px-4 mb-16 text-center">
                <h2 className="section-title text-white">Projetos e Produtos Desenvolvidos</h2>
            </div>

            <div className="relative w-full flex items-center overflow-hidden">
                <motion.div
                    className="flex flex-row gap-6 pointer-events-none"
                    animate={{
                        x: [0, -2800],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 40,
                            ease: "linear",
                        },
                    }}
                    style={{ display: 'flex', flexDirection: 'row', width: 'max-content' }}
                >
                    {duplicatedImages.map((src, index) => (
                        <motion.div
                            key={index}
                            className="flex-none relative group pointer-events-auto"
                            style={{ width: '350px', height: '350px' }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <img
                                src={src}
                                alt={`Projeto ${index}`}
                                className="w-full h-full object-cover rounded-lg border border-white/10 transition-transform duration-500"
                                onError={(e) => {
                                    console.error("Error loading:", src);
                                    e.target.style.background = '#1a1a1a';
                                }}
                            />
                            <div className="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                                {/* Text removed per user request */}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ProductsCarousel;
