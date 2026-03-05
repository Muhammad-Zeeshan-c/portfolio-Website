import StarDust from './StarDust'
import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
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

    const [errors, setErrors] = useState('');
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
        if (!validateForm()) {
            return;
        }

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

            setFormData({
                name: '',
                email: '',
                subject: '',
                Message: ''
            });
            setErrors({});
        }
        catch (error) {
            console.error('Error sending email:', error);
            setStatus('3');
        }
    }

    return (
        <div className="relative w-full min-h-[750px] bg-black overflow-hidden px-6 md:px-10 py-20"
            id='contact'>

            <div className='w-full h-full absolute inset-0 z-0'>
                <StarDust />
            </div>

            {/* Contact page main container */}
            <motion.div className="relative z-10 w-full mx-auto max-w-6xl flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-blue-500 mb-4">Get in Touch</h2>
                    <p className="text-lg text-white/70">Got an idea ? Let's work together</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* Left: Enhanced Contact Form */}
                    <form className='w-full flex flex-col items-center justify-between border border-gray-500/30 bg-black/40 backdrop-blur-md rounded-2xl p-8 shadow-2xl'>
                        <div className='w-full flex flex-col text-sm text-white/90 mb-6'>
                            <label htmlFor="name" className='mb-2 font-medium'>Name <span className='text-red-500'>*</span></label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder='John Doe'
                                value={formData.name}
                                onChange={handleChange}
                                className={`w-full h-12 px-4 outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-gray-800/50 border rounded-lg transition-all
                                ${errors.name ? "border-red-500 focus:ring-red-500" : "border-gray-600"}`}
                            />
                            {errors.name && <span className='text-red-500 text-xs mt-1'>{errors.name}</span>}
                        </div>

                        <div className='w-full flex flex-col text-sm text-white/90 mb-6'>
                            <label htmlFor="email" className='mb-2 font-medium'>Email <span className='text-red-500'>*</span></label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder='john@example.com'
                                value={formData.email}
                                onChange={handleChange}
                                className={`w-full h-12 px-4 outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-gray-800/50 border rounded-lg transition-all
                                ${errors.email ? "border-red-500 focus:ring-red-500" : "border-gray-600"}`}
                            />
                            {errors.email && <span className='text-red-500 text-xs mt-1'>{errors.email}</span>}
                        </div>

                        <div className='w-full flex flex-col text-sm text-white/90 mb-6'>
                            <label htmlFor="subject" className='mb-2 font-medium'>Subject <span className='text-red-500'>*</span></label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                placeholder='How can I help you?'
                                value={formData.subject}
                                onChange={handleChange}
                                className={`w-full h-12 px-4 outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-gray-800/50 border rounded-lg transition-all
                                ${errors.subject ? "border-red-500 focus:ring-red-500" : "border-gray-600"}`}
                            />
                            {errors.subject && <span className='text-red-500 text-xs mt-1'>{errors.subject}</span>}
                        </div>

                        <div className='w-full flex flex-col text-sm text-white/90 mb-6'>
                            <label htmlFor="Message" className='mb-2 font-medium'>Message <span className='text-red-500'>*</span></label>
                            <textarea
                                id="Message"
                                name="Message"
                                placeholder='Write your message here...'
                                value={formData.Message}
                                onChange={handleChange}
                                className={`w-full h-32 p-4 outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-gray-800/50 border rounded-lg resize-none transition-all
                                ${errors.Message ? "border-red-500 focus:ring-red-500" : "border-gray-600"}`}
                            ></textarea>
                            {errors.Message && <span className='text-red-500 text-xs mt-1'>{errors.Message}</span>}
                        </div>

                        <div className='w-full flex justify-start mb-4'>
                            {status === '1' && <span className='text-primary text-sm font-medium'>Sending...</span>}
                            {status === '2' && <span className='text-green-400 text-sm font-medium'>Message sent successfully!</span>}
                            {status === '3' && <span className='text-red-400 text-sm font-medium'>Failed to send message. Please try again later.</span>}
                        </div>

                        <button
                            type="submit"
                            onClick={handleSubmit}
                            className='w-full h-12 bg-primary text-black font-bold rounded-lg hover:bg-white transition-colors shadow-[0_0_15px_rgba(8,199,164,0.3)]'
                        >
                            Send Message
                        </button>
                    </form>

                    {/* Right: Direct Contact Info Box */}
                    <div className="w-full flex flex-col gap-8 bg-black/40 backdrop-blur-md border border-gray-500/30 rounded-2xl p-8 shadow-2xl h-full justify-center">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-2">Direct Contact</h3>

                            <div className="flex flex-col gap-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-gray-800/80 text-primary rounded-lg border border-gray-700 shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-sm text-white/50 font-semibold uppercase tracking-wider mb-1">Email Details</span>
                                        <a href="mailto:m.zeeshanKhalid12@gmail.com" className="text-white hover:text-primary transition-colors">m.zeeshankhalid12@gmail.com</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-gray-800/80 text-primary rounded-lg border border-gray-700 shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-sm text-white/50 font-semibold uppercase tracking-wider mb-1">Location</span>
                                        <span className="text-white leading-relaxed">Lahore, Pakistan</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 pt-6 border-t border-gray-700">
                            <p className="text-sm text-white/60 mb-4">Need a quick response? Drop a message directly via WhatsApp.</p>
                            <a
                                href="https://wa.me/+9212345678"
                                target="_blank"
                                rel="noreferrer"
                                className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-[#25D366] text-white font-bold rounded-xl transition-all hover:bg-[#1ebe57] hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(37,211,102,0.2)]"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                Message on WhatsApp
                            </a>
                        </div>
                    </div>

                </div>
            </motion.div>
        </div>
    )
}
