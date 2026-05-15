import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBook, FaSchool } from 'react-icons/fa';

const educationData = [
    {
        id: 1,
        type: 'University',
        institution: 'Comsats University Islamabad, Lahore Campus',
        period: '2024 - Present',
        degree: 'BS Software Engineering',
        icon: <FaGraduationCap />,
        color: '#00b4d8'
    },
    {
        id: 2,
        type: 'College',
        institution: 'Govt Associate College Kot Radha Kishan',
        period: '2022 - 2024',
        degree: 'Intermediate',
        icon: <FaBook />,
        color: '#00b4d8'
    },
    {
        id: 3,
        type: 'School',
        institution: 'The Educators, Kahnore Campus',
        period: '2020 - 2022',
        degree: 'Matriculation',
        icon: <FaSchool />,
        color: '#00b4d8'
    }
];

const Education = () => {
    return (
        <section id="education" className="relative w-full py-24 bg-black overflow-hidden">
            {/* Background Glows */}
            <div className='absolute top-1/2 left-0 w-64 h-64 bg-primary/10 blur-[120px] rounded-full pointer-events-none'></div>
            <div className='absolute bottom-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none'></div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className='text-primary font-bold text-sm sm:text-base tracking-[0.3em] uppercase mb-2'>Academic Journey</h2>
                    <h1 className='text-3xl sm:text-4xl md:text-5xl font-black text-white'>My <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400'>Education</span></h1>
                    <div className="w-16 sm:w-20 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
                </motion.div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-primary/50 to-transparent"></div>

                    <div className="space-y-12 sm:space-y-24">
                        {educationData.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7, delay: index * 0.1 }}
                                className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                                    index % 2 === 0 ? 'sm:flex-row-reverse' : ''
                                }`}
                            >
                                {/* Dot on the line */}
                                <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-black border-2 border-primary z-20 shadow-[0_0_15px_rgba(0,180,216,0.5)]"></div>

                                {/* Content Card */}
                                <div className={`w-full sm:w-[45%] pl-12 sm:pl-0 ${
                                    index % 2 === 0 ? 'sm:pl-12' : 'sm:pr-12'
                                }`}>
                                    <div className="glass p-5 sm:p-8 rounded-2xl sm:rounded-3xl hover:border-primary/30 transition-all duration-500 group">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20 group-hover:bg-primary group-hover:text-black transition-all duration-300">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <span className="text-[10px] sm:text-xs font-bold text-primary uppercase tracking-[0.2em]">{item.type}</span>
                                                <p className="text-white/40 text-[10px] sm:text-xs font-medium">{item.period}</p>
                                            </div>
                                        </div>
                                        
                                        <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                            {item.degree}
                                        </h3>
                                        <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                                            {item.institution}
                                        </p>

                                        {/* Mobile Period (if vertical layout is too tight) */}
                                        <div className="mt-4 pt-4 border-t border-white/5 sm:hidden">
                                            <p className="text-white/30 text-[10px] uppercase tracking-widest font-bold">{item.period}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
