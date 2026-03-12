import { useState, useEffect, useRef } from "react";
import ScrollAnimation from "./ScrollAnimation";
import "animate.css/animate.min.css";

const items = [
  "React.",
  "Next.",
  "TypeScript.",
  "JavaScript ES6.",
  "CSS animations.",
  "Motion.",
  "Tailwind CSS.",
  "Panda CSS.",
  "Git.",
  "Turborepo.",
  "Storybook.",
];

const TextLoop = () => {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [width, setWidth] = useState("auto");
  const measureRef = useRef(null);
  const hiddenRef = useRef(null);

  useEffect(() => {
    if (hiddenRef.current) {
      setWidth(hiddenRef.current.offsetWidth + "px");
    }
  }, [index]);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % items.length);
        setAnimating(false);
      }, 300);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="z-0 bgSiteGreen p-1 text-2xl text-white rounded-lg overflow-hidden inline-block">
      <span
        ref={hiddenRef}
        style={{
          position: "absolute",
          visibility: "hidden",
          whiteSpace: "nowrap",
        }}
        className="ml-2 mt-2 text-2xl"
      >
        {items[index]}
      </span>
      <p
        ref={measureRef}
        className="ml-2 z-0 mt-2"
        style={{
          transition: "transform 0.3s ease-in-out, opacity 0.3s ease-in-out, width 0.3s ease-in-out",
          transform: animating ? "translateY(-20px)" : "translateY(0)",
          opacity: animating ? 0 : 1,
          width: width,
          whiteSpace: "nowrap",
        }}
      >
        {items[index]}
      </p>
    </span>
  );
};

const TextLooper = () => {
  return (
    <ScrollAnimation animateIn="animate__headShake">
      <div className="h-60 text-2xl p-1 font-bold flex flex-col sm:flex-row items-center justify-center">
        <h2 className="font-semibold">Some tools I use:&nbsp;</h2>
        <TextLoop />
      </div>
    </ScrollAnimation>
  );
};

export default TextLooper;
