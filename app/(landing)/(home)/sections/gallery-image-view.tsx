"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useGesture } from "@use-gesture/react";
import { FiMaximize2, FiMinimize2, FiZoomIn, FiZoomOut } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface GalleryImageViewProps {
  item: {
    id: string;
    title: string;
    year: number;
    imageUrl: string;
  };
  onClose: () => void;
}

export const GalleryImageView = ({ item, onClose }: GalleryImageViewProps) => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isImageFullscreen, setIsImageFullscreen] = useState(false);

  const bind = useGesture({
    onDrag: ({ offset: [x, y] }) => {
      if (scale > 1) {
        setPosition({ x, y });
      }
    },
    onPinch: ({ offset: [d] }) => {
      setScale(Math.min(Math.max(1, scale + d / 100), 3));
    },
  }) as any;

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      document.documentElement.requestFullscreen().catch(console.error);
    } else {
      document.exitFullscreen();
    }
    setIsFullscreen(!isFullscreen);
  };

  const resetZoom = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "+") setScale((s) => Math.min(s + 0.25, 3));
      if (e.key === "-") setScale((s) => Math.max(s - 0.25, 1));
      if (e.key === "f") toggleFullscreen();
      if (e.key === "0") resetZoom();
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [scale]);

  const toggleImageFullscreen = () => {
    setIsImageFullscreen(!isImageFullscreen);
    if (!isImageFullscreen) {
      resetZoom();
    }
  };

  return (
    <div className="bg-white p-4 sm:p-6 lg:p-8 overflow-y-auto">
      {/* Back Button */}
      <Button onClick={onClose} className="flex top-4 left-4 z-10 mb-8">
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Gallery
      </Button>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Image Section with Modal Trigger */}
          <div className="w-full lg:w-1/2">
            <div
              className="relative aspect-square bg-gray-100 cursor-zoom-in"
              onClick={() => setIsImageFullscreen(true)}
            >
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Details Section */}
          <div className="w-full lg:w-1/2 space-y-8">
            {/* ... (keep existing details section content) */}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {isImageFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black bg-opacity-90 flex items-center justify-center p-4"
            onClick={() => setIsImageFullscreen(false)}
          >
            <div
              className={`relative ${isImageFullscreen ? "w-screen h-screen" : "w-full max-w-6xl max-h-screen"}`}
            >
              {/* Control Bar */}
              <div className="absolute top-4 right-4 flex gap-3 z-10">
                <button
                  className="text-white hover:text-gray-300 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    setScale(Math.min(scale + 0.25, 3));
                  }}
                >
                  <FiZoomIn className="w-6 h-6" />
                </button>
                <button
                  className="text-white hover:text-gray-300 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    setScale(Math.max(scale - 0.25, 1));
                  }}
                >
                  <FiZoomOut className="w-6 h-6" />
                </button>
                <button
                  className="text-white hover:text-gray-300 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleImageFullscreen();
                  }}
                >
                  {isImageFullscreen ? (
                    <FiMinimize2 className="w-6 h-6" />
                  ) : (
                    <FiMaximize2 className="w-6 h-6" />
                  )}
                </button>
                <button
                  className="text-white text-3xl hover:text-gray-300 transition-colors ml-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsImageFullscreen(false);
                  }}
                >
                  &times;
                </button>
              </div>

              {/* Main image container */}
              <div
                className={`relative ${isImageFullscreen ? "h-full w-full" : "aspect-[4/3] md:aspect-video"}`}
                onClick={(e) => e.stopPropagation()}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-full w-full"
                  style={{
                    transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                    touchAction: "none",
                  }}
                  {...bind()}
                >
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="object-contain cursor-grab active:cursor-grabbing"
                    priority
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
