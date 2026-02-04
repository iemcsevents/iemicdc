// import { Container } from "@/components/Container";
// import { MapPin, Clock, Calendar } from "lucide-react";

// export default function Venue() {
//   return (
//     <>
//       {/* Hero Section */}
//       <div className="bg-gradient-to-br from-red-600 via-red-700 to-black text-white py-16 md:py-24">
//         <div className="max-w-7xl mx-auto px-4 text-center">
//           <h1 className="text-4xl md:text-6xl font-bold mb-6">Venue</h1>
//           <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
//             IEM ICDC 2026 will be held in Kolkata, West Bengal - detailed venue information coming soon
//           </p>
//         </div>
//       </div>

//       <Container className="flex flex-col items-center justify-center gap-12 py-20 mt-12 min-h-[60vh]">
        
//         {/* Coming Soon Section */}
//         <div className="w-full max-w-4xl text-center">
//           <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl border border-gray-100 p-12 md:p-16">
            
//             {/* Icon */}
//             <div className="flex justify-center mb-8">
//               <div className="bg-gradient-to-r from-red-500 to-red-600 p-6 rounded-full shadow-lg">
//                 <MapPin className="w-12 h-12 text-white" />
//               </div>
//             </div>

//             {/* Main Message */}
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
//               Venue Details Coming Soon
//             </h2>
            
//             <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
//               IEM ICDC 2026 will be held in <span className="font-semibold text-red-600">Kolkata, West Bengal</span>. 
//               We are finalizing the perfect venue location and will share complete details including facilities, 
//               accessibility information, and directions very soon.
//             </p>

//             {/* Location Confirmed */}
//             <div className="bg-gradient-to-r from-red-50 to-red-100 border border-red-200 rounded-xl p-6 mb-8">
//               <div className="flex items-center justify-center space-x-3 mb-3">
//                 <MapPin className="w-6 h-6 text-red-600" />
//                 <h3 className="text-xl font-bold text-red-800">Location Confirmed</h3>
//               </div>
//               <p className="text-red-700 font-medium text-lg">Kolkata, West Bengal, India</p>
//               <p className="text-red-600 text-sm mt-2">Specific venue address and facilities details coming soon</p>
//             </div>

//             {/* Features */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//               <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
//                 <MapPin className="w-8 h-8 text-red-600 mx-auto mb-4" />
//                 <h3 className="font-semibold text-gray-800 mb-2">Kolkata, West Bengal</h3>
//                 <p className="text-gray-600 text-sm">City location confirmed</p>
//               </div>
              
//               <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
//                 <Calendar className="w-8 h-8 text-red-600 mx-auto mb-4" />
//                 <h3 className="font-semibold text-gray-800 mb-2">March 16-18, 2026</h3>
//                 <p className="text-gray-600 text-sm">Conference dates confirmed</p>
//               </div>
              
//               <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
//                 <Clock className="w-8 h-8 text-red-600 mx-auto mb-4" />
//                 <h3 className="font-semibold text-gray-800 mb-2">Venue Details</h3>
//                 <p className="text-gray-600 text-sm">Complete information coming soon</p>
//               </div>
//             </div>

//             {/* Call to Action */}
//             {/* <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-xl p-8 text-white">
//               <h3 className="text-xl font-bold mb-4">Want to Stay Updated?</h3>
//               <p className="text-red-100 mb-6">
//                 Register now and be the first to know about venue details and other conference updates
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <a 
//                   href="/registrations" 
//                   className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
//                 >
//                   Register Now
//                 </a>
//                 <a 
//                   href="/papers" 
//                   className="bg-red-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-900 transition-all duration-300 shadow-lg hover:shadow-xl"
//                 >
//                   Submit Paper
//                 </a>
//               </div>
//             </div> */}

//           </div>
//         </div>

//       </Container>
//     </>
//   );
// }


// Original venue content - commented out for now

import Image from "next/image";
import { Phone, Train, Plane, ExternalLink, Navigation, MapPin, Car, Clock } from "lucide-react";
import { Container } from "@/components/Container";

export default function Venue() {
  const venueFeatures = [
    { icon: <MapPin className="w-6 h-6" />, title: "Prime Location", description: "Located in the heart of Sector V, Salt Lake" },
    { icon: <Car className="w-6 h-6" />, title: "Easy Access", description: "Well-connected by road and public transport" },
    { icon: <Train className="w-6 h-6" />, title: "Metro Connectivity", description: "Close to Salt Lake Sector V Metro Station" },
    { icon: <Plane className="w-6 h-6" />, title: "Airport Proximity", description: "30 minutes from Netaji Subhash Airport" },
  ];

  const contactInfo = [
    { icon: <Phone className="w-5 h-5" />, label: "Phone", value: "+91 9674032480" },
    { icon: <MapPin className="w-5 h-5" />, label: "Address", value: "Plot No- 5/1, Salt Lake Bypass, DP Block, Sector V, Bidhannagar, Kolkata, West Bengal 700091" },
    { icon: <Clock className="w-5 h-5" />, label: "Conference Hours", value: "9:00 AM - 6:00 PM (All 3 Days)" },
  ];

  return (
    <>
      <div className="bg-gradient-to-br from-red-600 via-red-700 to-black text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Venue</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            IEM ICDC 2026 will be held at Software Technology Parks of India, Kolkata
          </p>
        </div>
      </div>

      <Container className="flex flex-col items-center justify-start gap-12 py-12 mt-12">
        
        {/* // Venue Introduction  */}
        <div className="w-full max-w-6xl">
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="flex lg:flex-row flex-col">
              {/* // Content  */}
              <div className="flex-1 p-8 md:p-12">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-8 bg-gradient-to-b from-red-500 to-red-600 rounded-full"></div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Software Technology Parks of India</h2>
                  </div>
                  
                  <p className="text-gray-700 text-lg leading-relaxed">
                    STPI Kolkata is a premier technology park located in the bustling IT hub of Sector V, Salt Lake. 
                    The facility offers state-of-the-art conference facilities, modern amenities, and excellent connectivity, 
                    making it the perfect venue for IEM ICDC 2026.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {venueFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                        <div className="text-red-600 mt-1">
                          {feature.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 text-sm">{feature.title}</h4>
                          <p className="text-gray-600 text-xs mt-1">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <a 
                      href="https://maps.google.com/maps?q=Software+Technology+Parks+of+India+Kolkata"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      <Navigation className="w-5 h-5" />
                      <span>Get Directions</span>
                    </a>
                    <a 
                      href="https://stpi.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Visit STPI Website</span>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* // Image  */}
              <div className="lg:w-96 bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center p-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-200/30 to-red-300/30 rounded-2xl blur-xl"></div>
                  <Image 
                    src="/images/venue.jpg" 
                    width={350} 
                    height={350} 
                    alt="STPI Venue" 
                    className="relative z-10 object-cover rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* // Map and Contact Information  */}
        <div className="w-full max-w-6xl grid lg:grid-cols-1 gap-8">
          
          {/* // Interactive Map  */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-gray-800 to-black p-6 text-white">
              <h3 className="text-xl font-bold mb-2">Location Map</h3>
              <p className="text-gray-300">Find us easily with this interactive map</p>
            </div>
            <div className="relative h-80">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.1197348936703!2d88.43605467500232!3d22.574624679490306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02757fbb7d6185%3A0x65dd6bf7ac6d562!2sSoftware%20Technology%20Parks%20of%20India!5e0!3m2!1sen!2sin!4v1741356229020!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="border-0"
              />
            </div>
          </div>
        </div>

      </Container>
    </>
  );
}

