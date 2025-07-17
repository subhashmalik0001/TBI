import React, { useState, useEffect } from "react";
import "./mac-navbar-dock.css";
import { FaArrowRight } from "react-icons/fa6";
import { dockItems } from "./dockItems";

interface DockItem {
  name: string;
  src: string;
  isBin?: boolean;
}

interface MacNavbarDockProps {
  mobilePage?: number;
  slideDirection?: 'left' | 'right' | null;
}

const MacNavbarDock: React.FC<MacNavbarDockProps> = ({ mobilePage: controlledMobilePage, slideDirection }) => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const mobilePageSize = 4;
  const totalMobilePages = Math.ceil(dockItems.length / mobilePageSize);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 600);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Use controlled mobilePage if provided
  const mobilePage = typeof controlledMobilePage === 'number' ? controlledMobilePage : 0;

  // For mobile, show 4 consecutive icons, wrapping around if needed
  const getCircularSlice = (arr: DockItem[], start: number, size: number): DockItem[] => {
    const result = [];
    for (let i = 0; i < size; i++) {
      result.push(arr[(start + i) % arr.length]);
    }
    return result;
  };

  const visibleDockItems = isMobile
    ? getCircularSlice(dockItems, (mobilePage * mobilePageSize) % dockItems.length, mobilePageSize)
    : dockItems;

  // Glassmorphism style for dock background
  const dockStyle: React.CSSProperties = {
    background: 'rgba(255, 255, 255, 0.25)',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    borderRadius: '15px',
    marginBottom:'10px',
    border: '1px solid rgba(255, 255, 255, 0.18)',
  };

  // Calculate transform and zIndex for each icon based on hoveredIdx
  const getIconTransform = (index: number) => {
    if (hoveredIdx === null) return { scale: 1, translateY: 0, z: 1 };
    const transformations = [
      { idx: hoveredIdx - 2, scale: 1.1, translateY: 0, z: 2 },
      { idx: hoveredIdx - 1, scale: 1.2, translateY: -6, z: 3 },
      { idx: hoveredIdx, scale: 1.5, translateY: -10, z: 4 },
      { idx: hoveredIdx + 1, scale: 1.2, translateY: -6, z: 3 },
      { idx: hoveredIdx + 2, scale: 1.1, translateY: 0, z: 2 },
    ];
    const found = transformations.find((t) => t.idx === index);
    if (found) {
      return found;
    }
    return { scale: 1, translateY: 0, z: 1 };
  };

  return (
    <div className="dock" style={dockStyle}>
      <div
        className={`dock-container${slideDirection === 'left' ? ' dock-slide-left' : ''}${slideDirection === 'right' ? ' dock-slide-right' : ''}`}
      >
        {visibleDockItems.map((item, index) => {
          const absoluteIndex = isMobile ? mobilePage * mobilePageSize + index : index;
          const { scale, translateY, z } = getIconTransform(absoluteIndex);
          return (
            <li
              key={absoluteIndex}
              className={`li-${absoluteIndex + 1} ${item.isBin ? "li-bin" : ""}`}
              style={{ position: "relative", zIndex: z, overflow: "visible" }}
            >
              <div className="name">{item.name}</div>
              <img
                className={`ico ${item.isBin ? "ico-bin" : ""}`}
                src={item.src}
                alt={item.name}
                style={{
                  transform: `scale(${scale}) translateY(${translateY}px)`,
                  transition: "transform 0.2s cubic-bezier(.4,2,.6,1)",
                  zIndex: z,
                  position: "relative",
                  overflow: "visible",
                }}
                onMouseOver={() => setHoveredIdx(absoluteIndex)}
                onMouseOut={() => setHoveredIdx(null)}
              />
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default MacNavbarDock; 