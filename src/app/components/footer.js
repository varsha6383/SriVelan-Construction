"use client";

import React from "react";
import Link from "next/link";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt,FaLocationArrow,FaFacebook  } from "react-icons/fa";
import { BiLogoInstagram } from "react-icons/bi";
import { FaYoutube,FaXTwitter } from "react-icons/fa6";
import Image from "next/image";


export default function Footer() {
  return (
    <div>
      {/* desktop view */}
    <div className="hidden lg:block ">
    <footer className=" bg-[#0c3c3f] text-white pt-20   relative">
    
      {/* Spacer to push content below lime section */}
     

      {/* 🔹 Main Footer */}
      <div className="max-w-7xl px-[8%] mx-auto  grid grid-cols-1 md:grid-cols-4 max-md:text-center gap-10 pb-16">
        {/* Left - Logo & About */}
        <div>
        <h3 className="mb-3 text-left">
  <Image
    src="/logo.png"       // Replace with your actual logo path
    alt="Brikly Logo"
    width={150}           // Adjust width as needed
    height={50}           // Adjust height as needed
    className="inline-block"
  />
</h3>
          <p className="text-gray-300 mb-5 text-left leading-relaxed font-secondary">
            Your trusted construction partner in Dharmapuri, building strong homes with honest work and lasting results.
          </p>
          <div className="flex space-x-4">
            <div><FaFacebook size={20} color="#ffffff" className="cursor-pointer"/></div>
            <div><BiLogoInstagram size={20} color="#ffffff"  className="cursor-pointer"/></div>
            <div><FaYoutube  size={20} color="#ffffff"  className="cursor-pointer" /></div>
            <div> <FaXTwitter size={20} color="#ffffff"  className="cursor-pointer" /></div>
          </div>
        </div>

        {/* Company */}
        <div className="lg:ml-[20%] "> 
          <h4 className="text-lg font-semibold mb-4 font-primary">Company</h4>
          <ul className="space-y-3 text-gray-300">
            <li><Link href="/" className="hover:text-lime-400 font-c2a cursor-pointer">Home </Link></li>
            <li><Link href="/about" className="hover:text-lime-400 font-c2a cursor-pointer">About</Link></li>
            <li><Link href="/service" className="hover:text-lime-400 font-c2a cursor-pointer ">Services</Link></li>
            <li><Link href="/projects" className="hover:text-lime-400 font-c2a cursor-pointer">Projects</Link></li>
            <li><Link href="/contact" className="hover:text-lime-400 font-c2a cursor-pointer">Contact</Link></li>
            
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-lg font-semibold mb-4 font-primary">Support</h4>
          <ul className="space-y-2 text-gray-300 ">
            <li><Link href="/privacy" className="hover:text-lime-400 font-c2a cursor-pointer">Privacy Policy</Link></li>
          <li><Link href="/terms" className="hover:text-lime-400 font-c2a cursor-pointer">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
      {/* Section Heading */}
      <h4 className="text-lg font-semibold mb-4 font-primary text-white">
        Company Info:
      </h4>

      {/* Info List */}
      <div className="space-y-6 md:space-y-4 pl-4 md:pl-0 text-gray-300">

        {/* Phone / WhatsApp */}
        <div className="flex items-start gap-3">
         <div><FaPhoneAlt  size={20} color="#ffffff"  className="cursor-pointer mt-1" /></div> 
          <div>
            <h1 className="font-c2a font-bold">Call Us</h1>
            <h1>
              <Link
                href="https://wa.me/918248501872"
                target="_blank"
                className="hover:text-green-700 transition-colors"
              >
                +91 82485 01872
              </Link>
            </h1>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-3">
         <div><IoMdMail  size={20} color="#ffffff"  className="cursor-pointer mt-1" /></div>
          <div>
            <h1 className="font-c2a font-bold">Send Email</h1>
            <h1>
              <Link
                href="https://mail.google.com/mail/u/0/?to=srivelamconstruction@gmail.com&su=Enquiry+Regarding+Construction+Services&fs=1&tf=cm"
                target="_blank"
                className="hover:text-green-700 transition-colors"
              >
                srivelamconstruction@gmail.com
              </Link>
            </h1>
          </div>
        </div>

        {/* Address */}
        <div className="flex items-start gap-3">
          <div><FaLocationArrow size={20} color="#ffffff"  className="cursor-pointer mt-1" /></div>
          <div>
            <h1 className="font-c2a font-bold">Address</h1>
            <h1>Kambainallore, Dharmapuri</h1>
          </div>
        </div>
      </div>
    </div>
      </div>

      {/* Bottom Border */}
      <div className="border-t border-gray-600 text-center py-6 text-gray-400 md:text-md text-sm font-c2a">
        © {new Date().getFullYear()} All rights reserved.<Link href="https://www.zenth.in/ " target="_blank" className="hover:underline">Zenth Tech.</Link>
      </div>
    </footer>
    </div>

    {/* mobile view */}
    <div className="lg:hidden block ">
    <footer className=" bg-[#0c3c3f] text-white pt-20 px-[8%]   relative">
    
      {/* Spacer to push content below lime section */}
      <div className=""></div>

     <div className=" text-white pb-10">
  {/* 🔹 Main Footer Container */}
  <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
    
    {/* 🔹 Left - Logo & About */}
    <div>
        <h3 className="mb-3 text-left">
  <Image
    src="/logo.png"       // Replace with your actual logo path
    alt="Brikly Logo"
    width={150}           // Adjust width as needed
    height={50}           // Adjust height as needed
    className="inline-block"
  />
</h3>
      <p className="text-gray-300 mb-6 leading-relaxed font-secondary">
        Your trusted construction partner in Dharmapuri, building strong homes with honest work and lasting results.
      </p>
      <div className="flex gap-4">
        <FaFacebook size={20} color="#ffffff" className="cursor-pointer hover:text-lime-400 transition" />
        <BiLogoInstagram size={20} color="#ffffff" className="cursor-pointer hover:text-lime-400 transition" />
        <FaYoutube size={20} color="#ffffff" className="cursor-pointer hover:text-lime-400 transition" />
        <FaXTwitter size={20} color="#ffffff" className="cursor-pointer hover:text-lime-400 transition" />
      </div>
    </div>

    {/* 🔹 Center - Navigation Links */}
    <div className="flex justify-between md:justify-around">
      {/* Company */}
      <div>
        <h4 className="text-lg font-semibold mb-4 font-primary">Company</h4>
        <ul className="space-y-3 text-gray-300">
          <li><Link href="/" className="hover:text-lime-400 transition font-c2a">Home</Link></li>
          <li><Link href="/about" className="hover:text-lime-400 transition font-c2a">About</Link></li>
          <li><Link href="/service" className="hover:text-lime-400 transition font-c2a">Services</Link></li>
          <li><Link href="/projects" className="hover:text-lime-400 transition font-c2a">Projects</Link></li>
          <li><Link href="/contact" className="hover:text-lime-400 transition font-c2a">Contact</Link></li>
        </ul>
      </div>

      {/* Support */}
      <div>
        <h4 className="text-lg font-semibold mb-4 font-primary">Support</h4>
        <ul className="space-y-3 text-gray-300">
          <li><Link href="/privacy" className="hover:text-lime-400 transition font-c2a">Privacy Policy</Link></li>
          <li><Link href="/terms" className="hover:text-lime-400 transition font-c2a">Terms & Conditions</Link></li>
        </ul>
      </div>
    </div>

    {/* 🔹 Right - Contact Info */}
    <div className="">
      <h4 className="text-lg font-semibold mb-4 font-primary">Company Info</h4>

      <div className="space-y-5 text-gray-300">
        {/* Phone */}
        <div className="flex items-start gap-3">
          <FaPhoneAlt size={18} className="mt-1" />
          <div>
            <p className="font-bold font-c2a">Call Us</p>
            <p className="text-gray-300">+91 82485 01872</p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-3">
          <IoMdMail size={18} className="mt-1" />
          <div>
            <p className="font-bold font-c2a">Send Email</p>
            <Link
              href="https://mail.google.com/mail/u/0/?to=srivelamconstruction@gmail.com&su=Enquiry+Regarding+Construction+Services&fs=1&tf=cm"
              target="_blank"
              className="underline hover:text-lime-400 transition"
            >
              srivelamconstruction@gmail.com
            </Link>
          </div>
        </div>

        {/* Address */}
        <div className="flex items-start gap-3">
          <FaLocationArrow size={18} className="mt-1" />
          <div>
            <p className="font-bold font-c2a">Address</p>
            <p>Kambainallore, Dharmapuri</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>

      {/* Bottom Border */}
      <div className="border-t border-gray-600 text-center py-6 text-gray-400 md:text-md text-sm font-c2a">
        © {new Date().getFullYear()} All rights reserved.<Link href="https://www.zenth.in/ " target="_blank" className="hover:underline">Zenth Tech.</Link>
      </div>
    </footer>
    </div>
    </div>
  );
}