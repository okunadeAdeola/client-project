"use client";

import React from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";

export function Contact20() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mx-auto mb-12 flex max-w-lg flex-col justify-center text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Get in Touch</p>
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-5xl">
            Contact Us
          </h2>
          <p className="md:text-md">
            We're here to assist you with any inquiries.
          </p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 items-center gap-x-12 gap-y-12 md:grid-cols-3 md:gap-y-16">
          <div className="flex flex-col items-center justify-start text-center">
            <div className="mb-5 lg:mb-6">
              <BiEnvelope className="size-12" />
            </div>
            <h3 className="mb-3 text-2xl leading-[1.4] font-bold md:text-3xl lg:mb-4 lg:text-3xl">
              Email
            </h3>
            <p className="mb-5 md:mb-6">
              Reach us at hello@grabbl.com for support.
            </p>
            <a className="underline" href="#">
              hello@grabbl.com
            </a>
          </div>
          <div className="flex flex-col items-center justify-start text-center">
            <div className="mb-5 lg:mb-6">
              <BiPhone className="size-12" />
            </div>
            <h3 className="mb-3 text-2xl leading-[1.4] font-bold md:text-3xl lg:mb-4 lg:text-3xl">
              Phone
            </h3>
            <p className="mb-5 md:mb-6">Call us anytime at your convenience.</p>
            <a className="underline" href="#">
              +1 (555) 123-4567
            </a>
          </div>
          <div className="flex flex-col items-center justify-start text-center">
            <div className="mb-5 lg:mb-6">
              <BiMap className="size-12" />
            </div>
            <h3 className="mb-3 text-2xl leading-[1.4] font-bold md:text-3xl lg:mb-4 lg:text-3xl">
              Office
            </h3>
            <p className="mb-5 md:mb-6">Visit us for a chat or a demo.</p>
            <a className="underline" href="#">
              456 Example Rd, Sydney NSW 2000 AU
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
