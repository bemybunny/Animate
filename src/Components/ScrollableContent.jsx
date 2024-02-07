// ScrollableContent.js
import React, { useRef, useState } from 'react';
import '../App.css';

const ScrollableContent = ({ children }) => {
  const containerRef = useRef(null);
  const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!startX) return;
    const x = e.touches[0].clientX;
    const distance = x - startX;
    containerRef.current.scrollLeft = scrollLeft - distance;
  };

  const handleTouchEnd = () => {
    setStartX(null);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  return (
    <div
      ref={containerRef}
      className="scrollable-content"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {children}
    </div>
  );
};

export default ScrollableContent;
