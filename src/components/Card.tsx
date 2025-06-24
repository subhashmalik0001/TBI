import React, { ReactNode, HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: ReactNode;
}

const Card = ({ className = "", ...props }: CardProps) => (
  <div className={`bg-white rounded-lg shadow ${className}`} {...props} />
);

const CardHeader = ({ className = "", ...props }: CardProps) => (
  <div className={`p-4 border-b ${className}`} {...props} />
);

interface CardTitleProps {
  className?: string;
  children?: ReactNode;
}
const CardTitle = ({ className = "", children }: CardTitleProps) => (
  <h3 className={`text-xl font-bold mb-2 ${className}`}>{children}</h3>
);

interface CardDescriptionProps {
  className?: string;
  children?: ReactNode;
}
const CardDescription = ({ className = "", children }: CardDescriptionProps) => (
  <p className={`text-gray-500 text-sm mb-2 ${className}`}>{children}</p>
);

const CardContent = ({ className = "", ...props }: CardProps) => (
  <div className={`p-4 ${className}`} {...props} />
);

export { Card, CardHeader, CardTitle, CardDescription, CardContent }; 