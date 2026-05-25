"use client";

import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <main className="">
      <div className="hidden lg:block bg-white text-black">
        <div className="bg-[#1b4343] flex  items-center justify-center bg-blend-multiply rounded-bl-[80%_100px] rounded-br-[80%_100px] w-full h-[90%] bg-cover bg-center bg-[url('https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg')]">
          <div className="flex text-white items-center  text-center gap-4 py-[10%] px-[8%] flex-col">
            <p className="bg-[#407d7d]/60  px-3 font-semibold py-1 rounded-full cursor-pointer font-primary">
              CONTACT
            </p>
            <p className="font-bold text-5xl font-primary">
              Get in Touch with Sri Velan Constructions
            </p>
            <p className="font-sencondary text-lg">
              Reach out today to discuss your dream home or building project.
              We’re here to help with a free consultation.
            </p>
          </div>
        </div>

        {/* Section */}
        <div className="flex justify-center h-full items-center w-full bg-white my-20 text-lg ">
          <div className="flex flex-col gap-8 w-[35%] pr-[5%] ">
            <p className="font-semibold text-gray-700 font-primary">
              We’re Here to Help
            </p>
            <p className="font-bold text-4xl font-primary">
              Let’s Talk About Your Next Build!
            </p>
            <p className="font-sencondary">
              Whether you’re planning a new home or renovation, we’d love to
              hear your ideas. Fill out the form, call us, or visit our office
              in Kambainallore, Dharmapuri — let’s start building something
              great together.
            </p>

            <div className="flex items-center gap-2">
              <div>
                <Image
                  src="https://cdn.pixabay.com/photo/2015/12/11/11/43/google-1088004_640.png"
                  alt="Image is not there"
                  width={70}
                  height={70}
                  className=""
                ></Image>
              </div>

              <div className="flex flex-col">
                <Image
                  src="https://cdn.pixabay.com/photo/2022/06/30/03/44/five-stars-7292866_640.png"
                  alt="Image is missing"
                  width={100}
                  height={50}
                  className="h-[50px]"
                ></Image>
                <p className="font-sencondary">260+ reviews (4.95 of 5)</p>
              </div>
            </div>
          </div>

          <Image
            src="https://cdn.pixabay.com/photo/2023/09/19/15/42/ai-generated-8262931_1280.jpg"
            alt="Image is missing"
            width={600}
            height={600}
            className="rounded-4xl w-[35%]"
          ></Image>
        </div>

        {/* Section */}
        <div className="flex flex-col items-center w-full justify-center px-[6%] py-[6%] bg-[#f6f7f7]">
      {/* Heading */}
      <p className="font-semibold font-primary text-[#063231]">WE ARE HERE</p>
      <p className="text-4xl md:text-5xl font-bold font-primary text-[#063231] text-center mt-2">
        Find Us on Google
      </p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mt-16">
        {/* Address */}
        <div className="flex flex-col gap-3 bg-white shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl items-center text-center p-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#cbff54"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="bg-[#063231] rounded-full p-1"
          >
            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <p className="font-bold text-2xl font-primary text-[#063231]">Address</p>
          <p className="font-secondary text-gray-600 leading-relaxed">
            Kambainallore, Dharmapuri, Tamil Nadu 635202
          </p>
        </div>

        {/* WhatsApp */}
        <Link
          href="https://wa.me/918248501872?text=Hello%20Sri%20Velam%20Construction!"
          target="_blank"
          className="flex flex-col gap-3 bg-white shadow-xl hover:shadow-2xl  rounded-2xl items-center text-center p-10 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#cbff54"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="bg-[#063231] rounded-full p-1"
          >
            <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
          </svg>
          <p className="font-bold text-2xl font-primary text-[#063231]">WhatsApp</p>
          <p className="font-secondary text-gray-600">+91 82485 01872</p>
        </Link>

        {/* Email */}
        <div className="flex flex-col gap-3 bg-white shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl items-center text-center p-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#cbff54"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="bg-[#063231] rounded-full p-1"
          >
            <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
            <rect x="2" y="4" width="20" height="16" rx="2" />
          </svg>
          <p className="font-bold text-2xl font-primary text-[#063231]">Send Email</p>
          <Link
            href="https://mail.google.com/mail/u/0/?to=srivelamconstruction@gmail.com&su=Enquiry+Regarding+Construction+Services&fs=1&tf=cm"
            target="_blank"
            className=" hover:underline"
          >
            srivelamconstruction@gmail.com
          </Link>
        </div>

        {/* Call */}
        <div className="flex flex-col gap-3 bg-white shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl items-center text-center p-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#cbff54"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="bg-[#063231] rounded-full p-1"
          >
            <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
          </svg>
          <p className="font-bold text-2xl font-primary text-[#063231]">Call Us</p>
          <Link href="tel:+918248501872" className="text-gray-600 hover:text-[#063231]">
            +91 82485 01872
          </Link>
        </div>

        {/* Follow */}
        <div className="flex flex-col gap-3 bg-white shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl items-center text-center p-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#cbff54"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="bg-[#063231] rounded-full p-1"
          >
            <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
            <path d="m21.854 2.147-10.94 10.939" />
          </svg>
          <p className="font-bold text-2xl font-primary text-[#063231]">Follow Us</p>
          <div className="flex gap-5 mt-2">
            <Link href="#" target="_blank">
              <svg className="w-8 h-8 p-1 rounded-full bg-[#063231] text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </Link>
            <Link href="#" target="_blank">
              <svg className="w-8 h-8 p-1 rounded-full bg-[#063231] text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </Link>
            <Link href="#" target="_blank">
              <svg className="w-8 h-8 p-1 rounded-full bg-[#063231] text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                <path d="m10 15 5-3-5-3z" />
              </svg>
            </Link>
          </div>
        </div>



        <div className="flex flex-col gap-3 bg-white shadow-2xl rounded-2xl items-center text-center p-10">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="44"
    height="44"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#cbff54"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-clock bg-[#063231] rounded-full p-1"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>

  <p className="font-bold text-2xl text-[#063231] font-primary">Business Hours</p>

  <p className="font-sencondary text-base">
    Monday – Saturday <br /> 9:00 AM – 6:00 PM
  </p>
