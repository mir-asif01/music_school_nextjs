import Link from "next/link"
import React from "react"
import { Spotlight } from "./ui/Spotlight"
import { Button } from "./ui/moving-border"

export default function HeroSection() {
  return (
    <>
      <div className="h-[100vh] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />

        <div className="p-5 relative text-center z-10">
          <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Welcome to Music School
          </h1>
          <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum
            temporibus dolor ut velit quas aut nihil sapiente rerum consectetur
            totam!
          </p>
          <div className="mt-4">
            <Link href={"/#"}>
              <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
              >
                Explore Courses
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
