'use client';
import { useState } from "react";

const cards = [
  { color: "bg-yellow-100", z: 10 },
  { color: "bg-green-200", z: 20 },
  { color: "bg-red-400", z: 30 },
  { color: "bg-green-200", z: 20 },
  { color: "bg-yellow-100", z: 10 },
];

const companies = [
  { name: "Alt+Shift", icon: "🌊" },
  { name: "AlphaWave", icon: "🌐" },
  { name: "Acme Corp", icon: "✦" },
  { name: "45 Degrees°", icon: "↗" },
];

const StackedCarouselSection = () => {
  // For now, static center card
  const [center] = useState(2);

 
};

export default StackedCarouselSection; 