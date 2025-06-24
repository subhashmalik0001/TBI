"use client"; // Optional: Only needed if you're using this in the /app directory with interactivity

import React from "react";
import { FaComment } from "react-icons/fa";

const AI = () => {
  const articles = [
    {
      title:
        "Creating a manual process and turning it into a 7-figure AI product",
      description:
        "James Layfield needed to solve a big problem, so he did it manually, then built an AI tool to do the heavy lifting. Now, his tool has a 7-figure ARR.",
      author: "James Fleischmann",
      date: "May 29, 2025",
      comments: 80,
      image: "/images/james.jpg",
    },
    {
      title:
        "Anthropic just launched Claude 4, the new state-of-the-art in AI coding",
      description:
        "The new models can work on complex coding tasks for hours and alternate between reasoning and using tools.",
      author: "Channing Allen",
      date: "May 22, 2025",
      comments: 73,
      image: "/images/claude.jpg",
    },
    {
      title:
        "Anthropic just launched Claude 4, the new state-of-the-art in AI coding",
      description:
        "The new models can work on complex coding tasks for hours and alternate between reasoning and using tools.",
      author: "Channing Allen",
      date: "May 22, 2025",
      comments: 73,
      image: "/images/claude.jpg",
    },
    {
      title:
        "Anthropic just launched Claude 4, the new state-of-the-art in AI coding",
      description:
        "The new models can work on complex coding tasks for hours and alternate between reasoning and using tools.",
      author: "Channing Allen",
      date: "May 22, 2025",
      comments: 73,
      image: "/images/claude.jpg",
    },
    {
      title:
        "Anthropic just launched Claude 4, the new state-of-the-art in AI coding",
      description:
        "The new models can work on complex coding tasks for hours and alternate between reasoning and using tools.",
      author: "Channing Allen",
      date: "May 22, 2025",
      comments: 73,
      image: "/images/claude.jpg",
    },
  ];

  return (
    <section className="bg-white text-black px-6 md:px-12 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-semibold mt-20 mb-9">
          Artificial Intelligence (A.I.)
        </h1>
        <p className="text-lg md:text-2xl mb-16 text-gray-700">
          Dive into the world of artificial intelligence. Learn about its
          applications, latest advancements, and impact across various
          industries, and how it can transform your business.
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold mt-12 mb-6">
          Latest Articles
        </h2>

        <div className="space-y-8">
          {articles.map((article, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row items-start md:items-center border-t border-[#204061] py-6 px-2 bg-transparent gap-6"
            >
              {/* Date */}
              <div className="min-w-[120px] text-sm md:text-lg text-gray-700">
                {article.date}
              </div>

              {/* Main Content */}
              <div className="flex-grow max-w-3xl">
                <h3 className="text-base md:text-2xl font-semibold hover:underline cursor-pointer mb-4">
                  {article.title}
                  {idx === 0 && (
                    <span
                      className="ml-1 text-green-400 align-super text-base"
                      title="Featured"
                    >
                      &#x2B50;
                    </span>
                  )}
                </h3>
                <p className="text-gray-700 text-xs md:text-xl mb-4">
                  {article.description}
                </p>
                <div className="flex items-center gap-2 text-gray-700 text-sm">
                  <span>
                    by{" "}
                    <span className="hover:underline cursor-pointer text-lg">
                      {article.author}
                    </span>
                  </span>
                  <FaComment className="ml-2" />
                  <span>{article.comments}</span>
                </div>
              </div>

              {/* Image */}
              <div className="w-24 h-20 md:w-36 md:h-24 rounded overflow-hidden flex-shrink-0">
                <img
                  src={article.image}
                  alt="article"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AI;
