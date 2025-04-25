"use client";

import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "lucide-react";

export function ArtistSection() {
  return (
    <section
      id="artist"
      className="relative w-full text-slate-200 py-8 md:py-16 px-4 sm:px-6"
    >
      {/* Header */}
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-light tracking-wide text-gray-100 mb-2">
          Caneck Leyva's Fine Art Photography
        </h2>
        <div className="w-16 md:w-24 h-0.5 bg-gray-300 mx-auto mb-3 md:mb-4"></div>
        <h3 className="text-3xl md:text-4xl font-light text-gray-100 uppercase tracking-wide">
          The Artist
        </h3>
      </div>

      <Card className="bg-transparent border-none shadow-none w-full max-w-4xl mx-auto">
        <CardContent className="p-0">
          <div className="mt-4 md:mt-10 p-4 md:p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              {/* Image Section */}
              <div className="w-full md:w-1/2">
                <div className="relative aspect-square rounded-xl overflow-hidden">
                  <Image
                    src="/images/caneck-leyva-fundador.jpg"
                    alt="Caneck Leyva Professional Portrait"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="w-full md:w-1/2 flex flex-col">
                <h2 className="text-2xl md:text-3xl font-extralight uppercase text-gray-100 mt-4 md:mt-0">
                  Caneck Leyva
                </h2>
                <h3 className="mt-1 md:mt-2 text-base md:text-lg font-extralight uppercase text-gray-300">
                  Professional Photographer
                </h3>
                <p className="mt-4 md:mt-6 text-sm md:text-base text-gray-200 leading-relaxed">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Molestiae eos quia asperiores cumque beatae, quo, delectus hic
                  voluptatem deserunt in cum voluptate dolores odio laborum at,
                  nostrum aspernatur explicabo iusto.
                </p>
                <div className="mt-8 md:mt-12 flex justify-start md:justify-center gap-4">
                  <a href="https://www.facebook.com/kane.leyva" target="_blank">
                    <FacebookIcon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </a>
                  <a
                    href="https://www.instagram.com/kaneleyva/"
                    target="_blank"
                  >
                    <InstagramIcon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/caneckleyva"
                    target="_blank"
                  >
                    <LinkedinIcon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
