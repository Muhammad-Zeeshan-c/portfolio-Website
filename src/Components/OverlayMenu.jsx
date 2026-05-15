import { useEffect, useState } from "react";
import closeIcon from "../assets/close.svg";

function OverlayMenu({ isopen, onclose }) {
  const [scale, setScale] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const updateScale = () => {
      const diagonal = Math.sqrt(window.innerWidth ** 2 + window.innerHeight ** 2);
      setScale(diagonal / 40 * 1.5);
    };
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  useEffect(() => {
    if (isopen) {
      const timeout = setTimeout(() => setAnimate(true), 10);
      return () => clearTimeout(timeout);
    } else {
      setAnimate(false);
    }
  }, [isopen]);

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    setAnimate(false);
    setTimeout(() => {
      onclose();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 1100);
  };

  const menuLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Education", id: "education" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <>
      {isopen && (
        <div className="fixed inset-0 flex justify-center items-center z-[99999]">
          {/* Expanding Circle Background */}
          <div
            className={`absolute w-10 h-10 bg-black/95 backdrop-blur-2xl rounded-full z-0 top-1/2 left-1/2 transition-transform duration-1000 ease-[cubic-bezier(0.16, 1, 0.3, 1)] -translate-x-1/2 -translate-y-1/2`}
            style={{ transform: `scale(${animate ? scale : 0})` }}
          />

          {/* Close Button */}
          <button
            className="absolute top-10 right-10 w-12 h-12 flex items-center justify-center rounded-full glass glass-hover cursor-pointer z-10 transition-all duration-500"
            style={{
              opacity: animate ? 1 : 0,
              transform: animate ? 'rotate(0deg)' : 'rotate(-90deg)',
              transitionDelay: animate ? "0.8s" : "0s",
            }}
            onClick={onclose}
          >
            <img src={closeIcon} alt="Close" className="w-5 h-5 invert" />
          </button>

          {/* Links Container */}
          <div
            className="relative z-10 flex flex-col items-center gap-8"
            style={{
              transition: animate ? "opacity 1.2s ease-out, transform 1.2s ease-out" : "opacity 0.3s ease-in, transform 0.3s ease-in",
              transitionDelay: animate ? "0.6s" : "0s",
              opacity: animate ? 1 : 0,
              transform: animate ? "translateY(0)" : "translateY(50px)",
            }}
          >
            {menuLinks.map((link, idx) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleLinkClick(e, link.id)}
                className="group relative text-4xl md:text-6xl font-black text-white/40 hover:text-white transition-all duration-300"
              >
                <span className="absolute -left-8 top-1/2 -translate-y-1/2 text-primary text-sm font-bold opacity-0 group-hover:opacity-100 group-hover:-left-6 transition-all duration-300">
                  0{idx + 1}
                </span>
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-500"></span>
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default OverlayMenu;