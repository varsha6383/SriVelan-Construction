import React from "react";

export default function TermsConditions() {
  return (
    <main className="bg-white text-black">
      {/* Header */}
      <div className="h-[30vh] sm:h-[30vh] lg:h-[40vh] w-full flex flex-col justify-center items-center bg-[#063231] text-white gap-2">
        <p className="font-bold text-2xl sm:text-2xl lg:text-5xl font-primary">Terms & Conditions</p>

      </div>

<div className="w-full px-4 sm:px-8 md:px-16 lg:px-32 py-12 bg-gray-50">


       <div className="space-y-6 text-gray-800 text-sm sm:text-base md:text-lg">
        {/* 1. Introduction */}
        <div>
          <h2 className="font-semibold text-lg sm:text-xl md:text-2xl mb-2">
            1. Introduction
          </h2>
          <p>
            Welcome to <strong>SRI VELAN CONSTRUCTION</strong>. By using our
            services or website, you agree to comply with and be bound by the
            following terms and conditions.
          </p>
        </div>

        {/* 2. Scope of Work */}
        <div>
          <h2 className="font-semibold text-lg sm:text-xl md:text-2xl mb-2">
            2. Scope of Work
          </h2>
          <p>
            All construction work carried out by SRI VELAN CONSTRUCTION will
            adhere to the contract specifications, approved plans, and
            drawings. Work includes civil construction, flooring, roofing,
            plumbing, electrical, painting, and finishing as per agreed
            specifications.
          </p>
        </div>

        {/* 3. Payment Terms */}
        <div>
          <h2 className="font-semibold text-lg sm:text-xl md:text-2xl mb-2">
            3. Payment Terms
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Payment shall be made as agreed in the contract, typically per
              square foot or per item of work completed.
            </li>
            <li>
              Service tax, labor welfare contributions, or other applicable
              taxes will be borne by the client.
            </li>
            <li>
              Payment for extra items or alterations will be mutually agreed
              in writing.
            </li>
          </ul>
        </div>

        {/* 4. Completion and Timeline */}
        <div>
          <h2 className="font-semibold text-lg sm:text-xl md:text-2xl mb-2">
            4. Completion and Timeline
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Work will commence within seven days of confirmed work order and
              drawings.
            </li>
            <li>
              The agreed completion period is specified in the contract. Timely
              completion is essential.
            </li>
            <li>
              Completion is recognized upon issuance of the Owner’s completion
              certificate.
            </li>
          </ul>
        </div>

        {/* 5. Contractor Responsibilities */}
        <div>
          <h2 className="font-semibold text-lg sm:text-xl md:text-2xl mb-2">
            5. Contractor Responsibilities
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Execution of work with high-quality materials and workmanship.</li>
            <li>Compliance with approved drawings, plans, and specifications.</li>
            <li>
              Hiring and management of workers, including payment of wages and
              provision of amenities.
            </li>
            <li>Insurance coverage for workers and contract work.</li>
          </ul>
        </div>

        {/* 6. Owner Responsibilities */}
        <div>
          <h2 className="font-semibold text-lg sm:text-xl md:text-2xl mb-2">
            6. Owner Responsibilities
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Timely payment as per contract terms.</li>
            <li>Providing necessary approvals, access, and support for project execution.</li>
          </ul>
        </div>

        {/* 7. Liability and Risk */}
        <div>
          <h2 className="font-semibold text-lg sm:text-xl md:text-2xl mb-2">
            7. Liability and Risk
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Contractor is responsible for all risks, damages, or accidents during project execution.</li>
            <li>Owner is not liable for worker injuries, damages, or delays caused by unforeseen circumstances.</li>
          </ul>
        </div>

        {/* 8. Defects and Rectification */}
        <div>
          <h2 className="font-semibold text-lg sm:text-xl md:text-2xl mb-2">
            8. Defects and Rectification
          </h2>
          <p>
            Contractor shall rectify defects identified by the Owner within a reasonable time. Rectifications should be completed within four months from project completion.
          </p>
        </div>

        {/* 9. Termination */}
        <div>
          <h2 className="font-semibold text-lg sm:text-xl md:text-2xl mb-2">
            9. Termination
          </h2>
          <p>
            Owner may terminate the contract for breach, stoppage of work over 30 days without authorization, unacceptable quality, or failure to rectify defects.
          </p>
        </div>

        {/* 10. Dispute Resolution */}
        <div>
          <h2 className="font-semibold text-lg sm:text-xl md:text-2xl mb-2">
            10. Dispute Resolution
          </h2>
          <p>
            Any disputes arising from the contract will be resolved through arbitration under the Arbitration and Conciliation Act, 1996.
          </p>
        </div>

        {/* 11. Governing Law */}
        <div>
          <h2 className="font-semibold text-lg sm:text-xl md:text-2xl mb-2">
            11. Governing Law
          </h2>
          <p>The contract shall be governed by and construed in accordance with the laws of India.</p>
        </div>
      </div>
      </div>
    </main>
  );
}
