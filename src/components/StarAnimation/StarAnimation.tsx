import { Star } from "lucide-react";

export interface StarAnimationProps {
  stars: number;
}

const StarAnimation = (props: StarAnimationProps) => {
  return (
    <div className="flex">
      {Array(props.stars)
        .fill(null)
        .map((_, i) => (
          <Star
            key={i}
            className={`
              m-1 text-white w-3 h-3
              ${i % 2 === 0 ? "-translate-y-1" : "translate-y-1"}
              animate-twinkle
            `}
            style={{ animationDelay: `${Math.random() * 3000}ms` }}
          />
        ))}
    </div>
  );
};

export default StarAnimation;
