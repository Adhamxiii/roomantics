import { getGalleryPage, ImageType } from "@/sanity/queries/page";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const randomColumns = () => {
  const columnSize = [
    "sm:row-span-1",
    "sm:col-span-3 row-span-1",
    "sm:row-span-2 col-span-1",
  ];

  return columnSize[Math.floor(Math.random() * columnSize.length)];
};

const GalleryPage = async () => {
  const data = await getGalleryPage();

  const { Heading, Gallery } = data;
  console.log(Gallery);

  return (
    <section className="relative flex w-full items-center justify-center overflow-hidden bg-black py-6 sm:py-24">
      <div className="h-full w-full px-6 sm:px-24">
        <div className="py-12">
          <h1 className="font-bebas text-5xl text-white">{Heading}</h1>
        </div>
        <span className="block font-bold italic text-white">
          Our Entire works are showcased here.
        </span>

        <div className="grid grid-flow-dense grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {Gallery.imageUrls.map((image: ImageType, i: number) => {
            return (
              <div key={i} className={randomColumns()}>
                <Link href="/">
                  <Image
                    src={image.url}
                    alt=""
                    width={420}
                    height={240}
                    className="h-full w-full object-cover"
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GalleryPage;
