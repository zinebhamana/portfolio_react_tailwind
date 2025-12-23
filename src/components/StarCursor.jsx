// StarCursor.jsx
import { useState, useEffect } from "react";

export const StarCursor = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const angle = Math.random() * 2 * Math.PI;
      const distance = Math.random() * 100 + 50;
      const dx = Math.cos(angle) * distance;
      const dy = Math.sin(angle) * distance;

      const color = "star-glow";

      const id = Date.now() + Math.random(); // unique id
      setStars((prev) => [
        ...prev,
        { x: e.clientX, y: e.clientY, dx, dy, color, id },
      ]);

      // remove star after 2s
      setTimeout(() => {
        setStars((prev) => prev.filter((s) => s.id !== id));
      }, 5000);
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Hide default cursor */}
      <div className="fixed inset-0 pointer-events-none z-[9999]">
        {stars.map((star) => (
          <div
            key={star.id}
            className="star absolute w-4 h-4"
            style={{
              left: star.x,
              top: star.y,
              backgroundColor: star.color,
              clipPath:
                "polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)",
              animation: "fadeOut 2s forwards",
              "--dx": `${star.dx}px`,
              "--dy": `${star.dy}px`,
            }}
          ></div>
        ))}
      </div>

      <style>{`
       

        @keyframes fadeOut {
          to {
            transform: translate(var(--dx), var(--dy)) scale(0.5);
            opacity: 0;
          }
        }

        .star {
          pointer-events: none;
          transform: translate(-50%, -50%) scale(1);
        }
      `}</style>
    </>
  );
};
