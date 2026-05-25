"use client";

import { Users, Ruler, Lightbulb, MessageCircle } from "lucide-react";

export default function Homedetailpage() {
  return (
    <section className="bg-[#f8faf9] py-20  px-[8%]">
        {/* Desktop View */}
<div className="hidden lg:block ">
  <div className=" mx-[3%] flex items-start gap-10">
    
    {/* Left Content */}
    <div className="w-1/2 ">
      <p className="text-xs font-semibold text-green-700 uppercase mb-2 font-primary">
        Why Choose Us
      </p>
      <h2 className="text-5xl font-bold text-[#0d2b2b] mb-4 font-primary leading-tight">
        What Sets Us<br />Apart
      </h2>
      <p className="text-gray-600 font-secondary">
        We're more than just builders — we’re your trusted local partner.
        From smart design to solid delivery, every detail is handled with
        care, precision, and pride.
      </p>
    </div>

    {/* Right Side - Feature Grid */}
    <div className="w-1/2 grid grid-cols-2 gap-6 mx-auto">
  {/* Card 1 */}
  <div className="bg-white rounded-2xl shadow-sm p-6 transform transition-all duration-500 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-lg">
    <div>
      <Ruler
        size={50}
        color="#cbff54"
        className="bg-[#0d2b2b] p-3 rounded-full transition-transform duration-500 ease-in-out hover:scale-110"
      />
    </div>
    <div className="my-3">
      <h3 className="text-2xl font-semibold text-[#0d2b2b] font-primary">
        Local Knowledge
      </h3>
      <p className="text-gray-600 text-sm mt-1 font-secondary">
        We understand local soil, weather, and construction needs — making every structure stronger and safer.
      </p>
    </div>
  </div>

  {/* Card 2 */}
  <div className="bg-white rounded-2xl shadow-sm p-6 transform transition-all duration-500 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-lg">
    <div>
      <Users
        size={50}
        color="#cbff54"
        className="bg-[#0d2b2b] p-3 rounded-full transition-transform duration-500 ease-in-out hover:scale-110"
      />
    </div>
    <div className="my-3">
      <h3 className="text-2xl font-semibold text-[#0d2b2b] font-primary">
        Expert Team
      </h3>
      <p className="text-gray-600 text-sm mt-1 font-secondary">
        From engineers to masons, our team works with full responsibility and care.
      </p>
    </div>
  </div>

  {/* Card 3 */}
  <div className="bg-white rounded-2xl shadow-sm p-6 transform transition-all duration-500 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-lg">
    <div>
      <Lightbulb
        size={50}
        color="#cbff54"
        className="bg-[#0d2b2b] p-3 rounded-full transition-transform duration-500 ease-in-out hover:scale-110"
      />
    </div>
    <div className="my-3">
      <h3 className="text-2xl font-semibold text-[#0d2b2b] font-primary">
        Smart Designs
      </h3>
      <p className="text-gray-600 text-sm mt-1 font-secondary">
        We guide you with practical and cost-effective plans that suit your lifestyle.
      </p>
    </div>
  </div>

  {/* Card 4 */}
  <div className="bg-white rounded-2xl shadow-sm p-6 transform transition-all duration-500 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-lg">
    <div>
      <MessageCircle
        size={50}
        color="#cbff54"
        className="bg-[#0d2b2b] p-3 rounded-full transition-transform duration-500 ease-in-out hover:scale-110"
      />
    </div>
    <div className="my-3">
      <h3 className="text-2xl font-semibold text-[#0d2b2b] font-primary">
        Client Focus
      </h3>
      <p className="text-gray-600 text-sm mt-1 font-secondary">
        Your satisfaction matters the most. We communicate clearly and complete the work exactly as promised.
      </p>
    </div>
  </div>
</div>

  </div>
</div>



 {/* tablet view */}

      <div className="hidden sm:block lg:hidden">
        {/* Heading */}
        <div className="mb-12 ">
          <p className="text-xs font-semibold  text-green-700 uppercase mb-2 font-primary">
            Why Choose Us
          </p>
          <h2 className="text-3xl  font-bold text-[#0d2b2b] mb-3 font-primary">
            What Sets Us Apart
          </h2>
          <p className="text-gray-600 text-[100%] font-secondary">
            We're more than just builders — we’re your trusted local partner.
            From smart design to solid delivery, every detail is handled with
            care, precision, and pride.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="  grid grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-sm p-6 ">
            <div className=" ">
              <div >
                <Ruler size={40} color=" #cbff54"  className="bg-[#0d2b2b] p-3 rounded-full"/>
              </div>
              <div className="my-3">
                <h3 className="text-2xl font-semibold text-[#0d2b2b] font-primary">
                  Local Knowledge
                </h3>
                <p className="text-gray-600 text-[100%] mt-1 font-secondary">
                   We understand local soil, weather, and construction needs — making every structure stronger and safer
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-sm p-6 ">
            <div className="">
              <div >
                <Users size={40} color="#cbff54" className="bg-[#0d2b2b] p-3 rounded-full" />
              </div>
              <div className="my-3">
                <h3 className="text-2xl font-semibold text-[#0d2b2b] font-primary">
                  Expert Team
                </h3>
                <p className="text-gray-600 text-[100%] mt-1 font-secondary">
                  From engineers to masons, our team works with full responsibility and care
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-sm p-6 ">
            <div className="">
              <div >
                <Lightbulb size={40} color="#cbff54" className="bg-[#0d2b2b] p-3 rounded-full" />
              </div>
             <div className="my-3">
                <h3 className="text-2xl font-semibold text-[#0d2b2b] font-primary">
                  Smart Designs
                </h3>
                <p className="text-gray-600 text-[100%] mt-1 font-secondary">
                   We guide you with practical and cost-effective plans that suit your lifestyle.
                </p>
              </div>
            </div>
            </div>


            {/* Card 4 */}
          <div className="bg-white rounded-2xl shadow-sm p-6 ">
            <div className="">
              <div >
                <MessageCircle size={40} color="#cbff54" className="bg-[#0d2b2b] p-3 rounded-full" />
              </div>
              <div className="my-3">
                <h3 className="text-2xl font-semibold text-[#0d2b2b] font-primary">
                  Client Focus
                </h3>
                <p className="text-gray-600 text-[100%] mt-1 font-secondary">
                  Your satisfaction matters the most. We communicate clearly and complete the work exactly as promised
                </p>
              </div>
            </div>
          </div>
          </div>
      </div>


      {/* mobile view */}

      <div className="block sm:hidden ">
        {/* Heading */}
        <div className="mb-12 ">
          <p className="text-xs font-semibold  text-green-700 uppercase mb-2 font-primary">
            Why Choose Us
          </p>
          <h2 className="text-3xl  font-bold text-[#0d2b2b] mb-3 font-primary">
            What Sets Us Apart
          </h2>
          <p className="text-gray-600 text-[100%] font-secondary">
            We're more than just builders — we’re your trusted local partner.
            From smart design to solid delivery, every detail is handled with
            care, precision, and pride.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="  grid grid-cols-1 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-sm p-6 ">
            <div className=" ">
              <div >
                <Ruler size={40} color=" #cbff54"  className="bg-[#0d2b2b] p-3 rounded-full"/>
              </div>
              <div className="my-3">
                <h3 className="text-2xl font-semibold text-[#0d2b2b] font-primary">
                  Local Knowledge
                </h3>
                <p className="text-gray-600 text-[100%]  mt-1 font-secondary">
                   We understand local soil, weather, and construction needs — making every structure stronger and safer
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-sm p-6 ">
            <div className="">
              <div >
                <Users size={40} color="#cbff54" className="bg-[#0d2b2b] p-3 rounded-full" />
              </div>
              <div className="my-3">
                <h3 className="text-2xl font-semibold text-[#0d2b2b] font-primary">
                  Expert Team
                </h3>
                <p className="text-gray-600 text-[100%]  mt-1 font-secondary">
                  From engineers to masons, our team works with full responsibility and care
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-sm p-6 ">
            <div className="">
              <div >
                <Lightbulb size={40} color="#cbff54" className="bg-[#0d2b2b] p-3 rounded-full" />
              </div>
             <div className="my-3">
                <h3 className="text-2xl font-semibold text-[#0d2b2b] font-primary">
                  Smart Designs
                </h3>
                <p className="text-gray-600 text-[100%] mt-1 font-secondary">
                   We guide you with practical and cost-effective plans that suit your lifestyle.
                </p>
              </div>
            </div>
            </div>


            {/* Card 4 */}
          <div className="bg-white rounded-2xl shadow-sm p-6 ">
            <div className="">
              <div >
                <MessageCircle size={40} color="#cbff54" className="bg-[#0d2b2b] p-3 rounded-full" />
              </div>
              <div className="my-3">
                <h3 className="text-2xl font-semibold text-[#0d2b2b] font-primary">
                  Client Focus
                </h3>
                <p className="text-gray-600 text-[100%]  mt-1 font-secondary">
                  Your satisfaction matters the most. We communicate clearly and complete the work exactly as promised
                </p>
              </div>
            </div>
          </div>
          </div>

          
       
      </div>
    </section>
  );
}