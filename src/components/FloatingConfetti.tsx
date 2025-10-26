const FloatingConfetti = () => {
  const confettiColors = ['bg-accent', 'bg-lavender', 'bg-sky', 'bg-mint'];
  const confettiShapes = ['rounded-full', 'rounded-sm'];
  
  const confettiPieces = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
    shape: confettiShapes[Math.floor(Math.random() * confettiShapes.length)],
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 5}s`,
    duration: `${5 + Math.random() * 5}s`,
    size: Math.random() * 10 + 8,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {confettiPieces.map((piece) => (
        <div
          key={piece.id}
          className={`absolute ${piece.color} ${piece.shape} animate-confetti opacity-70`}
          style={{
            left: piece.left,
            top: '-20px',
            width: `${piece.size}px`,
            height: `${piece.size}px`,
            animationDelay: piece.delay,
            animationDuration: piece.duration,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingConfetti;
