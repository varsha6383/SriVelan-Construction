"use client";

import React from 'react';
import { FaPhoneAlt, FaClock,FaUsers, FaToolbox } from "react-icons/fa";
import Link from 'next/link';

function Homelandpage() {
  return (
    <div>
      {/* Desktop view */}
      <div className="hidden lg:block">
        <div className="relative">
          <div className="h-[90%] bg-[#305658] bg-blend-multiply rounded-bl-[80%_100px] rounded-br-[80%_100px] w-full bg-cover bg-center bg-[url('https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg')]">
            <div className="flex text-white items-center text-center gap-4 py-[10%] px-[28%] flex-col">
              <p className="bg-[#607e7e]/70 backdrop-blur-xl px-[5%] font-semibold py-1 rounded-full cursor-pointer font-c2a">Home</p>
              <p className="font-bold text-5xl font-primary">Building Your Dreams Into Reality</p>
              <p className="font-secondary text-lg">We take pride in turning your ideas into strong and beautiful homes. From planning to finishing, we handle every step with care and commitment.</p>
              <div className="space-x-8 mt-3">
                <button className="bg-[#cbff54] hover:bg-lime-500 text-[#305658] px-8 py-3 rounded-full cursor-pointer font-c2a">
                  <Link href="/contact">Get a Quote</Link>
                </button>
                <button className="bg-[#607e7e]/70 backdrop-blur-xl border border-white hover:border-dotted px-8 py-3 rounded-full cursor-pointer font-c2a">
                  <Link href="/projects">View Our Projects</Link>
                </button>
              </div>
            </div>
          </div>

        <div className="flex justify-between items-center py-[5%] absolute top-[80%] left-[1%] w-[78%] h-[30%] bg-white mx-[10%] rounded-4xl shadow-gray-400 shadow-md">
  {/* On Time Delivery */}
  <div>
    <FaClock color="#033231" size={40} className="ml-8 bg-[#cbff54] rounded-full px-2" />
    <h1 className="mt-3 ml-8 text-2xl text-green-950 font-semibold font-primary">
      On Time Delivery
    </h1>
    <h1 className="text-md ml-8 pt-2 text-green-950 font-secondary">
      We complete every project on schedule with proper planning and dedicated manpower.
    </h1>
  </div>

  {/* Experienced Team */}
  <div>
    <FaUsers color="#033231" size={40} className="ml-8 bg-[#cbff54] rounded-full px-2" />
    <h1 className="mt-3 ml-8 text-2xl text-green-950 font-semibold font-primary">
      Experienced Team
    </h1>
    <h1 className="text-md ml-8 pt-2 text-green-950 font-secondary">
      Our skilled team members ensure quality work in every stage of construction.
    </h1>
  </div>

  {/* Quality Materials */}
  <div>
    <FaToolbox color="#033231" size={40} className="ml-8 bg-[#cbff54] rounded-full px-2" />
    <h1 className="mt-3 ml-8 text-2xl text-green-950 font-semibold font-primary">
      Quality Materials
    </h1>
    <h1 className="text-md ml-8 pt-2 text-green-950 font-secondary">
      We use trusted and durable materials to build strong and long-lasting homes.
    </h1>
  </div>
</div>

        </div>
      </div>

      {/* Tablet view */}
      <div className="hidden md:block lg:hidden">
        <div className="relative">
          <div className="bg-[#305658] bg-blend-multiply rounded-bl-[60%_80px] rounded-br-[60%_80px] w-full bg-cover bg-center bg-[url('https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg')]">
            <div className="flex text-white items-center text-center gap-4 py-[15%] px-[12%] flex-col">
              <p className="bg-[#607e7e]/70 backdrop-blur-xl px-[10%] py-1 rounded-full cursor-pointer font-c2a text-sm">Home</p>
              <p className="font-bold text-3xl font-primary">Building Your Dreams Into Reality</p>
              <p className="font-secondary text-[14px]">We take pride in turning your ideas into strong and beautiful homes. From planning to finishing, we handle every step with care and commitment.</p>
              <div className="space-y-4 mt-3 flex flex-col w-full items-center">
                <button className="bg-[#cbff54] hover:bg-lime-500 text-[#305658] px-12 py-2 rounded-full cursor-pointer font-c2a">
                  <Link href="/contact">Get a Quote</Link>
                </button>
                <button className="bg-[#607e7e]/70 backdrop-blur-xl border border-white hover:border-dotted px-12 py-2 rounded-full cursor-pointer font-c2a">
                  <Link href="/projects">View Our Projects</Link>
                </button>
              </div>
            </div>
          </div>

          <div className="p-6 absolute top-[80%] left-[10%] w-[80%] space-y-5 z-10 bg-white rounded-4xl shadow-gray-400 shadow-md">
            <div>
              <FaClock color="#033231" size={35} className="ml-8 bg-[#cbff54] rounded-full px-2" />
              <h1 className="mt-3 ml-8 text-xl text-green-950 font-semibold font-primary">On Time Delivery</h1>
              <h1 className="text-sm ml-8 text-green-950 font-secondary">We complete every project on schedule with proper planning and dedicated manpower.​</h1>
            </div>
            <div>
              <FaUsers color="#033231" size={35} className="ml-8 bg-[#cbff54] rounded-full px-2" />
              <h1 className="mt-3 ml-8 text-xl text-green-950 font-semibold font-primary">Experienced Team</h1>
              <h1 className="text-sm ml-8 text-green-950 font-secondary">Our skilled team members ensure quality work in every stage of construction.​</h1>
            </div>
            <div>
              <FaToolbox color="#033231" size={35} className="ml-8 bg-[#cbff54] rounded-full px-2" />
              <h1 className="mt-3 ml-8 text-xl text-green-950 font-semibold font-primary">Quality Materials</h1>
              <h1 className="text-sm ml-8 text-green-950 font-secondary">We use trusted and durable materials to build strong and long-lasting homes​</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile view */}
      <div className="block md:hidden">
        <div className="relative">
          <div className="bg-[#305658] bg-blend-multiply rounded-bl-[80%_100px] rounded-br-[80%_100px] w-full bg-cover bg-center bg-[url('https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg')]">
            <div className="flex text-white items-center text-center gap-4 pt-[30%] pb-[20%] px-[10%] flex-col">
              <p className="bg-[#607e7e]/70 backdrop-blur-xl px-[15%] text-[100%] py-1 rounded-full cursor-pointer font-c2a">Home</p>
              <p className="font-bold text-[180%] font-primary">Building Your Dreams to Reality</p>
              <p className="px-3 text-[100%] font-secondary">We take pride in turning your ideas into strong and beautiful homes. From planning to finishing, we handle every step with care and commitment.</p>
              <div className="space-y-4 mt-3 flex flex-col">
                <button className="bg-[#cbff54] hover:bg-lime-500 text-[#305658] px-12 py-1 rounded-full cursor-pointer font-c2a"><Link href="/contact">Get a Quote</Link></button>
                <button className="bg-[#607e7e]/70 backdrop-blur-xl border border-white hover:border-dotted px-10 py-1 rounded-full cursor-pointer font-c2a"><Link href="/projects">View Our Projects</Link></button>
              </div>
            </div>
          </div>
          <div className="p-6 absolute top-[90%] left-[10%] w-[80%] space-y-5 z-10 bg-white rounded-4xl shadow-gray-400 shadow-md">
            <div>
              <FaClock color="#033231" size={30} className="ml-8 bg-[#cbff54] rounded-full px-2" />
              <h1 className="mt-3 ml-8 text-2xl text-green-950 font-semibold font-primary">On Time Delivery</h1>
              <h1 className="text-[100%] ml-8 text-green-950 font-secondary">We complete every project on schedule with proper planning and dedicated manpower.​</h1>
            </div>
            <div>
              <FaUsers color="#033231" size={30} className="ml-8 bg-[#cbff54] rounded-full px-2" />
              <h1 className="mt-3 ml-8 text-2xl text-green-950 font-semibold font-primary">Experienced Team</h1>
              <h1 className="text-[100%] ml-8 text-green-950 font-secondary">Our skilled team members ensure quality work in every stage of construction.​</h1>
            </div>
            <div>
              <FaToolbox color="#033231" size={30} className="ml-8 bg-[#cbff54] rounded-full px-2" />
              <h1 className="mt-3 ml-8 text-2xl text-green-950 font-semibold font-primary">Quality Materials</h1>
              <h1 className="text-[100%] ml-8 text-green-950 font-secondary">We use trusted and durable materials to build strong and long-lasting homes​</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homelandpage;
