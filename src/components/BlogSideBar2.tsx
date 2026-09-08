import Image from "next/image";
import Link from "next/link";
import { FaUniversity, FaGlobe } from "react-icons/fa";
import RelatedPost from "./RelatedPost";

const BlogSidebar2 = ({ onSelect }: { onSelect: (blog: "blog1" | "blog2" | "blog3") => void }) => {
  return (
    <section className="bg-white pt-20 pb-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-2xl lg:text-4xl font-extrabold text-gray-900 leading-snug mb-6">
            <span className="block">Institute of Engineering & Management</span>
            <span className="block text-purple-600 mt-2">Kolkata, India</span>
          </h1>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-purple-500 to-purple-600 rounded-full shadow-md" />
        </div>


        {/* Content Layout */}
        <div className="flex flex-col lg:flex-row gap-10">

          {/* Left Column: Main Content */}
          <div className="lg:w-8/12 space-y-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              The IEM group is an acclaimed educational group amongst the industry-centred academic training organisations of today. IEM has set sublime standards in addressing the technical and managerial resource shortage in the new era of dynamic globalisation.
            </p>

            <div className="overflow-hidden rounded-lg shadow-lg bg-white">
              <div className="relative aspect-[97/60] sm:aspect-[97/44] w-full">
                <Image
                  src="/images/gurukul_image.png"
                  alt="IEM Kolkata"
                  fill
                  className="object-fill object-center"
                />
              </div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              IEM is one of the top-ranked engineering colleges in Kolkata and Eastern India, known for 100% job assistance and industry-aligned curriculum across disciplines like CSE, ME, ECE, and EE.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Since its inception, the IEM group has surpassed numerous benchmarks in research, industry collaboration, and student success, powered by a vision of self-sufficiency and educational excellence.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-10">Major International Conferences by IEM</h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700 text-base">
              <li>IEEE IEMCON – UBC, Vancouver (2015–)</li>
              <li>IEEE UEMCON – Columbia University, New York (2016–)</li>
              <li>IEEE CCWC – University of Nevada, Las Vegas (2017–)</li>
              <li>IEEE IEMANTENNA – UBC, Vancouver (2019)</li>
              <li>IEEE IEMTRONICS – UBC, Vancouver (2020–)</li>
            </ul>
          </div>

          {/* Right Column: Sidebar */}
          <aside className="lg:w-4/12 space-y-8">

            {/* Explore More */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6">
              <h2 className="text-lg font-semibold text-gray-800 border-b pb-3 mb-5">
                Explore More
              </h2>
              <ul>
                <li
                  onClick={() => onSelect("blog1")}
                  className="border-b border-gray-100 cursor-pointer transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg rounded-lg hover:bg-purple-50"
                >
                  <RelatedPost
                    title="IEM-ICDC 2027"
                    image="/images/logo-big.png"
                    slug="#"
                  />
                </li>
              </ul>
            </div>

            {/* Institution Quick Info */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-gray-200 rounded-xl shadow p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Info</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-center gap-3">
                  <FaUniversity className="text-purple-600" />
                  <span>Established in 1989</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaGlobe className="text-purple-600" />
                  <span>Kolkata, India</span>
                </li>
              </ul>
            </div>

            {/* References */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Reference Links</h3>
              <ul className="list-disc list-inside text-purple-600 text-sm space-y-2">
                <li><Link href="https://iem.edu.in/" target="_blank">IEM Official Website</Link></li>
                <li><Link href="http://ieee-iemcon.org/" target="_blank">IEEE IEMCON</Link></li>
                <li><Link href="http://ieee-uemcon.org/" target="_blank">IEEE UEMCON</Link></li>
                <li><Link href="http://ieee-ccwc.org/" target="_blank">IEEE CCWC</Link></li>
                <li><Link href="http://iemantenna.org/" target="_blank">IEEE IEMANTENNA</Link></li>
                <li><Link href="http://iemtronics.org/" target="_blank">IEEE IEMTRONICS</Link></li>
              </ul>
            </div>

          </aside>
        </div>
      </div>
    </section>
  );
};

export default BlogSidebar2;
