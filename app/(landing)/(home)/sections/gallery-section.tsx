"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { GalleryImageView } from "./gallery-image-view";

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
}

// Dynamically import Locomotive Scroll on client-side only
// let LocomotiveScroll: any = null;

// if (typeof window !== "undefined") {
//   import("locomotive-scroll").then((mod) => {
//     LocomotiveScroll = mod.default;
//   });
// }

const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] =
    useState<GalleryCategory>("astrophotography");
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  // Sample data - replace with your actual images
  useEffect(() => {
    const sampleItems: GalleryItem[] = [
      {
        id: "1",
        title: "",
        year: 2019,
        category: "astrophotography",
        imageUrl: "/img/1.jpg",
      },
      {
        id: "2",
        title: "",
        year: 2019,
        category: "astrophotography",
        imageUrl: "/img/2.jpg",
      },
      {
        id: "3",
        title: "",
        year: 2020,
        category: "astrophotography",
        imageUrl: "/img/3.jpg",
      },
      {
        id: "4",
        title: "",
        year: 2021,
        category: "astrophotography",
        imageUrl: "/img/6.jpg",
      },
      {
        id: "5",
        title: "",
        year: 2021,
        category: "astrophotography",
        imageUrl: "/img/11.jpg",
      },
      {
        id: "6",
        title: "",
        year: 2021,
        category: "astrophotography",
        imageUrl: "/img/12.jpg",
      },
      {
        id: "7",
        title: "",
        year: 2021,
        category: "astrophotography",
        imageUrl: "/img/13.jpg",
      },
      {
        id: "8",
        title: "",
        year: 2021,
        category: "landscapes",
        imageUrl: "/img/8.jpg",
      },
      {
        id: "9",
        title: "",
        year: 2021,
        category: "astrophotography",
        imageUrl: "/img/14.jpg",
      },
      {
        id: "10",
        title: "",
        year: 2021,
        category: "astrophotography",
        imageUrl: "/img/16.jpg",
      },
      {
        id: "11",
        title: "",
        year: 2021,
        category: "astrophotography",
        imageUrl: "/img/19.jpg",
      },
      {
        id: "12",
        title: "",
        year: 2021,
        category: "astrophotography",
        imageUrl: "/img/20.jpg",
      },
      {
        id: "13",
        title: "",
        year: 2021,
        category: "astrophotography",
        imageUrl: "/img/21.jpg",
      },
      {
        id: "14",
        title: "",
        year: 2021,
        category: "astrophotography",
        imageUrl: "/img/22.jpg",
      },
      {
        id: "15",
        title: "",
        year: 2021,
        category: "astrophotography",
        imageUrl: "/img/23.jpg",
      },
      {
        id: "16",
        title: "",
        year: 2021,
        category: "astrophotography",
        imageUrl: "/img/24.jpg",
      },
      {
        id: "17",
        title: "",
        year: 2021,
        category: "astrophotography",
        imageUrl: "/img/33.jpg",
      },
      {
        id: "18",
        title: "",
        year: 2021,
        category: "astrophotography",
        imageUrl: "/img/34.jpg",
      },
      {
        id: "19",
        title: "",
        year: 2021,
        category: "astrophotography",
        imageUrl: "/img/35.jpg",
      },
      {
        id: "20",
        title: "",
        year: 2021,
        category: "astrophotography",
        imageUrl: "/img/36.jpg",
      },
      {
        id: "21",
        title: "",
        year: 2021,
        category: "astrophotography",
        imageUrl: "/img/37.jpg",
      },
      {
        id: "22",
        title: "",
        year: 2021,
        category: "astrophotography",
        imageUrl: "/img/38.jpg",
      },

      // Add more items for each category
    ];
    setGalleryItems(sampleItems);
  }, []);
  // Filter items by active category
  const filteredItems = galleryItems.filter(
    (item) => item.category === activeCategory,
  );

  return (
    <div
      id="gallery"
      className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-roboto font-light tracking-wider text-gray-800 mb-2">
          Caneck Leyva's Fine Art Photography
        </h2>
        <div className="w-24 h-0.5 bg-gray-300 mx-auto mb-4"></div>
        <h3 className="text-4xl font-roboto font-light text-gray-900 uppercase tracking-wider">
          The Gallery
        </h3>
      </div>
      {selectedItem ? (
        <GalleryImageView
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      ) : (
        <div className="max-w-7xl mx-auto">
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
                onClick={() =>
                  setActiveCategory(category.id as GalleryCategory)
                }
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

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <div className="relative aspect-square bg-gray-100">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className=""
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,..."
                  />
                </div>
                <div className="p-4 bg-white">
                  <p className="font-light text-lg text-gray-700">
                    {/* {item.title}, */}
                    {/* {item.year} */}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GallerySection;
