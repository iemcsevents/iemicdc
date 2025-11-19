import { Container } from "@/components/Container";
import Link from "next/link";
import { Bot, Shield, Cloud, Eye, FileText, Calendar, BookMarked, FileDown, Code, BookOpen, Trophy, Send } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Call for Papers - Paper Submission Guidelines",
  description: "Submit your research papers to IEM ICDC 2026. Learn about submission guidelines, important dates, review process, and conference tracks in AI, Data Science, Cloud Computing, and more.",
  keywords: [
    "Call for Papers",
    "Paper Submission",
    "Research Papers",
    "Conference Submission",
    "AI Research",
    "Data Science Papers",
    "Cloud Computing Research",
    "Academic Publishing",
    "Peer Review",
    "Conference Proceedings"
  ],
  openGraph: {
    title: "Call for Papers - IEM ICDC 2026",
    description: "Submit your research papers to IEM ICDC 2026. Learn about submission guidelines, important dates, and conference tracks.",
    images: ["/images/S1.png"],
  },
};

const getTrackIcon = (trackNumber: number) => {
  switch (trackNumber) {
    case 1: return <Bot className="w-8 h-8" />;
    case 2: return <Shield className="w-8 h-8" />;
    case 3: return <Cloud className="w-8 h-8" />;
    case 4: return <Eye className="w-8 h-8" />;
    default: return <FileText className="w-8 h-8" />;
  }
};

const getTrackColor = (trackNumber: number) => {
  switch (trackNumber) {
    case 1: return "from-red-500 to-red-600";
    case 2: return "from-pink-500 to-pink-600";
    case 3: return "from-green-500 to-green-600";
    case 4: return "from-purple-500 to-purple-600";
    default: return "from-gray-500 to-gray-600";
  }
};

