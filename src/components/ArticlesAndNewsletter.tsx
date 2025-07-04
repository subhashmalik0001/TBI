import React from "react";
import { ArrowRight } from "lucide-react";

interface ArticleProps {
  title: string;
  author: string;
  date: string;
  image: string;
  excerpt?: string;
  featured?: boolean;
}

const FeaturedArticle: React.FC<ArticleProps> = ({ title, author, date, image, excerpt }) => {
  return (
    <article className="bg-white">
      <div>
        <div
          className="inline-block bg-gray-300 px-6 py-3 rounded-t-lg relative"
          style={{
            clipPath: 'polygon(0 0, 90% 0, 100% 100%, 0% 100%)',
            width: '200px',
            height: '50px',
          }}
        >
          <span className="text-black font-medium">//Newsletter</span>
          {/* Bottom border effect */}
          <div className="absolute -bottom-px left-0 right-0 h-px bg-gray-300" />
        </div>
        {/* Padding below the trapezoid */}
        <div className="w-full h-9" />
      </div>
      {/* Grey background for the rest of the article */}
      <div className="bg-gray-50 rounded-b-lg pb-6">
        <div className="relative mb-4">
          <div className="absolute top-3 left-3 z-10"></div>
          <img 
            src={image} 
            alt={title}
            className="w-full h-64 object-cover rounded-t-lg"
          />
        </div>
        <div className="mb-6 px-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
            {title}
          </h1>
          <div className="text-sm text-gray-500 mb-4">
            <span>by {author}</span>
            <span className="mx-2">•</span>
            <span>{date}</span>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            {excerpt}
          </p>
          <div className="flex items-center justify-between border-t pt-4">
            <div className="text-sm text-gray-500">
              <span>by Garrett</span>
              <span className="mx-2">•</span>
              <span>Sussman</span>
              <span className="mx-2">•</span>
              <span>18.2.24</span>
            </div>
            <button className="flex items-center space-x-2 text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors">
              <span>KEEP READING</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

const SidebarArticle: React.FC<ArticleProps> = ({ title, author, date, image }) => {
  return (
    <div>
  {/* Heading */}

    <article className="bg-white mb-6 p-6">
      
    <div>
  <div
    className="inline-block bg-gray-300 px-6 py-3 rounded-t-lg relative"
    style={{
      clipPath: 'polygon(0 0, 90% 0, 100% 100%, 0% 100%)',
      width: '200px',
      height: '50px',
    }}
  >
    <span className="text-black font-medium">//Newsletter</span>

    {/* Bottom border effect */}
    <div className="absolute -bottom-px left-0 right-0 h-px bg-gray-300" />
    
  </div>


  {/* Padding below the trapezoid */}
  <div className="w-full h-9" />
</div>

        
      <div className="relative mb-3">
        <div className="absolute top-2 left-2 z-10">
          
          
        </div>
        <img 
          src={image} 
          alt={title}
          className="w-full h-56 object-cover"
        />
      </div>
      
      <div>
        <h2 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
          {title}
        </h2>
        
        <div className="flex items-center justify-between">
          <div className="text-xs text-gray-500">
            <span>by {author}</span>
            <span className="mx-2">•</span>
            <span>{date}</span>
          </div>
          
          <button className="flex items-center space-x-1 text-xs font-medium text-gray-600 hover:text-gray-900 transition-colors">
            <span>KEEP READING</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </article>
    </div>
  );
};

const NewsletterSection: React.FC = () => {
  return (
    <div className="h-[50vh] w-[64vh] bg-transparent">
      {/* Folder Tab */}
      <div>
  <div
    className="inline-block bg-gray-300 px-6 py-3 rounded-t-lg relative"
    style={{
      clipPath: 'polygon(0 0, 90% 0, 100% 100%, 0% 100%)',
      width: '200px',
      height: '50px',
    }}
  >
    <span className="text-black font-medium">//Newsletter</span>

    {/* Bottom border effect */}
    <div className="absolute -bottom-px left-0 right-0 h-px bg-gray-300" />
  </div>

  {/* Padding below the trapezoid */}
  <div className="w-full h-3" />
</div>


      {/* Main Content Area */}
      <div className="bg-gray-100 border-2 rounded-lg rounded-tl-none p-4 sm:p-6 w-full max-w-5xl mx-auto">
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
    {/* Left Column - Main Heading */}
    <div className="lg:col-span-1">
      <h2 className="text-2xl sm:text-3xl font-bold text-black leading-tight">
        Join Our<br />Newsletter
      </h2>
    </div>

    {/* Right Column - Newsletter Topics */}
    <div className="lg:col-span-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Topics */}
        <div className="space-y-2">
          <div className="flex items-center text-black">
            <span className="mr-2">→</span>
            <span className="font-medium">Startup Insights</span>
          </div>
          <div className="flex items-center text-black">
            <span className="mr-2">→</span>
            <span className="font-medium">Weekly Updates</span>
          </div>
          <div className="flex items-center text-black">
            <span className="mr-2">→</span>
            <span className="font-medium">Reports & Analytics</span>
          </div>
          <div className="flex items-center text-black">
            <span className="mr-2">→</span>
            <span className="font-medium">HackerNews</span>
          </div>
        </div>

        {/* Right Topics */}
        <div className="space-y-2">
          <div className="flex items-center text-black">
            <span className="mr-2">→</span>
            <span className="font-medium">Community</span>
          </div>
          <div className="flex items-center text-black">
            <span className="mr-2">→</span>
            <span className="font-medium">Founders School</span>
          </div>
          <div className="flex items-center text-black">
            <span className="mr-2">→</span>
            <span className="font-medium">Venture Studio</span>
          </div>
          <div className="flex items-center text-black">
            <span className="mr-2">→</span>
            <span className="font-medium">Capital 101</span>
          </div>
        </div>
      </div>
    </div>
    
  </div>

  {/* Email Input Section */}
  <div className="mt-6">
    <div className="relative w-full">
      <input
        type="email"
        placeholder="Enter Email Address"
        className="w-full px-4 py-3 text-base border-2 border-black rounded-lg bg-white placeholder:text-gray-500 focus:outline-none focus:ring-0 focus:border-black pr-14"
      />
      <button className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 bg-black hover:bg-gray-800 rounded-full flex items-center justify-center">
        <ArrowRight className="h-4 w-4 text-white" />
      </button>
    </div>
  </div>
</div>
</div>

  );
};

const ArticlesAndNewsletter: React.FC = () => {
  const featuredArticle: ArticleProps = {
    title: "SEO RFP: The Best Process for Hiring the Right Agency [Template]",
    author: "Garrett Sussman",
    date: "10.2.24",
    image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800",
    excerpt: "Transparency, respect, and good intentions are the ingredients of a high-quality RFP for any self-respecting business. Choosing the wrong agency has disastrous consequences. You can't afford to get it wrong. Finding that long-term partner can fundamentally change the trajectory of your business. But bad faith players on both sides have corrupted the RFP process for too many of us.",
    featured: true
  };

  const sidebarArticles: ArticleProps[] = [
    {
      title: "Status Quo Bias: The Behavioral Economics Principle That Rocked the Google Antitrust Trial",
      author: "Garrett Sussman",
      date: "18.2.24",
      image: "https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Secrets from the Algorithm: Google Search's Internal Engineering Documentation Has Leaked",
      author: "Garrett",
      date: "18.2.24",
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  return (
    <div className="min-h-[120vh] bg-white">
      <h1 className="text-5xl sm:text-7xl text-gray-900 mb-1 text-left ml-40" style={{ fontFamily: 'Alumni Sans, sans-serif' }}>News & Insights</h1>
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="relative">
          {/* Vertical grid line */}

          {/* Horizontal grid line at the top of the grid */}
          <div className="absolute left-3 right-35 top-12 h-px bg-gray-300 hidden md:block z-10"></div>
          {/* Horizontal grid line above the newsletter section (after featured article) */}

          {/* Horizontal grid line above the first sidebar article */}

          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Featured Article and Newsletter Section */}
            <div>
              <FeaturedArticle {...featuredArticle} />
              {/* Newsletter Section - now directly after featured article, with margin */}
              <div className="mt-8">
                <NewsletterSection />
              </div>
            </div>
            
            {/* Right Column - Sidebar Articles */}
            <div className="max-w-[450px] w-full min-h-[100vh] mt-[-1.6rem]">
              {sidebarArticles.map((article, index) => (
                <SidebarArticle key={index} {...article} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlesAndNewsletter; 