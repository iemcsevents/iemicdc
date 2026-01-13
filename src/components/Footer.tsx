import { LocateFixed, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="w-full bg-gradient-to-br from-gray-900 to-gray-800 mt-16 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo and Info */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center space-x-3">
              <Image
                src="/images/logo.png"
                width={60}
                height={60}
                alt="IEM ICDC 2026 Logo"
                className="object-contain"
              />
              <div>
                <h3 className="font-bold text-xl">IEM ICDC 2026</h3>
                <p className="text-gray-300 text-sm">International Conference</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Join leading researchers, industry experts, and innovators in exploring the 
              latest advances in Computational Intelligence, Data Science, and Cloud Computing.
            </p>
            <div className="space-y-2 text-sm">
              <p className="text-gray-300">Institute of Engineering & Management</p>
              <p className="text-gray-300">March 16-18, 2026</p>
              <a 
                href="mailto:icdc@iem.edu.in" 
                className="text-gray-300 hover:text-white transition-colors block"
              >
                icdc@iem.edu.in
              </a>
            </div>
          </div>
          {/* Conference Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Conference</h4>
            <div className="space-y-2">
              <Link href="/about" className="block text-gray-300 hover:text-white transition-colors">About IEM ICDC</Link>
              <Link href="/papers" className="block text-gray-300 hover:text-white transition-colors">Research Tracks</Link>
              <Link href="/speakers" className="block text-gray-300 hover:text-white transition-colors">Keynote Speakers</Link>
              <Link href="/committee" className="block text-gray-300 hover:text-white transition-colors">Committees</Link>
            </div>
          </div>

          {/* Paper Submission Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Paper Submission</h4>
            <div className="space-y-2">
              <Link href="/papers" className="block text-gray-300 hover:text-white transition-colors">Call for Papers</Link>
              <Link href="/papers#guidelines" className="block text-gray-300 hover:text-white transition-colors">Submission Guidelines</Link>
              {/* <Link href="/papers#dates" className="block text-gray-300 hover:text-white transition-colors">Important Dates</Link> */}
              {/* <Link href="/papers#review" className="block text-gray-300 hover:text-white transition-colors">Review Process</Link> */}
            </div>
          </div>

          {/* Registration Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Registration</h4>
            <div className="space-y-2">
              <Link href="/registrations" className="block text-gray-300 hover:text-white transition-colors">Registration</Link>
              {/* <Link href="/registrations#pricing" className="block text-gray-300 hover:text-white transition-colors">Pricing</Link> */}
              <Link href="/venue" className="block text-gray-300 hover:text-white transition-colors">Venue Info</Link>
              {/* <Link href="/venue#travel" className="block text-gray-300 hover:text-white transition-colors">Travel Info</Link> */}
            </div>
          </div>

          {/* Support & Important Dates */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Support</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a 
                    href="mailto:icdc@iem.edu.in" 
                    className="text-gray-300 text-sm hover:text-white transition-colors cursor-pointer"
                  >
                    icdc@iem.edu.in
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <a 
                    href="tel:+919674032480" 
                    className="text-gray-300 text-sm hover:text-white transition-colors cursor-pointer"
                  >
                    +91 9674032480
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <a 
                    href="tel:+919674032480" 
                    className="text-gray-300 text-sm hover:text-white transition-colors cursor-pointer"
                  >
                    +91 94334 95413
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Important Dates</h4>
              <div className="space-y-2 text-sm">
                <div>
                  <p className="text-gray-400">Paper Submission Deadline</p>
                  <p className="text-red-400 font-semibold">Submission Closed</p>
                </div>
                <div>
                  <p className="text-gray-400">Notification of Acceptance</p>
                  <p className="font-semibold">February 4, 2026</p>
                </div>
                <div>
                  <p className="text-gray-400">Conference Dates</p>
                  <p className="font-semibold">March 16-18, 2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2026 IEM ICDC. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Designed and Developed by</span>
              <Link href="https://linkedin.com/in/debanurag" target="_blank" className="text-red-400 hover:text-red-300 transition-colors">
                Anurag Deb
              </Link>
              <span>and</span>
              <Link href="http://linkedin.com/in/kartik-tulsian-682a6128a/" target="_blank" className="text-red-400 hover:text-red-300 transition-colors">
                Kartik Tulsian
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
