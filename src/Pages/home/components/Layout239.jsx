"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout239() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
            <div className="w-full max-w-lg">
              <p className="mb-3 font-semibold md:mb-4">Tagline</p>
              <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-4xl">
                Discover the Ultimate Convenience in Shopping
              </h2>
              <p className="md:text-md">
                Grabbl makes shopping for alcohol and snacks effortless with our
                user-friendly app. Enjoy competitive prices and swift delivery
                right to your door.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div className="flex w-full flex-col items-center text-center">
              <div className="rb-6 mb-6 md:mb-8">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                  className="rounded-image"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-3xl">
                Intuitive and User-Friendly App Interface
              </h3>
              <p>
                Navigate our app with ease, making your shopping experience
                seamless.
              </p>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="rb-6 mb-6 md:mb-8">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                  className="rounded-image"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-3xl">
                Affordable Prices for Your Favorite Items
              </h3>
              <p>Save money while enjoying your favorite drinks and snacks.</p>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="rb-6 mb-6 md:mb-8">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                  className="rounded-image"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-3xl">
                Quick Delivery Options to Suit Your Needs
              </h3>
              <p>
                Get your orders delivered fast, so you can enjoy more time
                relaxing.
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-col items-center gap-4 md:mt-8 md:flex-row md:justify-center md:gap-6">
  <Button variant="secondary">Download</Button>
  <Button iconRight={<RxChevronRight />} variant="link" size="link" className="flex items-center gap-2">
    Learn More
  </Button>
</div>

        </div>
      </div>
    </section>
  );
}
