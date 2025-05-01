// NotFound.jsx
import React, { useEffect, useRef } from 'react';
import './NotFound.scss'; // SCSS stylesheet
import { Link } from 'react-router-dom';
const NotFound = () => {
  const cryptRef = useRef(null);
  const titleRef = useRef(null);
  const msgRef = useRef(null);

  useEffect(() => {
    // Patch styling
    document.querySelectorAll(".patch").forEach((el, i) => {
      const rX = Math.floor(Math.random() * 50);
      const rH = Math.floor(Math.random() * 10) + 15;
      el.style.left = `${i - 1}vw`;
      el.style.height = `${rH}vh`;
      el.style.clipPath = `polygon(${rX}% ${rX}%, 0% 100%, 100% 100%)`;
    });

    // Cross rotation
    document.querySelectorAll(".cross").forEach((el, i) => {
      const rR = Math.floor(Math.random() * 15) * Math.cos(Math.PI * Math.round(Math.random()));
      el.style.transform = `rotateZ(${rR}deg)`;
    });

    // Star positioning
    document.querySelectorAll(".star").forEach((el) => {
      el.style.top = `${Math.random() * window.innerHeight - window.innerHeight / 4}px`;
      el.style.left = `${Math.random() * window.innerWidth}px`;
    });

    // Crypt tilt
    if (cryptRef.current) {
      const tilt = Math.floor(Math.random() * 5) * Math.cos(Math.PI * Math.round(Math.random()));
      cryptRef.current.style.transform = `translateX(-50%) rotateZ(${tilt}deg)`;
    }

    // Title animation
    if (titleRef.current) {
      titleRef.current.style.top = "45%";
      titleRef.current.classList.add("life");
    }

    // Message fade in
    if (msgRef.current) {
      setTimeout(() => {
        msgRef.current.style.display = 'block';
      }, 5000);
    }
  }, []);

  return (
    <div className="swing-404">
        <div className="info">
      <h2>We can't find that page</h2>
      <p>
        We're fairly sure that page used to be here, but seems to have gone missing.
        We do apologise on its behalf.
      </p>
      <Link to="/">Home</Link>
      
    </div>
    <h1>404</h1>
    
    <div className="cloak__wrapper">
      <div className="cloak__container">
        <div className="cloak"></div>
      </div>
    </div>
    
  </div>
  );
};

export default NotFound;
