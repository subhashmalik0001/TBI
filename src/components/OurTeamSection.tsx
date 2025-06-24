import React from 'react';

const teamMembers = [
  {
    name: 'A. Kumar',
    role: 'Program Manager',
    image: '/team/kumar.jpg',
    linkedin: '#',
  },
  {
    name: 'S. Mehta',
    role: 'Community Lead',
    image: '/team/mehta.jpg',
    linkedin: '#',
  },
  {
    name: 'P. Roy',
    role: 'Marketing Specialist',
    image: '/team/roy.jpg',
    linkedin: '#',
  },
  {
    name: 'D. Chen',
    role: 'Operations Associate',
    image: '/team/chen.jpg',
    linkedin: '#',
  },
  {
    name: 'M. Singh',
    role: 'Startup Coordinator',
    image: '/team/msingh.jpg',
    linkedin: '#',
  },
  {
    name: 'R. Das',
    role: 'Design Intern',
    image: '/team/das.jpg',
    linkedin: '#',
  },
];

const LinkedInIconGray = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="#6b7280" // Tailwind gray-500
    width="22"
    height="22"
    aria-hidden="true"
    className="inline-block align-middle"
  >
    <title>LinkedIn</title>
    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/>
  </svg>
);

const OurTeamSection: React.FC = () => {
  return (
    <section className="bg-white py-12 px-4 text-black border-t border-gray-100">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-2 tracking-tight">Our Team</h2>
        <div className="flex justify-center mb-6">
          <span className="block w-10 h-0.5 rounded-full bg-gray-300"></span>
        </div>
        <p className="text-center text-gray-500 mb-8 max-w-xl mx-auto text-base font-normal">
          The dedicated team supporting our mission and community every day.
        </p>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-xl shadow-sm flex flex-col items-center p-5 border border-gray-100"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-20 h-20 object-cover rounded-full mb-3 border-2 border-gray-200 shadow filter grayscale"
              />
              <h4 className="text-base font-semibold mb-0.5 text-center">{member.name}</h4>
              <span className="text-xs font-medium mb-2 text-gray-500 text-center">{member.role}</span>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 hover:scale-110 transition-transform"
                aria-label={`LinkedIn profile of ${member.name}`}
              >
                <LinkedInIconGray />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeamSection; 