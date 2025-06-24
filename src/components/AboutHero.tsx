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
          className="absolute top-0 left-0 w-full h-full object-cover -z-20 md:object-center object-center"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      )}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 -z-10"></div>
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-8 drop-shadow-lg text-white">
          {title}
        </h1>
        <div className="flex gap-6 flex-col sm:flex-row">
          <Link href={primaryButton.href}>
            <button
              type="button"
              className="bg-red-600 text-white px-9 py-3 text-lg font-bold border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200"
            >
              {primaryButton.label}
            </button>
          </Link>
          <Link href={secondaryButton.href}>
            <button
              type="button"
              className="bg-red-600 text-white px-9 py-3 text-lg font-bold border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200"
            >
              {secondaryButton.label}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutHero; 