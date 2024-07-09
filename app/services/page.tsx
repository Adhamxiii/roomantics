export const revalidate = 0;

import { SERVICES } from "@/sanity/constants/services";
import { ContentType, getServicesPage, ImageType } from "@/sanity/queries/page";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";

const ServicesPage = async () => {
  const data = await getServicesPage(SERVICES.PATH);

  const { Heading, Content, Gallery, CallToAction, Video, FormContact } = data;

  console.log(Gallery);

  return (
    <section
      id="section"
      className="relative flex max-h-fit w-full items-center justify-center bg-black py-6 pt-24 sm:h-fit sm:max-h-full sm:py-24"
    >
      <div id="container" className="h-full w-full px-6 sm:px-24">
        <div className="py-12">
          <h1 className="font-bebas text-5xl text-white">{Heading}</h1>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid md:grid-cols-3">
          {Content.map((element: ContentType, i: number) => (
            <div
              key={i}
              className="col-span-1 flex flex-col justify-between gap-3 border-2 border-white p-6 text-white"
            >
              <div className="text-3xl font-bold leading-none">
                <h2>{element.heading}</h2>
              </div>
              <div className="text-sm">{element.excerpt}</div>
              <Link
                href={CallToAction.link}
                target="_blank"
                className="border-2 border-white py-3 text-center font-bebas text-xl text-white hover:bg-white hover:text-black"
              >
                {CallToAction.title}
              </Link>
            </div>
          ))}

          <div className="col-span-1 md:col-span-3">
            <Marquee className="h-full w-full" loop={50}>
              {Gallery.imageUrls?.map((image: ImageType, index: number) => {
                return (
                  <div className="aspect-auto h-[450px] w-full" key={index}>
                    <Image
                      src={image.url}
                      alt="Images"
                      width={450}
                      height={300}
                      className="h-full w-full object-cover"
                    />
                  </div>
                );
              })}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
