import React, { useState } from 'react'
import Logo from '../assets/Logo.svg'
import HamburgerMenuIcon from '../assets/hamburgerMenu.svg'
import OverlayMenu from './overlayMenu.jsx';



function Navbar() {

    const [visible, setvisible] = useState(true);
    const [ menuVisible, setMenuVisible ] = useState(false);

    return (
        <>
            <nav className={` text-white h-16 w-full flex justify-between items-center transition-transform duration-300 ease-in fixed px-4 overflow-hidden z-[99999] ${visible ? "translate-y-0" : "-translate-y-full"}`}>
                <div className='h-full w-auto flex justify-center items-center gap-2'
                onClick={()=>{console.log("btn clicked")}}>
                    <img src={Logo} alt="Z-Logo" className='h-full w-auto' />
                    <span className="font-bold text-center text-primary w-auto text-3xl font-gravitas hidden sm:block">Zeeshan</span>
                </div>

                <button >
                    <img src={HamburgerMenuIcon} alt="Hamburger Menu" className='h-10 w-10 cursor-pointer outline-none '
                        onClick={() => { setMenuVisible(true) }} />
                </button>


                <button className='bg-gradient-to-r bg-pink-500 to-blue-500 px-4 py-2 rounded-full hover:opacity-90 transition-opacity duration-300 text-xl font-bold ease-in cursor-pointer hidden sm:block '>
                    <a href="#contact">Reach out</a>
                </button>
            </nav>
            <OverlayMenu isopen={menuVisible} onclose={()=>{setMenuVisible(false)}}/>
        </>
    )
}

export default Navbar