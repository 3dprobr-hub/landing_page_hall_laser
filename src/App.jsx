import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import ProductsCarousel from './components/ProductsCarousel';
import { About, Contact, MainFooter } from './components/Contact';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

function App() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Início', href: '#' },
        { name: 'Serviços', href: '#servicos' },
        { name: 'Produtos', href: '#produtos-carousel' },
        { name: 'Sobre', href: '#sobre' },
        { name: 'Contato', href: '#contato' },
    ];

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Navigation */}
            <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <img
                            src="/imagens/logo/logo.png"
                            alt="Hall Laser"
                            className="h-12 w-auto"
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'block';
                            }}
                        />
                        <div className="text-2xl font-black tracking-tighter text-white" style={{ display: 'none' }}>
                            HAL<span className="text-blue-500">LASER</span>
                        </div>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-bold uppercase tracking-widest hover:text-blue-500 transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <button
                        className="md:hidden text-white"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center gap-8"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-2xl font-black uppercase tracking-widest hover:text-blue-500 transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            <main>
                <Hero />

                {/* Intro Content Section */}
                <section className="bg-black py-20 border-b border-white/5">
                    <div className="container mx-auto px-4 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-4">
                                HAL<span className="text-blue-500">LASER</span> STEEL
                            </div>
                            <h2 className="text-xl md:text-3xl font-bold text-blue-400 uppercase tracking-widest mb-8">
                                TECNOLOGIA EM CORTE E CONFORMAÇÃO DE METAIS
                            </h2>
                            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
                                Há mais de 10 anos de excelência industrial, precisão e agilidade para grandes projetos.
                            </p>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <a
                                    href="https://wa.me/5551980453124"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-glow px-12 py-4 text-xl"
                                >
                                    SOLICITE UM ORÇAMENTO
                                </a>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                <Services />
                <ProductsCarousel />
                <About />
                <Contact />
            </main>

            <MainFooter />
        </div>
    );
}

export default App;
