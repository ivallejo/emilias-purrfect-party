import { Sparkles } from 'lucide-react';

const FloatingBalloons = () => {
  const balloons = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    left: `${(i * 12) + 5}%`,
    delay: `${i * 2}s`,
    duration: `${15 + i * 2}s`,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {balloons.map((balloon) => (
        <div
          key={balloon.id}
          className="absolute animate-balloon"
          style={{
            left: balloon.left,
            animationDelay: balloon.delay,
            animationDuration: balloon.duration,
          }}
        >
          <div className="relative">
            <Sparkles className="w-8 h-8 text-accent opacity-60 animate-float" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FloatingBalloons;
