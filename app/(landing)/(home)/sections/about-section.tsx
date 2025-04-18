"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useGesture } from "@use-gesture/react";
import { FiMaximize2, FiMinimize2, FiZoomIn, FiZoomOut } from "react-icons/fi";
interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

const LatestMasterpieces: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isImageFullscreen, setIsImageFullscreen] = useState(false);
  const wheelTimeout = useRef<NodeJS.Timeout | null>(null);
  const [isWheeling, setIsWheeling] = useState(false);

  const handleWheel = (e: React.WheelEvent) => {
    if (scale !== 1) return; // Disable wheel navigation when zoomed
    if (wheelTimeout.current) return;

    setIsWheeling(true);
    const delta = Math.sign(e.deltaY);

    if (delta > 0) {
      goToNext();
    } else {
      goToPrevious();
    }

    wheelTimeout.current = setTimeout(() => {
      setIsWheeling(false);
      wheelTimeout.current = null;
    }, 300);
  };

  const toggleImageFullscreen = () => {
    setIsImageFullscreen(!isImageFullscreen);
    if (!isImageFullscreen) {
      setScale(1); // Reset zoom when entering fullscreen
      setPosition({ x: 0, y: 0 });
    }
  };

  // Update fullscreen state when image changes
  useEffect(() => {
    setIsImageFullscreen(false);
  }, [currentImageIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isModalOpen) {
        // Add to existing useEffect
        if (e.key === "ArrowDown") goToNext();
        if (e.key === "ArrowUp") goToPrevious();
        if (e.key === "+") setScale((s) => Math.min(s + 0.25, 3));
        if (e.key === "-") setScale((s) => Math.max(s - 0.25, 1));
        if (e.key === "f") toggleFullscreen();
        if (e.key === "0") resetZoom();
        if (e.key === "Escape") {
          closeModal();
        } else if (e.key === "ArrowLeft") {
          goToPrevious();
        } else if (e.key === "ArrowRight") {
          goToNext();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, currentImageIndex, scale]);

  // Add wheel event cleanup
  useEffect(() => {
    return () => {
      if (wheelTimeout.current) {
        clearTimeout(wheelTimeout.current);
      }
    };
  }, []);

  const bind = useGesture({
    onDrag: ({ offset: [x, y] }) => {
      if (scale > 1) {
        setPosition({ x, y });
      }
    },
    onPinch: ({ offset: [d] }) => {
      setScale(Math.min(Math.max(1, scale + d / 100), 3));
    },
  }) as any; // Explicitly cast to `any` to ensure compatibility with motion.div

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

  // Update scale when image changes
  useEffect(() => {
    resetZoom();
  }, [currentImageIndex]);

  // Sample gallery images - replace with your actual images
  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: "/img/1.jpg",
      alt: "Caneck Leyva 1",
    },
    {
      id: 2,
      src: "/img/2.jpg",
      alt: "Caneck Leyva 2",
    },
    {
      id: 3,
      src: "/img/3.jpg",
      alt: "Caneck Leyva 3",
    },
    {
      id: 4,
      src: "/img/6.jpg",
      alt: "Caneck Leyva 4",
    },
    {
      id: 5,
      src: "/img/7.jpg",
      alt: "Caneck Leyva 5",
    },
    {
      id: 6,
      src: "/img/8.jpg",
      alt: "Caneck Leyva 6",
    },
    {
      id: 7,
      src: "/img/9.jpg",
      alt: "Caneck Leyva 7",
    },
    {
      id: 8,
      src: "/img/10.jpg",
      alt: "Caneck Leyva 8",
    },
    {
      id: 9,
      src: "/img/11.jpg",
      alt: "Caneck Leyva 9",
    },
    {
      id: 10,
      src: "/img/12.jpg",
      alt: "Caneck Leyva 10",
    },
    {
      id: 11,
      src: "/img/13.jpg",
      alt: "Caneck Leyva 11",
    },
    {
      id: 12,
      src: "/img/14.jpg",
      alt: "Caneck Leyva 12",
    },
    {
      id: 13,
      src: "/img/15.jpg",
      alt: "Caneck Leyva 13",
    },
    {
      id: 14,
      src: "/img/16.jpg",
      alt: "Caneck Leyva 14",
    },
    {
      id: 15,
      src: "/img/17.jpg",
      alt: "Caneck Leyva 15",
    },
    {
      id: 16,
      src: "/img/18.jpg",
      alt: "Caneck Leyva 16",
    },
    {
      id: 17,
      src: "/img/19.jpg",
      alt: "Caneck Leyva 17",
    },
    {
      id: 18,
      src: "/img/20.jpg",
      alt: "Caneck Leyva 18",
    },
    {
      id: 19,
      src: "/img/21.jpg",
      alt: "Caneck Leyva 19",
    },
    {
      id: 20,
      src: "/img/22.jpg",
      alt: "Caneck Leyva 20",
    },
    {
      id: 21,
      src: "/img/23.jpg",
      alt: "Caneck Leyva 21",
    },
    {
      id: 22,
      src: "/img/24.jpg",
      alt: "Caneck Leyva 22",
    },
    {
      id: 23,
      src: "/img/33.jpg",
      alt: "Caneck Leyva 23",
    },
  ];

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1,
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1,
    );
  };
  // Add this style to the modal container to prevent page scroll:
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModalOpen]);

  return (
    <>
      <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light tracking-wider text-gray-800 mb-2">
              Caneck Leyva Fine Art Photography
            </h2>
            <div className="w-24 h-0.5 bg-gray-300 mx-auto mb-4"></div>
            <h3 className="text-4xl font-light text-gray-900 uppercase tracking-wider">
              Latest Work
            </h3>
          </div>

          {/* Content */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Image gallery */}
            <div className="w-full md:w-1/2">
              <div
                className="bg-gray-100 aspect-[4/3] relative overflow-hidden cursor-zoom-in"
                onClick={() => openModal(0)}
              >
                <Image
                  src={galleryImages[0].src}
                  alt={galleryImages[0].alt}
                  fill
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
                />
              </div>
            </div>

            {/* Text content */}
            <div className="w-full md:w-1/2 space-y-6">
              <h4 className="text-2xl font-light text-gray-800 tracking-wider">
                New Releases
              </h4>
              <p className="text-gray-600 leading-relaxed tracking-wide">
                Explore the celestial wonders and earthly beauty through the
                lens of
                <br />
                acclaimed photographer Caneck Leyva. Specializing in
                astrophotography
                <br />
                while mastering portrait, landscape, and fine art photography,
                each
                <br />
                limited edition print reveals the universe's grandeur with
                scientific
                <br />
                precision and artistic vision. As a university instructor,
                Leyva's work
                <br />
                bridges academic insight with breathtaking visual storytelling.
              </p>
              <button
                onClick={() => openModal(0)}
                className="mt-6 px-8 py-3 border border-gray-800 text-gray-800 uppercase tracking-wider hover:bg-gray-800 hover:text-white transition-colors duration-300"
              >
                Explore New Arrivals
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Gallery modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black bg-opacity-90 flex items-center justify-center p-4"
            onClick={closeModal}
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
                    closeModal();
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
                  key={currentImageIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-full w-full"
                  style={{
                    transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                    touchAction: "none",
                  }}
                  {...(bind() as any)} // Ensure compatibility with motion.div
                  onWheel={(e) =>
                    handleWheel(e as React.WheelEvent<HTMLDivElement>)
                  }
                >
                  <Image
                    src={galleryImages[currentImageIndex].src}
                    alt={galleryImages[currentImageIndex].alt}
                    fill
                    className="object-contain cursor-grab active:cursor-grabbing"
                    priority
                  />
                </motion.div>

                {/* Navigation arrows */}
                {!isImageFullscreen && (
                  <>
                    <button
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-gray-300 transition-colors md:left-8"
                      onClick={(e) => {
                        e.stopPropagation();
                        goToPrevious();
                      }}
                    >
                      &larr;
                    </button>
                    <button
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-gray-300 transition-colors md:right-8"
                      onClick={(e) => {
                        e.stopPropagation();
                        goToNext();
                      }}
                    >
                      &rarr;
                    </button>
                  </>
                )}

                {/* Image counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm md:text-base">
                  {currentImageIndex + 1} / {galleryImages.length}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LatestMasterpieces;
