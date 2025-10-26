import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Label } from '@/components/ui/label';

// CUSTOMIZATION: Replace with your actual form submission endpoint or email
const FORM_SUBMISSION_EMAIL = 'contact@margarethyluis.com';

const RSVPForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    guests: '',
    dietary: '',
    comments: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.guests) {
      toast({
        title: 'Oops!',
        description: 'Please fill in your name and number of guests.',
        variant: 'destructive',
      });
      return;
    }

    // In a real app, you would send this data to a backend or email service
    console.log('RSVP Submission:', formData);
    
    setSubmitted(true);
    toast({
      title: "Thanks! Can't wait to see you 🎉",
      description: 'Your RSVP has been received!',
    });
  };

  if (submitted) {
    return (
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-gradient-card rounded-3xl p-12 shadow-soft animate-bounce-in">
            <div className="text-6xl mb-6 animate-wiggle">🎉</div>
            <h2 className="text-4xl font-bold mb-4 text-gradient">
              Thank You!
            </h2>
            <p className="text-xl text-foreground mb-6">
              We can't wait to celebrate with you!
            </p>
            <p className="text-muted-foreground">
              If you have any questions, reach out to us at{' '}
              <a href={`mailto:${FORM_SUBMISSION_EMAIL}`} className="text-primary hover:underline font-semibold">
                {FORM_SUBMISSION_EMAIL}
              </a>
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp" className="py-20 px-4 relative z-10">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4 text-gradient animate-bounce-in">
          RSVP
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Let us know you're coming! 💕
        </p>

        <form onSubmit={handleSubmit} className="bg-gradient-card rounded-3xl p-8 md:p-12 shadow-soft">
          <div className="space-y-6">
            <div>
              <Label htmlFor="name" className="text-foreground font-semibold mb-2 block">
                Your Name *
              </Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="rounded-2xl border-border bg-background h-12"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <Label htmlFor="guests" className="text-foreground font-semibold mb-2 block">
                Number of Guests *
              </Label>
              <Input
                id="guests"
                type="number"
                min="1"
                value={formData.guests}
                onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                className="rounded-2xl border-border bg-background h-12"
                placeholder="How many people?"
                required
              />
            </div>

            <div>
              <Label htmlFor="dietary" className="text-foreground font-semibold mb-2 block">
                Dietary Restrictions
              </Label>
              <Input
                id="dietary"
                type="text"
                value={formData.dietary}
                onChange={(e) => setFormData({ ...formData, dietary: e.target.value })}
                className="rounded-2xl border-border bg-background h-12"
                placeholder="Any allergies or dietary needs?"
              />
            </div>

            <div>
              <Label htmlFor="comments" className="text-foreground font-semibold mb-2 block">
                Comments
              </Label>
              <Textarea
                id="comments"
                value={formData.comments}
                onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                className="rounded-2xl border-border bg-background min-h-[100px]"
                placeholder="Any special message or questions?"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full py-6 text-lg font-bold shadow-soft hover-glow transition-all duration-300 hover:scale-105"
            >
              Let's Celebrate! 🎈
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default RSVPForm;
