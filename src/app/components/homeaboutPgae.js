"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* destop view */}
      <div className="hidden lg:block">
    <div className="flex flex-row items-center justify-center gap-10 mt-0 px-[8%] pt-28 bg-white">
      {/* Left: Images */}
      <div className="relative  w-1/2 flex justify-center">
        {/* Main image */}
        <div className="w-[80%] rounded-3xl overflow-hidden shadow-md">
          <Image
            src="https://cdn.pixabay.com/photo/2023/09/19/15/42/ai-generated-8262931_1280.jpg"
            alt="Modern Building"
            width={600}
            height={400}
            className="object-cover w-full h-full"
            priority
          />
        </div>

        {/* Overlapping small image */}
        <div className="absolute top-[65%] left-[65%] w-[35%] rounded-3xl overflow-hidden shadow-xl border-4 border-white">
          <Image
            src="https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg"
            alt="Office Building"
            width={400}
            height={300}
            className="object-cover "
          />
        </div>
      </div>

      {/* Right: Text */}
      <div className="w-1/2 space-y-4">
        <p className="text-sm font-semibold text-[#1b4343] font-primary">
          ABOUT US
        </p>

        <h1 className="text-4xl  font-bold leading-tight text-[#1b4343] font-primary">
          Your Trusted <br className="hidden lg:block" />
          Construction Partner in <br className="hidden lg:block" />
          Kambainallore & Dharmapuri
        </h1>

        <p className="text-gray-700 text-[100%] font-secondary">
          Sri Velan Constructions is a local construction company based in
          Kambainallore, Dharmapuri. With years of hands-on experience, we focus
          on residential building projects that meet both budget and quality
          expectations. We believe in honesty, hard work, and customer
          satisfaction — that’s how we’ve earned the trust of families across
          the region.
        </p>

        {/* Bullet Points */}
        <ul className="space-y-3 text-gray-800 font-secondary">
          <li className="flex items-center gap-2">
            <span className="text-green-600 text-xl">✔</span> Residential Building Specialists
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-600 text-xl">✔</span> Skilled Manpower
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-600 text-xl">✔</span> On-time Project Completion
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-600 text-xl">✔</span> Strong Local Reputation
          </li>
        </ul>
      </div>
    </div>
    </div>

    {/* tablet view */}
      <div className="hidden sm:block lg:hidden">
    <div className="flex flex-col  items-center justify-center gap-10 px-[8%] pt-20 mt-[40%]  bg-white">
      {/* Left: Images */}
      <div className="relative w-full  flex justify-center">
        {/* Main image */}
        <div className="w-[80%] rounded-3xl overflow-hidden shadow-md">
          <Image
            src="https://cdn.pixabay.com/photo/2017/07/08/02/16/house-2483336_1280.jpg"
            alt="Modern Building"
            width={600}
            height={400}
            className="object-cover w-full h-full"
            priority
          />
        </div>

        {/* Overlapping small image */}
        <div className="absolute top-[65%] left-[65%] w-[35%] rounded-3xl overflow-hidden shadow-xl border-4 border-white">
          <Image
            src="https://cdn.pixabay.com/photo/2023/09/19/15/42/ai-generated-8262931_1280.jpg"
            alt="Office Building"
            width={400}
            height={300}
            className="object-cover "
          />
        </div>
      </div>

      {/* Right: Text */}
      <div className="w-full mt-[8%] space-y-4">
        <p className="text-sm font-semibold text-[#1b4343] font-primary">
          ABOUT US
        </p>

        <h1 className=" text-2xl font-bold leading-tight text-[#1b4343] font-primary">
          Your Trusted <br className="hidden lg:block" />
          Construction Partner in <br className="hidden lg:block" />
          Kambainallore & Dharmapuri
        </h1>

        <p className="text-gray-700 font-secondary">
          Sri Velan Constructions is a local construction company based in
          Kambainallore, Dharmapuri. With years of hands-on experience, we focus
          on residential building projects that meet both budget and quality
          expectations. We believe in honesty, hard work, and customer
          satisfaction — that’s how we’ve earned the trust of families across
          the region.
        </p>

        {/* Bullet Points */}
        <ul className="space-y-3 text-gray-800 font-secondary">
          <li className="flex items-center gap-2">
            <span className="text-green-600 text-xl">✔</span> Residential Building Specialists
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-600 text-xl">✔</span> Skilled Manpower
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-600 text-xl">✔</span> On-time Project Completion
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-600 text-xl">✔</span> Strong Local Reputation
          </li>
        </ul>
      </div>
    </div>
    </div>


    {/* mobile view */}
    <div className="block sm:hidden ">
    <div className="flex flex-col  items-center justify-center gap-10 px-[8%] pt-20 mt-[100%] bg-white">
      {/* Left: Images */}
      <div className="relative w-full  flex justify-center">
        {/* Main image */}
        <div className="w-[80%] rounded-3xl overflow-hidden shadow-md">
          <Image
            src="https://cdn.pixabay.com/photo/2017/07/08/02/16/house-2483336_1280.jpg"
            alt="Modern Building"
            width={600}
            height={400}
            className="object-cover w-full h-full"
            priority
          />
        </div>

        {/* Overlapping small image */}
        <div className="absolute top-[65%] left-[65%] w-[35%] rounded-3xl overflow-hidden shadow-xl border-4 border-white">
          <Image
            src="https://cdn.pixabay.com/photo/2023/09/19/15/42/ai-generated-8262931_1280.jpg"
            alt="Office Building"
            width={400}
            height={300}
            className="object-cover "
          />
        </div>
      </div>

      {/* Right: Text */}
      <div className="w-full mt-[10%] space-y-4">
        <p className="text-[100%] font-semibold text-[#1b4343] font-primary">
          ABOUT US
        </p>

        <h1 className=" text-3xl font-bold leading-tight text-[#1b4343] font-primary">
          Your Trusted <br className="hidden lg:block" />
          Construction Partner in <br className="hidden lg:block" />
          Kambainallore & Dharmapuri
        </h1>

        <p className="text-gray-700  text-[120%]font-secondary">
          Sri Velan Constructions is a local construction company based in
          Kambainallore, Dharmapuri. With years of hands-on experience, we focus
          on residential building projects that meet both budget and quality
          expectations. We believe in honesty, hard work, and customer
          satisfaction — that’s how we’ve earned the trust of families across
          the region.
        </p>

        {/* Bullet Points */}
        <ul className="space-y-3 text-gray-800 font-secondary">
          <li className="flex items-center gap-2">
            <span className="text-green-600 text-xl">✔</span> Residential Building Specialists
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-600 text-xl">✔</span> Skilled Manpower
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-600 text-xl">✔</span> On-time Project Completion
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-600 text-xl">✔</span> Strong Local Reputation
          </li>
        </ul>
      </div>
    </div>
    </div>
    </div>
  );
}