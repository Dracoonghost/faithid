import React from 'react'
import {
  EyeClosedIcon,
  GlobeIcon,
  LockClosedIcon,
  RocketIcon,
} from "@radix-ui/react-icons";
 
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { Settings2Icon } from 'lucide-react';
 
const features = [
  {
    Icon: LockClosedIcon,
    name: "Decentralized Security",
    description: "Your Data, Your Control: Experience the power of decentralized security.",
    href: "/",
    cta: "Learn more",
    background: <img src="/LockClosed.webp" className="absolute opacity-30 w-full h-full rounded-[inherit] border object-cover" />,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: GlobeIcon,
    name: "Universal Compatibility",
    description: "Works Everywhere: Seamlessly integrate with any platform or service.",
    href: "/",
    cta: "Learn more",
    background: <img src="/globe.webp" className="absolute opacity-30 w-full h-full rounded-[inherit] border object-cover" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: EyeClosedIcon,
    name: "Enhanced Privacy",
    description: "Privacy First: Keep your personal data private and secure.",
    href: "/",
    cta: "Learn more",
    background: <img src="/privacy.webp" className="absolute opacity-30 w-full h-full rounded-[inherit] border object-cover" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: Settings2Icon,
    name: "Easy Management",
    description: "Manage with Ease: Effortlessly control your digital identities from one place.",
    href: "/",
    cta: "Learn more",
    background: <img src="/manage.webp" className="absolute opacity-30 w-full h-full rounded-[inherit] border object-cover" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: RocketIcon,
    name: "Future-Proof Technology",
    description:
      "Stay Ahead: Leverage cutting-edge technology for a secure digital future.",
    href: "/",
    cta: "Learn more",
    background: <img src="/future.webp" className="absolute opacity-30 w-full h-full rounded-[inherit] border object-cover" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },

];

const Features = () => {
  return (
    <div>
       <span className="my-10 text-2xl lg:text-5xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-500 inline-block text-transparent bg-clip-text">How do we do it?</span>

      <BentoGrid className="lg:grid-rows-3">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
    <section id="clients" className="text-center mx-auto max-w-[80rem] px-6 md:px-8">
        <div className="py-14">
            <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                <h2 className="text-center text-sm font-semibold text-gray-600">TRUSTED BY TEAMS FROM AROUND THE WORLD</h2>
                <div className="mt-6">
                    <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-16 [&amp;_path]:fill-white">
                        <li><img src="https://cdn.magicui.design/companies/Google.svg" className="h-8 w-28 px-2 dark:brightness-0 dark:invert"/></li>
                        <li><img src="https://cdn.magicui.design/companies/Microsoft.svg" className="h-8 w-28 px-2 dark:brightness-0 dark:invert"/></li>
                        <li><img src="https://cdn.magicui.design/companies/GitHub.svg" className="h-8 w-28 px-2 dark:brightness-0 dark:invert"/></li>
                        <li><img src="https://cdn.magicui.design/companies/Uber.svg" className="h-8 w-28 px-2 dark:brightness-0 dark:invert"/></li>
                        <li><img src="https://cdn.magicui.design/companies/Notion.svg" className="h-8 w-28 px-2 dark:brightness-0 dark:invert"/></li>
                      </ul></div></div></div></section>

    </div>
    

  )
}

export default Features