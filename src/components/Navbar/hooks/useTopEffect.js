import { useState, useEffect, useRef } from 'react';

export const useTopEffect = (topEffect) => {
  const [isAtTop, setIsAtTop] = useState(false);
  const isAtTopRef = useRef(null);
  const observer = useRef();

  useEffect(() => {
    const windowGlobal = typeof window !== 'undefined' && window;
    if (topEffect && windowGlobal) {
      const handleScroll = (entries) => {
        if (entries[0].isIntersecting) setIsAtTop(false);
        else setIsAtTop(true);
      };
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 1,
      };
      observer.current = new IntersectionObserver(handleScroll, options);
      observer.current.observe(isAtTopRef.current);
    }
    return () => observer.current && observer.current.disconnect();
  }, []);

  return [isAtTop, isAtTopRef];
};
