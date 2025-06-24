import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "outline" | "default";
  size?: "lg" | "md" | "sm";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = "default",
  size = "md",
  className = "",
  children,
  ...props
}) => {
  let base = "rounded px-4 py-2 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ";
  let variantClass =
    variant === "outline"
      ? "border border-black bg-white text-black hover:bg-gray-100"
      : "bg-black text-white hover:bg-gray-800";
  let sizeClass =
    size === "lg"
      ? "text-lg px-8 py-3"
      : size === "sm"
      ? "text-sm px-2 py-1"
      : "text-base px-4 py-2";
  return (
    <button className={`${base} ${variantClass} ${sizeClass} ${className}`} {...props}>
      {children}
    </button>
  );
};

export { Button }; 