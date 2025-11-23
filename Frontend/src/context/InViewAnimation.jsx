import React, { createContext, useContext, useRef, useEffect, useState } from "react";

const InViewAnimationContext = createContext();

export const InViewAnimationProvider = ({ children }) => {
  const observer = useRef(null);
  const [inViewElements, setInViewElements] = useState({});

  useEffect(() => {
    // Delay observer until DOM fully renders (fixes Netlify invisible issue)
    const timeout = setTimeout(() => {
      observer.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const id = entry.target.id;
            if (entry.isIntersecting) {
              setInViewElements((prev) => ({ ...prev, [id]: true }));
            }
          });
        },
        { threshold: 0.1 }
      );
    }, 300); // short delay fixes SSR + static hosting glitch

    return () => clearTimeout(timeout);
  }, []);

  const register = (ref, id) => {
    if (!ref?.current || !observer.current) return;
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
  }, [ref, id]);

  // default = true → section always visible until observer fires
  return inViewElements[id] ?? true;
};
