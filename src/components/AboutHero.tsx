import Image from 'next/image';
import Link from 'next/link';

interface HeroProps {
  imageSrc?: string;
  title?: string;
  primaryButton?: { label: string; href: string };
  secondaryButton?: { label: string; href: string };
}

const AboutHero = ({
  imageSrc,
  title = 'Empowering Innovators, Shaping the Future',
  primaryButton = { label: 'Learn More', href: '/about' },
  secondaryButton = { label: 'Contact Us', href: '/contact' },
}: HeroProps) => {
  return (
    <div className="relative h-screen text-black overflow-hidden flex items-center justify-center">
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt="Hero Background"
          fill
          className="absolute top-0 left-0 w-full h-full object-cover -z-20"
          priority
        />
      ) : (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover -z-20 transform scale-120 object-center"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      )}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 -z-10"></div>
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-8 drop-shadow-lg">
          {title}
        </h1>
        <div className="flex gap-6 flex-col sm:flex-row">
          <Link href={primaryButton.href}>
            <span className="inline-block bg-red-600 hover:bg-red-700 text-black font-bold py-3 px-8 rounded-full text-lg shadow-lg transition-colors duration-200 cursor-pointer">
              {primaryButton.label}
            </span>
          </Link>
          <Link href={secondaryButton.href}>
            <span className="inline-block bg-white/20 hover:bg-white/40 text-black font-bold py-3 px-8 rounded-full text-lg shadow-lg border border-white transition-colors duration-200 cursor-pointer">
              {secondaryButton.label}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutHero; 