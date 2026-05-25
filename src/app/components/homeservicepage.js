"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Homeservicepage() {
  const services = [
    {
      id: 1,
      title: "Residential Construction",
      description:
        "We build new homes with complete planning, structural work, and finishing — all under one roof.",
      image:
        "https://cdn.pixabay.com/photo/2023/09/19/15/42/ai-generated-8262931_1280.jpg",
      icon: "🏠",
    },
    {
      id: 2,
      title: "Commercial Buildings",
      description:
        "We handle small commercial spaces and buildings with professional guidance and quality finishing.",
      image:
        "https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg",
      icon: "🏢",
    },
    {
      id: 3,
      title: "Renovation & Remodeling",
      description:
        "Whether it’s a small extension or full redesign, we bring a fresh and strong touch to your existing home.",
      image:
        "https://cdn.pixabay.com/photo/2017/05/12/00/22/project-2305733_1280.jpg",
      icon: "🛠️",
    },
  ];

  return (
    <div className="bg-[#f6f7f7] px-[8%]">
      {/* ✅ DESKTOP VIEW - visible only on large screens */}
      <div className="hidden lg:block mt-[10%] pt-[8%] pb-[25%]">
        {/* Section Header */}
        <div className="space-y-3 px-4">
          <h1 className="text-[#1b4343] text-center text-md font-primary">
            WHAT WE DO
          </h1>
          <h1 className="text-[#1b4343] text-center font-bold text-5xl font-primary">
            Our Construction Services
          </h1>
        </div>

        {/* Service Cards */}
        <div className="container mx-auto px-6 mt-[8%]">
          <div className="grid grid-cols-3 gap-10">
            {services.map((service) => (
              <div key={service.id} className="relative flex flex-col items-center">
                <div className="w-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={600}
                    height={900}
                    className="w-full h-[400px] object-cover rounded-bl-[30%_30px] rounded-br-[30%_30px] rounded-t-3xl"
                  />
                </div>

                <div className="bg-white w-[75%] absolute top-[70%] left-1/2 -translate-x-1/2 rounded-2xl shadow-lg text-center p-8 flex flex-col justify-between min-h-[350px]">
                  <div>
                    <div className="text-4xl mb-3">{service.icon}</div>
                    <h3 className="text-2xl font-semibold text-[#1b4343] mb-2 font-primary">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-base mb-6 px-2 font-secondary leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="text-[#1b4343] cursor-pointer font-semibold hover:underline font-c2a"
                  >
                    ENQUIRE NOW
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ✅ TABLET VIEW - visible only on md (640px–1023px) */}
      <div className="hidden sm:block lg:hidden mt-[8%] pt-16 pb-24">
        <div className="space-y-3 px-4">
          <h1 className="text-[#1b4343] text-center text-sm font-primary">
            WHAT WE DO
          </h1>
          <h1 className="text-[#1b4343] text-center font-bold text-4xl font-primary">
            Our Construction Services
          </h1>
        </div>

        <div className="container mx-auto px-4 mt-12">
          <div className="grid grid-cols-1 gap-12">
            {services.map((service) => (
              <div key={service.id} className="relative flex flex-col items-center">
                <div className="w-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={900}
                    height={900}
                    className="h-78 object-cover rounded-bl-[30%_30px] rounded-br-[30%_30px] rounded-t-3xl"
                  />
                </div>

                <div className="bg-white w-[70%] -mt-10 rounded-2xl shadow-lg text-center py-8 px-5 flex flex-col justify-between min-h-[350px]">
                  <div>
                    <div className="text-3xl mb-3">{service.icon}</div>
                    <h3 className="text-3xl font-semibold text-[#1b4343] mb-6 font-primary">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-lg px-2 font-secondary leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="text-[#1b4343] cursor-pointer  font-semibold hover:underline font-c2a"
                  >
                    ENQUIRE NOW
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ✅ MOBILE VIEW - visible only on screens smaller than 640px */}
      <div className="block sm:hidden pt-16 mt-[10%] pb-24">
        <div className="space-y-3 px-4">
          <h1 className="text-[#1b4343] text-center text-sm font-primary">
            WHAT WE DO
          </h1>
          <h1 className="text-[#1b4343] text-center font-bold text-3xl font-primary">
            Our Construction Services
          </h1>
        </div>

        <div className="container mx-auto px-4 mt-12">
          <div className="grid grid-cols-1 gap-12">
            {services.map((service) => (
              <div key={service.id} className="relative flex flex-col items-center">
                <div className="w-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={600}
                    height={900}
                    className="w-full h-64 object-cover rounded-bl-[30%_30px] rounded-br-[30%_30px] rounded-t-3xl"
                  />
                </div>

                <div className="bg-white w-[90%] -mt-10 rounded-2xl shadow-lg text-center py-8 px-5 flex flex-col justify-between min-h-[350px]">
                  <div>
                    <div className="text-3xl mb-3">{service.icon}</div>
                    <h3 className="text-3xl font-semibold text-[#1b4343] mb-2 font-primary">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-[100%] mb-6 px-2 font-secondary leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="text-[#1b4343] cursor-pointer  font-semibold hover:underline font-c2a"
                  >
                    ENQUIRE NOW
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
