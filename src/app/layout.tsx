import type { Metadata } from "next";
import localFont from "next/font/local";
import { Lato } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import Header from "@/components/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.iemicdc.org'),
  title: {
    default: "IEM ICDC 2027 - International Conference on Computational Intelligence, Data Science and Cloud Computing",
    template: "%s | IEM ICDC 2027"
  },
  description: "Join IEM ICDC 2027 - International Conference on Computational Intelligence, Data Science and Cloud Computing, March 17-19, 2027 in Kolkata. Bringing together researchers, industry experts, and innovators from around the world.",
  keywords: [
    "IEM ICDC 2027",
    "International Conference",
    "Computational Intelligence",
    "Data Science",
    "Cloud Computing",
    "AI and Robotics",
    "Machine Learning",
    "Image Processing",
    "Natural Language Processing",
    "Big Data Analytics",
    "Cyber Security",
    "Blockchain",
    "IoT",
    "Academic Conference",
    "Research Conference",
    "Kolkata Conference",
    "IEM Kolkata",
    "Institute of Engineering and Management",
    "March 2027",
    "Technology Conference",
    "Computer Science",
    "Engineering Conference"
  ],
  authors: [
    { name: "Institute of Engineering & Management, Kolkata" }
  ],
  creator: "IEM Kolkata",
  publisher: "Institute of Engineering & Management",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.iemicdc.org",
    siteName: "IEM ICDC 2027",
    title: "IEM ICDC 2027 - International Conference on Computational Intelligence, Data Science and Cloud Computing",
    description: "Join IEM ICDC 2027 - International Conference on Computational Intelligence, Data Science and Cloud Computing, March 17-19, 2027 in Kolkata. Bringing together researchers, industry experts, and innovators from around the world.",
    images: [
      {
        url: "/images/iem.jpeg",
        width: 1200,
        height: 630,
        alt: "IEM ICDC 2027 Conference",
        type: "image/jpeg",
      },
      {
        url: "/images/logo3.png",
        width: 800,
        height: 600,
        alt: "IEM ICDC 2027 Logo",
        type: "image/png",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@iemkolkata",
    creator: "@iemkolkata",
    title: "IEM ICDC 2027 - International Conference on Computational Intelligence, Data Science and Cloud Computing",
    description: "Join IEM ICDC 2027 - International Conference on Computational Intelligence, Data Science and Cloud Computing, March 17-19, 2027 in Kolkata.",
    images: ["/images/iem.jpeg"],
  },
  verification: {
    google: "google-site-verification-code-here", // Replace with actual verification code
  },
  alternates: {
    canonical: "https://www.iemicdc.org",
  },
  category: "education",
  classification: "Academic Conference",
  other: {
    "conference:name": "IEM ICDC 2027",
    "conference:location": "Kolkata, West Bengal, India",
    "conference:start_date": "2027-03-17",
    "conference:end_date": "2027-03-19",
    "conference:organizer": "Institute of Engineering & Management, Kolkata",
    "event:type": "Conference",
    "event:category": "Technology",
    "geo:region": "IN-WB",
    "geo:placename": "Kolkata",
    "geo:position": "22.5726;88.3639",
    "ICBM": "22.5726, 88.3639",
  },
};

const itim = Lato({ subsets: ["latin"], weight: "400" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{scrollBehavior: "smooth"}} className="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${itim.className}`}
      >
        <StructuredData />
        <Header />
        <div className="mt-16">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
