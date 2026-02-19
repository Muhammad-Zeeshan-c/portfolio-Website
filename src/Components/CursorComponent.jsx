import React, { useEffect, useState } from 'react';

function CursorComponent() {
  const [position, setposition] = useState({ x: 0, y: 0 });

  const handleMove = (e) => {
    setposition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMove);
    return () => {
      window.removeEventListener('mousemove', handleMove);
    };
  }, []); // Added dependency array to prevent memory leaks

  return (
    <div 
      className='pointer-events-none z-[999] fixed inset-0 overflow-hidden'
    >
      <div 
        className='w-20 h-20 bg-gradient-to-r from-pink-500 to-blue-500 blur-3xl opacity-70'
        style={{
          // Moving the child instead of the parent keeps the overflow contained
          transform: `translate(${position.x - 40}px, ${position.y - 40}px)`
        }}
      ></div>
    </div>
  );
}

export default CursorComponent;