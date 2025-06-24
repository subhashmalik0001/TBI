"use client";

import React from "react";

const buildBoardPosts = [
  {
    rank: 1,
    upvotes: 3,
    logo: "🐻",
    company: "Bearconnect.io",
    title: 'Bearconnect.io: Is the “waiting list” myth or just misunderstood?',
  },
  {
    rank: 2,
    upvotes: 2,
    logo: "🌀",
    company: "Fidget",
    title: "Sharing my stats: The importance (and danger) of A/B tests!",
  },
  // You can add more posts here...
];

const RightSidebar = () => {
  return (
    <div className="space-y-6 text-sm text-gray-700">
      {/* Newsletter */}
      <div className="hover:bg-gray-500/50 p-4 rounded-lg transition">
        <h4 className="text-red-600 font-semibold mb-3 text-xl font-sans">
          Newsletter
        </h4>
        <p className="text-gray-700 text-xl mb-3">
          The power of the indie founder is exploding.
        </p>
        <button className="bg-red-500 text-black px-3 py-1 rounded mt-2 text-xl font-bold hover:bg-red-600 cursor-pointer">
          SUBSCRIBE
        </button>
        <span className="text-gray-700 text-xl mb-3"> to keep up.</span>
      </div>

      {/* Action Links */}
      <div className="border-t border-blue-900 pt-3 mb-3">
        <p className="text-gray-700 text-xl mb-1 hover:bg-gray-500/50 p-3 rounded-lg transition cursor-pointer">
          🖋️ Submit a Post to Indie Hackers
        </p>
        <p className="text-gray-700 text-xl mb-1 hover:bg-gray-500/50 p-3 rounded-lg transition cursor-pointer">
          📢 Advertise on Indie Hackers
        </p>
      </div>

      {/* Build Board */}
      <div className="border-t border-blue-900 pt-4 text-xl">
        <h4 className="text-red-600 font-semibold mb-1">The Build Board 🧱</h4>
        <p className="text-sm italic mb-4">
          A daily leaderboard of build-in-public posts.
        </p>

        <div className="space-y-4">
          {buildBoardPosts.map((post, i) => (
            <div
              key={i}
              className="hover:bg-gray-500/50 p-3 rounded-lg transition relative cursor-pointer"
            >
              {/* Rank */}
              <span className="text-black-500 absolute top-3 left-2 text-xl">
                #{post.rank}
              </span>

              {/* Logo and Company */}
              <div className="flex items-center gap-2 mb-2 ml-6">
                <span className="text-black text-lg">{post.logo}</span>
                <span className="text-gray-700">{post.company}</span>
              </div>

              {/* Title */}
              <p className="text-black ml-6 text-lg leading-snug">
                {post.title}
              </p>

              {/* Upvote */}
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 border border-gray-700 rounded p-1 text-center w-8">
                <span className="text-lg text-gray-700">⬆</span>
                <div className="text-black font-bold">{post.upvotes}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
