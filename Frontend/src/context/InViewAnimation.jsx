import React, { createContext, useContext, useRef, useEffect, useState } from "react";

const InViewAnimationContext = createContext();

export const InViewAnimationProvider = ({ children }) => {
  const observer = useRef(null);
  const [inViewElements, setInViewElements] = useState({});

  useEffect(() => {
    if (typeof window === "undefined") return; // SSR safe

    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (entry.isIntersecting) {
            setInViewElements((prev) => ({ ...prev, [id]: true }));
            observer.current.unobserve(entry.target); // animate only once
          }
        });
      },
      { threshold: 0.2 } // section is 20% visible
    );

    return () => observer.current?.disconnect();
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

  return inViewElements[id] ?? false;
};
