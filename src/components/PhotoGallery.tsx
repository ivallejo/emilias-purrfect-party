import { Card } from '@/components/ui/card';
import galleryParty from '@/assets/gallery-party.png';
import galleryKittens from '@/assets/gallery-kittens.png';

// CUSTOMIZATION: Add your own gallery images here
const GALLERY_IMAGES = [
  {
    src: galleryParty,
    alt: 'Fiesta mágica',
    title: 'MOMENTOS ESPECIALES',
  },
  {
    src: galleryKittens,
    alt: 'Gatitos jugando',
    title: 'DIVERSIÓN Y JUEGOS',
  },
];

const PhotoGallery = () => {
  return (
    <section className="py-20 px-4 bg-gradient-gallery relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-bounce-in">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 font-heading" 
              style={{ 
                textShadow: '0 0 20px rgba(255,255,255,0.3), 0 0 40px rgba(255,255,255,0.2)',
                WebkitTextStroke: '2px rgba(255,255,255,0.3)'
              }}>
            ✨ Galería Mágica ✨
          </h2>
          <p className="text-xl text-white/90">
            ¡Mira todo lo que nos espera en esta celebración!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {GALLERY_IMAGES.map((image, index) => (
            <div
              key={index}
              className="animate-bounce-in group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Card className="overflow-hidden border-[8px] border-white rounded-[2.5rem] shadow-glow bg-white p-2 hover:scale-105 transition-all duration-300">
                <div className="rounded-[2rem] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-[300px] md:h-[400px] object-cover"
                  />
                </div>
                <div className="p-6 text-center bg-white">
                  <h3 className="text-3xl font-bold text-primary font-heading">
                    {image.title}
                  </h3>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
