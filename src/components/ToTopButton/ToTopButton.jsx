import React, { useState, useEffect } from 'react';
import { TopBtn } from './ToTopButton.styled';
import { iconSwipeup } from 'utils/svgIcons';


const ToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const shouldShow = window.scrollY > 300;
    setIsVisible(shouldShow);
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <TopBtn
      className={`to-top-button ${isVisible && window.scrollY > 0 ? 'visible' : ''}`}
      onClick={handleClick}
    >
      {iconSwipeup}
    </TopBtn>
  );
};

export default ToTopButton;