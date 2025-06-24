import React from "react";

const posts = [
  {
    title: "Lokia v1: Learn Languages in Context, Not in Boring Lists",
    likes: 6,
    comments: 4,
    user: "@Louisjrr",
  },
  {
    title: "We’re building HirSpace — for Tech hiring",
    likes: 7,
    comments: 4,
    user: "@Ravikumar0787",
  },
  {
    title:
      "GeniusAlx - Your YouTube learning co-pilot: I built a Chrome extension that turns YouTube into a learning experience",
    likes: 12,
    comments: 8,
    user: "@geniusaix",
  },
  {
    title:
      "GeniusAlx - Your YouTube learning co-pilot: I built a Chrome extension that turns YouTube into a learning experience",
    likes: 12,
    comments: 8,
    user: "@geniusaix",
  },
  {
    title:
      "GeniusAlx - Your YouTube learning co-pilot: I built a Chrome extension that turns YouTube into a learning experience",
    likes: 12,
    comments: 8,
    user: "@geniusaix",
  },
  {
    title:
      "GeniusAlx - Your YouTube learning co-pilot: I built a Chrome extension that turns YouTube into a learning experience",
    likes: 12,
    comments: 8,
    user: "@geniusaix",
  },
  {
    title:
      "GeniusAlx - Your YouTube learning co-pilot: I built a Chrome extension that turns YouTube into a learning experience",
    likes: 12,
    comments: 8,
    user: "@geniusaix",
  },
];

const LeftSidebar = () => {
  return (
    <aside className="space-y-5 text-left">
      {posts.map((post, idx) => (
        <article
          key={idx}
          className="hover:bg-gray-500/40 p-5 rounded-lg cursor-pointer transition duration-200 border-b border-dashed border-blue-900"
        >
          <h3 className="text-xl md:text-2xl font-semibold leading-snug mb-2 text-black">
            {post.title}
          </h3>
          <div className="flex flex-wrap gap-6 text-red-600 text-sm font-medium">
            <span>👍 {post.likes}</span>
            <span>💬 {post.comments}</span>
            <span>{post.user}</span>
          </div>
        </article>
      ))}
    </aside>
  );
};

export default LeftSidebar;
