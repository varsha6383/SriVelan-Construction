"use client";

import React from 'react';
import Image from "next/image";
import Link from 'next/link';

function Homeprojectpage() {
  return (
    <div className="bg-white py-[10%] ">
        {/* desktop size */}
        <div className="hidden lg:block">
            <div className=" container mx-auto px-[8%]">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
          <div>
            <p className="text-sm font-semibold text-gray-500 uppercase mb-2 font-primary">
              OUR PROJECTS
            </p>
            <h2 className="text-5xl font-bold text-[#1b4343] leading-snug font-primary">
              Built to Last. <br /> Designed to Inspire.
            </h2>
          </div>

          <div className="mt-6 lg:mt-0 lg:w-1/2 text-gray-600">
            <p className="mb-4 text-md font-secondary">
              Every home we build is made to stand strong for generations, reflecting your dreams and our craftsmanship.
            </p>
            <button className="bg-[#cbff54] cursor-pointer font-c2a text-[#1b4343] font-semibold py-3 px-6 rounded-full hover:bg-lime-500 transition">
              <Link href="/projects">
              View Our Projects
              </Link>
            </button>
          </div>
        </div>

        {/* Image Grid */}
    <div className="flex gap-6 mt-[10%]">
    <div className="flex w-[70%] h-[200px] overflow-hidden rounded-xl">
    <Image
    src="https://cdn.pixabay.com/photo/2023/09/19/15/42/ai-generated-8262931_1280.jpg"
    alt="Project 1"
    width={800}
    height={400}
    className="object-cover w-full h-full"
  />
  </div>
  <div className="flex w-[25%] h-[200px] overflow-hidden rounded-xl">
    <Image
    src="https://cdn.pixabay.com/photo/2017/07/08/02/16/house-2483336_1280.jpg"
    alt="Project 1"
    width={800}
    height={400}
    className="object-cover w-full h-full"
  />
</div>
</div>
<div className="flex gap-6 my-8">
    <div className="flex w-[25%] h-[200px] overflow-hidden rounded-xl">
    <Image
    src="https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg"
    alt="Project 1"
    width={800}
    height={400}
    className="object-cover w-full h-full"
  />
  </div>
  <div className="flex w-[70%] h-[200px] overflow-hidden rounded-xl">
    <Image
    src="https://cdn.pixabay.com/photo/2017/05/12/00/22/project-2305733_1280.jpg"
    alt="Project 1"
    width={800}
    height={400}
    className="object-cover w-full h-full"
  />
</div>
</div>
      </div>
<div className=" flex items-center gap-[20%] mt-[10%] py-[8%]  px-[8%] w-full bg-[#07303a] bg-blend-multiply  bg-cover bg-center bg-[url('https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg')]">
<div className="w-[70%]"><h1 className="text-4xl text-white font-bold font-primary">Let’s Build Your Dream Home.</h1>
<p className="text-lg mt-6 text-white font-secondary ">Whether it’s your first home or a family project, Sri Velan Constructions is here to make your plan a reality.Call or meet us today to discuss your ideas.</p>
</div>
<div className="mt-10 w-[30%]">
    <button className="bg-lime-300 cursor-pointer border-dotted border-white px-[5%] py-2 rounded-3xl text-[#305658] font-c2a">
      <Link href="/contact">
             ENQUIRE  NOW
          </Link>
    </button>
</div>


</div>
        </div>


        {/* tablet size */}
         <div className="hidden sm:block lg:hidden">
            <div className=" container  px-[8%]">
        {/* Header Section */}
        <div className="flex flex-col  justify-between items-start  mb-12">
          <div>
            <p className="text-md font-semibold text-gray-500 uppercase mb-2 font-primary">
              OUR PROJECTS
            </p>
            <h2 className="text-4xl font-bold text-[#1b4343] leading-snug font-primary">
              Built to Last.  Designed to Inspire.
            </h2>
          </div>

          <div className="my-6  text-gray-600">
            <p className="mb-4 text-lg font-secondary">
              Every home we build is made to stand strong for generations,
               reflecting your dreams and our craftsmanship.
            </p>
            <button className="bg-[#cbff54] text-[#1b4343] font-semibold py-3 px-6 rounded-full hover:bg-lime-500 transition font-c2a">
            <Link href="/projects">
              View Our Projects
              </Link>
            </button>
          </div>
        </div>

        {/* Image Grid */}
    <div className="mt-[10%] ">
    <div className=" w-full h-[200px] overflow-hidden rounded-xl my-8">
    <Image
    src="https://cdn.pixabay.com/photo/2017/07/08/02/16/house-2483336_1280.jpg"
    alt="Project 1"
    width={300}
    height={400}
    className="object-cover w-full h-full"
  />
  </div>
  <div className=" w-full h-[200px] overflow-hidden rounded-xl my-8">
    <Image
    src="https://cdn.pixabay.com/photo/2017/07/08/02/16/house-2483336_1280.jpg"
    alt="Project 1"
    width={300}
    height={400}
    className="object-cover w-full h-full"
  />
</div>


    <div className=" w-full h-[200px] overflow-hidden  rounded-xl my-8">
    <Image
    src="https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg"
    alt="Project 1"
    width={300}
    height={400}
    className="object-cover w-full h-full"
  />
  </div>
  <div className=" w-full h-[200px] overflow-hidden  rounded-xl my-8">
    <Image
    src="https://cdn.pixabay.com/photo/2017/05/12/00/22/project-2305733_1280.jpg"
    alt="Project 1"
    width={300}
    height={400}
    className="object-cover w-full h-full"
  />
</div>
</div>
</div>
<div className="  gap-[20%] mt-[10%] py-[8%] w-full px-[10%] bg-[#899ca1] bg-blend-multiply  bg-cover bg-center bg-[url('https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg')]">
<div><h1 className="text-4xl text-white font-bold font-primary">Let’s Build Your Dream Home.</h1>
<p className="text-lg mt-3 text-white font-secondary">Whether it’s your first home or a family project, Sri Velan Constructions is here to make your plan a reality.Call or meet us today to discuss your ideas.</p>
</div>
<div className="mt-10">
    <button className="bg-lime-300 border-dotted border-white px-6 py-2 rounded-3xl text-[#305658] font-c2a">
      <Link href="/contact">
             ENQUIRE  NOW
          </Link>
    </button>
</div>


</div>
        </div>

{/* mobile size */}
         <div className="block sm:hidden ">
            <div className=" container  px-6 ">
        {/* Header Section */}
        <div className="flex flex-col  justify-between items-start  mb-12">
          <div>
            <p className="text-sm font-semibold text-gray-500 uppercase mb-2 font-primary">
              OUR PROJECTS
            </p>
            <h2 className="text-3xl font-bold text-[#1b4343] leading-snug font-primary">
              Built to Last.  Designed to Inspire.
            </h2>
          </div>

          <div className="my-6  text-gray-600">
            <p className="mb-4 text-[120%] font-secondary">
              Every home we build is made to stand strong for generations,
               reflecting your dreams and our craftsmanship.
            </p>
            <button className="bg-[#cbff54] text-[#1b4343] font-semibold py-3 px-6 rounded-full hover:bg-lime-500 transition font-c2a">
            <Link href="/projects">
              View Our Projects
              </Link>
            </button>
          </div>
        </div>

        {/* Image Grid */}
    <div className="mt-[10%] ">
    <div className=" w-full h-[200px] overflow-hidden rounded-xl my-8">
    <Image
    src="https://cdn.pixabay.com/photo/2023/09/19/15/42/ai-generated-8262931_1280.jpg"
    alt="Project 1"
    width={300}
    height={400}
    className="object-cover w-full h-full"
  />
  </div>
  <div className=" w-full h-[200px] overflow-hidden rounded-xl my-8">
    <Image
    src="https://cdn.pixabay.com/photo/2017/07/08/02/16/house-2483336_1280.jpg"
    alt="Project 1"
    width={300}
    height={400}
    className="object-cover w-full h-full"
  />
</div>


    <div className=" w-full h-[200px] overflow-hidden  rounded-xl my-8">
    <Image
    src="https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg"
    alt="Project 1"
    width={300}
    height={400}
    className="object-cover w-full h-full"
  />
  </div>
  <div className=" w-full h-[200px] overflow-hidden  rounded-xl my-8">
    <Image
    src="https://cdn.pixabay.com/photo/2023/09/19/15/42/ai-generated-8262931_1280.jpg"
    alt="Project 1"
    width={300}
    height={400}
    className="object-cover w-full h-full"
  />
</div>
</div>
</div>
<div className="  gap-[20%] mt-[10%] py-[8%] w-full px-6 bg-[#899ca1] bg-blend-multiply  bg-cover bg-center bg-[url('https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg')]">
<div><h1 className="text-2xl text-white font-bold font-primary">Let’s Build Your Dream Home.</h1>
<p className="text-[100%]  mt-3 text-white font-secondary">Whether it’s your first home or a family project, Sri Velan Constructions is here to make your plan a reality. Call or meet us today to discuss your ideas.</p>
</div>
<div className="mt-10">
    <button className="bg-lime-300 border-dotted border-white px-6 py-2 rounded-3xl text-[#305658] font-c2a">
      <Link href="/contact">
             ENQUIRE  NOW
          </Link>
    </button>
</div>


</div>
        </div>
        
    </div>
  )
}

export default Homeprojectpage;