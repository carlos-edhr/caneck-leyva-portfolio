"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { GalleryImageView } from "./gallery-image-view";

import { motion, AnimatePresence } from "framer-motion";
import { useGesture } from "@use-gesture/react";
import {
  FiX,
  FiMaximize2,
  FiMinimize2,
  FiZoomIn,
  FiZoomOut,
} from "react-icons/fi";
import { Button } from "@/components/ui/button";
type GalleryCategory =
  | "astrophotography"
  | "portraits"
  | "landscapes"
  | "marketing"
  | "artistic"
  | "teaching";

interface GalleryItem {
  id: string;
  title: string;
  year: number;
  category: GalleryCategory;
  imageUrl: string;
  aspectRatio: number; // Added aspect ratio property
}

const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] =
    useState<GalleryCategory>("astrophotography");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);

  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Sample data with aspect ratios
  useEffect(() => {
    const sampleItems: GalleryItem[] = [
      {
        id: "1",
        title: "",
        year: 2019,
        category: "astrophotography",
        imageUrl: "/img/1.jpg",
        aspectRatio: 1.5, // Example: 3:2 ratio
      },
      {
        id: "2",
        title: "",
        year: 2019,
        category: "astrophotography",
        imageUrl: "/img/2.jpg",
        aspectRatio: 1.5, // Example: 3:2 ratio
      },
      {
        id: "3",
        title: "",
        year: 2020,
        category: "astrophotography",
        imageUrl: "/img/3.jpg",
        aspectRatio: 1.5, // Example: 3:2 ratio
      },
      {
        id: "4",
        title: "",
        year: 2021,
        category: "astrophotography",
        imageUrl: "/img/6.jpg",
        aspectRatio: 3.5, // Example: 3:2 ratio
      },
      {
        id: "5",
        title: "",
        year: 2021,
        category: "astrophotography",
        imageUrl: "/img/11.jpg",
        aspectRatio: 1.5, // Example: 3:2 ratio
      },
      {
        id: "6",
        title: "",
        year: 2021,
        category: "astrophotography",
        imageUrl: "/img/12.jpg",
        aspectRatio: 1.5, // Example: 3:2 ratio
      },
      {
        id: "7",
        title: "",
        year: 2021,
        category: "astrophotography",
        imageUrl: "/img/13.jpg",
        aspectRatio: 1.5, // Example: 3:2 ratio
      },
      {
        id: "8",
        title: "",
        year: 2021,
        category: "landscapes",
        imageUrl: "/img/8.jpg",
        aspectRatio: 1.5, // Example: 3:2 ratio
      },
      {
        id: "9",
        title: "",
        year: 2021,
        category: "astrophotography",
        imageUrl: "/img/14.jpg",
        aspectRatio: 1.5, // Example: 3:2 ratio
      },
      {
        id: "10",
        title: "",
        year: 2021,
        category: "astrophotography",
        imageUrl: "/img/16.jpg",
        aspectRatio: 1.5, // Example: 3:2 ratio
      },
      {
        id: "11",
        title: "",
        year: 2021,
        category: "astrophotography",
        imageUrl: "/img/19.jpg",
        aspectRatio: 1.5, // Example: 3:2 ratio
      },
      {
        id: "12",
        title: "",
        year: 2021,
        category: "astrophotography",
        imageUrl: "/img/20.jpg",
        aspectRatio: 1.5, // Example: 3:2 ratio
      },
      {
        id: "13",
        title: "",
        year: 2021,
        category: "astrophotography",
        imageUrl: "/img/21.jpg",
        aspectRatio: 1.5, // Example: 3:2 ratio
      },
      {
        id: "14",
        title: "",
        year: 2021,
        category: "astrophotography",
        imageUrl: "/img/22.jpg",
        aspectRatio: 1.5, // Example: 3:2 ratio
      },
      {
        id: "15",
        title: "",
        year: 2021,
        category: "astrophotography",
        imageUrl: "/img/23.jpg",
        aspectRatio: 1.5, // Example: 3:2 ratio
      },
      {
        id: "16",
        title: "",
        year: 2021,
        category: "astrophotography",
        imageUrl: "/img/24.jpg",
        aspectRatio: 1.5, // Example: 3:2 ratio
      },
      {
        id: "17",
        title: "",
        year: 2021,
        category: "astrophotography",
        imageUrl: "/img/33.jpg",
        aspectRatio: 1.5, // Example: 3:2 ratio
      },
      {
        id: "18",
        title: "",
        year: 2021,
        category: "astrophotography",
        imageUrl: "/img/34.jpg",
        aspectRatio: 1.5, // Example: 3:2 ratio
      },
      {
        id: "19",
        title: "",
        year: 2021,
        category: "astrophotography",
        imageUrl: "/img/35.jpg",
        aspectRatio: 1.5, // Example: 3:2 ratio
      },
      {
        id: "20",
        title: "",
        year: 2021,
        category: "astrophotography",
        imageUrl: "/img/36.jpg",
        aspectRatio: 1.5, // Example: 3:2 ratio
      },
      {
        id: "21",
        title: "",
        year: 2021,
        category: "astrophotography",
        imageUrl: "/img/37.jpg",
        aspectRatio: 1.5, // Example: 3:2 ratio
      },
      {
        id: "22",
        title: "",
        year: 2021,
        category: "astrophotography",
        imageUrl: "/img/38.jpg",
        aspectRatio: 1.5, // Example: 3:2 ratio
      },
      // Add aspectRatio for all other items...
      // Continue with other items maintaining their actual aspect ratios
    ];
    setGalleryItems(sampleItems);
  }, []);

  const filteredItems = galleryItems.filter(
    (item) => item.category === activeCategory,
  );

  const bind = useGesture({
    onDrag: ({ offset: [x, y] }) => {
      if (scale > 1) setPosition({ x, y });
    },
    onPinch: ({ offset: [d] }) => {
      setScale(Math.min(Math.max(1, scale + d / 100), 3));
    },
  });

  const resetZoom = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      id="gallery"
      className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-light tracking-wider text-gray-800 mb-2">
          Caneck Leyva's Fine Art Photography
        </h2>
        <div className="w-24 h-0.5 bg-gray-300 mx-auto mb-4"></div>
        <h3 className="text-4xl font-light text-gray-900 uppercase tracking-wider">
          The Gallery
        </h3>
      </div>

      {/* Category Navigation */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {[
          { id: "astrophotography", label: "Astrophotography" },
          { id: "portraits", label: "Portraits" },
          { id: "landscapes", label: "Landscapes" },
          { id: "marketing", label: "Marketing" },
          { id: "artistic", label: "Artistic" },
          { id: "teaching", label: "Teaching" },
        ].map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id as GalleryCategory)}
            className={`px-4 py-2 text-sm uppercase tracking-wider transition-colors ${
              activeCategory === category.id
                ? "text-gray-900 border-b-2 border-gray-900"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {filteredItems.map((item) => (
          <motion.div
            key={item.id}
            className="relative break-inside-avoid cursor-zoom-in"
            onClick={() => setSelectedImage(item)}
            layout
          >
            <Image
              src={item.imageUrl}
              alt={item.title}
              width={800}
              height={600}
              className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              placeholder="blur"
              blurDataURL="data:image/png;base64,..."
            />
          </motion.div>
        ))}
      </div>

      {/* Full Screen Viewer */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => {
              setSelectedImage(null);
              resetZoom();
            }}
          >
            <div
              className="relative max-w-full max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Controls */}
              <div className="absolute top-4 right-4 flex gap-3 z-10 text-white">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setScale(Math.min(scale + 0.25, 3))}
                >
                  <FiZoomIn className="w-6 h-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setScale(Math.max(scale - 0.25, 1))}
                >
                  <FiZoomOut className="w-6 h-6" />
                </Button>
                <Button variant="ghost" size="icon" onClick={resetZoom}>
                  <FiMaximize2 className="w-6 h-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    setSelectedImage(null);
                    resetZoom();
                  }}
                >
                  <FiX className="w-6 h-6" />
                </Button>
              </div>

              {/* Image Container */}
              <motion.div
                className="relative"
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                style={{
                  transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                  touchAction: "none",
                }}
              >
                <Image
                  src={selectedImage.imageUrl}
                  alt={selectedImage.title}
                  width={2400}
                  height={1600}
                  className="max-w-[90vw] max-h-[90vh] object-contain"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GallerySection;
