export const revalidate = 0;

import { getPosts, Post } from "@/sanity/queries/posts";
import Image from "next/image";
import React from "react";

const BlogPage = async () => {
  const postsData: Post[] = await getPosts();

  console.log(postsData);
  return (
    <section
      id="section"
      className="relative flex max-h-fit w-full items-center justify-center bg-black py-6 pt-24 sm:h-fit sm:max-h-fit sm:py-24"
    >
      <div id="container" className="h-full w-full px-6 sm:px-24">
        <div className="py-12">
          <h1 className="font-bebas text-5xl text-white">Our Blog</h1>
        </div>

        <div className="grid w-full grid-cols-1 justify-between gap-6 sm:grid-cols-3">
          {postsData.map((post: Post, i: number) => {
            return (
              <div
                key={i}
                className="group col-span-1 w-full shrink-0 border border-white px-3 py-2"
              >
                <div className="mb-6 flex flex-col">
                  <h2 className="text-xl text-white">{post.title}</h2>
                  <div className="flex w-full justify-between">
                    <span className="text-sm text-white">By {post.author}</span>
                    <span className="text-sm text-white">
                      {post.publishedAt}
                    </span>
                  </div>
                </div>
                <div className="relative h-[250px] w-full overflow-hidden">
                  <Image
                    src={post.imageUrl}
                    alt={post.title || ""}
                    width={320}
                    height={450}
                    className="absolute h-full w-full object-cover duration-300 group-hover:scale-110"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
