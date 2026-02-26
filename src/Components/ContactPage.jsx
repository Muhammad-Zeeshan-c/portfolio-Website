import StarDust from './StarDust'
import { useState } from 'react';
import {motion} from 'framer-motion';
import emailjs from '@emailjs/browser';
const serviceID=import.meta.env.VITE_SERVICE_ID;
const apikey=import.meta.env.VITE_API_KEY;
const templatekey=import.meta.env.VITE_TEMPLATE_ID;


export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject:'',
        Message: ''
    });

    const [errors, setErrors] = useState('');
    const [status,setStatus]=useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

        if(errors[e.target.name]){
            setErrors({
                ...errors,
                [e.target.name]: ""
            })
        }
    }

    const validateForm = () => {
        const required =['name','email','subject','Message'];
        const newErrors = {};

        if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        required.forEach(field => {
            if(!formData[field].trim()){
                newErrors[field] = 'This field is required';
            }
        });
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!validateForm()){
            return;
        }

        setStatus('1');
        
        try{
            await emailjs.send(serviceID,templatekey,{
                ...formData,
                from_name:formData.name,
                reply_to:formData.email,
                subject:formData.subject,
                Message:formData.Message
            },apikey);
            setStatus('2');

            setFormData({
                name: '',
                email: '',
                subject:'',
                Message: ''
            });
            setErrors({});
        }
        catch(error){
            console.error('Error sending email:', error);
            setStatus('3');
        }
    }

    return (
        <div className="relative w-full h-[750px] bg-black overflow-x-hidden">

            <div className='w-full h-full absolute inset-0 z-0'>
                <StarDust/>
            </div>
            
            {/* Contact page main div*/}
            <motion.div className="relative z-10 w-full mx-auto max-w-6xl h-full flex justify-end
            rounded-lg pt-20"
            initial={{ opacity: 0,x:-400}}
            whileInView={{ opacity: 1, x:0}}
            transition={{ duration:1, ease:"easeInOut" }}
            >
                
                <form className='w-full h-[95%] flex flex-col items-center justify-evenly border-2 border-gray-500/25 rounded-lg max-w-2xl'>
                    <h1 className='text-4xl font-bold text-white'>Let's work Together</h1>
                    <div className='w-10/12 flex flex-col text-xl text-white'>
                        <label htmlFor="name" className='mb-1'>Name <span className='text-red-500'>*</span></label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            placeholder='Your Name'
                            value={formData.name}
                            onChange={handleChange}
                            className={`w-full h-11 px-4 outline-none focus:border-blue-400  bg-gray-500/25 border rounded-md
                            ${errors.name ? "border-red-500 outline-none" : "border-gray-700"}`} 
                        />
                        {errors.name && <span className='text-red-500 text-xs'>{errors.name}</span>}
                    </div>
                    <div  className='w-10/12 flex flex-col text-xl text-white'>
                        <label htmlFor="email" className='mb-1'>Email <span className='text-red-500'>*</span></label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email"
                            placeholder='Your Email' 
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full h-11 px-4 outline-none focus:border-blue-400  bg-gray-500/25 border border-gray-700 rounded-md
                            ${errors.email ? "border-red-500 outline-none" : "border-gray-700"}`} 
                        />
                        {errors.email && <span className='text-red-500 text-sm'>{errors.email}</span>}
                    </div>
                    <div className='w-10/12 flex flex-col text-xl text-white'>
                        <label htmlFor="subject" className='mb-1'>Subject <span className='text-red-500'>*</span></label>
                        <input 
                            type="text" 
                            id="subject" 
                            name="subject"
                            placeholder='Subject' 
                            value={formData.subject}
                            onChange={handleChange}
                            className={`w-full h-11 px-4 outline-none focus:border-blue-400  bg-gray-500/25 border border-gray-700 rounded-md
                            ${errors.subject ? "border-red-500 " : "border-gray-700"}`} 
                        /> 
                        {errors.subject && <span className='text-red-500 text-xs'>{errors.subject}</span>}
                    </div>
                    <div className='w-10/12 flex flex-col text-xl text-white'>
                        <label htmlFor="Message" className='mb-1' >Message <span className='text-red-500'>*</span></label>
                        <textarea
                            id="Message"
                            name="Message"
                            placeholder='Enter your message'
                            value={formData.Message}
                            onChange={handleChange}
                            className={`w-full h-32 px-4 outline-none focus:border-blue-400  bg-gray-500/25 border border-gray-700 rounded-md resize-none
                            ${errors.Message ? "border-red-500 outline-none" : "border-gray-700"}`}
                        ></textarea>
                        {errors.Message && <span className='text-red-500 text-xs'>{errors.Message}</span>}
                    </div>

                    <div className='w-10/12 flex justify-start'>
                        {status==='1' && <span className='text-blue-500 text-sm'>Sending...</span>}
                        {status==='2' && <span className='text-green-500 text-sm'>Message sent successfully!</span>}
                        {status==='3' && <span className='text-red-500 text-sm'>Failed to send message. Please try again later.</span>}
                    </div>
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className='w-10/12 h-11 bg-blue-600 text-white rounded-md mt-4 hover:bg-blue-700 transition-colors'
                    >
                        Send Message
                    </button>
                    
                </form>
            </motion.div>
        </div>
    )
}
