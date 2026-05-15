import StarDust from './StarDust'
import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaPaperPlane } from 'react-icons/fa';

const serviceID = import.meta.env.VITE_SERVICE_ID;
const apikey = import.meta.env.VITE_API_KEY;
const templatekey = import.meta.env.VITE_TEMPLATE_ID;

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        Message: ''
    });

    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

        if (errors[e.target.name]) {
            setErrors({
                ...errors,
                [e.target.name]: ""
            })
        }
    }

    const validateForm = () => {
        const required = ['name', 'email', 'subject', 'Message'];
        const newErrors = {};

        if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        required.forEach(field => {
            if (!formData[field].trim()) {
                newErrors[field] = 'This field is required';
            }
        });
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setStatus('1');
        try {
            await emailjs.send(serviceID, templatekey, {
                ...formData,
                from_name: formData.name,
                reply_to: formData.email,
                subject: formData.subject,
                Message: formData.Message
            }, apikey);
            setStatus('2');
            setFormData({ name: '', email: '', subject: '', Message: '' });
            setErrors({});
        } catch (error) {
            console.error('Error sending email:', error);
            setStatus('3');
        }
    }

    return (
        <section id='contact' className="relative w-full min-h-screen bg-black overflow-hidden py-24 flex items-center">
            {/* Background Decor */}
            <div className='absolute inset-0 z-0 opacity-30'>
                <StarDust />
            </div>
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none'></div>

            <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10 w-full">
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className='text-primary font-bold text-lg tracking-widest uppercase mb-2'>Contact</h2>
                    <h1 className='text-4xl md:text-5xl font-black text-white'>Let's Create Something <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400'>Extraordinary</span></h1>
                    <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-stretch">
                    {/* Contact Form */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className='glass p-8 md:p-10 rounded-3xl'
                    >
                        <form className='flex flex-col gap-6' onSubmit={handleSubmit}>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                <div className='flex flex-col gap-2'>
                                    <label className='text-xs font-bold uppercase tracking-widest text-white/40 ml-1'>Name</label>
                                    <input
                                        name="name"
                                        type="text"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`w-full bg-white/5 border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary/50 transition-all`}
                                    />
                                    {errors.name && <span className='text-[10px] text-red-500 font-bold ml-1'>{errors.name}</span>}
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label className='text-xs font-bold uppercase tracking-widest text-white/40 ml-1'>Email</label>
                                    <input
                                        name="email"
                                        type="email"
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary/50 transition-all`}
                                    />
                                    {errors.email && <span className='text-[10px] text-red-500 font-bold ml-1'>{errors.email}</span>}
                                </div>
                            </div>

                            <div className='flex flex-col gap-2'>
                                <label className='text-xs font-bold uppercase tracking-widest text-white/40 ml-1'>Subject</label>
                                <input
                                    name="subject"
                                    type="text"
                                    placeholder="Project Inquiry"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className={`w-full bg-white/5 border ${errors.subject ? 'border-red-500' : 'border-white/10'} rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary/50 transition-all`}
                                />
                                {errors.subject && <span className='text-[10px] text-red-500 font-bold ml-1'>{errors.subject}</span>}
                            </div>

                            <div className='flex flex-col gap-2'>
                                <label className='text-xs font-bold uppercase tracking-widest text-white/40 ml-1'>Message</label>
                                <textarea
                                    name="Message"
                                    rows="5"
                                    placeholder="Tell me about your vision..."
                                    value={formData.Message}
                                    onChange={handleChange}
                                    className={`w-full bg-white/5 border ${errors.Message ? 'border-red-500' : 'border-white/10'} rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary/50 transition-all resize-none`}
                                />
                                {errors.Message && <span className='text-[10px] text-red-500 font-bold ml-1'>{errors.Message}</span>}
                            </div>

                            <div className='mt-2'>
                                <button
                                    type="submit"
                                    disabled={status === '1'}
                                    className='w-full md:w-auto px-10 py-4 bg-primary text-black font-black uppercase tracking-widest text-xs rounded-2xl hover:bg-white transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-primary/20'
                                >
                                    {status === '1' ? 'Sending...' : 'Send Message'}
                                    <FaPaperPlane className='text-[10px]' />
                                </button>
                                {status === '2' && <p className='mt-4 text-green-400 text-xs font-bold'>Message sent successfully!</p>}
                                {status === '3' && <p className='mt-4 text-red-400 text-xs font-bold'>Failed to send. Please try again.</p>}
                            </div>
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className='flex flex-col gap-6'
                    >
                        <div className='glass p-8 rounded-3xl flex-grow'>
                            <h3 className='text-xl font-bold text-white mb-8'>Direct Contact</h3>
                            <div className='flex flex-col gap-8'>
                                <div className='flex items-start gap-3 sm:gap-4 group min-w-0'>
                                    <div className='w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20 group-hover:bg-primary group-hover:text-black transition-all duration-300'>
                                        <FaEnvelope className="text-sm sm:text-base" />
                                    </div>
                                    <div className="min-w-0 overflow-hidden">
                                        <p className='text-[10px] sm:text-xs font-bold text-white/30 uppercase tracking-widest mb-1'>Email Me</p>
                                        <a href="mailto:m.zeeshankhalid12@gmail.com" className='text-sm sm:text-base text-white hover:text-primary transition-colors font-medium break-all'>
                                            m.zeeshankhalid12@gmail.com
                                        </a>
                                    </div>
                                </div>
                                <div className='flex items-start gap-3 sm:gap-4 group min-w-0'>
                                    <div className='w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20 group-hover:bg-primary group-hover:text-black transition-all duration-300'>
                                        <FaMapMarkerAlt className="text-sm sm:text-base" />
                                    </div>
                                    <div className="min-w-0">
                                        <p className='text-[10px] sm:text-xs font-bold text-white/30 uppercase tracking-widest mb-1'>Location</p>
                                        <p className='text-sm sm:text-base text-white font-medium'>Lahore, Pakistan</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <a 
                            href="https://wa.me/+923000000000" // Replace with actual number
                            target="_blank"
                            rel="noreferrer"
                            className='glass p-5 sm:p-8 rounded-3xl group flex items-center justify-between hover:bg-green-500/10 hover:border-green-500/30 transition-all duration-300'
                        >
                            <div className='flex items-center gap-3 sm:gap-4'>
                                <div className='w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-xl bg-[#25D366]/10 flex items-center justify-center text-[#25D366] border border-[#25D366]/20 group-hover:bg-[#25D366] group-hover:text-white transition-all duration-300'>
                                    <FaWhatsapp className='text-lg sm:text-xl' />
                                </div>
                                <div>
                                    <p className='text-[10px] sm:text-xs font-bold text-white/30 uppercase tracking-widest mb-1'>WhatsApp</p>
                                    <p className='text-sm sm:text-base text-white font-bold'>Quick Chat</p>
                                </div>
                            </div>
                            <div className='w-10 h-10 rounded-full border border-white/5 flex items-center justify-center text-white/20 group-hover:text-white group-hover:translate-x-1 transition-all'>
                                →
                            </div>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

