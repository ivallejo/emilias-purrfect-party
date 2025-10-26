import { Calendar, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

// CUSTOMIZATION: Edit event details here
const EVENT_DETAILS = {
  date: 'Saturday, February 15, 2025',
  time: '3:00 PM – 7:00 PM',
  location: 'Casa de Emilia, Lima, Perú',
  // Google Calendar link - replace with actual link
  googleCalendarLink: 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Emilia%27s+4th+Birthday+Party&dates=20250215T200000Z/20250216T000000Z&details=Join+us+for+a+magical+celebration!&location=Casa+de+Emilia,+Lima,+Peru',
};

const EventDetails = () => {
  const details = [
    { icon: Calendar, label: 'Date', value: EVENT_DETAILS.date, color: 'text-accent' },
    { icon: Clock, label: 'Time', value: EVENT_DETAILS.time, color: 'text-lavender' },
    { icon: MapPin, label: 'Location', value: EVENT_DETAILS.location, color: 'text-sky' },
  ];

  const handleAddToCalendar = () => {
    window.open(EVENT_DETAILS.googleCalendarLink, '_blank');
  };

  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4 text-gradient animate-bounce-in">
          Event Details
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Mark your calendars! ✨
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {details.map((detail, index) => (
            <div
              key={detail.label}
              className="bg-gradient-card rounded-3xl p-8 shadow-soft hover-lift hover-glow animate-bounce-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={`${detail.color} mb-4`}>
                <detail.icon className="w-12 h-12 mx-auto" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-center mb-2 text-primary">
                {detail.label}
              </h3>
              <p className="text-center text-foreground font-medium">
                {detail.value}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={handleAddToCalendar}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-lg font-bold shadow-soft hover-glow transition-all duration-300 hover:scale-105"
          >
            📆 Add to my calendar
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
