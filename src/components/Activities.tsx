import cakeIcon from '@/assets/cake-icon.png';
import gamesIcon from '@/assets/games-icon.png';
import photosIcon from '@/assets/photos-icon.png';

const Activities = () => {
  const activities = [
    {
      title: '🎂 Cake & Cupcakes',
      description: 'Delicious treats for everyone!',
      image: cakeIcon,
    },
    {
      title: '🎁 Games & Surprises',
      description: 'Fun activities and exciting prizes!',
      image: gamesIcon,
    },
    {
      title: '📸 Family Photos',
      description: 'Capture magical memories together!',
      image: photosIcon,
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-sky/20 to-transparent relative z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4 text-gradient animate-bounce-in">
          What's Happening?
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Get ready for an amazing day! 🌟
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div
              key={activity.title}
              className="bg-card rounded-3xl p-8 shadow-soft hover-lift hover-glow animate-bounce-in text-center"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="mb-6 flex justify-center">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-32 h-32 object-contain animate-float-slow"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-primary">
                {activity.title}
              </h3>
              <p className="text-foreground">
                {activity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
