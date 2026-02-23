import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Instagram, MessageCircle } from 'lucide-react';

const About = () => {
    return (
        <section className="bg-secondary/30 py-24 border-y border-white/5" id="sobre">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="section-title text-white"
                    >
                        Sobre a Empresa
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-300 leading-relaxed mb-8"
                    >
                        A Hall Laser Steel atua há mais de 10 anos no mercado de corte laser, dobra CNC e conformação de metais, oferecendo soluções completas para empresas de todos os segmentos industriais.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="text-lg text-gray-400 leading-relaxed"
                    >
                        Nossa estrutura moderna e equipe qualificada garantem precisão, qualidade e agilidade em cada projeto. Somos movidos pela inovação tecnológica e pelo compromisso com a excelência produtiva de nossos parceiros.
                    </motion.p>
                </div>
            </div>
        </section>
    );
};

const Contact = () => {
    return (
        <section className="bg-black py-24" id="contato">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-black mb-12 text-white">Fale Conosco</h2>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <MapPin className="text-blue-500 mt-1" />
                                <div>
                                    <h4 className="text-white font-bold uppercase mb-1">Endereço</h4>
                                    <p className="text-gray-400">Rua 25 de Julho, 45<br />São Jaco, Sapiranga – RS<br />CEP 93815-016</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Phone className="text-blue-500 mt-1" />
                                <div>
                                    <h4 className="text-white font-bold uppercase mb-1">Telefones</h4>
                                    <p className="text-gray-400">(51) 98045-3124<br />(51) 99878-3795</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Mail className="text-blue-500 mt-1" />
                                <div>
                                    <h4 className="text-white font-bold uppercase mb-1">Email</h4>
                                    <p className="text-gray-400">hallaser@gmail.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 mt-12">
                            <a href="https://wa.me/5551980453124" target="_blank" className="p-4 bg-white/5 hover:bg-green-600 transition-colors rounded-full text-white">
                                <MessageCircle size={24} />
                            </a>
                            <a href="#" target="_blank" className="p-4 bg-white/5 hover:bg-pink-600 transition-colors rounded-full text-white">
                                <Instagram size={24} />
                            </a>
                            <a href="mailto:hallaser@gmail.com" className="p-4 bg-white/5 hover:bg-blue-600 transition-colors rounded-full text-white">
                                <Mail size={24} />
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="rounded-xl overflow-hidden shadow-2xl border border-white/10"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3467.531201502447!2d-51.009!3d-29.638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9519163000000001%3A0x0!2zUnVhIDI1IGRlIEp1bGhvLCA0NSwgU2FwaXJhbmdhIC0gUlMsIDkzODE1LTAxNg!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const MainFooter = () => {
    return (
        <footer className="bg-black py-12 border-t border-white/5">
            <div className="container mx-auto px-4 text-center">
                <p className="text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Hall Laser Steel. Todos os direitos reservados.<br />
                    Tecnologia em Corte e Conformação de Metais.
                </p>
            </div>
        </footer>
    );
};

export { About, Contact, MainFooter };
