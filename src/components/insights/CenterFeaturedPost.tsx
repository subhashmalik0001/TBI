"use client"; // Only if used inside /app folder and requires client-side interactivity

import Image from "next/image";
import profile from "../../assets/paul.png";
import post1 from "../../assets/post1.png";
import post2 from "../../assets/post2.png";
import h1 from "../../assets/h1.png";
import h2 from "../../assets/h2.png";

const postCards = [
  {
    img: post1,
    title: "Hitting a 5-figure MRR within a year by giving his AI coding tool away for free",
    description: "Eric Provencher built a tool called Repo Prompt while on paternity leave to scratch his own itch...",
    likes: 59,
    comments: 29,
    user: "@IndieJames",
  },
  {
    img: post2,
    title: "Upleveling from productized services to tech-enabled services and hitting $5M/yr",
    description: "Sam Shepler sold his first agency, then tried productized services before graduating to tech-enabled...",
    likes: 45,
    comments: 10,
    user: "@IndieJames",
  },
];

const horizontalCards = [
  {
    img: h1,
    title: "Starting with a productized service and building a 7-figure product around it",
    description: "Craig Hewitt suggests starting with services to fund your product before you build it.",
    likes: 64,
    comments: 33,
    user: "@IndieJames",
  },
  {
    img: h2,
    title: "Acquiring Baremetrics and setting his sights on $10M ARR",
    description: "Luke Marshall is a partner at Xenon Partners, which acquired Baremetrics for $4M. Here's how he's growing...",
    likes: 45,
    comments: 26,
    user: "@IndieJames",
  },
];

const CenterFeaturedPost = () => {
  return (
    <div className="space-y-8">
      {/* Featured Article */}
      <div className="hover:bg-gray-500/50 p-4 rounded-lg transition">
        <Image
          src={profile}
          alt="featured"
          className="rounded mb-4 w-full object-cover max-h-[390px]"
          placeholder="blur"
        />
        <h2 className="text-3xl mb-2 font-sans font-semibold text-black">
          Paul English on going from indie game designer to $2B exit with kayak.com
        </h2>
        <p className="text-gray-700 mb-2">
          Paul English built kayak.com — maybe you've heard of it. That company alone sold for $2B
        </p>
        <div className="flex gap-6 text-sm text-red-600">
          <span>👍 15</span>
          <span>💬 10 comments</span>
          <span>@IndieJames</span>
        </div>
      </div>

      {/* Mini Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {postCards.map((post, i) => (
          <div key={i} className="hover:bg-gray-500/50 p-4 rounded-lg transition">
            <Image
              src={post.img}
              alt="post"
              className="rounded mb-3 w-full object-cover h-48"
              placeholder="blur"
            />
            <h3 className="text-3xl font-sans font-semibold leading-snug mb-3">
              {post.title}
              <span className="text-green-400 ml-1">✚</span>
            </h3>
            <p className="text-gray-700 text-2xl mb-3">{post.description}</p>
            <div className="flex gap-6 text-sm text-red-600">
              <span>👍 {post.likes}</span>
              <span>💬 {post.comments}</span>
              <span>{post.user}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Horizontal Cards */}
      <div className="space-y-6">
        {horizontalCards.map((post, i) => (
          <div
            key={i}
            className="hover:bg-gray-500/50 p-4 rounded-lg transition flex flex-wrap md:flex-nowrap justify-between items-start gap-6 border-t border-dashed border-blue-900 pt-6"
          >
            {/* Left content */}
            <div className="flex-1 min-w-0">
              <h3 className="text-2xl font-sans mb-6 text-black">
                {post.title}
                <span className="text-green-400 ml-1">✚</span>
              </h3>
              <p className="text-gray-700 text-xl mb-6">{post.description}</p>
              <div className="flex gap-6 text-sm text-gray-700">
                <span>👍 {post.likes} upvotes</span>
                <span>💬 {post.comments} comments</span>
                <span>{post.user}</span>
              </div>
            </div>

            {/* Author image */}
            <Image
              src={post.img}
              alt="author"
              className="rounded-md object-cover h-40 w-40 shrink-0 min-w-[128px]"
              placeholder="blur"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CenterFeaturedPost;
