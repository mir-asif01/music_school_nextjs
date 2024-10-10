"use client"
import Link from "next/link"
import { BackgroundGradient } from "./ui/background-gradient"
import Image from "next/image"
import course_data from "../data/courses.json"

interface Course {
  id: number
  title: string
  slug: string
  description: string
  price: number
  instructor: string
  isFeatured: boolean
}

export default function Courses() {
  const featuredCourses = course_data.courses.filter(
    (course: Course) => course.isFeatured
  )
  return (
    <div className="py-20">
      <div className="text-center">
        <h1 className="text-green-600 text-4xl font-semibold">Our Courses</h1>
        <p className="text-sm">Learn from the best</p>
      </div>
      <div className="my-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center gap-10">
          {featuredCourses.map((course: Course) => (
            <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
              <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                  {course.title}
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                  {course.description}
                </p>
                <Link
                  href={`/courses/${course.slug}`}
                  className="bg-slate-200 text-black rounded-md py-1 px-6 mt-5"
                >
                  Learn More
                </Link>
              </div>
            </BackgroundGradient>
          ))}
        </div>
      </div>
      <div className="text-center mt-20">
        <Link
          href={"/courses"}
          className="bg-slate-200 text-black rounded-md py-2 px-6"
        >
          All Courses
        </Link>
      </div>
    </div>
  )
}
