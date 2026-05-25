"use client";

import { useState } from "react";
import Image from "next/image";

export default function Project() {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      title: "Puddireddipatti Site",
      type: "Residential",
      status: "Completed",
      img: "/Puddireddipatty.jpeg",
      desc: "A compact and well-planned home designed for comfortable living with strong construction and modern interior layout. The project includes structural, electrical, and finishing works completed to high-quality standards.",
      highlights: [
        "Completed in 5 months",
        "15 skilled workers on site",
        "Total budget: ₹30 Lakhs",
      ],
    },
    {
      title: "Pachanampatti Site",
      type: "Residential",
      status: "Completed",
      img: "https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg",
      desc: "A spacious two-floor residential building with modern design and durable construction. This project focused on open space planning, ventilation, and long-lasting materials to ensure both comfort and quality.",
      highlights: [
        "Completed in 1 year",
        "35 skilled workers involved",
        "Total budget: ₹60 Lakhs",
      ],
    },
    {
      title: "Perichagoudampatti Site",
      type: "Residential",
      status: "Completed",
      img: "/Perichakoudampatti.jpeg",
      desc: "A beautifully structured residential home featuring a functional layout and premium finish. Built using high-grade materials and experienced workmanship, ensuring strength and elegance in every detail.",
      highlights: [
        "Completed in 5 months",
        "25 skilled workers involved",
        "Total budget: ₹40 Lakhs",
      ],
    },
    // {
    //   title: "",
    //   type: "",
    //   status: "Upcoming",
    //   img: "https://images.pexels.com/photos/162031/dubai-tower-arab-khalifa-162031.jpeg",
    //   desc: "",
    //   highlights: [],
    // },
    {
      title: "Pochampalli Site",
      type: "",
      status: "Upcoming",
      img: "/pochampalli.jpeg",
      desc: "",
      highlights: [
        " ₹60 Lakhs",
      ],
    },
     {
      title: "Kottakarai Site",
      type: "",
      status: "Upcoming",
      img: "/Kottakarai.jpeg",
      desc: "",
      highlights: [
        " ₹30 Lakhs",
      ],
    },
     {
      title: "Eachambadi Site",
      type: "",
      status: "Upcoming",
      img: "/Eachambadi.jpeg",
      desc: "",
      highlights: [
        " ₹60 Lakhs",
      ],
    },
  ];

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.status === filter);

  return (
    <main>
      {/* Lap */}
      <div className="hidden h-full w-full lg:block bg-white mb-[5%]  text-lg text-black">
        <div className="bg-[#218686] bg-blend-multiply flex items-center justify-center  rounded-bl-[80%_100px] rounded-br-[80%_100px] w-full h-[70vh] bg-cover bg-center bg-[url('https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg')]">
          <div className="flex text-white items-center text-center gap-4 py-[10%] px-[10%] flex-col">
            <p className="bg-[#407d7d]/60  px-3  font-semibold py-1 rounded-full cursor-pointer font-primary">
              PROJECTS
            </p>
            <p className="font-bold text-5xl font-primary">
              From Design to Reality
            </p>
            <p className="font-sencondary text-lg">
              At Sri Velan Constructions, we turn every idea into a strong
              foundation of trust, quality, and craftsmanship. Explore our proud
              works — where each project speaks of dedication, precision, and
              the promise to last for generations.
            </p>
          </div>
        </div>

        {/* Section */}
        <div>
          <div className="flex flex-col text-center justify-center items-center my-20">
            <p className="font-semibold font-primary">BUILT TO LAST</p>
            <p className="font-bold text-5xl px-[10%] font-primary">
              Where Every Project Becomes a Landmark
            </p>
          </div>
          {/* Filter Buttons */}
          <div className="flex gap-10  justify-center pb-10">
            {["All", "Completed", "Upcoming"].map((cat) => (
              <p
                key={cat}
                onClick={() => setFilter(cat)}
                className={`cursor-pointer font-bold tracking-wider shadow-2xl  px-4 py-2 rounded-xl transition-colors 
        ${
          filter === cat
            ? "font-bold font-primary tracking-wider bg-[#063231] text-[#cbff54]"
            : "hover:bg-[#0f4544] font-primary bg-gray-200 hover:text-[#cbff54]"
        }`}
              >
                {cat === "Completed"
                  ? "Completed Projects"
                  : cat === "Upcoming"
                  ? "Upcoming Projects"
                  : "All"}
              </p>
            ))}
          </div>

          {/* Projects */}
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-5 my-12">
  {filteredProjects.map((project, index) => (
    <div
      key={index}
      className="flex flex-col bg-white shadow-md rounded-3xl border border-gray-200 overflow-hidden transition-transform hover:scale-[1.01] duration-300"
    >
      {/* ✅ Upcoming Project */}
{project.status === "Upcoming" ? (
  <div className="">
<div className="relative w-full h-[800px] rounded-3xl overflow-hidden">
  
  {/* Image */}
  <Image
    src={project.img}
    alt={project.title}
    width={1920}
    height={1080}
    className="object-cover w-full h-full"
  />

  {/* ✅ DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/50" />
  {/* you can change opacity: bg-black/30, bg-black/60 */}

  {/* TEXT CONTENT */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
    
    <p className="text-white font-secondary text-4xl  font-semibold">
      Coming Soon...
    </p>

    {/* Highlights */}
    {project.highlights?.length > 0 && (
      <div className="mt-4">
        <ul className="space-y-2">
          {project.highlights.map((item, i) => (
            <li key={i} className="flex items-center justify-center gap-2">
              <span className="text-white font-secondary text-2xl  font-semibold">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    )}

  </div>
</div>

   
    </div>
      ) : (
        <>
          {/* ✅ Project Image */}
          <div className="w-full h-[38vh] sm:h-[42vh]">
            <Image
              src={project.img}
              alt={project.title}
              width={400}
              height={400}
              className="object-cover w-full h-full rounded-t-3xl"
            />
          </div>

          {/* ✅ Project Content */}
          <div className="flex flex-col gap-4 p-6">
            <p className="font-bold text-2xl md:text-3xl font-primary text-gray-900">
              {project.title}
            </p>

            <p className="font-secondary text-gray-700 leading-relaxed">
              {project.desc}
            </p>

            {project.highlights.length > 0 && (
              <div className="mt-2">
                <p className="font-semibold text-xl font-primary mb-2 text-gray-900">
                  Highlights
                </p>
                <ul className="space-y-2">
                  {project.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                     <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-circle-check bg-black rounded-full"
                              >
                                <path d="m9 12 2 2 4-6" />
                              </svg>
                      <span className="font-secondary text-gray-700">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="border-t border-gray-200 mt-2" />

          {/* ✅ Footer */}
          <div className="p-4 text-gray-700 font-medium text-lg">
            Type:{" "}
            <span className="font-semibold text-gray-900">{project.type}</span>
          </div>
        </>
      )}
    </div>
  ))}
</div>


        </div>
      </div>

      {/* Mobile */}

      <div className="sm:hidden block  bg-white mb-[5%] text-lg text-black">
        <div className="bg-[#218686] bg-blend-multiply flex items-center justify-center  rounded-bl-[80%_100px] rounded-br-[80%_100px] w-full h-[40vh] bg-cover bg-center bg-[url('https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg')]">
          <div className="flex text-white items-center text-center gap-4 py-[10%] px-[8%] flex-col">
            <p className="bg-[#407d7d]/60  px-3  font-semibold py-1 rounded-full cursor-pointer font-primary">
              PROJECTS
            </p>
            <p className="font-bold text-2xl font-primary">
              From Design to Reality
            </p>
            <p className="font-sencondary text-sm">
              At Sri Velan Constructions, we turn every idea into a strong
              foundation of trust, quality, and craftsmanship. Explore our proud
              works — where each project speaks of dedication, precision, and
              the promise to last for generations.
            </p>
          </div>
        </div>

        {/* Section */}
        <div>
          <div className="flex flex-col text-center justify-center items-center my-20">
            <p className="font-semibold font-primary">BUILT TO LAST</p>
            <p className="font-bold text-2xl  font-primary">
              Where Every Project Becomes a Landmark
            </p>
          </div>
          {/* Filter Buttons */}
          <div className="flex flex-col gap-10  justify-center pb-10">
            {["All", "Completed", "Upcoming"].map((cat) => (
              <p
                key={cat}
                onClick={() => setFilter(cat)}
                className={`cursor-pointer font-bold mx-[5%] items-center text-center  tracking-wider shadow-2xl py-4 rounded-xl transition-colors 
        ${
          filter === cat
            ? "font-bold font-primary tracking-wider bg-[#063231] text-[#cbff54]"
            : "hover:bg-[#0f4544] font-primary bg-gray-200 hover:text-[#cbff54]"
        }`}
              >
                {cat === "Completed"
                  ? "Completed Projects"
                  : cat === "Upcoming"
                  ? "Upcoming Projects"
                  : "All"}
              </p>
            ))}
          </div>

          {/* Projects */}
          <div className="flex flex-col auto-rows-auto px-[5%] gap-5">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="flex flex-col gap-3 rounded-4xl border-dotted border w-full"
              >
                {/* For upcoming project: full image only */}
                {project.status === "Upcoming" ? (
                  <div className="w-full h-[50vh] relative">
                    <Image
                      src={project.img}
                      alt="Upcoming Project"
                      width={1000}
                      height={1080}
                      className="object-cover  h-full w-full rounded-4xl"
                    />

                    <div className="absolute inset-0 bg-black/50 rounded-4xl"/>
                    <div className="absolute top-[45%] left-[20%] font-semibold font-sencondary opacity-90 text-white text-3xl">
                      {" "}
                      Coming Soon.....
 {/* ✅ Highlights BELOW Coming Soon */}
    {project.highlights?.length > 0 && (
      <div className="">
        

        <ul className="space-y-2">
          {project.highlights.map((item, i) => (
            <li key={i} className="flex items-center justify-center gap-2">
             

              <span className="text-white  font-secondary text-2xl opacity-90  font-semibold">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
     
    )}
                      
                    </div>
                  </div>
                ) : (
                  <>
                    {/* Completed / other projects */}
                    <div className=" w-full">
                      <Image
                        src={project.img}
                        alt={project.title}
                        width={400}
                        height={400}
                        className="bg-cover h-[35vh] w-full rounded-b-[20%] rounded-t-4xl"
                      />
                    </div>
                    <div className="flex flex-col gap-5 px-5">
                      <p className="font-bold text-3xl font-primary">
                        {project.title}
                      </p>
                      <p className="font-sencondary">{project.desc}</p>
                      {project.highlights.length > 0 && (
                        <>
                          <p className="font-semibold text-xl font-primary">
                            Highlights
                          </p>
                          {project.highlights.map((item, i) => (
                            <div key={i} className="flex gap-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-circle-check bg-black rounded-full"
                              >
                                <path d="m9 12 2 2 4-6" />
                              </svg>
                              <p className="font-sencondary">{item}</p>
                            </div>
                          ))}
                        </>
                      )}
                    </div>
                    <hr />
                    <p className="px-5 pb-3 text-lg text-black">
                      Type: {project.type}
                    </p>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tab */}

      <div className="hidden lg:hidden md:block  bg-white mb-[5%] text-lg text-black">
        <div className="bg-[#218686] bg-blend-multiply flex items-center justify-center  rounded-bl-[80%_100px] rounded-br-[80%_100px] w-full h-[40vh] bg-cover bg-center bg-[url('https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg')]">
          <div className="flex text-white items-center text-center gap-4 py-[10%] px-[8%] flex-col">
            <p className="bg-[#407d7d]/60  px-3  font-semibold py-1 rounded-full cursor-pointer font-primary">
              PROJECTS PROJECTS PROJECTS
            </p>
            <p className="font-bold text-2xl font-primary">
              From Design to Reality
            </p>
            <p className="font-sencondary text-sm">
              At Sri Velan Constructions, we turn every idea into a strong
              foundation of trust, quality, and craftsmanship. Explore our proud
              works — where each project speaks of dedication, precision, and
              the promise to last for generations.
            </p>
          </div>
        </div>

        {/* Section */}
        <div>
          <div className="flex flex-col text-center justify-center items-center my-20">
            <p className="font-semibold font-primary">BUILT TO LAST</p>
            <p className="font-bold text-2xl  font-primary">
              Where Every Project Becomes a Landmark
            </p>
          </div>
          {/* Filter Buttons */}
          <div className="flex flex-col gap-10  justify-center pb-10">
            {["All", "Completed", "Upcoming"].map((cat) => (
              <p
                key={cat}
                onClick={() => setFilter(cat)}
                className={`cursor-pointer font-bold mx-[5%] items-center text-center py-4  tracking-wider shadow-2xl rounded-xl transition-colors 
        ${
          filter === cat
            ? "font-bold font-primary tracking-wider bg-[#063231] text-[#cbff54]"
            : "hover:bg-[#0f4544] font-primary bg-gray-200 hover:text-[#cbff54]"
        }`}
              >
                {cat === "Completed"
                  ? "Completed Projects"
                  : cat === "Upcoming"
                  ? "Upcoming Projects"
                  : "All"}
              </p>
            ))}
          </div>

          {/* Projects */}
          <div className="flex flex-col auto-rows-auto px-[5%] gap-5">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="flex flex-col gap-3 rounded-4xl border-dotted border w-full"
              >
                {/* For upcoming project: full image only */}
                {project.status === "Upcoming" ? (
                  <div className="w-full h-[50vh] relative">
                    <Image
                      src={project.img}
                      alt="Upcoming Project"
                      width={1000}
                      height={1080}
                      className="object-cover  h-full w-full rounded-4xl"
                    />
                    <div className="absolute inset-0 bg-black/50 rounded-4xl" />
                    <div className="absolute top-[45%] left-[25%] font-semibold opacity-90 font-sencondary text-white text-4xl">
                      {" "}
                      Coming Soon.....

                       {/* ✅ Highlights BELOW Coming Soon */}
    {project.highlights?.length > 0 && (
      <div className="">
        

        <ul className="space-y-2">
          {project.highlights.map((item, i) => (
            <li key={i} className="flex items-center gap-2">
             

              <span className="text-white font-secondary opacity-90 text-3xl font-semibold">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
     
    )}
                    </div>
                  </div>
                ) : (
                  <>
                    {/* Completed / other projects */}
                    <div className=" w-full">
                      <Image
                        src={project.img}
                        alt={project.title}
                        width={400}
                        height={400}
                        className="bg-cover h-[45vh] w-full rounded-b-[20%] rounded-t-4xl"
                      />
                    </div>
                    <div className="flex flex-col gap-5 px-5">
                      <p className="font-bold text-3xl font-primary">
                        {project.title}
                      </p>
                      <p className="font-sencondary">{project.desc}</p>
                      {project.highlights.length > 0 && (
                        <>
                          <p className="font-semibold text-xl font-primary">
                            Highlights
                          </p>
                          {project.highlights.map((item, i) => (
                            <div key={i} className="flex gap-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-circle-check bg-black rounded-full"
                              >
                                <path d="m9 12 2 2 4-6" />
                              </svg>
                              <p className="font-sencondary">{item}</p>
                            </div>
                          ))}
                        </>
                      )}
                    </div>
                    <hr />
                    <p className="px-5 pb-3 text-lg text-black">
                      Type: {project.type}
                    </p>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
