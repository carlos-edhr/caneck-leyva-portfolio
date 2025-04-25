// components/gallery-image-view.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

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
  return (
    <div className=" bg-white p-4 sm:p-6 lg:p-8 overflow-y-auto">
      {/* Back Button */}
      <Button onClick={onClose} className="flex top-4 left-4 z-10">
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Gallery
      </Button>

      <div className="max-w-7xl mx-auto mt-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <Card className="overflow-hidden">
              <div className="relative aspect-square">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </Card>
          </div>

          {/* Details Section */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-2">
              <h1 className="text-3xl font-light tracking-wide">
                {item.title}
              </h1>
              <p className="text-gray-600">
                Tulum, Quintana Roo, México. {item.year}
              </p>
            </div>

            {/* Purchase Options */}
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="p-6">
                <CardContent className="p-0 space-y-4">
                  <h3 className="text-lg font-medium">Standard Photography</h3>
                  <p className="text-sm text-gray-600">
                    Choose one of the 2 available options:
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>30 x 1.6cm</span>
                      <span>3,100 MXN</span>
                    </div>
                    <div className="flex justify-between">
                      <span>50 x 3.0cm</span>
                      <span>6,100 MXN</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-0 pt-4">
                  <Button className="w-full">Add to cart</Button>
                </CardFooter>
              </Card>

              <Card className="p-6">
                <CardContent className="p-0 space-y-4">
                  <h3 className="text-lg font-medium">Large Format</h3>
                  <p className="text-sm text-gray-600">
                    Available sizes from 140cm, increasing by 10cm increments.
                    Printed on metallic paper with acrylic finish.
                  </p>
                </CardContent>
                <CardFooter className="p-0 pt-4">
                  <Button variant="outline" className="w-full">
                    Choose Size
                  </Button>
                </CardFooter>
              </Card>
              {/* Back Button */}
              <Button onClick={onClose} className="flex top-4 left-4 z-10">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
