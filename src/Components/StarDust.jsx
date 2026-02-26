import React, { useEffect, useRef, useState } from 'react';




export default function Stardust (){
  const canvasRef = useRef(null);
  const [particleCount] = useState(150); 

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];


    class Particle {
      constructor(width, height) {
        this.canvasWidth = width;
        this.canvasHeight = height;
        

        this.x = Math.random() * width;
        this.y = Math.random() * height;
        

        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        

        
        this.radius = Math.random() * 3.3 + 0.2;
        

        this.opacity = Math.random() * 0.6 + 0.2;
        

        this.color = '#ffffff';
      }

      update() {

        this.x += this.vx;
        this.y += this.vy;


        if (this.x + this.radius > this.canvasWidth || this.x - this.radius < 0) {
          this.vx = -this.vx;
        }


        if (this.y + this.radius > this.canvasHeight || this.y - this.radius < 0) {
          this.vy = -this.vy;
        }
      }

      draw(context) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.globalAlpha = this.opacity;
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
      }
    }

    const init = () => {

        canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(canvas.width, canvas.height));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      

      particles.forEach((particle) => {
        particle.update();
        particle.draw(ctx);
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      init();
    };

    window.addEventListener('resize', handleResize);
    
    init();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [particleCount]);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center">
      {/* Canvas Layer */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 block w-full h-full"
      />

      {/* UI Overlay Layer */}
    </div>
  );
};
