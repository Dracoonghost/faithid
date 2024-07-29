import React from 'react'

import HeroSection from "@/components/HeroSection/HeroSection";
import Navbar from "@/components/navbar/Navbar";
import DotPattern from '@/components/magicui/dot-pattern';
import { cn } from '@/lib/utils';
import Features from '@/components/Features/Features';

export default function Home() {
  return (
    <main>
      <section className='relative px-6 lg:px-12 mx-auto text-center md:px-20 max-w-[80rem] z-20'>
        <Navbar />
      </section>
      <section id="hero" className="my-10 px-6 lg:px-12 relative mx-auto text-center md:px-20 max-w-[80rem] z-20">
        <HeroSection />
      </section>
      <section id="hero" className="my-10 px-6 lg:px-12 relative mx-auto text-center md:px-20 max-w-[80rem] z-20">
        <Features />
      </section>
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
        )}
      />
    </main>
  );
}
