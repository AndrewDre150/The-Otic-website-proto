import React, { useEffect, useState, useRef } from 'react';

const AutoTyping = ({ text, speed }) => {
  const [isInView, setIsInView] = useState(false);
  const [displayText, setDisplayText] = useState(false);
  const targetRef = useRef("");
  

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const [entry] = entries;
      setIsInView(entry.isIntersecting);
    });

    observer.observe(targetRef.current);

    return () => {
      observer.unobserve(targetRef.current);
    };
  }, []);

  useEffect(() => {
    let currentIndex = 0;
    let timer;

    if (isInView) {
      setDisplayText('');
      currentIndex = 0;
      
      timer = setTimeout(() => {
        typeText();
      }, speed);
    }

    const typeText = () => {
      if (currentIndex  < text.length - 1) {
        setDisplayText(prevText => prevText + text[currentIndex]);
        currentIndex++;
        
        timer = setTimeout(typeText, speed);
      }
    };

    return () => {
      clearTimeout(timer);
    };
  }, [isInView, text]);

  return (
    <div ref={targetRef}>
      <h1>{displayText}</h1>
    </div>
  );
};

export default AutoTyping;