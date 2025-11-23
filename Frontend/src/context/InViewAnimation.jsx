import React, { createContext, useContext, useRef, useEffect, useState } from "react";

const InViewAnimationContext = createContext();

export const InViewAnimationProvider = ({ children, options }) => {
  const observer = useRef(null);
  const [inViewElements, setInViewElements] = useState({});

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (entry.isIntersecting) {
            setInViewElements((prev) => ({ ...prev, [id]: true }));
          } else {
            setInViewElements((prev) => ({ ...prev, [id]: false }));
          }
        });
      },
      { threshold: 0.2, ...options }
    );
  }, [options]);

  const register = (ref, id) => {
    if (!ref || !ref.current || !observer.current) return;
    observer.current.observe(ref.current);
  };

  return (
    <InViewAnimationContext.Provider value={{ inViewElements, register }}>
      {children}
    </InViewAnimationContext.Provider>
  );
};

export const useInViewAnimation = (id, ref) => {
  const { inViewElements, register } = useContext(InViewAnimationContext);

  useEffect(() => {
    register(ref, id);
  }, [ref, id, register]);

  return !!inViewElements[id];
};