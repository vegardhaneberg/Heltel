import "./ScrollArrow.css";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const ScrollArrow: React.FC = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 0) setVisible(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <div
        className={[
          "fixed left-1/2 bottom-6 -translate-x-1/2 z-50",
          "transition-all duration-300",
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-2 pointer-events-none",
        ].join(" ")}
      >
        <button
          type="button"
          aria-label="Scroll down"
          onClick={() =>
            window.scrollTo({
              top: window.innerHeight - 150,
              behavior: "smooth",
            })
          }
          className={[
            "relative flex items-center justify-center",
            "h-12 w-12 rounded-full shadow-xl",
            "bg-white/25 backdrop-blur-sm",
            "hover:bg-white/35 active:scale-95 transition",
            "arrow-anim",
          ].join(" ")}
        >
          <span className="absolute inset-0 rounded-full bg-white/20 blur-md -z-10" />
          <ChevronDown className="h-7 w-7 text-white" />
        </button>
      </div>
    </>
  );
};

export default ScrollArrow;
