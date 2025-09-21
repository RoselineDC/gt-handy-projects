"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function WhoWeAre() {
    const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">

        {/* Left - Image */}
        <div className="w-full md:w-1/3">
          <Image
            src="/images/img1.jpg"
            alt="Who We Are"
            width={400}
            height={450}
            className="rounded-lg shadow-md object-cover w-full h-64 md:h-72"
          />
        </div>

        {/* Right - Text */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Who We Are
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            GT Handy Projects is a trusted leader in construction and maintenance,
            delivering innovative solutions across paving, plumbing, electrical,
            and general building services.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Since 2012, we have built strong relationships with businesses,
            governments, and communities by combining hands-on expertise
            with quality-driven service to drive efficiency, transparency,
            and measurable results.
          </p>

        
        {/* Hidden/Expandable content
        
        {/* Toggle button */}
        <Link href="/about">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-full shadow-md transition"
        >
          {isExpanded ? "Show Less" : "Read More"}
        </button>
        </Link>
      </div>
        </div>
      
    </section>
  );
}


// about us page 
// export function AboutUsPage() {
//   return (
//     <section className="bg-white py-16 px-6 md:px-20">
//       <div className="max-w-4xl mx-auto">
//         <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
//           About GT Handy Projects
//         </h1>
//         <p className="text-gray-700 text-lg leading-relaxed mb-4">
//           GT Handy Projects was established in 2012 and registered in 2017. We
//           are a diversified construction and maintenance service provider,
//           trusted by a growing client base for our commitment to excellence and
//           integrity.
//         </p>
//         <p className="text-gray-700 text-lg leading-relaxed mb-4">
//           Our vision is to create and maintain a business of highly skilled
//           construction that serves clients' needs with honesty and integrity. We
//           continue to adapt to the changing needs of our clients through quality    
//           service delivery.
//         </p>
//         <p className="text-gray-700 text-lg leading-relaxed mb-4">
//           Our mission is to surpass expectations by hiring and retaining
//           first-class employees, approaching every project with accuracy and
//           efficiency, and fostering long-lasting client relationships.
//         </p>
//         <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-4">
//           <li>Integrity – Promoting the highest standards of ethics.</li>
//           <li>Trust – Developing and supporting human capital.</li>
//           <li>
//             Responsibility – Towards our staff, community, and environment.
//           </li>
//           <li>Cohesiveness – Team spirit is our strength.</li>
//           <li>Excellence – Striving for outstanding results.</li>
//           <li>
//             Quality – Committed at every level to deliver top-quality services.
//           </li>
//         </ul>
//         <p className="text-gray-700 text-lg leading-relaxed">
//           At GT Handy Projects, we believe that our people are our greatest
//           asset. We invest in their growth and development, ensuring they have
//           the skills and knowledge to deliver exceptional results. Our team is
//           dedicated to upholding our core values and delivering on our promises,
//           making us a trusted partner for all your construction and maintenance
//           needs.
//         </p>
//       </div>
//     </section>
//   );
// }

