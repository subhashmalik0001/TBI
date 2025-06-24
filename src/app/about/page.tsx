import JourneySection from '../../components/JourneySection';
import LeadershipSection from '@/components/LeadershipSection';
import OurTeamSection from '@/components/OurTeamSection';
import AboutHero from '@/components/AboutHero';

export default function AboutPage() {
  return ( 
    <>
      <AboutHero
        imageSrc="https://media.licdn.com/dms/image/v2/D5605AQFF8a6PY2Kltw/feedshare-thumbnail_720_1280/B56ZZhzaO5HUAw-/0/1745397591544?e=2147483647&v=beta&t=Ml4Y3aWM9rqdPLCPjxL1NJFOmO1wcO7OYN4QtMCI4dE"
        title="About TBI: Our Story & Mission"
        primaryButton={{ label: 'Our Programs', href: '/programs' }}
        secondaryButton={{ label: 'Meet the Team', href: '/about#team' }}
      />
      <div>
        <JourneySection />
    
        <LeadershipSection />
        <OurTeamSection />
      </div>
    </>
  );
}
