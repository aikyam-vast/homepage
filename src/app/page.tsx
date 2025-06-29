"use client";

import { TextColor } from "@/components/ui/text-color";
import { PhotoGallery } from "@/components/ui/gallery";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";


export default function GalleryPage() {
  return (
    <div className="relative min-h-screen w-full bg-white overflow-x-hidden">
      <div className="fixed top-0 left-0 z-0 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      <main className="relative z-10 space-y-20 pb-20 px-0">
        <TextColor />
        <div className="flex justify-center">
          <img src="/Aikyam_Logo.png" alt="Aikyam Logo" className="w-full h-auto max-w-screen-lg px-6 md:px-12 lg:px-20" />
        </div>
        <div className="px-6 md:px-12 lg:px-20 text-center">
          <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
            We are a community of students and faculty dedicated to promoting software and internet freedom, powered by collaboration and Web3
          </p>
        </div>
        <PhotoGallery />
      </main>
      <div className="flex w-full justify-center">
      <Button>
        Our Latest Projects
      </Button>
      </div>
    </div>
  );
}
