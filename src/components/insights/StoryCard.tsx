import Image from "next/image";

interface StoryCardProps {
  image: string;
  title: string;
  description: string;
  date: string;
  link: string;
  linkLabel: string;
  className?: string;
}

export default function StoryCard({
  image,
  title,
  description,
  date,
  link,
  linkLabel,
  className,
}: StoryCardProps) {
  return (
    <div
      className={`bg-white rounded-[34px] shadow-lg p-1 max-w-sm mx-auto flex flex-col gap-4 border border-gray-100 transition-transform transition-colors duration-500 cursor-pointer hover:bg-[#FFF9F2] hover:scale-97 active:bg-[#FFF1E0] active:scale-95 ${className || ""}`}
      style={{ boxShadow: "0 4px 32px 0 rgba(255, 176, 102, 0.15)" }}
    >
      <div className="overflow-hidden rounded-[30px]">
        <Image src={image} alt={title} width={400} height={200} className="object-cover w-full h-40" />
      </div>
      <div className="px-4">
        <h3 className="text-[16px] text-[#737373] mb-1 line-clamp-1">{title}</h3>
        <p className="text-[#A3A3A3] text-sm">{description}</p>
      </div>
      <div className="flex gap-2 mt-2 px-4 pb-4 h-14">
        <span className="bg-gray-100 text-[#A3A3A3] text-xs px-3 py-1 rounded-full flex items-center">
          {date}
        </span>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-100 text-[#A3A3A3] text-xs px-3 py-1 rounded-full flex items-center gap-1 hover:bg-gray-200 transition"
        >
          {linkLabel}
          <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
            <path d="M14 3h7v7" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 14L21 3" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21 21H3V3" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </div>
  );
} 