</div>



      </div>

      {/* Google Map */}
  <iframe
  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3899.4362780592846!2d78.28863217506388!3d12.218711688031746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDEzJzA3LjQiTiA3OMKwMTcnMjguNCJF!5e0!3m2!1sta!2sin!4v1760889179530!5m2!1sta!2sin"
  width="100%"
  height="450"
  className="border-0 w-full max-w-6xl mt-16 rounded-2xl overflow-hidden shadow-lg"
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

    </div>
      </div>

      {/* MOBILE */}
      <div className="sm:hidden block bg-white">
        <div className="bg-[#218686] bg-blend-multiply rounded-bl-[80%_100px] rounded-br-[80%_100px] w-full h-[40vh] bg-cover bg-center bg-[url('https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg')]">
          <div className="flex text-white items-center text-center gap-4 py-[20%] px-[6%] flex-col">
            <p className="bg-[#407d7d]/60  px-3 font-semibold py-1 rounded-full cursor-pointer font-primary">
              CONTACT
            </p>
            <p className="font-bold text-3xl font-primary">
              Get in Touch with Sri Velan Constructions
            </p>
            <p className="font-sencondary text-base">
              Reach out today to discuss your dream home or building project.
              We’re here to help with a free consultation.
            </p>
          </div>
        </div>

        {/* Section */}
        <div className="grid grid-rows-1 h-full gap-10 items-center  px-[8%] py-10 bg-white">
          <div className="flex flex-col gap-5 ">
            <p className="font-semibold text-gray-700 font-primary">
              We’re Here to Help
            </p>
            <p className="font-bold text-3xl font-primary">
              Let’s Talk About Your Next Build!
            </p>
            <p className="font-sencondary text-[110%]">
              Whether you’re planning a new home or renovation, we’d love to
              hear your ideas. Fill out the form, call us, or visit our office
              in Kambainallore, Dharmapuri — let’s start building something
              great together.
            </p>

            <div className="flex items-center gap-2">
              <div>
                <Image
                  src="https://cdn.pixabay.com/photo/2015/12/11/11/43/google-1088004_640.png"
                  alt="Image is not there"
                  width={70}
                  height={70}
                  className=""
                ></Image>
              </div>

              <div className="flex flex-col">
                <Image
                  src="https://cdn.pixabay.com/photo/2022/06/30/03/44/five-stars-7292866_640.png"
                  alt="Image is missing"
                  width={100}
                  height={50}
                  className="h-[50px]"
                ></Image>
                <p className="font-sencondary">260+ reviews (4.95 of 5)</p>
              </div>
            </div>
          </div>

          <Image
            src="https://cdn.pixabay.com/photo/2023/09/19/15/42/ai-generated-8262931_1280.jpg"
            alt="Image is missing"
            width={600}
            height={600}
            className="rounded-4xl"
          ></Image>
        </div>

        {/* Section */}
        <div className="flex  flex-col text-center px-[8%] py-[8%] bg-[#f6f7f7]">
          <p className=" font-semibold text-[90%] font-primary">WE ARE HERE</p>
          <p className="text-3xl font-bold font-primary">Find us on Google</p>
          <div className="grid grid-cols-1 grid-rows-4 gap-10 items-center h-full pt-[8%]">
            <div className="flex flex-col gap-3 bg-white shadow-2xl rounded-2xl items-center text-center p-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#cbff54"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-map-pin-icon lucide-map-pin bg-[#063231] rounded-full p-1"
              >
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <p className="font-bold text-2xl font-primary">Address</p>
              <p className="font-sencondary text-[110%]">
                Kambainallore, Dharmapuri, Tamil Nadu 635202
              </p>
            </div>

            <Link
              href="https://wa.me/918248501872"
              target="_blank"
              className="flex flex-col gap-3 bg-white shadow-2xl rounded-2xl items-center text-center p-10"
            >
              <div className="flex flex-col gap-3 items-center text-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#cbff54"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-phone-icon lucide-phone bg-[#063231] rounded-full p-1 "
                >
                  <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                </svg>
                <p className="font-bold text-2xl font-primary">Whatsapp</p>
                <p className="font-sencondary text-[110%]">+91 82485 01872</p>
              </div>
            </Link>

            <div className="flex flex-col gap-3 bg-white shadow-2xl rounded-2xl items-center text-center p-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#cbff54"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-mail-icon lucide-mail bg-[#063231] rounded-full p-1"
              >
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                <rect x="2" y="4" width="20" height="16" rx="2" />
              </svg>
              <p className="font-bold text-2xl font-primary">Send Email</p>
              <p className="font-sencondary text-[110%]">
                srivelamconstruction@gmail.com{" "}
              </p>
            </div>

     <Link
  href="tel:+918248501872"
  className="flex flex-col gap-3 bg-white shadow-2xl rounded-2xl items-center text-center p-10 hover:scale-105 transition-all duration-300 cursor-pointer"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="44"
    height="44"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#cbff54"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-phone-icon lucide-phone bg-[#063231] rounded-full p-1"
  >
    <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
  </svg>
  <p className="font-bold text-2xl font-primary">Call us</p>
  <p className="font-sencondary text-[110%] text-gray-700">+91 82485 01872</p>
</Link>


            <div className="flex flex-col gap-3 bg-white shadow-2xl rounded-2xl items-center text-center p-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#cbff54"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-send-icon lucide-send bg-[#063231] rounded-full p-1"
              >
                <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
                <path d="m21.854 2.147-10.94 10.939" />
              </svg>
              <p className="font-bold text-2xl font-primary">Follow us</p>
              <div className="flex gap-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="34"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-facebook-icon lucide-facebook bg-[#063231] rounded-full p-1"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="34"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-instagram-icon lucide-instagram bg-[#063231] rounded-full p-1"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="34"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-youtube-icon lucide-youtube bg-[#063231] rounded-full p-1"
                >
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                  <path d="m10 15 5-3-5-3z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="34"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-x-icon lucide-x bg-[#063231] rounded-full p-1"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                  <path d="m8 6 12 12" />
                </svg>
              </div>
            </div>

       <div className="flex flex-col gap-3 bg-white shadow-2xl rounded-2xl items-center text-center p-10">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="44"
    height="44"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#cbff54"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-clock bg-[#063231] rounded-full p-1"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>

  <p className="font-bold text-2xl text-[#063231] font-primary">Business Hours</p>

  <p className="font-sencondary text-lg">
    Monday – Saturday <br /> 9:00 AM – 6:00 PM
  </p>
</div>
            
          </div>
  <iframe
  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3899.4362780592846!2d78.28863217506388!3d12.218711688031746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDEzJzA3LjQiTiA3OMKwMTcnMjguNCJF!5e0!3m2!1sta!2sin!4v1760889179530!5m2!1sta!2sin"
  className="w-full h-[60vh] border-0 rounded-2xl shadow-lg mt-8"
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

        </div>
      </div>

      {/* TAB */}
      <div className="hidden sm:block lg:hidden bg-white">
        <div className="bg-[#218686] bg-blend-multiply rounded-bl-[80%_100px] rounded-br-[80%_100px] w-full h-[80%] bg-cover bg-center bg-[url('https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg')]">
          <div className="flex text-white items-center text-center gap-4 py-[20%] px-[6%] flex-col">
            <p className="bg-[#407d7d]/60  px-3 font-semibold py-1 rounded-full cursor-pointer font-primary">
              CONTACT
            </p>
            <p className="font-bold text-3xl font-primary">
              Get in Touch with Sri Velan Constructions
            </p>
            <p className="font-sencondary text-lg">
              Reach out today to discuss your dream home or building project.
              We’re here to help with a free consultation.
            </p>
          </div>
        </div>

        {/* Section */}
        <div className="grid grid-rows-1 h-full gap-10 items-center  px-[8%] py-10 bg-white">
          <div className="flex flex-col gap-5 ">
            <p className="font-semibold text-gray-700 font-primary">
              We’re Here to Help
            </p>
            <p className="font-bold text-3xl font-primary">
              Let’s Talk About Your Next Build!
            </p>
            <p className="font-sencondary text-[110%]">
              Whether you’re planning a new home or renovation, we’d love to
              hear your ideas. Fill out the form, call us, or visit our office
              in Kambainallore, Dharmapuri — let’s start building something
              great together.
            </p>

            <div className="flex items-center gap-2">
              <div>
                <Image
                  src="https://cdn.pixabay.com/photo/2015/12/11/11/43/google-1088004_640.png"
                  alt="Image is not there"
                  width={70}
                  height={70}
                  className=""
                ></Image>
              </div>

              <div className="flex flex-col">
                <Image
                  src="https://cdn.pixabay.com/photo/2022/06/30/03/44/five-stars-7292866_640.png"
                  alt="Image is missing"
                  width={100}
                  height={50}
                  className="h-[50px]"
                ></Image>
                <p className="font-sencondary">260+ reviews (4.95 of 5)</p>
              </div>
            </div>
          </div>

          <Image
            src="https://cdn.pixabay.com/photo/2023/09/19/15/42/ai-generated-8262931_1280.jpg"
            alt="Image is missing"
            width={600}
            height={600}
            className="rounded-4xl"
          ></Image>
        </div>

        {/* Section */}
        <div className="flex  flex-col text-center px-[8%] py-[8%] bg-[#f6f7f7]">
          <p className=" font-semibold text-[90%] font-primary">WE ARE HERE</p>
          <p className="text-3xl font-bold font-primary">Find us on Google</p>
          <div className="grid grid-cols-1 grid-rows-4 gap-10 items-center h-full pt-[8%]">
            <div className="flex flex-col gap-3 bg-white shadow-2xl rounded-2xl items-center text-center p-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#cbff54"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-map-pin-icon lucide-map-pin bg-[#063231] rounded-full p-1"
              >
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <p className="font-bold text-3xl font-primary">Address</p>
              <p className="font-sencondary text-[110%]">
                Kambainallore, Dharmapuri, Tamil Nadu 635202
              </p>
            </div>

            <Link
              href="https://wa.me/918248501872"
              target="_blank"
              className="flex flex-col gap-3 bg-white shadow-2xl rounded-2xl items-center text-center p-10"
            >
              <div className="flex flex-col gap-3 items-center text-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#cbff54"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-phone-icon lucide-phone bg-[#063231] rounded-full p-1 "
                >
                  <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                </svg>
                <p className="font-bold text-3xl font-primary">Whatsapp</p>
                <p className="font-sencondary text-[110%]">+91 82485 01872</p>
              </div>
            </Link>

            <div className="flex flex-col gap-3 bg-white shadow-2xl rounded-2xl items-center text-center p-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#cbff54"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-mail-icon lucide-mail bg-[#063231] rounded-full p-1"
              >
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                <rect x="2" y="4" width="20" height="16" rx="2" />
              </svg>
              <p className="font-bold text-3xl font-primary">Send Email</p>
              <p className="font-sencondary text-[110%]">
                srivelamconstruction@gmail.com{" "}
              </p>
            </div>

            <div className="flex flex-col gap-3 bg-white shadow-2xl rounded-2xl items-center text-center p-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#cbff54"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-phone-icon lucide-phone bg-[#063231] rounded-full p-1 "
              >
                <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
              </svg>
              <p className="font-bold text-3xl font-primary">Call us</p>
              <p className="font-sencondary text-[110%]">+91 82485 01872</p>
            </div>

            <div className="flex flex-col gap-3 bg-white shadow-2xl rounded-2xl items-center text-center p-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#cbff54"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-send-icon lucide-send bg-[#063231] rounded-full p-1"
              >
                <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
                <path d="m21.854 2.147-10.94 10.939" />
              </svg>
              <p className="font-bold text-3xl font-primary">Follow us</p>
              <div className="flex gap-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="34"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-facebook-icon lucide-facebook bg-[#063231] rounded-full p-1"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="34"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-instagram-icon lucide-instagram bg-[#063231] rounded-full p-1"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="34"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-youtube-icon lucide-youtube bg-[#063231] rounded-full p-1"
                >
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                  <path d="m10 15 5-3-5-3z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="34"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-x-icon lucide-x bg-[#063231] rounded-full p-1"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                  <path d="m8 6 12 12" />
                </svg>
              </div>
            </div>
          </div>
          <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3899.4362780592846!2d78.28863217506388!3d12.218711688031746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDEzJzA3LjQiTiA3OMKwMTcnMjguNCJF!5e0!3m2!1sta!2sin!4v1760889179530!5m2!1sta!2sin"
            width="600"
            height="600"
            className="border-0 w-full  pt-[8%]"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </main>
  );
}
