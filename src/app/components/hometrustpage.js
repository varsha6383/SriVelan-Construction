"use client";


import React, { useState, useEffect } from "react";
import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function Hometrustpage() {
   const { ref, inView } = useInView({
    triggerOnce: false, // 👈 run every time it enters view
    threshold: 0.4,     // 👈 trigger when 40% visible
  });

  // 👇 re-trigger animation each time it’s visible
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (inView) {
      setStart(false);
      setTimeout(() => setStart(true), 100); // small delay to restart animation
    }
  }, [inView]);
  return (
    <div className="px-[8%]">
      {/* desktop view */}
      <div className="hidden lg:block">
    <div className="flex flex-row items-center justify-between bg-white  py-12 gap-10">
      {/* Left Content */}
      <div className="w-1/2">
        <p className="text-green-700 font-semibold text-sm mb-2 tracking-wide uppercase font-primary">
          Proven & Trusted
        </p>
        <h2 className="text-5xl font-bold text-[#1b4343] leading-tight mb-4 font-primary">
          Backed by Results, <br /> Built on Relationships
        </h2>
        <p className="text-gray-600 text-lg mb-8 leading-relaxed font-secondary">
          Brikly has become a name homeowners trust. Whether it’s new construction 
          or custom renovation, you’re in good company when you build with Brikly. 
          Our strong partnerships are a reflection of the confidence our clients 
          place in us — project after project.
        </p>

        {/* Stats */}
        <div ref={ref} className="flex flex-col gap-8">
      {/* 1️⃣ Satisfied Clients */}
      <div>
        <h3 className="text-3xl my-3 font-bold text-[#1b4343] font-primary">
          {start ? <CountUp start={0} end={100} duration={2} /> : "0"}+
        </h3>
        
        <p className="font-bold text-xl text-[#1b4343]  font-primary">
          Satisfied Clients
        </p>
        <p className="text-[#1b4343] text-lg  font-secondary">
          Over 100 projects built with trust and excellence.
        </p>
      </div>

      {/* 2️⃣ Structural Warranty */}
      <div>
        <h3 className="text-3xl my-3 font-bold text-[#1b4343] font-primary">
          {start ? <CountUp start={0} end={10} duration={2} /> : "0"} Yrs.
        </h3>
        
        <p className="font-bold text-xl text-[#1b4343] font-primary">
          Structural Warranty
        </p>
        <p className="text-[#1b4343] text-lg  font-secondary">
          Structural coverage & quality you can count on.
        </p>
      </div>
    </div>
      </div>

      {/* Right Image */}
      <div className="w-1/2 relative">
        <div className="rounded-2xl mx-6 overflow-hidden shadow-lg">
          <Image
            src="https://cdn.pixabay.com/photo/2023/09/19/15/42/ai-generated-8262931_1280.jpg"
            alt="Happy family in front of home"
            width={600}
            height={400}
            className="object-cover w-full h-auto"
          />
        </div>
        <div className="absolute bottom-4 left-0 bg-lime-400 text-[#1b4343] font-semibold px-4 py-2 rounded-lg shadow-md font-secondary">
          Long-Term<br/> Reliability
        </div>
      </div>
    </div>
    </div>


{/* tablet view */}
    <div className="hidden sm:block lg:hidden">
    <div className="  bg-white  py-12 ">
      {/* Left Content */}
      <div className="w-full">
        <p className="text-[#1b4343] font-semibold text-sm mb-2 font-primary">
          PROVEN & TRUSTED
        </p>
        <h2 className="text-2xl font-bold text-[#1b4343]  mb-4 font-primary">
          Backed by Results, <br /> Built on Relationships
        </h2>
        <p className="text-[#1b4343] mb-8 text=[3%] font-secondary">
          Brikly has become a name homeowners trust. Whether it’s new construction 
          or custom renovation, you’re in good company when you build with Brikly. 
          Our strong partnerships are a reflection of the confidence our clients 
          place in us — project after project.
        </p>

        {/* Stats */}
        <div className="flex flex-col  gap-8">
          <div>
            <h3 className="text-3xl my-3 font-bold text-[#1b4343] font-primary">
              100+
            </h3>
            <p className="font-bold text-xl text-[#1b4343] font-primary">Satisfied Clients</p>
            <p className="text-[#1b4343] text-md pt-3 font-secondary">
              Over 100 projects built with trust and excellence.
            </p>
          </div>

          <div>
            <h3 className="text-3xl   my-3 font-bold text-[#1b4343] font-primary">
          10 Yrs.
            </h3>
            <p className="font-bold text-xl text-[#1b4343] font-primary">Structural Warranty</p>
            <p className="text-[#1b4343] text-md pt-3 font-secondary">
              Structural coverage & quality you can count on.
            </p>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full relative mt-[10%]">
        <div className="rounded-2xl mx-6 overflow-hidden shadow-lg">
          <Image
            src="https://cdn.pixabay.com/photo/2023/09/19/15/42/ai-generated-8262931_1280.jpg"
            alt="Happy family in front of home"
            width={400}
            height={500}
            className=" w-full h-[30%]"
          />
        </div>
        <div className="absolute bottom-4 left-0 bg-lime-400 text-[#1b4343] font-semibold px-4 py-2 rounded-lg shadow-md font-secondary">
          Long-Term<br/> Reliability
        </div>
      </div>
    </div>
    </div>



    {/* mobile view */}
    <div className="block sm:hidden ">
    <div className="  bg-white  py-12 ">
      {/* Left Content */}
      <div className="w-full">
        <p className="text-[#1b4343] font-semibold text-sm mb-2 font-primary">
          PROVEN & TRUSTED
        </p>
        <h2 className="text-3xl font-bold text-[#1b4343]  mb-4 font-primary">
          Backed by Results, <br /> Built on Relationships
        </h2>
        <p className="text-[#1b4343] mb-8 text-[120%]  font-secondary">
          Brikly has become a name homeowners trust. Whether it’s new construction 
          or custom renovation, you’re in good company when you build with Brikly. 
          Our strong partnerships are a reflection of the confidence our clients 
          place in us — project after project.
        </p>

        {/* Stats */}
        <div className="flex flex-col  gap-8">
          <div>
            <h3 className="text-3xl my-3 font-bold text-[#1b4343] font-primary">
              100+
            </h3>
            <p className="font-bold text-xl text-[#1b4343] font-primary">Satisfied Clients</p>
            <p className="text-[#1b4343] text-[120%]   font-secondary">
              Over 100 projects built with trust and excellence.
            </p>
          </div>

          <div>
            <h3 className="text-3xl   my-3 font-bold text-[#1b4343] font-primary">
            10 Yrs.
            </h3>
            <p className="font-bold text-xl text-[#1b4343] font-primary">Structural Warranty</p>
            <p className="text-[#1b4343] text-[120%]  font-secondary">
              Structural coverage & quality you can count on.
            </p>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full relative mt-[10%]">
        <div className="rounded-2xl mx-6 overflow-hidden shadow-lg">
          <Image
            src="https://cdn.pixabay.com/photo/2023/09/19/15/42/ai-generated-8262931_1280.jpg"
            alt="Happy family in front of home"
            width={600}
            height={700}
            className="object-cover w-full h-auto"
          />
        </div>
        <div className="absolute bottom-4 left-0 bg-lime-400 text-[#1b4343] font-semibold px-4 py-2 rounded-lg shadow-md font-secondary">
          Long-Term<br/> Reliability
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}
