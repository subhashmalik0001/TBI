import React from "react";
import { FaComment } from "react-icons/fa";

const TechFounders = () => {
  const articles = [
    {
      title: "For Tech Founders",
      description:
        "James Layfield needed to solve a big problem, so he did it manually, then built an AI tool to do the heavy lifting. Now, his tool has a 7-figure ARR.",
      author: "James Fleischmann",
      date: "May 29, 2025",
      comments: 80,
      image: "jimmy.jpg",
    },
    {
      title: "Anthropic just launched Claude 4, the new state-of-the-art in AI coding",
      description:
        "The new models can work on complex coding tasks for hours and alternate between reasoning and using tools.",
      author: "Channing Allen",
      date: "May 22, 2025",
      comments: 73,
      image: "claude.jpg",
    },
    // Only unique articles kept, remove repetitive ones if needed
  ];

  return (
    <section className="bg-white text-black px-6 md:px-12 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mt-20 mb-6">
          For Tech Founders
        </h1>
        <p className="text-lg md:text-2xl text-gray-700 mb-12">
          Building a tech business? You don't have to go it alone. This is your
          definitive resource for accessing expert strategies and staying on top
          of cutting-edge developments. Updated frequently.
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Latest Articles</h2>

        <div className="space-y-10">
          {articles.map((article, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row items-start md:items-center border-t border-[#204061] pt-6"
            >
              {/* Date */}
              <div className="min-w-[120px] mb-4 md:mb-0 md:mr-6">
                <span className="text-gray-700 text-sm md:text-base">
                  {article.date}
                </span>
              </div>

              {/* Content */}
              <div className="flex-grow max-w-3xl">
                <h3 className="text-xl md:text-2xl font-semibold text-black hover:underline cursor-pointer mb-4">
                  {article.title}
                  {idx === 0 && (
                    <span className="ml-2 text-green-400 align-super text-sm" title="Featured">
                      ★
                    </span>
                  )}
                </h3>
                <p className="text-gray-700 text-sm md:text-lg mb-4">
                  {article.description}
                </p>
                <div className="flex items-center text-gray-700 text-sm gap-2">
                  <span>
                    by{" "}
                    <span className="hover:underline cursor-pointer font-medium">
                      {article.author}
                    </span>
                  </span>
                  <FaComment className="ml-3" />
                  <span>{article.comments}</span>
                </div>
              </div>

              {/* Image */}
              <div className="mt-6 md:mt-0 md:ml-6 w-full md:w-32 h-20 flex-shrink-0 rounded overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
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

export default TechFounders;
