import React, { createContext, useContext, useEffect, useRef, useState } from "react";

const InViewAnimationContext = createContext();

export const InViewAnimationProvider = ({ children }) => {
  const observer = useRef(null);
  const [inViewElements, setInViewElements] = useState({});

  useEffect(() => {
    if (typeof window === "undefined") return;

    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (entry.isIntersecting) {
            setInViewElements((prev) => ({ ...prev, [id]: true }));
          }
        });
      },
      { threshold: 0.2 }
    );

    return () => observer.current?.disconnect();
  }, []);

  const register = (ref, id) => {
    if (!ref?.current) return;

    // Force re-observe after a short delay to handle dark/light repaint
    setTimeout(() => {
      if (ref.current && observer.current) observer.current.observe(ref.current);
    }, 50);
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
    const element = ref?.current;
    if (!element) return;

    register(ref, id);
  }, [ref, id, register]);

  return inViewElements[id] ?? false;
};
