import Link from "next/link"

export default function HeroSection() {
  return (
    <>
      <div className="h-auto md:h-[40rem] w-full flex flex-col justify-center items-center overflow-hidden relative rounded-md">
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
              <button className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800">
                Explore Courses
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
