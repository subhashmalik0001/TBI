import React from 'react';

const director = {
  name: 'Archita Nandi',
  title: "Director",
  image: '/leaders/archita.png', // Placeholder image path
  message:
    "At TBI, we believe in nurturing ideas and empowering entrepreneurs to create a better tomorrow. Our team is dedicated to providing the resources and mentorship needed for startups to thrive.",
  linkedin: '#',
};

const leaders = [
  {
    name: 'Ms. R. Patel',
    title: 'Chief Operating Officer',
    image: '/leaders/patel.jpg',
    bio: 'Expert in scaling operations and building high-performing teams.',
    linkedin: '#',
  },
  {
    name: 'Mr. S. Gupta',
    title: 'Chief Technology Officer',
    image: '/leaders/gupta.jpg',
    bio: 'Passionate about leveraging technology for social impact.',
    linkedin: '#',
  },
  {
    name: 'Ms. L. Wong',
    title: 'Head of Partnerships',
    image: '/leaders/wong.jpg',
    bio: 'Building bridges between startups and global partners.',
    linkedin: '#',
  },
  {
    name: 'Mr. J. Singh',
    title: 'Head of Incubation',
    image: '/leaders/singh.jpg',
    bio: 'Mentoring early-stage founders to success.',
    linkedin: '#',
  },
];

const RED = 'text-red-500';
const RED_BG = 'bg-red-500';
const RED_BORDER = 'border-red-500';

const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="#ef4444"
    width="28"
    height="28"
    aria-hidden="true"
    className="inline-block align-middle"
  >
    <title>LinkedIn</title>
    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/>
  </svg>
);

const LeadershipSection: React.FC = () => {
  return (
    <section id='leadership' className="bg-black py-16 px-4 text-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-1 tracking-tight text-white">
          Leadership
        </h2>
        <div className="flex justify-center mb-8">
          <span className="block w-16 h-1 rounded-full bg-red-500"></span>
        </div>
        <p className="text-center text-gray-300 mb-10 max-w-2xl mx-auto">
          Meet the visionaries guiding our mission to empower innovation and entrepreneurship.
        </p>
        {/* Director's Message Card */}
        <div className="flex flex-col items-center bg-white text-black rounded-2xl shadow-lg p-8 mb-12 max-w-2xl mx-auto">
          <img
            src={director.image}
            alt={director.name}
            className="w-28 h-28 object-cover rounded-full mb-4 border-4 border-red-500 shadow-md filter grayscale"
          />
          <h3 className="text-xl font-bold mb-1">{director.name}</h3>
          <span className="text-sm font-semibold mb-2 uppercase tracking-wide text-red-500">{director.title}</span>
          <p className="text-base font-medium mb-3 text-center">{director.message}</p>
          <a
            href={director.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 hover:scale-110 transition-transform"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
        </div>
        {/* Leadership Cards Grid */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {leaders.map((leader, idx) => (
            <div
              key={idx}
              className="bg-white text-black rounded-2xl shadow-lg flex flex-col items-center p-6"
            >
              <img
                src={leader.image}
                alt={leader.name}
                className="w-24 h-24 object-cover rounded-full mb-3 border-4 border-gray-900 shadow filter grayscale"
              />
              <h4 className="text-lg font-bold mb-1 text-center">{leader.name}</h4>
              <span className="text-xs font-semibold mb-2 uppercase tracking-wide text-red-500 text-center">{leader.title}</span>
              <p className="text-sm text-gray-700 mb-3 text-center">{leader.bio}</p>
              <a
                href={leader.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 hover:scale-110 transition-transform"
                aria-label={`LinkedIn profile of ${leader.name}`}
              >
                <LinkedInIcon />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection; 