export const revalidate = 0;

import { getHomepage, ImageType } from "@/sanity/queries/page";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";

export default async function Home() {
  const data = await getHomepage();
  const { Hero, Content, SectionImageOverlay, Gallery, Expertises } = data;
  console.log(Expertises);
  return (
    <main className="no-scrollbar w-full">
      <section
        id="section"
        className="relative flex h-screen max-h-[1120px] w-full items-center justify-center py-6 sm:max-h-screen sm:py-24"
      >
        <div id="container" className="h-full w-full px-6 sm:px-24">
          <Image
            src={Hero.heroImage}
            alt="Hero background"
            fill
            className="absolute left-0 top-0 size-full object-cover"
          />

          <div className="relative bottom-0 flex h-full w-full flex-col-reverse items-start gap-3 sm:flex-row sm:items-end sm:justify-between xl:gap-0">
            <Link href="/works">
              <button className="rounded-full border-2 px-9 py-1 pt-1 font-bebas text-lg text-white duration-300 hover:bg-white hover:text-black">
                Explore
              </button>
            </Link>
            <div className="flex flex-col">
              <h1 className="font-bebas text-4xl font-bold leading-none text-white">
                {Hero.heading}
              </h1>
              <p className="text-lg text-white">{Hero.tagline}</p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="section"
        className="relative flex h-fit w-full items-center justify-center py-6 sm:h-[50vh] sm:max-h-screen sm:py-24"
      >
        <div id="container" className="h-full w-full px-6 sm:px-24">
          <div className="flex h-full flex-col justify-center gap-5 xl:flex-row xl:items-center xl:gap-64">
            <div className="flex h-full flex-col sm:justify-center xl:gap-12 xl:text-center">
              <h2 className="text-xl uppercase">{Content.heading}</h2>
              <p className="text-base">{Content.tagline}</p>
            </div>
            <div className="flex flex-col items-start gap-3 sm:gap-9 xl:w-3/4">
              <p className="text-base">{Content.excerpt}</p>
              <Link href="/works">
                <button className="rounded-full border-2 border-black px-6 py-1 pt-1 font-bebas font-bold duration-300 hover:bg-black hover:text-white">
                  Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        id="section"
        className="relative h-fit w-full items-center justify-center overflow-hidden"
      >
        <div id="container" className="h-full w-full px-6 sm:px-24">
          <p className="font-bebas text-[100vh] uppercase leading-none tracking-tighter">
            {SectionImageOverlay.heading}
          </p>
          <Image
            src={SectionImageOverlay.imageOverlay}
            alt=""
            width={428}
            height={428}
            className="absolute top-0 h-3/4 w-3/4 border-4 border-white object-cover sm:right-[15%] sm:w-fit"
          />
        </div>
      </section>

      <section
        id="section"
        className="relative flex h-fit w-full items-center justify-center py-6 sm:h-screen sm:py-24"
      >
        <div id="container" className="h-full w-full px-6 sm:px-24">
          <div className="relative mb-6 w-full sm:mb-0">
            <button className="left-0 top-0 z-10 mb-2 rounded-full border-2 border-black px-3 py-1 font-bebas duration-300 hover:bg-black hover:text-white md:absolute">
              See Our Works
            </button>
          </div>
          <div className="h-full w-full items-center justify-center">
            <Marquee className="h-fit w-full" autoFill speed={15}>
              <div className="flex">
                {Gallery.imageUrls.map((image: ImageType, i: number) => (
                  <div className="h-full sm:w-[33vw]" key={i}>
                    <Image
                      src={image.url}
                      alt=""
                      width={320}
                      height={320}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </Marquee>
          </div>
        </div>
      </section>

      <section
        id="section"
        className="relative flex h-fit w-full items-center justify-center py-6 sm:h-screen sm:py-24"
      >
        <div id="container" className="h-full w-full px-6 sm:px-24">
          <div className="flex flex-col items-center justify-center">
            <h3 className="font-bebas text-5xl">Out Expertise</h3>
          </div>

          <div className="flex h-3/4 w-full flex-grow flex-col items-center justify-between gap-6 sm:flex-row">
            {Expertises.map((expertise: any, i: number) => {
              return (
                <Link
                  key={i}
                  href="/works"
                  className="group flex h-full w-full flex-col items-center justify-center border-2 border-black p-6 sm:w-1/2"
                >
                  <span className="relative z-10 font-bebas text-2xl text-black">
                    {expertise.heading}
                  </span>
                  <div className="h-full w-full overflow-hidden sm:h-[60vh]">
                    <Image
                      src={expertise.url}
                      alt=""
                      width={320}
                      height={320}
                      className="h-full w-full object-cover duration-300 group-hover:scale-105"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
