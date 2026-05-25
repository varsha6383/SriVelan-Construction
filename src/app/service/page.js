"use client"
import Image from "next/image"
import Link from "next/link"
export default function Service() {
  return (
    <main >
      {/*Lap */}
<div className="hidden lg:block bg-white text-black">
  {/* Hero Section */}
  <div className="bg-[#218686] flex items-center justify-center text-center bg-blend-multiply rounded-bl-[80%_100px] rounded-br-[80%_100px] w-full lg:h-[65vh] xl:h-[70vh] bg-cover bg-center bg-[url('https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg')]">
    <div className="flex flex-col items-center text-white text-center gap-4 py-[8%] px-[10%] max-w-4xl">
      <p className="bg-[#407d7d]/60 px-4 py-1 rounded-full font-semibold font-primary">SERVICES</p>
      <h2 className="font-bold text-4xl xl:text-5xl font-primary">Our Construction Solutions</h2>
      <p className="font-secondary text-base xl:text-lg">
        We offer complete construction services to bring your dream home to life — with care, skill, and quality materials.
      </p>
    </div>
  </div>

  {/* Section */}
  <div className="flex flex-col items-center gap-24 my-24">
    {/* Card 1 */}
    <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl w-[90%] border border-gray-300 rounded-3xl overflow-hidden shadow-md bg-white">
      <div className="w-full lg:w-1/2 h-[350px] lg:h-[400px]">
        <Image
          src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg"
          alt="Residential Construction"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col justify-center gap-3 p-8 lg:p-10 w-full lg:w-1/2">
        <h3 className="font-bold text-2xl xl:text-3xl font-primary">Residential Construction</h3>
        <p className="font-secondary text-gray-700">
          We specialize in custom homes designed to fit your space, budget, and lifestyle. We handle everything with care.
        </p>
        <p className="font-bold text-xl pt-3 font-primary">Key Benefits</p>

        {[
          "Detailed planning and site supervision",
          "Strong structure with quality materials",
          "Neat finishing and reliable workers",
          "Timely project completion",
        ].map((benefit, i) => (
          <div key={i} className="flex items-center gap-2 font-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="bg-black rounded-full p-[2px]">
              <path d="m9 12 2 2 4-6" />
            </svg>
            <p>{benefit}</p>
          </div>
        ))}

        <button className="px-6 py-2 mt-4 font-c2a w-fit rounded-full font-semibold tracking-wide bg-[#cbff54] hover:bg-[#c9f06e] cursor-pointer">
          <Link href="/contact">ENQUIRE NOW</Link>
        </button>
      </div>
    </div>

    {/* Card 2 (Alternate layout) */}
    <div className="flex flex-col lg:flex-row-reverse items-center justify-between max-w-6xl w-[90%] border border-gray-300 rounded-3xl overflow-hidden shadow-md bg-white">
      <div className="w-full lg:w-1/2 h-[350px] lg:h-[400px]">
        <Image
          src="https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg"
          alt="Commercial Buildings"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col justify-center gap-3 p-8 lg:p-10 w-full lg:w-1/2">
        <h3 className="font-bold text-2xl xl:text-3xl font-primary">Commercial Buildings</h3>
        <p className="font-secondary text-gray-700">
          We take up small commercial and rental building projects that require strong foundations and functional designs.
        </p>
        <p className="font-bold text-xl pt-3 font-primary">Key Benefits</p>

        {[
          "Safe and modern structures",
          "Experienced team coordination",
          "Smooth work progress and supervision",
          "Built to match your business needs",
        ].map((benefit, i) => (
          <div key={i} className="flex items-center gap-2 font-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="bg-black rounded-full p-[2px]">
              <path d="m9 12 2 2 4-6" />
            </svg>
            <p>{benefit}</p>
          </div>
        ))}

        <button className="px-6 py-2 mt-4 font-c2a w-fit rounded-full font-semibold tracking-wide bg-[#cbff54] hover:bg-[#cef27b] cursor-pointer">
          <Link href="/contact">ENQUIRE NOW</Link>
        </button>
      </div>
    </div>

    {/* Card 3 */}
    <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl w-[90%] border border-gray-300 rounded-3xl overflow-hidden shadow-md bg-white">
      <div className="w-full lg:w-1/2 h-[350px] lg:h-[400px]">
        <Image
          src="https://images.pexels.com/photos/323781/pexels-photo-323781.jpeg"
          alt="Renovation & Remodeling"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col justify-center gap-3 p-8 lg:p-10 w-full lg:w-1/2">
        <h3 className="font-bold text-2xl xl:text-3xl font-primary">Renovation & Remodeling</h3>
        <p className="font-secondary text-gray-700">
          We give new life to old homes through careful renovation and smart upgrades — without disturbing your daily routine.
        </p>
        <p className="font-bold text-xl pt-3 font-primary">Key Benefits</p>

        {[
          "Kitchen and bathroom makeovers",
          "Room extensions and layout changes",
          "Structural improvements",
          "Clean and budget-friendly finishing",
        ].map((benefit, i) => (
          <div key={i} className="flex items-center gap-2 font-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="bg-black rounded-full p-[2px]">
              <path d="m9 12 2 2 4-6" />
            </svg>
            <p>{benefit}</p>
          </div>
        ))}

        <button className="px-6 py-2 mt-4 font-c2a w-fit rounded-full font-semibold tracking-wide bg-[#cbff54] hover:bg-[#cbf36f] cursor-pointer">
          <Link href="/contact">ENQUIRE NOW</Link>
        </button>
      </div>
    </div>
  </div>
</div>



      {/* Section */}
      {/* <div className=" h-full w-full bg-blue-50 py-30">
        <div className="flex flex-col text-center  items-center gap-4 px-[25%]">
          <p className="font-semibold font-primary">3-STEP PROCESS</p>
          <p className="font-bold text-6xl font-primary">Our Process, Made Simple</p>
          <p className=" text-gray-700 font-sencondary">We believe that great homes are built through open communication and proper planning.
Here&apos;s how we make the process easy for you:</p>
        </div>

        <div className="grid grid-cols-3 gap-10 items-center h-full w-full justify-center px-[20%] pt-15">
          <div className="flex flex-col gap-3 bg-white shadow-2xl rounded-2xl items-center text-center p-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="#cbff54" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-notebook-text-icon lucide-notebook-text bg-gray-900 rounded-full p-2"><path d="M2 6h4" /><path d="M2 10h4" /><path d="M2 14h4" /><path d="M2 18h4" /><rect width="16" height="20" x="4" y="2" rx="2" /><path d="M9.5 8h5" /><path d="M9.5 12H16" /><path d="M9.5 16H14" /></svg>
            <p className="font-bold text-2xl font-primary">1. Plan & Discover</p>
            <p className="font-sencondary">We visit your site, understand your needs, and plan the right design and cost.</p>
          </div>

          <div className="flex flex-col gap-3 bg-white shadow-2xl rounded-2xl items-center text-center p-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="#cbff54" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-school-icon lucide-school rounded-full p-2 bg-gray-900"><path d="M14 21v-3a2 2 0 0 0-4 0v3" /><path d="M18 5v16" /><path d="m4 6 7.106-3.79a2 2 0 0 1 1.788 0L20 6" /><path d="m6 11-3.52 2.147a1 1 0 0 0-.48.854V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a1 1 0 0 0-.48-.853L18 11" /><path d="M6 5v16" /><circle cx="12" cy="9" r="2" /></svg>
            <p className="font-bold text-2xl font-primary">2. Design & Quote</p>
            <p className="font-sencondary">We share a clear and simple estimate, along with material details and timeline.</p>
          </div>

          <div className="flex flex-col gap-3 bg-white shadow-2xl rounded-2xl items-center text-center p-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="#cbff54" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-house-icon lucide-house rounded-full p-2 bg-gray-900"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" /><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>
            <p className="font-bold text-2xl font-primary">3. Build & Deliver</p>
            <p className="font-sencondary">Our team gets to work, keeps you updated, and completes the project as promised.</p>
          </div>
        </div>
        <div className=" flex items-center justify-around pt-15">
          <p className=" h-full  tracking-widest font-semibold bg-[#cbff54] cursor-pointer hover:bg-[#cefa67] px-3 py-2 rounded-full font-c2a"><Link href="/contact">Schedule a Free Consultation</Link></p>
        </div>
      </div> */}


      {/* Mobile Responsive  */}
      <div className="h-full w-full sm:hidden block bg-white  text-[100%] text-black">

      <div className="bg-[#218686] bg-blend-multiply rounded-bl-[80%_100px] rounded-br-[80%_100px] w-full h-[50vh] bg-cover bg-center bg-[url('https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg')]">
        <div className="flex text-white items-center text-center gap-4 py-[30%] px-[5%] flex-col">
          <p className="bg-[#407d7d]/60  px-3  font-semibold py-1 rounded-full cursor-pointer font-primary">SERVICES</p>
          <p className="font-bold text-2xl font-primary">Our Construction Solutions</p>
          <p className="font-sencondary">We offer complete construction services to bring your dream home to life — with care, skill, and quality materials.</p>
        </div>
      </div>
      {/* Section */}

      <div className="flex flex-col gap-15 items-center p-5 my-10">

        <div className=" h-full justify-between w-full border  border-gray-400 rounded-3xl items-center">
          <div ><Image src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg" alt="Image is missing " width={1000} height={1000} className="h-[40vh]  rounded-tr-3xl rounded-tl-3xl "></Image> </div>
          <div className="flex flex-col gap-3 text-black p-5">
            <p className="font-bold text-2xl font-primary">Residential Construction</p>
            <p className="font-sencondary">We specialize in custom homes designed to fit your space, budget, and lifestyle. From foundation to finishing, we handle everything with care.</p>
            <p className="font-bold text-2xl pt-3 font-primary">Key Benefits</p>
            <div className="flex gap-2 font-sencondary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "><path d="m9 12 2 2 4-6" /></svg>
              <p>Detailed planning and site supervision</p>
            </div>

            <div className="flex gap-2 font-sencondary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "><path d="m9 12 2 2 4-6" /></svg>
              <p>Strong structure with quality materials</p>
            </div>

            <div className="flex gap-2 font-sencondary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "><path d="m9 12 2 2 4-6" /></svg>
              <p>Neat finishing and reliable workers</p>
            </div>

            <div className="flex gap-2 font-sencondary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "><path d="m9 12 2 2 4-6" /></svg>
              <p>Timely project completion</p>
            </div>

            <button className="px-[5%] py-2 mt-4 rounded-full w-fit font-semibold tracking-wide bg-[#cbff54] hover:bg-[#cffb69] cursor-pointer font-c2a"><Link href='/contact'>ENQUIRE NOW</Link></button>
          </div>

        </div>

        <div className=" h-full justify-between w-full border border-gray-400  rounded-3xl items-center">
          <div ><Image src="https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg" alt="Image is missing " width={1000} height={1000} className="h-[40vh]  rounded-tr-3xl rounded-tl-3xl "></Image> </div>
          <div className="flex flex-col gap-3 p-5">
            <p className="font-bold text-2xl font-primary">Commercial Buildings</p>
            <p className="font-sencondary">We also take up small commercial and rental building projects that require strong foundations and functional designs.</p>
            <p className="font-bold text-2xl pt-3 font-primary">Key Benefits</p>
            <div className="flex gap-2  text-gray-700 font-sencondary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "><path d="m9 12 2 2 4-6" /></svg>
              <p>Safe and modern structures</p>
            </div>

            <div className="flex gap-2 font-sencondary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "><path d="m9 12 2 2 4-6" /></svg>
              <p>Experienced team coordination</p>
            </div>

            <div className="flex gap-2 font-sencondary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "><path d="m9 12 2 2 4-6" /></svg>
              <p>Smooth work progress and supervision</p>
            </div>

            <div className="flex gap-2 font-sencondary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "><path d="m9 12 2 2 4-6" /></svg>
              <p>Built to match your business needs</p>
            </div>

            <button className="px-[5%] py-2 mt-4 rounded-full w-fit font-semibold tracking-wide bg-[#cbff54] hover:bg-[#d0fb6b] cursor-pointer font-c2a"><Link href='/contact'>ENQUIRE NOW</Link></button>
          </div>

        </div>

        <div className=" h-full  justify-between w-full border border-gray-400  rounded-3xl items-center">
          <div ><Image src="https://images.pexels.com/photos/323781/pexels-photo-323781.jpeg" alt="Image is missing " width={1000} height={1000} className="h-[40vh]  rounded-tr-3xl rounded-tl-3xl "></Image> </div>
          <div className="flex flex-col gap-3 p-5">
            <p className="font-bold text-2xl font-primary">Renovation & Remodeling</p>
            <p className="font-sencondary">We give new life to old homes through careful renovation and smart upgrades — without disturbing your daily routine.</p>
            <p className="font-bold text-2xl pt-3 font-primary">Key Benefits</p>
            <div className="flex gap-2 font-sencondary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "><path d="m9 12 2 2 4-6" /></svg>
              <p>Kitchen and bathroom makeovers</p>
            </div>

            <div className="flex gap-2 text-gray-700 font-sencondary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "><path d="m9 12 2 2 4-6" /></svg>
              <p>Room extensions and layout changes</p>
            </div>

            <div className="flex gap-2 font-sencondary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "><path d="m9 12 2 2 4-6" /></svg>
              <p>Structural improvements</p>
            </div>

            <div className="flex gap-2 font-sencondary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "><path d="m9 12 2 2 4-6" /></svg>
              <p>Clean and budget-friendly finishing</p>
            </div>

            <button className="px-[5%] py-2 mt-4 rounded-full w-fit font-semibold tracking-wide bg-[#cbff54] hover:bg-[#d0fc6a] cursor-pointer font-c2a"><Link href='/contact'>ENQUIRE NOW</Link></button>
          </div>

        </div>
      </div>

      {/* Section */}
      <div className=" h-full w-full bg-blue-50 py-10">
        <div className="flex flex-col text-center  items-center gap-4 px-5">
          <p className="font-semibold font-primary">3-STEP PROCESS</p>
          <p className="font-bold text-3xl font-primary">Our Process, Made Simple</p>
          <p className=" text-gray-700 font-sencondary">We believe that great homes are built through open communication and proper planning.
Here’s how we make the process easy for you:</p>
        </div>

        <div className="grid grid-row-3 gap-5 items-center h-full w-full p-5 pt-10">
          <div className="flex flex-col gap-3 bg-white shadow-2xl rounded-2xl items-center text-center p-5">
            <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="#cbff54" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-notebook-text-icon lucide-notebook-text bg-gray-900 rounded-full p-2"><path d="M2 6h4" /><path d="M2 10h4" /><path d="M2 14h4" /><path d="M2 18h4" /><rect width="16" height="20" x="4" y="2" rx="2" /><path d="M9.5 8h5" /><path d="M9.5 12H16" /><path d="M9.5 16H14" /></svg>
            <p className="font-bold text-2xl font-primary">1. Plan & Discover</p>
            <p className="font-sencondary">We visit your site, understand your needs, and plan the right design and cost.</p>
          </div>

          <div className="flex flex-col gap-3 bg-white shadow-2xl rounded-2xl items-center text-center p-5">
            <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="#cbff54" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-school-icon lucide-school rounded-full p-2 bg-gray-900"><path d="M14 21v-3a2 2 0 0 0-4 0v3" /><path d="M18 5v16" /><path d="m4 6 7.106-3.79a2 2 0 0 1 1.788 0L20 6" /><path d="m6 11-3.52 2.147a1 1 0 0 0-.48.854V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a1 1 0 0 0-.48-.853L18 11" /><path d="M6 5v16" /><circle cx="12" cy="9" r="2" /></svg>
            <p className="font-bold text-2xl font-primary">2. Design & Quote</p>
            <p className="font-sencondary">We share a clear and simple estimate, along with material details and timeline.</p>
          </div>

          <div className="flex flex-col gap-3 bg-white shadow-2xl rounded-2xl items-center text-center p-5">
            <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="#cbff54" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-house-icon lucide-house rounded-full p-2 bg-gray-900"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" /><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>
            <p className="font-bold text-2xl font-primary
            ">3. Build & Deliver</p>
            <p className="font-sencondary">Our team gets to work, keeps you updated, and completes the project as promised.</p>
          </div>
        </div>  
        <div className=" flex items-center justify-around p-10 text-center">
          <p className=" h-full  tracking-widest font-semibold bg-[#cbff54] cursor-pointer hover:bg-[#ccfa61]  px-3 py-2 rounded-full font-c2a"><Link href="/contact">Schedule a Free Consultation</Link></p>
        </div>
      </div>
      
      </div>



      {/* Tab */}

      
      {/* tab Responsive  */}
      <div className="h-full w-full hidden sm:block lg:hidden   bg-white  text-[80%] text-black">

      <div className="bg-[#218686] bg-blend-multiply rounded-bl-[80%_100px] rounded-br-[80%_100px] w-full h-[60vh] bg-cover bg-center bg-[url('https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg')]">
        <div className="flex text-white items-center text-center gap-4 py-[20%] px-[5%] flex-col">
          <p className="bg-[#407d7d]/60  px-3  font-semibold py-1 rounded-full cursor-pointer font-primary">SERVICES</p>
          <p className="font-bold text-2xl font-primary">Our Construction Solutions</p>
          <p className="font-sencondary">We offer complete construction services to bring your dream home to life — with care, skill, and quality materials.</p>
        </div>
      </div>
      {/* Section */}

      <div className="flex flex-col gap-15 items-center py-5 px-[8%]  my-10">

        <div className=" h-full justify-between w-full border  border-gray-400 rounded-3xl items-center">
          <div ><Image src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg" alt="Image is missing " width={1000} height={1000} className="h-[40vh]  rounded-tr-3xl rounded-tl-3xl "></Image> </div>
          <div className="flex flex-col gap-3 text-black p-5">
            <p className="font-bold text-2xl font-primary">Residential Construction</p>
            <p className="font-sencondary">We specialize in custom homes designed to fit your space, budget, and lifestyle. From foundation to finishing, we handle everything with care.</p>
            <p className="font-bold text-2xl pt-3 font-primary">Key Benefits</p>
            <div className="flex gap-2 font-sencondary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "><path d="m9 12 2 2 4-6" /></svg>
              <p>Detailed planning and site supervision</p>
            </div>

            <div className="flex gap-2 font-sencondary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "><path d="m9 12 2 2 4-6" /></svg>
              <p>Strong structure with quality materials</p>
            </div>

            <div className="flex gap-2 font-sencondary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "><path d="m9 12 2 2 4-6" /></svg>
              <p>Neat finishing and reliable workers</p>
            </div>

            <div className="flex gap-2 font-sencondary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "><path d="m9 12 2 2 4-6" /></svg>
              <p>Timely project completion</p>
            </div>

            <button className="px-[5%] py-2 mt-4 rounded-full w-fit font-semibold tracking-wide bg-[#cbff54] hover:bg-[#cffb69] cursor-pointer font-c2a"><Link href='/contact'>ENQUIRE NOW</Link></button>
          </div>

        </div>

        <div className="px-[8%]  h-full justify-between w-full border border-gray-400  rounded-3xl items-center">
          <div ><Image src="https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg" alt="Image is missing " width={1000} height={1000} className="h-[40vh]  rounded-tr-3xl rounded-tl-3xl "></Image> </div>
          <div className="flex flex-col gap-3 p-5">
            <p className="font-bold text-2xl font-primary">Commercial Buildings</p>
            <p className="font-sencondary">We also take up small commercial and rental building projects that require strong foundations and functional designs.</p>
            <p className="font-bold text-2xl pt-3 font-primary">Key Benefits</p>
            <div className="flex gap-2  text-gray-700 font-sencondary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "><path d="m9 12 2 2 4-6" /></svg>
              <p>Safe and modern structures</p>
            </div>

            <div className="flex gap-2 font-sencondary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "><path d="m9 12 2 2 4-6" /></svg>
              <p>Experienced team coordination</p>
            </div>

            <div className="flex gap-2 font-sencondary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "><path d="m9 12 2 2 4-6" /></svg>
              <p>Smooth work progress and supervision</p>
            </div>

            <div className="flex gap-2 font-sencondary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "><path d="m9 12 2 2 4-6" /></svg>
              <p>Built to match your business needs</p>
            </div>

            <button className="px-[5%] py-2 mt-4 rounded-full w-fit font-semibold tracking-wide bg-[#cbff54] hover:bg-[#d0fb6b] cursor-pointer font-c2a"><Link href='/contact'>ENQUIRE NOW</Link></button>
          </div>

        </div>

        <div className=" h-full  justify-between w-full border border-gray-400  rounded-3xl items-center">
          <div ><Image src="https://images.pexels.com/photos/323781/pexels-photo-323781.jpeg" alt="Image is missing " width={1000} height={1000} className="h-[40vh]  rounded-tr-3xl rounded-tl-3xl "></Image> </div>
          <div className="flex flex-col gap-3 p-5">
            <p className="font-bold text-2xl font-primary">Renovation & Remodeling</p>
            <p className="font-sencondary">We give new life to old homes through careful renovation and smart upgrades — without disturbing your daily routine.</p>
            <p className="font-bold text-2xl pt-3 font-primary">Key Benefits</p>
            <div className="flex gap-2 font-sencondary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "><path d="m9 12 2 2 4-6" /></svg>
              <p>Kitchen and bathroom makeovers</p>
            </div>

            <div className="flex gap-2 text-gray-700 font-sencondary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "><path d="m9 12 2 2 4-6" /></svg>
              <p>Room extensions and layout changes</p>
            </div>

            <div className="flex gap-2 font-sencondary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "><path d="m9 12 2 2 4-6" /></svg>
              <p>Structural improvements</p>
            </div>

            <div className="flex gap-2 font-sencondary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "><path d="m9 12 2 2 4-6" /></svg>
              <p>Clean and budget-friendly finishing</p>
            </div>

            <button className="px-[5%] py-2 mt-4 rounded-full w-fit font-semibold tracking-wide bg-[#cbff54] hover:bg-[#d0fc6a] cursor-pointer font-c2a"><Link href='/contact'>ENQUIRE NOW</Link></button>
          </div>

        </div>
      </div>

      {/* Section */}
      <div className=" h-full w-full bg-blue-50 px-[8%]  py-10">
        <div className="flex flex-col text-center  items-center gap-4 px-5">
          <p className="font-semibold font-primary">3-STEP PROCESS</p>
          <p className="font-bold text-3xl font-primary">Our Process, Made Simple</p>
          <p className=" text-gray-700 font-sencondary">We believe that great homes are built through open communication and proper planning.
Here’s how we make the process easy for you:</p>
        </div>

        <div className="grid grid-row-3 gap-5 items-center h-full w-full p-5 pt-10">
          <div className="flex flex-col gap-3 bg-white shadow-2xl rounded-2xl items-center text-center p-5">
            <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="#cbff54" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-notebook-text-icon lucide-notebook-text bg-gray-900 rounded-full p-2"><path d="M2 6h4" /><path d="M2 10h4" /><path d="M2 14h4" /><path d="M2 18h4" /><rect width="16" height="20" x="4" y="2" rx="2" /><path d="M9.5 8h5" /><path d="M9.5 12H16" /><path d="M9.5 16H14" /></svg>
            <p className="font-bold text-2xl font-primary">1. Plan & Discover</p>
            <p className="font-sencondary">We visit your site, understand your needs, and plan the right design and cost.</p>
          </div>

          <div className="flex flex-col gap-3 bg-white shadow-2xl rounded-2xl items-center text-center p-5">
            <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="#cbff54" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-school-icon lucide-school rounded-full p-2 bg-gray-900"><path d="M14 21v-3a2 2 0 0 0-4 0v3" /><path d="M18 5v16" /><path d="m4 6 7.106-3.79a2 2 0 0 1 1.788 0L20 6" /><path d="m6 11-3.52 2.147a1 1 0 0 0-.48.854V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a1 1 0 0 0-.48-.853L18 11" /><path d="M6 5v16" /><circle cx="12" cy="9" r="2" /></svg>
            <p className="font-bold text-2xl font-primary">2. Design & Quote</p>
            <p className="font-sencondary">We share a clear and simple estimate, along with material details and timeline.</p>
          </div>

          <div className="flex flex-col gap-3 bg-white shadow-2xl rounded-2xl items-center text-center p-5">
            <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="#cbff54" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-house-icon lucide-house rounded-full p-2 bg-gray-900"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" /><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>
            <p className="font-bold text-2xl font-primary
            ">3. Build & Deliver</p>
            <p className="font-sencondary">Our team gets to work, keeps you updated, and completes the project as promised.</p>
          </div>
        </div>  
        <div className=" flex items-center justify-around p-10 text-center">
          <p className=" h-full  tracking-widest font-semibold bg-[#cbff54] cursor-pointer hover:bg-[#ccfa61]  px-3 py-2 rounded-full font-c2a"><Link href="/contact">Schedule a Free Consultation</Link></p>
        </div>
      </div>
      
      </div>
    </main>
  )
}