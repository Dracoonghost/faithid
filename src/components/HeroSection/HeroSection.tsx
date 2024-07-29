import React from 'react'
import ShineBorder from "@/components/magicui/shine-border";
import ShinyText from './ShinyText';
import GradualSpacing from '../magicui/gradual-spacing';
import BlurIn from '../magicui/blur-in';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className='flex-col items-center'>
      
      <BlurIn
        word="Decentralized Identifiers for a Safer Digital World."
        className="font-bold text-black dark:text-white"
      />
       <div>
       <p className="font-display pt-5 text-center  text-neutral-200 lg:text-xl text-sm md:leading-[5rem]">Revolutionizing Digital Identity for Enhanced Privacy.</p>
       </div>
       <ShinyText />
      <ShineBorder
      className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl my-10"
      color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
    >
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
      <img src="hero-dark.png" alt="" className='w-full h-full rounded-[inherit] border object-cover' />
      </span>
    </ShineBorder>
    
    </div>
  )
}

export default HeroSection
