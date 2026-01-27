"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface ProjectGalleryProps {
  images: string[];
  title: string;
}

export default function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const [activeImage, setActiveImage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayedImage, setDisplayedImage] = useState(0);

  const handleImageChange = (index: number) => {
    if (index === activeImage || isTransitioning) return;

    setIsTransitioning(true);
    setActiveImage(index);

    // Wait for fade out, then change image and fade in
    setTimeout(() => {
      setDisplayedImage(index);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 300);
  };

  return (
    <div className="mb-16">
      {/* Main Image */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-100 mb-4 lg:mb-6">
        <Image
          src={images[displayedImage]}
          alt={`${title} - Image principale`}
          fill
          className={`object-cover transition-all duration-500 ease-out ${
            isTransitioning ? "opacity-0 scale-105" : "opacity-100 scale-100"
          }`}
          priority
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="grid grid-cols-3 gap-2 md:grid-cols-4 lg:gap-4">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => handleImageChange(index)}
              className={`relative aspect-[4/3] w-full overflow-hidden bg-neutral-100 transition-all duration-300 ease-out ${
                activeImage === index
                  ? "opacity-100 scale-[1.02]"
                  : "opacity-50 hover:opacity-80 hover:scale-[1.02]"
              }`}
            >
              <Image
                src={img}
                alt={`${title} - Miniature ${index + 1}`}
                fill
                className="object-cover transition-transform duration-300"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
