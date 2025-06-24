import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "outline" | string;
}

export const Badge: React.FC<BadgeProps> = ({ children, className = "", variant = "outline" }) => {
  let base = "inline-block px-3 py-1 rounded-full text-xs font-semibold";
  let variantClass =
    variant === "outline"
      ? "border border-current bg-transparent"
      : "bg-black text-white";
  return <span className={`${base} ${variantClass} ${className}`}>{children}</span>;
}; 