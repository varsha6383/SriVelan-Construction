import React from "react";

export default function PrivacyPolicy() {
  return (
    <main className="bg-white text-black">
      {/* Header */}
      <div className="h-[30vh] sm:h-[30vh] lg:h-[40vh] w-full flex flex-col justify-center items-center bg-[#063231] text-white gap-2">
        <p className="font-bold text-2xl sm:text-2xl lg:text-5xl font-primary">Privacy Policy</p>
        <p className="font-sencondary text-sm sm:text-base lg:text-lg">Last updated: July 16, 2025</p>
      </div>

      {/* Content Section */}
      <div className="w-full px-4 sm:px-8 md:px-16 lg:px-32 py-12 bg-gray-50">
        <div className="space-y-6 text-gray-800 text-sm sm:text-base md:text-lg">
          
          {/* 1. Introduction */}
          <div>
            <h2 className="font-semibold text-lg sm:text-xl md:text-2xl mb-2">1. Introduction</h2>
            <p>
              <strong>SRI VELAN CONSTRUCTION</strong> is committed to protecting the privacy of our clients and website users. This policy outlines how we collect, use, and safeguard your information.
            </p>
          </div>

          {/* 2. Information Collection */}
          <div>
            <h2 className="font-semibold text-lg sm:text-xl md:text-2xl mb-2">2. Information Collection</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Name, contact number, email address, and address.</li>
              <li>Project details, requirements, and preferences.</li>
            </ul>
          </div>

          {/* 3. Use of Information */}
          <div>
            <h2 className="font-semibold text-lg sm:text-xl md:text-2xl mb-2">3. Use of Information</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Provide and improve our construction services.</li>
              <li>Respond to inquiries and service requests.</li>
              <li>Communicate project updates, billing, and contractual obligations.</li>
            </ul>
          </div>

          {/* 4. Sharing of Information */}
          <div>
            <h2 className="font-semibold text-lg sm:text-xl md:text-2xl mb-2">4. Sharing of Information</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>We do not sell or rent your information to third parties.</li>
              <li>Information may be shared with trusted service providers or contractors strictly for project execution purposes.</li>
              <li>Legal obligations may require disclosure of information if mandated by law.</li>
            </ul>
          </div>

          {/* 5. Data Security */}
          <div>
            <h2 className="font-semibold text-lg sm:text-xl md:text-2xl mb-2">5. Data Security</h2>
            <p>
              We implement reasonable technical and administrative measures to protect personal data. Access to personal information is restricted to authorized personnel only.
            </p>
          </div>

          {/* 6. Cookies and Tracking */}
          <div>
            <h2 className="font-semibold text-lg sm:text-xl md:text-2xl mb-2">6. Cookies and Tracking</h2>
            <p>
              Our website may use cookies to enhance user experience. Cookies do not collect personal information unless voluntarily provided.
            </p>
          </div>

          {/* 7. User Rights */}
          <div>
            <h2 className="font-semibold text-lg sm:text-xl md:text-2xl mb-2">7. User Rights</h2>
            <p>
              Users can request access, correction, or deletion of their personal information. Contact us at <span className="underline">srivelanconstruction@gmail.com</span> for any privacy-related requests.
            </p>
          </div>

          {/* 8. Updates to Privacy Policy */}
          <div>
            <h2 className="font-semibold text-lg sm:text-xl md:text-2xl mb-2">8. Updates to Privacy Policy</h2>
            <p>
              We may update this privacy policy from time to time. Updated policies will be posted on our website with the effective date.
            </p>
          </div>

          {/* 9. Contact */}
          <div>
            <h2 className="font-semibold text-lg sm:text-xl md:text-2xl mb-2">9. Contact</h2>
            <p>
              For any questions regarding terms, conditions, or privacy, contact: <br/>
              <strong>SRI VELAN CONSTRUCTION</strong> <br/>
              Phone: 8248501872 <br/>
              Email: <span className="underline">srivelanconstruction@gmail.com</span>
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}
