import { useEffect, useState } from "react";
import closeIcon from "../assets/close.svg";

function OverlayMenu({ isopen, onclose }) {
  const [scale, setScale] = useState(0);
  const [animate, setAnimate] = useState(false);

  // calculating scale to expand circle to cover entire screen
  useEffect(() => {
    const updateScale = () => {
      const diagonal = Math.sqrt(window.innerWidth ** 2 + window.innerHeight ** 2);
      setScale(diagonal / 40 * 1.5);
    };
    updateScale();
    window.addEventListener("resize", updateScale);

    return () => window.removeEventListener("resize", updateScale);
  }, []);

  // Animatation to open with delay
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
    setAnimate(false); // Start shrinking

    // Wait for the shrinking animation to complete (duration-2000 is 2s, but we'll use a slightly shorter time for better UX if possible, or match it)
    // Actually, I'll reduce the duration later if it feels too slow, but for now I'll wait 800ms to 1s as a "slow shrink" that isn't painful.
    setTimeout(() => {
      onclose();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 1100); // Increased to 1100ms to exceed the 1000ms CSS transition
  };

  return (
    <>
      {isopen && (
        <div className="fixed inset-0 flex justify-center items-center z-[9999]">

          {/* Circle covering screen */}
          <div
            className={`absolute w-10 h-10 bg-black opacity-95 rounded-full z-0 top-1/2 left-1/2
            transition-transform duration-1000 ease-[cubic-bezier(0.16, 1, 0.3, 1)] -translate-x-1/2 -translate-y-1/2`}
            style={{
              //Scaling the circle to cover screen
              transform: `scale(${animate ? scale : 0})`,
            }}
          />

          <button
            className="absolute top-20 right-12 w-8 h-8 cursor-pointer z-10 invert"
            style={{
              transition: animate ? "opacity 1s ease" : "opacity 0.3s ease",
              transitionDelay: animate ? "1.2s" : "0s",
              opacity: animate ? 1 : 0
            }}
            onClick={onclose}
          >
            <img src={closeIcon} alt="Close" className="w-full h-full invert" />
          </button>

          <div
            className="relative z-10 flex flex-col justify-center items-center gap-6 text-3xl font-bold text-white"
            style={{
              transition: animate ? "opacity 1.5s ease-out, transform 1.5s ease-out" : "opacity 0.3s ease-in, transform 0.3s ease-in",
              transitionDelay: animate ? "0.8s" : "0s",
              opacity: animate ? 1 : 0,
              transform: animate ? "translateY(0)" : "translateY(30px)",
            }}
          >
            <a href="#home" onClick={(e) => handleLinkClick(e, "home")}>Home</a>
            <a href="#about" onClick={(e) => handleLinkClick(e, "about")}>About</a>
            <a href="#skills" onClick={(e) => handleLinkClick(e, "skills")}>Skills</a>
            <a href="#projects" onClick={(e) => handleLinkClick(e, "projects")}>Projects</a>
            <a href="#contact" onClick={(e) => handleLinkClick(e, "contact")}>Contact Me</a>
          </div>


        </div>
      )}
    </>
  );
}

export default OverlayMenu;