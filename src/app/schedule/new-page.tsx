import { Container } from "@/components/Container";
import { Calendar, Clock, MapPin } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conference Schedule - Coming Soon",
  description: "The detailed conference schedule for IEM-ICDC 2026 will be announced soon. Stay tuned for the complete program including keynote sessions, paper presentations, and workshops.",
  keywords: [
    "Conference Schedule",
    "Program Schedule", 
    "IEM-ICDC 2026 Schedule",
    "Conference Timeline",
    "Coming Soon"
  ],
  openGraph: {
    title: "Conference Schedule - Coming Soon - IEM-ICDC 2026",
    description: "The detailed conference schedule for IEM-ICDC 2026 will be announced soon.",
  },
};

export default function Schedule() {
    return (
        <>
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-red-600 via-red-700 to-black text-white py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Conference Schedule</h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                        Detailed program schedule coming soon - March 16-18, 2026
                    </p>
                </div>
            </div>

            <Container className="flex flex-col items-center justify-start gap-12 py-12 mt-12">
                
                {/* Coming Soon Message */}
                <div className="text-center space-y-8 max-w-4xl">
                    <div className="bg-white rounded-2xl shadow-xl p-12 border border-gray-100">
                        <div className="flex justify-center mb-8">
                            <div className="bg-gradient-to-br from-red-100 to-red-50 p-6 rounded-full">
                                <Calendar className="w-16 h-16 text-red-600" />
                            </div>
                        </div>
                        
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                            Schedule Coming Soon
                        </h2>
                        
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            We are currently finalizing the detailed conference schedule including keynote sessions, 
                            technical paper presentations, workshops, and networking events. The complete program 
                            will be announced soon.
                        </p>

                        {/* Key Information */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200">
                                <div className="flex items-center justify-center mb-4">
                                    <Calendar className="w-8 h-8 text-red-600" />
                                </div>
                                <div className="text-sm text-gray-600 mb-1">Conference Dates</div>
                                <div className="text-lg font-bold text-gray-800">March 16-18, 2026</div>
                            </div>
                            
                            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200">
                                <div className="flex items-center justify-center mb-4">
                                    <Clock className="w-8 h-8 text-red-600" />
                                </div>
                                <div className="text-sm text-gray-600 mb-1">Duration</div>
                                <div className="text-lg font-bold text-gray-800">3 Days</div>
                            </div>
                            
                            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200">
                                <div className="flex items-center justify-center mb-4">
                                    <MapPin className="w-8 h-8 text-red-600" />
                                </div>
                                <div className="text-sm text-gray-600 mb-1">Location</div>
                                <div className="text-lg font-bold text-gray-800">Kolkata, India</div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-red-50 to-red-100 p-6 rounded-xl border border-red-200">
                            <h3 className="text-xl font-bold text-gray-800 mb-3">What to Expect</h3>
                            <ul className="text-gray-600 space-y-2 text-left">
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    Keynote presentations by industry leaders
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    Technical paper presentation sessions
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    Interactive workshops and panel discussions
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    Networking sessions and exhibition
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center space-y-6">
                    <p className="text-gray-600 text-lg">
                        Stay updated with the latest conference information
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a 
                            href="/papers" 
                            className="bg-gradient-to-r from-red-600 to-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-red-700 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            Submit Your Paper
                        </a>
                        <a 
                            href="/registrations" 
                            className="bg-white text-red-600 border-2 border-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            Register Now
                        </a>
                    </div>
                </div>

            </Container>
        </>
    );
}