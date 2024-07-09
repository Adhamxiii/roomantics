import { getWorksPage, ImageType, ProjectType } from "@/sanity/queries/page";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";

export const revalidate = 0;

const WorksPage = async () => {
  const data = await getWorksPage();

  const { Content, Hero, CallToAction } = data;

  return (
    <>
      <section
        id="section"
        className="relative flex max-h-fit w-full items-center justify-center bg-black py-6 pt-24 sm:h-fit sm:max-h-full sm:py-24"
      >
        <div id="container" className="h-full w-full px-6 sm:px-24">
          <div className="py-12">
            <h1 className="font-bebas text-5xl text-white">{Hero.heading}</h1>
          </div>

          <div className="flex aspect-video h-full w-full flex-col">
            <span className="block font-bold italic text-white">
              {Hero.tagline}
            </span>
            <iframe
              src="https://www.youtube.com/embed/NoWyNgAQe34?si=Jthrx77fB35CoOlS&amp;start=10&autoplay=1&mute=1&loop=1"
              width="560"
              height="315"
              title="YouTube video player"
              allow="autoplay; muted;"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="h-full w-full object-cover"
            ></iframe>
          </div>
        </div>
      </section>

      <section
        id="section"
        className="relative flex w-full flex-col items-center justify-center bg-black py-24 sm:h-fit sm:py-24"
      >
        {Content.map((project: ProjectType, i: number) => {
          const { location, url, imageUrls, excerpt, tagline, projectname } =
            project;

          return (
            <div
              key={i}
              className={clsx(
                "sticky top-0 w-full shrink-0 overflow-hidden pb-24 sm:h-[75vh]",
                i % 2 == 0 ? "bg-white text-black" : "bg-black text-white",
              )}
            >
              <div className="h-full w-full px-6 sm:px-24" id="container">
                <div className="grid grid-cols-1 border-b-black p-6 sm:grid-cols-2">
                  <div>
                    <h3 className="font-bebas text-3xl">{projectname}</h3>
                    <div className="flex flex-col gap-3 sm:gap-6 xl:flex-row xl:items-center">
                      <span className="text-xl font-bold">{location}</span>
                      <span
                        className={clsx(
                          "w-fit rounded-full border-2 p-2 italic",
                          i % 2 == 0
                            ? "border-black bg-white text-black"
                            : "border-white bg-black text-white",
                        )}
                      >
                        {tagline}
                      </span>
                    </div>
                  </div>

                  <div className="my-3 flex flex-col sm:my-0 sm:flex-row sm:justify-between">
                    <p>{excerpt}</p>
                    <Link
                      href={url}
                      target="_blank"
                      className={clsx(
                        "h-fit w-fit shrink-0 rounded-full border-2 border-solid bg-black px-6 py-2 font-bebas duration-300",
                        i % 2 == 0
                          ? "border-white bg-black text-white hover:border-black hover:bg-white hover:text-black"
                          : "border-white bg-white text-black hover:border-white hover:bg-black hover:text-white",
                      )}
                    >
                      See More
                    </Link>
                  </div>
                </div>

                <div className="relative -mx-[50%] flex">
                  <Marquee
                    className="w-fit overflow-hidden"
                    speed={90}
                    pauseOnHover
                    autoFill
                  >
                    {imageUrls.map((image: ImageType, i: number) => {
                      return (
                        <div
                          key={i}
                          className="flex aspect-video w-[88vw] shrink-0 cursor-pointer items-center justify-center overflow-hidden sm:w-[450px]"
                        >
                          <Image
                            loading="lazy"
                            src={image?.url || ""}
                            alt="Images"
                            width={200}
                            height={300}
                            className="h-full w-full object-cover px-1"
                          />
                        </div>
                      );
                    })}
                  </Marquee>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      <section
        id="section"
        className="relative flex h-screen w-full flex-col items-center justify-center bg-black py-6 sm:h-fit sm:py-24"
      >
        <div id="container" className="h-full w-full px-6 sm:px-24">
          <div>
            <h2 className="max-w-96 font-bebas text-6xl leading-none text-white">
              {CallToAction.title}
            </h2>
            <Link
              href={CallToAction.link}
              className="w-fit border-2 border-white px-6 py-3 font-bebas text-xl text-white duration-300 hover:bg-white hover:text-black"
            >
              {CallToAction.label}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorksPage;
