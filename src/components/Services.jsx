import React from 'react';
import { motion } from 'framer-motion';

const services = [
    {
        title: "Corte Laser de Chapas Metálicas",
        description: "Equipamentos de última geração para cortes precisos em diversos materiais. Garantimos acabamento impecável e redução de desperdício.",
        highlights: ["Alta precisão", "Aço Carbono, Inox e Alumínio", "Produção em série", "Redução de retrabalho"],
        machineImg: "/imagens/maquinas/maquina1.jpeg",
        productImg: "/imagens/produtos/produto1.jpeg",
        bgColor: "bg-black"
    },
    {
        title: "Corte a Laser de Tubos Metálicos",
        description: "Soluções automatizadas para corte tubular complexo, permitindo encaixes perfeitos e agilidade na montagem de estruturas.",
        highlights: ["Corte tubular automatizado", "Encaixes precisos", "Estruturas metálicas", "Agilidade produtiva"],
        machineImg: "/imagens/maquinas/maquina2.jpeg",
        productImg: "/imagens/produtos/produto2.jpeg",
        bgColor: "bg-secondary"
    },
    {
        title: "Solda Laser",
        isPremium: true,
        description: "Tecnologia de ponta para uniões metálicas com mínima deformação térmica e acabamento superior inigualável.",
        highlights: ["Alta precisão", "Baixa deformação térmica", "Acabamento superior", "Ideal para peças técnicas"],
        complementary: "Mencionamos também Solda TIG e MIG como processos complementares de alta qualidade.",
        machineImg: "/imagens/maquinas/maquina3.jpeg",
        productImg: "/imagens/produtos/produto3.jpeg",
        bgColor: "bg-[#0E5EFF]" // Vibrant Blue
    },
    {
        title: "Dobra CNC de Chapas Metálicas",
        description: "Precisão absoluta em dobras complexas com repetibilidade industrial garantida por comandos numéricos.",
        highlights: ["Dobra com precisão CNC", "Repetibilidade industrial", "Projetos complexos", "Integração com corte laser"],
        machineImg: "/imagens/maquinas/maquina4.jpeg",
        productImg: "/imagens/produtos/produto4.jpeg",
        bgColor: "bg-secondary"
    },
    {
        title: "Desenvolvimento de Projetos CAD",
        description: "Engenharia de ponta utilizando SolidWorks e softwares dedicados para otimização de produção e desenvolvimento sob medida.",
        highlights: ["SolidWorks / CypNest / TubesT Pro", "Engenharia Reversa", "Desenvolvimento sob medida", "Preparação para produção"],
        machineImg: "/imagens/maquinas/maquina5.jpg",
        productImg: "/imagens/produtos/produto5.png",
        bgColor: "bg-black"
    }
];

const ServiceBlock = ({ service, index }) => {
    const isEven = index % 2 === 0;

    return (
        <section className={`py-20 ${service.bgColor} overflow-hidden`}>
            <div className="container mx-auto px-4">
                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>

                    {/* Machine Image */}
                    <motion.div
                        initial={{ x: isEven ? -100 : 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 relative group"
                    >
                        <div className="absolute -inset-2 bg-blue-600/20 blur-xl group-hover:bg-blue-600/40 transition-all duration-500 rounded-lg"></div>
                        <img
                            src={service.machineImg}
                            alt={service.title}
                            className="relative rounded-lg shadow-2xl w-full h-[400px] object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500 border border-white/10"
                        />
                        {service.isPremium && (
                            <div className="absolute top-4 right-4 bg-yellow-500 text-black px-4 py-1 font-bold text-sm tracking-tighter skew-x-[-12deg]">
                                TECNOLOGIA DE PONTA
                            </div>
                        )}
                    </motion.div>

                    {/* Text Content */}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 text-left"
                    >
                        <h2 className={`text-3xl md:text-5xl font-black mb-6 ${service.isPremium ? 'text-white' : 'text-blue-500'}`}>
                            {service.title}
                        </h2>
                        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                            {service.description}
                        </p>

                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                            {service.highlights.map((item, i) => (
                                <li key={i} className="flex items-center gap-2 text-white/90">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        {service.complementary && (
                            <p className="text-sm text-blue-200/80 italic mb-8">
                                {service.complementary}
                            </p>
                        )}

                        {/* Product Small Highlight */}
                        <div className="flex items-center gap-6 p-4 rounded-lg bg-white/5 border border-white/10 mt-4">
                            <img src={service.productImg} alt="Produzido" className="w-24 h-24 object-cover rounded shadow-inner" />
                            <div>
                                <p className="text-xs uppercase font-bold text-blue-400">Resultado Final</p>
                                <p className="text-md text-white/80">Precisão e acabamento garantidos pelo processo.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const Services = () => {
    return (
        <div id="servicos">
            {services.map((service, index) => (
                <ServiceBlock key={index} service={service} index={index} />
            ))}
        </div>
    );
};

export default Services;
