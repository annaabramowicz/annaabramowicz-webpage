"use client";

import Image from "next/image";
import { technologies } from "./technologies";
import useIntersectionObserver from "@/app/hooks/useIntersectionObserver";

const TechnologiesSection = () => {
  useIntersectionObserver("scale-in-element");

  return (
    <section className="bg-gradient-bg h-fit w-screen">
      <div className="max-w-6xl mx-4 sm:mx-auto py-8">
        <h1 className="font-playfair text-5xl mb-4">Technologies</h1>
        <div className="sm:columns-2 gap-9">
          {Object.entries(technologies).map(([category, items]) => (
            <div
              key={category}
              className="scale-in-element break-inside-avoid mb-2"
            >
              <h2 className="font-playfair text-2xl mb-3 border-b pb-2">
                {category}
              </h2>
              <div className="flex flex-wrap items-start gap-2">
                {items.map((tech) => (
                  <div
                    key={tech.name}
                    className="inline-flex items-center bg-white shadow-md rounded-md h-10 p-3 mr-2 mb-2 max-w-xs"
                  >
                    {tech.src && (
                      <Image
                        src={tech.src}
                        alt={`${tech.name} icon`}
                        sizes="20px"
                        width={16}
                        height={16}
                        className="object-contain mr-2"
                      />
                    )}
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
