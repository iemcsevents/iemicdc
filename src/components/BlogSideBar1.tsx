import Image from "next/image";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import RelatedPost from "./RelatedPost";

const BlogSidebar1 = ({ onSelect }: { onSelect: (blog: "blog1" | "blog2" | "blog3") => void }) => {
  return (
    <section className="bg-white pt-20 pb-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-2xl lg:text-4xl md:text-3xl font-extrabold text-gray-900 leading-tight tracking-tight">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#4A6CF7] via-indigo-500 to-purple-600">
              4th International Conference
            </span>
            <span className="block mt-2">
              on Computational Intelligence, Data Science and Cloud Computing
            </span>
          </h1>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-[#4A6CF7] via-indigo-400 to-purple-600 rounded-full mt-4 shadow-md" />
        </div>


        {/* Main Content Layout */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left: Main Blog Content */}
          <div className="lg:w-8/12 space-y-8">
            <div className="overflow-hidden rounded-lg shadow-lg bg-white">
              <div className="relative aspect-[97/60] sm:aspect-[97/44] w-full">
                <Image
                  src="/images/logo.png"
                  alt="NACDC"
                  fill
                  className="object-contain object-center"
                />
              </div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              IEM ICDC 2026: 4th International Conference on Computational Intelligence, Data Science and Cloud Computing is an endeavour in enticing interest for Computational Intelligence and Data Science applications in diverse domains.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              As the world is moving towards industry 4.0, Computational Intelligence, Data Science and Cloud Computing are becoming more and more relevant in our society in all possible ways.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              The most substantial new findings about AI and Robotics, Image processing and NLP, Cloud Computing and big data analytics as well as in Cyber security, Blockchain and IoT and various allied fields will be presented in the three-day event.
            </p>

            <ul className="list-disc list-inside space-y-3 text-gray-700 text-base">
              <li>Insightful Invited Talks</li>
              <li>Innovative Technical Sessions</li>
              <li>Hybrid Event Format</li>
              <li>Global Participation</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-10">Major Tracks and Topics</h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700 text-base">
              <li>AI And Robotics</li>
              <li>Image Processing And NLP</li>
              <li>Cloud Computing And Big Data Analytics</li>
              <li>Cyber Security, Blockchain And IoT</li>
            </ul>

            <div className="mt-6">
              <p className="text-gray-400 italic">
                The general chair, the convener, along with the entire team invite researchers and industry personnel around the world to take part in the upcoming event to make the event a grand success.
              </p>
            </div>
          </div>

          {/* Right: Sidebar */}
          <aside className="lg:w-4/12 space-y-8">
            {/* Explore More */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6">
              <h2 className="text-lg font-semibold text-gray-800 border-b pb-3 mb-5">
                Explore More
              </h2>
              <ul>
                <li
                  onClick={() => onSelect("blog2")}
                  className="border-b border-gray-100 cursor-pointer transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg rounded-lg hover:bg-blue-50"
                >
                  <RelatedPost
                    title="Host Institute: IEM Kolkata"
                    image="/images/gurukul_image.png"
                    slug="#"
                  />
                </li>
                {/* <li
                  onClick={() => onSelect("blog3")}
                  className="border-b border-gray-100 cursor-pointer transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg rounded-lg hover:bg-blue-50"
                >
                  <RelatedPost
                    title="IEM Kolkata"
                    image="/images/hero/gurukul_image.png"
                    slug="#"
                  />
                </li> */}
              </ul>
            </div>

            {/* Conference Quick Info */}
            <div className="bg-gradient-to-br from-[#EEF2FF] to-[#F5F3FF] border border-gray-200 rounded-xl shadow p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Info</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-center gap-3">
                  <FaCalendarAlt className="text-[#4A6CF7]" />
                  <span>March 16-18, 2026</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-[#4A6CF7]" />
                  <span>Kolkata</span>
                </li>
                {/* <li className="flex items-center gap-3">
                  <FaClock className="text-[#4A6CF7]" />
                  <span>Starts at 9:00 AM</span>
                </li> */}
              </ul>
            </div>

            {/* Optional: Latest Update */}
            {/* <div className="bg-white border border-gray-200 rounded-xl shadow p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Latest Updates</h3>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
                <li>Paper submission deadline extended to October 15, 2025.</li>
                <li>Workshop list has been updated.</li>
              </ul>
            </div> */}

          </aside>
        </div>
      </div>
    </section>
  );
};

export default BlogSidebar1;
