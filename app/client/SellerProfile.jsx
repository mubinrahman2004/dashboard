// import Image from "next/image";
// import React from "react";
// import saller from "../../public/saller2.png";
// import { FaStar } from "react-icons/fa";

// const SellerProfile = () => {
//   return (
//     <div>
//       <div>
//         <Image src={saller} alt="saller" />
//         <h2>FoxMedia.,JSC</h2>
//         <p>Since 2012</p>
//       </div>
//       <div className="w-[233px]">
//         <div className="flex justify-between">
//           <p className="text-base font-medium text-[#7E7E8F]">Owner Name</p>
//           <h2 className="text-base font-medium text-[#07070C]">Jonhson Mark</h2>
//         </div>
//         <div className="flex justify-between">
//           <p className="text-base font-medium text-[#7E7E8F]">Company Type</p>
//           <h2 className="text-base font-medium text-[#07070C]">Partnership</h2>
//         </div>
//         <div className="flex justify-between">
//           <p className="text-base font-medium text-[#7E7E8F]">Email</p>
//           <h2 className="text-base font-medium text-[#07070C]">
//             foxmedia@gmal.co
//           </h2>
//         </div>
//         <div className="flex justify-between">
//           <p className="text-base font-medium text-[#7E7E8F]">Website</p>
//           <h2 className="text-base font-medium text-[#07070C]">
//             foxmedia.com.uk
//           </h2>
//         </div>
//         <div className="flex justify-between">
//           <p className="text-base font-medium text-[#7E7E8F]">Contact No.</p>
//           <h2 className="text-base font-medium text-[#07070C]">0198545632</h2>
//         </div>
//         <div className="flex justify-between">
//           <p className="text-base font-medium text-[#7E7E8F]">Fax</p>
//           <h2 className="text-base font-medium text-[#07070C]">0198545632</h2>
//         </div>
//         <div className="flex justify-between">
//           <p className="text-base font-medium text-[#7E7E8F]">Location</p>
//           <h2 className="text-base font-medium text-[#07070C]">
//             United Kingdom
//           </h2>
//         </div>
//         <div className="flex justify-between">
//           <p className="text-base font-medium text-[#7E7E8F]">Joined</p>
//           <h2 className="text-base font-medium text-[#07070C]">
//             18 January 2012
//           </h2>
//         </div>
//       </div>
//       <h2>Customer Reviews</h2>
//       <div className="flex gap-2">
//         <FaStar />
//         <FaStar />
//         <FaStar />
//         <FaStar />
//         <FaStar />
//       </div>
//       <h1>Total 12k reviews</h1>
//       <div>
//         <h3>5 star</h3>
//         <h3>4 star</h3>
//         <h3>3 star</h3>
//         <h3>1 star</h3>
//       </div>
//       <div>
//         <h3>Contact this seller</h3>
//         <input type="text" placeholder="Subject" className="border-2 " />
    
//       </div>
//           <div className="py-5">
//             <input type="text" placeholder="Message" className="border-2  h-50" />
//           </div>
//           <p className="px-5 py-3 bg-[#7364DB] rounded-2xl w-fit">Send message</p>
//     </div>
//   );
// };

// export default SellerProfile;
import Image from "next/image";
import React from "react";
import saller from "../../public/saller2.png";
import { FaStar } from "react-icons/fa";

const SellerProfile = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 md:p-6 h-full">
      {/* Profile Header */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-6 pb-6 border-b border-gray-100">
        <div className="relative w-20 h-20 md:w-24 md:h-24 flex-shrink-0">
          <Image 
            src={saller} 
            alt="seller" 
            className="rounded-full object-cover"
            fill
            sizes="(max-width: 768px) 80px, 96px"
          />
        </div>
        <div className="text-center sm:text-left">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">FoxMedia.,JSC</h2>
          <p className="text-gray-500 text-sm md:text-base">Since 2012</p>
        </div>
      </div>

      {/* Company Details */}
      <div className="space-y-3 mb-6">
        {[
          { label: "Owner Name", value: "Jonhson Mark" },
          { label: "Company Type", value: "Partnership" },
          { label: "Email", value: "foxmedia@gmal.co" },
          { label: "Website", value: "foxmedia.com.uk" },
          { label: "Contact No.", value: "0198545632" },
          { label: "Fax", value: "0198545632" },
          { label: "Location", value: "United Kingdom" },
          { label: "Joined", value: "18 January 2012" }
        ].map((item, index) => (
          <div key={index} className="flex flex-col xs:flex-row justify-between items-start xs:items-center gap-1 py-2 border-b border-gray-50">
            <p className="text-sm font-medium text-gray-500 whitespace-nowrap">{item.label}</p>
            <h2 className="text-sm font-medium text-gray-900 text-right break-words">{item.value}</h2>
          </div>
        ))}
      </div>

      {/* Customer Reviews */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">Customer Reviews</h2>
        <div className="flex items-center gap-4 mb-2">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-yellow-400 text-lg" />
            ))}
          </div>
          <span className="text-gray-600 text-sm">4.8/5</span>
        </div>
        <p className="text-gray-500 text-sm mb-4">Total 12k reviews</p>
        
        {/* Rating Breakdown */}
        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((stars) => (
            <div key={stars} className="flex items-center gap-2">
              <span className="text-sm text-gray-600 w-8">{stars} star</span>
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-yellow-400 h-2 rounded-full" 
                  style={{ width: `${(stars/5) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form */}
      <div className="border-t border-gray-100 pt-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact this seller</h3>
        <div className="space-y-4">
          <input 
            type="text" 
            placeholder="Subject" 
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          />
          <textarea 
            placeholder="Message" 
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent resize-none"
          />
          <button className="px-6 py-3 bg-[#7364DB] text-white rounded-2xl hover:bg-[#6354c5] transition-colors duration-200 font-medium">
            Send message
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellerProfile;