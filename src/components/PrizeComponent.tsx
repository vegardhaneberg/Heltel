import { ChevronDown, Trophy, X } from "lucide-react";
import type { Prize } from "../data/PreviousWork";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface PrizeComponentProps {
  title: string;
  prizes: Prize[];
}

const PrizeComponent: React.FC<PrizeComponentProps> = ({ title, prizes }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPrize, setSelectedPrize] = useState<Prize | null>(null);

  // Close the modal when ESC click
  useEffect(() => {
    if (!isModalOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsModalOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isModalOpen]);

  const panelRef = useRef<HTMLDivElement | null>(null);

  // Close the modal when click outside
  useEffect(() => {
    if (!isModalOpen) return;
    const onClick = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setIsModalOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [isModalOpen]);

  // Prevent scrolling when the modal is open
  useEffect(() => {
    if (!isModalOpen) return;

    const scrollY = window.scrollY;
    const body = document.body;
    body.style.overflow = "hidden";
    const metaTheme =
      document.querySelector<HTMLMetaElement>('meta[name="theme-color"]') ??
      (() => {
        const m = document.createElement("meta");
        m.setAttribute("name", "theme-color");
        document.head.appendChild(m);
        return m;
      })();

    const prevTheme = metaTheme.getAttribute("content");
    metaTheme.setAttribute("content", "#000000");

    return () => {
      body.style.overflow = "";
      metaTheme.setAttribute("content", prevTheme ?? "#ffffff");
      window.scrollTo(0, scrollY);
    };
  }, [isModalOpen]);

  const openModalForPrize = (prize: Prize) => {
    setSelectedPrize(prize);
    setIsModalOpen(true);
  };

  return (
    <>
      {/* Expand Button */}
      {prizes && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center justify-center gap-2 text-sm font-semibold hover:text-purple-700 transition-colors w-full"
        >
          <Trophy className="w-4 h-4" />
          <span>
            {/* Desktop & tablet (md and up) */}
            <span className="hidden md:inline">
              Helene vant {prizes?.length > 1 ? "flere priser" : "pris"} for{" "}
              {title}
            </span>

            {/* Mobile (sm and below) */}
            <span className="inline md:hidden">Se prisene Helene vant</span>
          </span>
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-300 ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
        </button>
      )}

      {/* Expandable Prizes Section */}
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden mt-2 ${
          isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-0 sm:px-8 pb-6 sm:pb-8 pt-2 max-w-xl mx-auto">
          <div className="space-y-3 flex flex-col items-center">
            {prizes.map((prize, prizeIndex) => (
              <div
                key={prizeIndex}
                role="button"
                tabIndex={0}
                onClick={() => openModalForPrize(prize)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openModalForPrize(prize);
                  }
                }}
                className="flex justify-center items-center gap-3 bg-white/30 p-3 rounded-lg cursor-pointer hover:bg-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500/60 transition-colors w-full min-w-[280px] sm:min-w-[400px] max-w-lg"
              >
                <Trophy className="w-5 h-5" />
                <span className="text-gray-700 font-medium text-center">
                  {prize.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Portal */}
      {isModalOpen &&
        createPortal(
          <div
            className="
                    fixed inset-0 z-[100]
                    h-[100dvh] w-[100vw]
                    bg-black/50 backdrop-blur-sm
                    flex items-center justify-center
                    touch-none"
            aria-modal="true"
            role="dialog"
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
          >
            {/* iOS bottom toolbar extender for backdrop */}
            <div
              className="fixed left-0 right-0 pointer-events-none bg-black/50 backdrop-blur-sm"
              style={{
                bottom: "calc(-1 * env(safe-area-inset-bottom))",
                height: "env(safe-area-inset-bottom)",
                zIndex: 99,
              }}
            />
            <div
              ref={panelRef}
              className="
          relative w-full max-w-lg rounded-2xl bg-white shadow-2xl
          p-6 sm:p-8
          pb-[calc(env(safe-area-inset-bottom)+1rem)]
          pt-[calc(env(safe-area-inset-top)+1rem)]
        "
            >
              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between gap-6">
                  <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-br from-emerald-700 via-teal-700 to-green-900 p-2 rounded-full shadow">
                      <Trophy className="w-5 h-5 text-white" />
                    </div>
                    <h3
                      id="modal-title"
                      className='[font-family:"Cooper Hewitt",serif] text-2xl font-bold text-gray-900'
                    >
                      {selectedPrize?.title ?? "Prisdetaljer"}
                    </h3>
                  </div>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="rounded-full p-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500/60"
                    aria-label="Lukk"
                    autoFocus
                  >
                    <X className="w-5 h-5 text-gray-600" />
                  </button>
                </div>

                <p
                  id="modal-description"
                  className="mt-4 text-gray-700 leading-relaxed"
                >
                  {selectedPrize?.description ??
                    "Oi her skjedde det en feil. Dette skal være en beskrivelse av prisen Helene vant"}
                </p>

                <div className="mt-6 flex justify-end">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-emerald-700 via-teal-700 to-green-900 px-4 py-2 text-sm font-semibold text-white shadow hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-purple-500/60"
                  >
                    Lukk
                  </button>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default PrizeComponent;
