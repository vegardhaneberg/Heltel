import { ChevronDown, Trophy } from "lucide-react";
import type { Prize } from "../data/PreviousWork";
import { useState } from "react";

interface PrizeComponentProps {
  title: string;
  prizes: Prize[];
}

const PrizeComponent: React.FC<PrizeComponentProps> = ({ title, prizes }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  return (
    <>
      {/* Expand Button */}
      {prizes && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 text-sm font-semibold text-purple-600 hover:text-purple-700 transition-colors"
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
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-0 sm:px-8 pb-6 sm:pb-8 pt-2">
          <div className="space-y-3">
            {prizes.map((prize, prizeIndex) => (
              <div
                key={prizeIndex}
                className="flex items-start gap-3 bg-white/30 p-3 rounded-lg mw-100"
              >
                <Trophy className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 font-medium">{prize.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PrizeComponent;
