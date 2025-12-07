import React, { useEffect, useRef } from 'react';

export const MouseFollower: React.FC = () => {
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      const { clientX, clientY } = e;
      if (blobRef.current) {
        blobRef.current.animate({
          left: `${clientX}px`,
          top: `${clientY}px`
        }, { duration: 3000, fill: "forwards" });
      }
    };

    window.addEventListener('pointermove', handlePointerMove);
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      <div 
        ref={blobRef}
        className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-[100px] opacity-20 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500"
      />
    </div>
  );
};