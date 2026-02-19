import React, { useMemo, useState, useEffect } from "react";

function GreetingsAnimation({onComplete}) {
    const greetings = useMemo(() => [
        "Hello", "Hola", "Bonjour", "السلام علیکم", "مرحبا", 
        "Ciao", "Hallo", "こんにちは", "你好", "안녕하세요","Salam"
    ], []);

    const [index, setIndex] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        if (index < greetings.length - 1) {
            const id = setInterval(() => setIndex((i) => i + 1), 180);
            return () => clearInterval(id);
        } else {
            const t = setTimeout(() => {
                setVisible(false);
                onComplete();
            }, 300);
            return () => clearTimeout(t);
        }
    }, [index, greetings.length]); 


    return (
        <div className={`w-full h-full inset-0 absolute bg-black z-50 flex justify-center items-center rounded-b-lg ${visible? "transition-transform delay-500 ease-out  translate-y-0 ":"-translate-y-[100%] transition-transform duration-500 ease-out"}`}>
            <h1 className="text-9xl text-white font-bold">{greetings[index]}</h1>
        </div>
    );
}


export default GreetingsAnimation;