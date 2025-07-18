import Header from "./Header";
import StoryCard from "./insights/StoryCard";

const stories = [
  {
    image: "/founderstories/story1.png",
    title: "Adaline Launch Site",
    description: "We approached Adaline as a landscape for thought to root and stretch. The site reflects the nature of the tool: living between language and logic, and composed for clarity and calm.",
    date: "June 18, 2025",
    link: "https://adaline.ai",
    linkLabel: "adaline.ai",
  },
  {
    image: "/founderstories/story5.png",
    title: "Toronto Tech Week 2025",
    description: "To celebrate Toronto Tech Week's return this year, we built out an interactive playground for the city to see itself and its future. Take the 501 streetcar and make your way over to a weeklong collection of events for Toronto, by Toronto. More details coming soon.",
    date: "February 18, 2025",
    link: "https://torontotechweek.com",
    linkLabel: "torontotechweek.com",
  },
  {
    image: "/founderstories/story2.png",
    title: "Studio Chat: What We've Been Up To",
    description: "For the first time, we broadcast a studio yap session for anyone with internet access to tune into. And in true Daybreak fashion, we talked a little too much about a little bit of everything (and may have accidentally shared a secret or two!)",
    date: "March 27, 2025",
    link: "https://x.com",
    linkLabel: "x.com",
  },
  {
    image: "/founderstories/story6.png",
    title: "Dropbox's new brand identity website puts boring style guides to shame",
    description: "An unexpected feature from Creative Bloq, describing our work on Dropbox's brand identity site as an 'interactive playground of creativity'.",
    date: "January 27, 2025",
    link: "https://creativebloq.com",
    linkLabel: "creativebloq.com",
  },
  {
    image: "/founderstories/story3.png",
    title: "Awwwards SOTM",
    description: "Our work with Dropbox on their brand guidelines site was recognized as Awwwards' Site Of The Day on February 12th. After being reviewed by the jury for a second time among other sites in February, it was officially awarded Site Of The Month.",
    date: "March 7, 2025",
    link: "https://awwwards.com",
    linkLabel: "awwwards.com",
  },
  {
    image: "/founderstories/story7.png",
    title: "Introducing: Our refreshed brand guidelines site",
    description: "Through interactive play and artful detail, we made a vibrant new world for the Dropbox brand. It's a place where the type dances, colours hum, and illustrations wink. Every detail invites you in.",
    date: "January 16, 2025",
    link: "https://dropbox.design",
    linkLabel: "dropbox.design",
  },
  {
    image: "/founderstories/story4.png",
    title: "Daybreak Digest #01",
    description: "Welcome to our kitchen! We invite you to take a peek behind the scenes, where we're constantly whipping up and fine-tuning new creations. Here's a little taste of what's been cooking, what's next on deck, and some other ingredients that have been shaping our process lately... For your next lunch break, edition one.",
    date: "February 28, 2025",
    link: "https://daybreakstudio.behive.com",
    linkLabel: "daybreakstudio.behive.com",
  },
  {
    image: "/founderstories/story8.png",
    title: "Crabs, Creativity, and the Endless Cycle of Imitation",
    description: "Creativity, like evolution, falls into patterns. Different paths that lead to the same shape. same shell: in an endless cycle of imitation, ...",
    date: "December 10, 2024",
    link: "https://example.com/cf",
    linkLabel: "example.com/cf",
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