const Track = ({
  title,
  list,
  id,
  trackNumber,
}: {
  title: string;
  list: Array<string>;
  id: string;
  trackNumber: number;
}) => {
  const icon = getTrackIcon(trackNumber);
  const colorClass = getTrackColor(trackNumber);

  return (
    <div id={id} className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
      {/* Header */}
      <div className={`bg-gradient-to-r ${colorClass} p-8 text-white`}>
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
            {icon}
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
            <div className="w-20 h-1 bg-white/40 rounded-full mt-2"></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {list.map((item, index) => (
            <div
              key={index}
              className="group flex items-start space-x-3 p-4 bg-white rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-200"
            >
              <div className={`w-2 h-2 bg-gradient-to-r ${colorClass} rounded-full mt-2 group-hover:scale-125 transition-transform duration-200`}></div>
              <span className="text-gray-700 group-hover:text-gray-800 text-md leading-relaxed flex-1">
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* <div className="mt-8 flex justify-between items-center">
          <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
            {list.length} Research Areas
          </span>
          <Link 
            href="/registrations"
            className={`bg-gradient-to-r ${colorClass} text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 text-sm`}
          >
            Submit to This Track
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default function Papers() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-red-600 via-red-700 to-black text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Call for Papers</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Submit your research papers for IEM ICDC 2026 across four exciting tracks
          </p>
        </div>
      </div>

      <Container className="py-10 flex flex-col items-center justify-start gap-12 mt-12">

        {/* Key Information Cards */}
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Submit Paper */}
          <div className="bg-gradient-to-br from-blue-500 to-sky-600 rounded-xl p-6 text-white text-center shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <Send className="w-10 h-10 mx-auto mb-3" />
            <h3 className="text-lg font-bold mb-1">Submit Paper</h3>
            <p className="text-blue-100 text-sm mb-3">Upload your research paper through EasyChair</p>
            <Link
              href="https://easychair.org/conferences?conf=iemicdc2026"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-700 px-4 py-1.5 rounded-md font-semibold text-sm hover:bg-blue-50 transition-all duration-300"
            >
              Submit Now →
            </Link>
          </div>

          {/* Best Paper Award */}
          <div className="bg-gradient-to-br from-red-500 to-rose-600 rounded-xl p-6 text-white text-center shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <Trophy className="w-10 h-10 mx-auto mb-3" />
            <h3 className="text-lg font-bold mb-1">Best Paper Award</h3>
            <p className="text-rose-100 text-sm mb-3">Outstanding research will be honored with awards</p>
          </div>

          {/* Paper Length */}
          <div className="bg-gradient-to-br from-yellow-500 to-amber-600 rounded-xl p-6 text-white text-center shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <FileText className="w-10 h-10 mx-auto mb-3" />
            <h3 className="text-lg font-bold mb-1">10 Pages Minimum</h3>
            <p className="text-yellow-100 text-sm">Full-length papers only. No short submissions accepted.</p>
          </div>
        </div>

        {/* Second Row */}
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {/* Guidelines */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl p-6 text-white text-center shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <BookOpen className="w-10 h-10 mx-auto mb-3" />
            <h3 className="text-lg font-bold mb-1">Author Guidelines</h3>
            <p className="text-blue-100 text-sm mb-3">Follow Springer’s official formatting and submission rules</p>
            <Link
              href="https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-700 px-4 py-1.5 rounded-md font-semibold text-sm hover:bg-blue-50 transition-all duration-300"
            >
              View Guidelines →
            </Link>
          </div>

          {/* LaTeX Template */}
          <div className="bg-gradient-to-br from-red-500 to-pink-600 rounded-xl p-6 text-white text-center shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <Code className="w-10 h-10 mx-auto mb-3" />
            <h3 className="text-lg font-bold mb-1">LaTeX Template</h3>
            <p className="text-pink-100 text-sm mb-3">Get the official Springer LaTeX template for submissions</p>
            <Link
              href="https://drive.google.com/file/d/145BCv_wrO2ugNn53HwobPYExRRIvr0T6/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-red-600 px-4 py-1.5 rounded-md font-semibold text-sm hover:bg-pink-50 transition-all duration-300"
            >
              Download →
            </Link>
          </div>

          {/* Word Template */}
          <div className="bg-gradient-to-br from-amber-500 to-yellow-600 rounded-xl p-6 text-white text-center shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <FileDown className="w-10 h-10 mx-auto mb-3" />
            <h3 className="text-lg font-bold mb-1">Word Template</h3>
            <p className="text-yellow-100 text-sm mb-3">Use the Microsoft Word template in Springer format</p>
            <Link
              href="https://drive.google.com/file/d/1-VUD2x22n5ZsX3TJaQgLpE-tEauDBw2h/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-amber-600 px-4 py-1.5 rounded-md font-semibold text-sm hover:bg-amber-50 transition-all duration-300"
            >
              Download →
            </Link>
          </div>
        </div>

        <div className="bg-blue-100/50 p-8 rounded-xl shadow-lg border border-blue-200 text-center">
          <h2 className="text-xl sm:text-2xl font-semibold text-blue-800 mb-6 uppercase tracking-wide">
            📝 Publication & Indexing Details
          </h2>

          <p className="text-lg text-blue-900 mb-4">
            The conference proceedings will be published in the Springer Book Series:{' '}
            <span className="font-semibold italic text-blue-800">
              &quot;Lecture Notes in Networks and Systems&quot;
            </span>
          </p>

          <div className="flex justify-center items-center my-6">
            <Image
              src="/images/sp.png"
              width={250}
              height={80}
              alt="Springer Logo"
            />
          </div>

          <p className="text-base sm:text-lg text-blue-900">
            <strong>Indexing:</strong> SCOPUS, INSPEC, WTI Frankfurt eG, zbMATH, SCImago
          </p>
        </div>

        {/* Important Notice */}
        <div className="w-full max-w-3xl">
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-8 text-white text-center shadow-xl">
            <Calendar className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Submission Guidelines</h3>
            <div className="space-y-2 text-orange-100">
              <p className="text-lg">📄 Papers should be atleast 10 pages</p>
              <p className="text-lg">🏆 Best paper awards will be provided</p>
              <p className="text-lg">❌ Short papers will not be accepted</p>
            </div>
          </div>
        </div>

        {/* Tracks Introduction */}
        <div className="w-full max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Research Tracks</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 leading-relaxed">
            Explore four specialized research areas covering cutting-edge topics in computational intelligence,
            data science, and cloud computing. Each track welcomes innovative research contributions.
          </p>
        </div>

        {/* Research Tracks */}
        <div className="w-full max-w-7xl space-y-12">
          <Track
            id="track1"
            trackNumber={1}
            title="Track 1: AI And Robotics"
            list={[
              "Expert Systems",
              "Fuzzy Sets and Systems",
              "AI in Modelling and Simulation",
              "Machine Learning",
              "Deep Learning",
              "Intelligent devices and instruments",
              "AI in Scheduling and Optimization",
              "Quantum Machine Learning",
              "Evolutionary Design",
              "Knowledge representation",
              "Robotics",
              "Multi-Robot systems",
              "Robot learning and adaptation",
              "Coordination in robotics",
              "Bioinformatics, Computational Biology",
              "Biomedical sensor & robotics",
              "Heuristic Algorithms",
              "Bio Inspired Algorithms",
              "Evolutionary Algorithms",
              "Brain Computer Interface",
            ]}
          />

          <Track
            id="track2"
            trackNumber={2}
            title="Track 2: Cyber Security, Blockchain and IoT"
            list={[
              "Networking Protocol",
              "Architecture",
              "Security and privacy",
              "Malware attacks",
              "Digital forensics",
              "Blockchain, and cryptocurrency",
              "Quantum cryptography",
              "AI & Sensors",
              "Brain Computing Interface",
              "Recent Trends in ICT",
              "Contemporary research in the field of ICT",
              "Industry 4.0/5.0 and Industrial",
              "Healthcare data privacy",
              "Biometric-based authentication systems",
              "Multi-factor-based authentication",
              "Passwordless authentication systems",
              "Smart cities, smart farming, e-health, and home automation applications",
              "Privacy-preserving communication",
            ]}
          />

          <Track
            id="track3"
            trackNumber={3}
            title="Track 3: Network Cloud and Big Data"
            list={[
              "Big Data Analytics and Social Networking",
              "Recent Trends in ICT",
              "Cloud Architecture and applications",
              "Service-Oriented Architecture in Cloud Computing",
              "Cloud based parallel Processing",
              "Mobile Clouds",
              "Data Mining and Analytics",
              "AIML applications in Big Data",
              "Data Visualization",
              "5G and 6G beyond networks",
              "Low Power Wide Area (LPWA) networks",
              "Next generation networks",
              "NFV, RAN, Cloud-RAN, and Fog-RAN",
              "Software Defined Radio (SDR)",
              "Cognitive Radio (D2D) and (M2M) communications",
              "LoRa, Sigfox, NB-IoT",
              "WPAN",
            ]}
          />

          <Track
            id="track4"
            trackNumber={4}
            title="Track 4: Virtual and Augmented Reality, Image Processing and NLP"
            list={[
              "Image Processing",
              "Speech & music processing",
              "3D and Video Processing",
              "Pattern Recognition",
              "Virtual and Augmented Reality",
              "Computational Linguistics & NLP Dialog Systems",
              "Graph, deep-learning-based methods of NLP and IR",
              "Information Extraction, Retrieval",
              "Opinion, personality and emotion detection in social media",
              "Color, Multi-spectral, and Hyper-spectral Imaging",
              "Image & Video Interpretation and Understanding",
              "Stereoscopic, Multi-view, Detection, Recognition, Retrieval, and Classification",
              "Image & Video Quality Models",
              "Biometrics, Forensics, and Security",
              "Biomedical and Biological Image Processing",
            ]}
          />
        </div>

        {/* Call to Action */}
        {/* <div className="w-full max-w-4xl">
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl shadow-xl p-8 md:p-12 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Submit?</h3>
            <p className="text-red-100 mb-8 text-lg">
              Join the global community of researchers and share your innovative work
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/registrations" 
                className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Submit Your Paper
              </Link>
            </div>
          </div>
        </div> */}

      </Container>
    </>
  );
}
