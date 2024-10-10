import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect"
export default function Webinars() {
  const projects = [
    {
      title: "Stripe",
      description:
        "A technology company that builds economic infrastructure for the internet.",
      link: "https://stripe.com",
    },
    {
      title: "Netflix",
      description:
        "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
      link: "https://netflix.com",
    },
    {
      title: "Google",
      description:
        "A multinational technology company that specializes in Internet-related services and products.",
      link: "https://google.com",
    },
    {
      title: "Meta",
      description:
        "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
      link: "https://meta.com",
    },
    {
      title: "Amazon",
      description:
        "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
      link: "https://amazon.com",
    },
    {
      title: "Microsoft",
      description:
        "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
      link: "https://microsoft.com",
    },
  ]
  return (
    <div className="h-[50vh] max-w-5xl mx-auto p-14">
      <div className="text-center">
        <h1 className="text-3xl text-green-500 ">Upcoming webinars</h1>
      </div>
      <div>
        <HoverEffect items={projects} />
      </div>
      <div className="text-center">
        <Link href={"/"}>
          <button className="bg-white text-black px-3 py-2 rounded-md">
            View All Webinars
          </button>
        </Link>
      </div>
    </div>
  )
}
