"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
// import dynamic from "next/dynamic";
import "locomotive-scroll/dist/locomotive-scroll.css";

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

const GallerySectionHorizontal: React.FC = () => {
  const [activeCategory, setActiveCategory] =
    useState<GalleryCategory>("astrophotography");
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [isDesktop, setIsDesktop] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);
  const [reverseScroll, setReverseScroll] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState(false);
  const scrollRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Sample data - replace with your actual images
  useEffect(() => {
    const sampleItems: GalleryItem[] = [
      {
        id: "1",
        title: "Lorem ipsum",
        year: 2019,
        category: "astrophotography",
        imageUrl: "/img/1.jpg",
      },
      {
        id: "2",
        title: "Lorem ipsum",
        year: 2019,
        category: "astrophotography",
        imageUrl: "/img/2.jpg",
      },
      {
        id: "3",
        title: "Stellar Nebula",
        year: 2020,
        category: "astrophotography",
        imageUrl: "/img/3.jpg",
      },
      {
        id: "4",
        title: "Portrait Study",
        year: 2021,
        category: "astrophotography",
        imageUrl: "/img/11.jpg",
      },
      {
        id: "5",
        title: "Mountain Range",
        year: 2021,
        category: "astrophotography",
        imageUrl: "/img/6.jpg",
      },
      {
        id: "6",
        title: "Mountain Range",
        year: 2021,
        category: "astrophotography",
        imageUrl: "/img/12.jpg",
      },
      {
        id: "7",
        title: "Mountain Range",
        year: 2021,
        category: "astrophotography",
        imageUrl: "/img/13.jpg",
      },
      {
        id: "8",
        title: "Mountain Range",
        year: 2021,
        category: "landscapes",
        imageUrl: "/img/8.jpg",
      },
      {
        id: "9",
        title: "Mountain Range",
        year: 2021,
        category: "astrophotography",
        imageUrl: "/img/14.jpg",
      },
      // Add more items for each category
    ];
    setGalleryItems(sampleItems);
  }, []);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  // Initialize/Reinitialize Locomotive Scroll
  useEffect(() => {
    if (!containerRef.current) return;

    const initScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      scrollRef.current = new LocomotiveScroll({
        el: containerRef.current!,
        smooth: true,
        direction: "horizontal",
        multiplier: 0.5,
        gestureDirection: "both",
        getSpeed: true,
        getDirection: true,
        smartphone: { smooth: false },
        tablet: { smooth: false, breakpoint: 1024 },
        // reloadOnContextChange: true,
      });
      // Enable vertical page scroll when reaching end of horizontal scroll
      scrollRef.current.on("scroll", (args: any) => {
        if (args.limit.x && args.scroll.x >= args.limit.x - 100) {
          document.body.style.overflowY = "auto";
        } else {
          document.body.style.overflowY = "hidden";
        }
      });
    };

    initScroll();

    return () => {
      scrollRef.current?.destroy();
      document.body.style.overflowY = "auto";
    };
  }, [activeCategory]);

  // Track global scroll direction for reverse scrolling
  useEffect(() => {
    let lastY = 0;
    const handleScroll = () => {
      const currentY = window.scrollY;
      setReverseScroll(currentY < lastY);
      lastY = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // // Handle wheel events for horizontal scroll
  // useEffect(() => {
  //   const handleWheel = (e: WheelEvent) => {
  //     if (!containerRef.current || !scrollRef.current) return;

  //     const instance = scrollRef.current as any;
  //     const maxScroll = instance.limit.x;
  //     const currentScroll = instance.scroll.x;

  //     if (
  //       Math.abs(e.deltaY) > Math.abs(e.deltaX) &&
  //       currentScroll < maxScroll
  //     ) {
  //       e.preventDefault();
  //       const target = currentScroll + e.deltaY * 2;
  //       scrollRef.current.scrollTo(target, { disableLerp: true });
  //     }
  //   };

  //   const container = containerRef.current;
  //   container?.addEventListener("wheel", handleWheel, { passive: false });
  //   return () => container?.removeEventListener("wheel", handleWheel);
  // }, []);

  // Handle wheel events for hybrid scrolling
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!scrollRef.current) return;

      const scroll = scrollRef.current?.scroll;
      const maxHorizontal = scroll?.limit?.x || 0;
      const currentHorizontal = scroll?.x || 0;

      // Only prevent vertical scroll when there's horizontal space left
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        if (currentHorizontal < maxHorizontal - 100) {
          e.preventDefault();
          scrollRef.current.scrollTo(currentHorizontal + e.deltaY * 2, {
            disableLerp: true,
          });
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  // Filter items by active category
  const filteredItems = galleryItems.filter(
    (item) => item.category === activeCategory,
  );

  // // Initialize Locomotive Scroll
  // useEffect(() => {
  //   import("locomotive-scroll").then((locomotiveModule) => {
  //     const LocomotiveScroll = locomotiveModule.default;
  //     scrollRef.current = new LocomotiveScroll({
  //       el: containerRef.current!,
  //       smooth: true,
  //       direction: "horizontal",
  //       multiplier: 0.8,
  //       smartphone: { smooth: false },
  //       tablet: { smooth: false, breakpoint: 1024 },
  //     });
  //   });

  //   return () => {
  //     scrollRef.current?.destroy();
  //   };
  // }, [activeCategory]);

  // // Reinitialize scroll when category changes
  // useEffect(() => {
  //   if (isDesktop && scrollRef.current) {
  //     scrollRef.current.update();
  //     scrollRef.current.scrollTo(0, { disableLerp: true });
  //   }
  // }, [activeCategory, isDesktop]);

  // // Filter items by active category
  // const filteredItems = galleryItems.filter(
  //   (item) => item.category === activeCategory,
  // );

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-light text-gray-900 mb-12 text-center">
          Gallery
        </h1>

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
              className={`px-4 py-2 text-sm uppercase tracking-wider ${
                activeCategory === category.id
                  ? "text-gray-900 border-b-2 border-gray-900"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Gallery Items Container */}
        <div
          ref={containerRef}
          data-scroll-container
          className="flex h-[70vh] overflow-x-visible pb-8"
        >
          <div className="flex space-x-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                data-scroll
                className="flex-shrink-0 w-[80vw] md:w-[60vw] lg:w-[40vw] h-full relative group"
              >
                <div className="relative w-full h-[80%] bg-gray-100 overflow-hidden">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 60vw"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,..."
                  />
                </div>
                <div className="mt-4 text-gray-700">
                  <p className="font-light text-lg">
                    {item.title}, {item.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GallerySectionHorizontal;
