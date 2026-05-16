import React, { useState, useEffect } from 'react'
import Logo from '../assets/Logo.svg'
import HamburgerMenuIcon from '../assets/hamburgerMenu.svg'
import OverlayMenu from './OverlayMenu.jsx';

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuVisible, setMenuVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Education', href: '#education' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
    ];

    return (
        <>
            <nav className={`fixed top-0 left-0 w-full z-[99999] transition-all duration-300 px-6 md:px-10 h-20 flex items-center justify-between ${scrolled ? 'bg-black/60 backdrop-blur-xl border-b border-white/5 h-16' : 'bg-transparent'}`}>
                {/* Logo Section */}
                <div className='flex items-center gap-2 cursor-pointer group'>
                    <img src={Logo} alt="Logo" className='h-8 w-auto group-hover:scale-110 transition-transform duration-300' />
                    <span className="font-black text-2xl tracking-tighter text-white hidden sm:block">
                        ZEESHAN<span className="text-primary">.</span>
                    </span>
                </div>

                {/* Desktop Links */}
                <div className='hidden lg:flex items-center gap-8'>
                    {navLinks.map((link) => (
                        <a 
                            key={link.name} 
                            href={link.href} 
                            className='text-xs font-bold uppercase tracking-widest text-white/50 hover:text-primary transition-colors duration-300'
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Actions */}
                <div className='flex items-center gap-4'>
                    <a 
                        href="#contact" 
                        className='px-4 sm:px-6 py-2 sm:py-2.5 bg-primary text-black text-[10px] sm:text-xs font-black uppercase tracking-widest rounded-full hover:bg-white transition-all duration-300 shadow-lg shadow-primary/10 whitespace-nowrap'
                    >
                        Reach out
                    </a>
                    
                    <button 
                        className='p-2 hover:bg-white/5 rounded-lg transition-colors lg:hidden'
                        onClick={() => setMenuVisible(true)}
                    >
                        <img src={HamburgerMenuIcon} alt="Menu" className='h-6 w-6' />
                    </button>
                </div>
            </nav>

            <OverlayMenu isopen={menuVisible} onclose={() => setMenuVisible(false)} />
        </>
    )
}

export default Navbar