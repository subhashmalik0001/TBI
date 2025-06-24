'use client';
import React, { useState, ReactNode, HTMLAttributes } from "react";

interface AccordionProps {
  children?: ReactNode;
  className?: string;
}
const Accordion = ({ children, className = "" }: AccordionProps) => (
  <div className={`space-y-2 ${className}`}>{children}</div>
);

interface AccordionItemProps {
  value?: string;
  children?: ReactNode;
  className?: string;
}
const AccordionItem = ({ value, children, className = "" }: AccordionItemProps) => (
  <div className={`border rounded ${className}`}>{children}</div>
);

interface AccordionTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
}
const AccordionTrigger = ({ children, className = "", ...props }: AccordionTriggerProps) => {
  const [open, setOpen] = useState(false);
  return (
    <button
      className={`w-full text-left font-semibold p-4 ${className}`}
      onClick={() => setOpen((o) => !o)}
      {...props}
    >
      {children}
    </button>
  );
};

interface AccordionContentProps {
  children?: ReactNode;
  className?: string;
}
const AccordionContent = ({ children, className = "" }: AccordionContentProps) => (
  <div className={`p-4 border-t ${className}`}>{children}</div>
);

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }; 