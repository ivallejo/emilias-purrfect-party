import { useState, useEffect } from 'react';

// CUSTOMIZATION: Edit the event date here
const EVENT_DATE = new Date('2025-02-15T15:00:00');

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = EVENT_DATE.getTime() - new Date().getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center">
      {timeUnits.map((unit, index) => (
        <div
          key={unit.label}
          className="flex flex-col items-center bg-gradient-card rounded-3xl p-6 shadow-soft min-w-[100px] hover-lift animate-bounce-in"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="text-5xl font-bold text-primary font-heading">
            {String(unit.value).padStart(2, '0')}
          </div>
          <div className="text-sm mt-2 text-muted-foreground font-semibold uppercase tracking-wide">
            {unit.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
