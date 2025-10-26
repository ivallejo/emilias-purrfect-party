import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';
import heroIllustration from '@/assets/hero-illustration.png';
import Countdown from '@/components/Countdown';
import EventDetails from '@/components/EventDetails';
import Activities from '@/components/Activities';
import PhotoGallery from '@/components/PhotoGallery';
import RSVPForm from '@/components/RSVPForm';
import FloatingConfetti from '@/components/FloatingConfetti';
import FloatingBalloons from '@/components/FloatingBalloons';

// CUSTOMIZATION: Edit these values
const BIRTHDAY_GIRL = {
  name: 'Emilia',
  age: 4,
};

const CONTACT_INFO = {
  parents: 'Margareth & Luis',
  email: 'contact@margarethyluis.com',
};

const Index = () => {
  const scrollToRSVP = () => {
    document.getElementById('rsvp')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <FloatingConfetti />
      <FloatingBalloons />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative z-10 px-4 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8 animate-bounce-in">
            <Sparkles className="w-16 h-16 mx-auto text-accent animate-wiggle" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-rainbow animate-bounce-in">
            🎀 {BIRTHDAY_GIRL.name}'s {BIRTHDAY_GIRL.age}th Birthday! 🎀
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground mb-8 animate-bounce-in" style={{ animationDelay: '0.2s' }}>
            Join us for a purr-fect celebration full of fun, games, and cake!
          </p>

          <div className="mb-12 animate-bounce-in max-w-3xl mx-auto" style={{ animationDelay: '0.3s' }}>
            <img
              src={heroIllustration}
              alt="Magical dollhouse with cute kitten"
              className="w-full rounded-3xl shadow-glow animate-float"
            />
          </div>

          <div className="mb-12 animate-bounce-in" style={{ animationDelay: '0.4s' }}>
            <Button
              onClick={scrollToRSVP}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10 py-7 text-xl font-bold shadow-soft hover-glow transition-all duration-300 hover:scale-110"
            >
              RSVP Now 🎈
            </Button>
          </div>

          <div className="animate-bounce-in" style={{ animationDelay: '0.5s' }}>
            <p className="text-lg text-muted-foreground mb-6 font-semibold">
              Countdown to the big day:
            </p>
            <Countdown />
          </div>
        </div>
      </section>

      {/* Event Details */}
      <EventDetails />

      {/* Activities */}
      <Activities />

      {/* Photo Gallery */}
      <PhotoGallery />

      {/* RSVP Form */}
      <RSVPForm />

      {/* Footer */}
      <footer className="bg-gradient-footer py-12 px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-4">
            <Sparkles className="w-12 h-12 mx-auto text-accent animate-float" />
          </div>
          <p className="text-2xl font-bold text-primary mb-4">
            With love, {CONTACT_INFO.parents} 💕
          </p>
          <p className="text-foreground">
            Questions? Reach us at{' '}
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="text-primary hover:underline font-semibold"
            >
              {CONTACT_INFO.email}
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
