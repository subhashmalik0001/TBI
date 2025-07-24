import Header from "./Header";
import StoryCard from "./insights/StoryCard";
const stories = [
  {
    image: "/founderstories/story1.png",
    title: "Startup Sprint Demo Day at TBI CU",
    description: "TBI CU hosted its flagship Startup Sprint Demo Day, where incubated startups pitched their groundbreaking ideas to VCs and mentors. A powerful platform for innovators to shine.",
    date: "June 18, 2025",
    link: "https://tbicuchd.in/sprint",
    linkLabel: "tbicuchd.in/sprint",
  },
  {
    image: "/founderstories/story5.png",
    title: "TBI CU Hosts CU Innovate 2025",
    description: "As a highlight of the innovation calendar, CU Innovate brought together top minds in tech, policy, and entrepreneurship for a week of panels, startup showcases, and workshops.",
    date: "February 18, 2025",
    link: "https://tbicuchd.in/cuinnovate",
    linkLabel: "tbicuchd.in/cuinnovate",
  },
  {
    image: "/founderstories/story2.png",
    title: "Inside TBI: Founders Roundtable",
    description: "A candid studio chat with TBI CU incubatees sharing their ups and downs, wins and pivots. Transparent conversations that sparked learning and new connections.",
    date: "March 27, 2025",
    link: "https://x.com/tbicuchd",
    linkLabel: "x.com/tbicuchd",
  },
  {
    image: "/founderstories/story6.png",
    title: "CU Startup Brand Showcase Featured Nationally",
    description: "Creative Bloq spotlighted our work on helping CU startups craft standout digital brand identities — fresh, bold, and investor-ready.",
    date: "January 27, 2025",
    link: "https://creativebloq.com/cu-showcase",
    linkLabel: "creativebloq.com/cu-showcase",
  },
  {
    image: "/founderstories/story3.png",
    title: "TBI Startup Wins National Innovation Challenge",
    description: "One of TBI CU’s incubated startups took home the National Innovation Challenge award, putting CU’s ecosystem on the national radar.",
    date: "March 7, 2025",
    link: "https://tbicuchd.in/awards",
    linkLabel: "tbicuchd.in/awards",
  },
  {
    image: "/founderstories/story7.png",
    title: "Revamping the TBI CU Brand Playbook",
    description: "TBI CU unveiled its updated brand experience for startups — a vibrant, user-first interface that reflects the energy of innovation on campus.",
    date: "January 16, 2025",
    link: "https://tbicuchd.in/brand",
    linkLabel: "tbicuchd.in/brand",
  },
  {
    image: "/founderstories/story4.png",
    title: "TBI Digest #01 – Behind the Incubation Curtain",
    description: "A deep dive into what’s brewing at TBI CU — mentorship moments, product breakthroughs, and what’s coming next. Perfect read for a coffee break.",
    date: "February 28, 2025",
    link: "https://tbicuchd.in/digest",
    linkLabel: "tbicuchd.in/digest",
  },
  {
    image: "/founderstories/story8.png",
    title: "From Idea to Impact: Innovation Cycles at TBI CU",
    description: "Exploring how CU founders iterate ideas into scalable ventures, navigating a creative cycle of trial, feedback, and evolution within the TBI ecosystem.",
    date: "December 10, 2024",
    link: "https://tbicuchd.in/innovation-loop",
    linkLabel: "tbicuchd.in/innovation-loop",
  },
];



export default function FounderStories() {
  // Chunk stories into groups of 2 for each column
  const columns = Array.from({ length: 4 }, (_, i) => stories.slice(i * 2, i * 2 + 2));

  return (
    <div className="px-5  sm:px-8 md:px-[40px] lg:px-[px]">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 border-t border-b border-gray-300 min-h-[120px] lg:min-h-[100px] xl:min-h-[100px] relative">
        {/* Left Section */}
        <div className="px-6 py-4 lg:px-8 lg:py-6 flex items-center relative">
          <div className="relative w-full">
            <img src="/assets/image1.png" alt="Founder Stories Icon" className="w-8 h-6 absolute -top-[-1.1rem] left-0" />
            <h1 className="text-2xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight pl-10">
              Founder<br />Stories.
            </h1>
          </div>
        </div>

        {/* Right Section */}
        <div className="mb-5 ml-5 sm:mt-10 flex flex-col items-start w-full">
          <span>STARTUP CUTBI</span>
          <div style={{position: 'relative',width:'97%'}} className="h-[2px] bg-[#333] border-none   w-full sm:w-full md:w-full lg:w-full xl:w-full mb-1" />
        </div>

        {/* Vertical Divider for large screens */}
        <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 w-px bg-gray-300" style={{transform: 'translateX(-0.5px)'}} />
      </div>
      <div className="w-full flex flex-col gap-6 mt-8 md:flex-row md:gap-[16px]">
        {/* Mobile: single column, Tablet+: multi-column */}
        <div className="flex flex-col gap-[16px] md:hidden">
          {stories.map((story, idx) => (
            <StoryCard
              key={idx}
              image={story.image}
              title={story.title}
              description={story.description}
              date={story.date}
              link={story.link}
              linkLabel={story.linkLabel}
            />
          ))}
        </div>
        {/* Desktop: 4 columns */}
        <>
          {columns.map((colStories, colIdx) => (
            <div key={colIdx} className="hidden md:flex flex-col gap-[16px] flex-1">
              {colStories.map((story, idx) => (
                <StoryCard
                  key={idx}
                  image={story.image}
                  title={story.title}
                  description={story.description}
                  date={story.date}
                  link={story.link}
                  linkLabel={story.linkLabel}
                  className={`${colIdx === 3 && idx === 1 ? "!w-4/5" : ""} ${colIdx === 2 && idx === 0 ? "!h-[500px]" : ""}`}
                />
              ))}
            </div>
          ))}
        </>
      </div>
    </div>
  );
}