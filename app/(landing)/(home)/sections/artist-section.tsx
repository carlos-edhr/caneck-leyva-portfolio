"use client";

import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  GlobeIcon,
  Link,
} from "lucide-react";
import { WEBPACK_LAYERS } from "next/dist/lib/constants";

export function ArtistSection() {
  return (
    <section
      id="artist"
      className="relative w-full  text-slate-200 py-16 rounded-2xl  "
    >
      <Card className="bg-transparent rounded-full  w-[896px] mx-auto">
        <CardContent className="p-5">
          {/* <div className="w-full bg-[url('/congreso-1.jpg')] bg-cover bg-no-repeat bg-center rounded-2xl opacity-40 z-10"/>  */}
          <div
            className="
            mt-10 
            p-6 
            rounded-xl 
            bg-white/10 
            backdrop-blur-md 
            border 
            border-white/20 
            shadow-lg 
            text-slate-200
          "
          >
            <div className="container mx-auto flex flex-col items-start gap-8 px-4 md:flex-row md:px-8 z-30">
              {/* Left Side: Founder Portrait */}
              <div className="relative flex-shrink-0 w-full md:w-1/2 rounded-2xl">
                {/* White border around the image */}
                <div className="relative   ">
                  <Image
                    src="/images/caneck-leyva-fundador.jpg"
                    alt="Caneck Leyva Professional Portrait"
                    width={800}
                    height={800}
                    className="h-auto w-full object-cover "
                  />
                  {/* Founder Name at the bottom */}
                  {/* <div className="absolute bottom-0 left-0 w-full bg-white px-4 py-2 text-black">
                    <p className="text-sm font-semibold uppercase tracking-wide">
                      {founderName}
                    </p>
                  </div> */}
                </div>
              </div>

              {/* Right Side: Text Content */}
              <div className="flex w-full flex-col justify-center md:w-1/2">
                <h2 className="text-3xl font-extralight uppercase leading-tight md:text-4xl text-white">
                  Caneck Leyva
                </h2>

                <h3 className="mt-2 text-lg font-extralight uppercase text-gray-300">
                  Professional Photographer
                </h3>

                <p className="mt-6 text-gray-200 leading-relaxed">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Molestiae eos quia asperiores cumque beatae, quo, delectus hic
                  voluptatem deserunt in cum voluptate dolores odio laborum at,
                  nostrum aspernatur explicabo iusto.
                </p>
                <div className="mt-16 flex flex-row justify-center align-middle gap-4">
                  {/* <a href="https://www.caneckleyva.com/" target="_blank">
                    <GlobeIcon className="w-6 h-6 text-white" />
                  </a> */}
                  <a href="https://www.facebook.com/kane.leyva" target="_blank">
                    <FacebookIcon className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href="https://www.instagram.com/kaneleyva/"
                    target="_blank"
                  >
                    <InstagramIcon className="w-6 h-6 text-white" />{" "}
                  </a>
                  <a
                    href="https://www.linkedin.com/in/caneckleyva"
                    target="_blank"
                  >
                    <LinkedinIcon className="w-6 h-6 text-white" />
                  </a>
                </div>
                {/* Video  */}
                {/* <div className="flex flex-col items-center justify-center align-middle mt-16 w-full md:w-1/2  overflow-hidden aspect-auto mx-auto rounded-2xl">
                  <a href="https://www.caneckleyva.com/" target="_blank">
                    <video
                      src="/videos/caneck-leyva-fundador.mp4"
                      autoPlay
                      muted
                      loop
                      className="w-full h-full object-cover "
                    />
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
