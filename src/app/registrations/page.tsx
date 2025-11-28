import { Container } from "@/components/Container";
import { CopyButton } from "@/components/CopyButton";
import { CreditCard, DollarSign, FileText, Users, Clock, Shield } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conference Registration - Fees & Payment",
  description: "Register for IEM ICDC 2026 International Conference. Check registration fees for students, faculty, and industry professionals. Learn about payment methods and registration deadlines.",
  keywords: [
    "Conference Registration",
    "Registration Fees",
    "Payment Methods",
    "Early Bird Registration",
    "Student Registration",
    "Faculty Registration",
    "Industry Registration",
    "Conference Payment",
    "Registration Deadline"
  ],
  openGraph: {
    title: "Conference Registration - IEM ICDC 2026",
    description: "Register for IEM ICDC 2026 International Conference. Check registration fees and payment methods.",
    images: ["/images/QR.jpeg"],
  },
};

const ModernTable = ({
  title,
  icon,
  datas,
  headerColor = "from-red-500 to-red-600"
}: {
  title: string;
  icon: React.ReactNode;
  datas: Array<{ col1: string; col2: string; className?: string }>;
  headerColor?: string;
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300">
      <div className={`bg-gradient-to-r ${headerColor} p-6 text-white`}>
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
            {icon}
          </div>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <tbody>
            {datas.map(({ col1, col2, className }, id) => {
              const isTotalRow = !col2 || col2.trim() === "";
              return (
                <tr
                  key={id}
                  className={`border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200 ${
                    isTotalRow ? "font-extrabold text-gray-800 bg-gray-100" : ""
                  }`}
                >
                  <td
                    className={`px-6 py-4 font-medium text-gray-700 text-xl ${
                      className || ""
                    }`}
                  >
                    {col1}
                  </td>
                  <td
                    className={`px-6 py-4 ${
                      isTotalRow
                        ? "font-extrabold text-gray-800"
                        : "text-gray-800 font-semibold text-lg"
                    }`}
                  >
                    {col2 &&
                      !isTotalRow && (
                        <span className="bg-gradient-to-r from-red-100 to-red-50 text-red-700 px-3 py-1 rounded-full text-base">
                          {col2}
                        </span>
                      )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};


const BankDetails = ({ title, icon, datas, headerColor }: {
  title: string;
  icon: React.ReactNode;
  datas: Array<{ col1: string; col2: string }>;
  headerColor: string;
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300">
      <div className={`bg-gradient-to-r ${headerColor} p-6 text-white`}>
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
            {icon}
          </div>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
      </div>
      <div className="p-6 space-y-4">
        {datas.map(({ col1, col2 }, id) => (
          <div key={id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
            <div>
              <div className="text-sm text-gray-600 mb-1">{col1}</div>
              <div className="font-semibold text-gray-800">{col2}</div>
            </div>
            {(col1.includes("A/C No") || col1.includes("IFSC")) && (
              <CopyButton text={col2} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Registration() {
  const registrationCategories = [
    { icon: <Users className="w-6 h-6" />, title: "Student Registration", price: "₹8,000", description: "Special rates for students" },
    { icon: <FileText className="w-6 h-6" />, title: "Researcher Registration", price: "₹9,000", description: "Academic researchers" },
    { icon: <Shield className="w-6 h-6" />, title: "Industry Registration", price: "₹10,000", description: "Industry professionals" },
    { icon: <DollarSign className="w-6 h-6" />, title: "International Registration", price: "$250", description: "Foreign participants" },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-red-600 via-red-700 to-black text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Registration</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Secure your place at IEM ICDC 2026 with our flexible registration options
          </p>
        </div>
      </div>

      <Container className="flex flex-col items-center justify-start gap-12 py-12 mt-12">
        
        {/* Registration Categories Overview */}
        <div className="w-full max-w-6xl">
          <div className="text-center mb-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Registration Details</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full mb-6"></div>
            {/* <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the registration category that best fits your profile and enjoy our competitive rates
            </p> */}
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {registrationCategories.map((category, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-100 p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-red-600 mb-4 flex justify-center">
                  {category.icon}
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{category.title}</h3>
                <div className="text-2xl font-bold text-red-600 mb-2">{category.price}</div>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </div>
            ))}
          </div> */}
        </div>

        {/* Detailed Registration Fees */}
        <div className="w-full max-w-5xl">
          <ModernTable
            title="Registration Fees per Accepted Paper"
            icon={<FileText className="w-6 h-6" />}
            headerColor="from-red-500 to-red-600"
            datas={[
              { col1: "Indian Student", col2: "₹8,000" },
              { col1: "Indian Researcher", col2: "₹9,000" },
              { col1: "Indian Author from Industry", col2: "₹10,000" },
              { col1: "Foreign Author", col2: "$250" },
              { col1: "Extra Page Charges (above 12 pages)", col2: "", className: "font-extrabold text-gray-800 bg-gray-100" },
              { col1: "Indian Author (per extra page)", col2: "₹400" },
              { col1: "Foreign Author (per extra page)", col2: "$50" },
              { col1: "Participation Only (non-authors)", col2: "", className: "font-extrabold text-gray-800 bg-gray-100" },
              { col1: "Indian Participant", col2: "₹3,000" },
              { col1: "Foreign Participant", col2: "$100" },
            ]}
          />
        </div>

        {/* Payment Information */}
        <div className="w-full max-w-6xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Payment Information</h2>
            <p className="text-gray-600">Secure payment options for domestic and international participants</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <BankDetails
              title="Indian Payments (INR)"
              icon={<CreditCard className="w-6 h-6" />}
              headerColor="from-red-500 to-red-600"
              datas={[
                { col1: "In the Favour of", col2: "Institute of Engineering and Management Trust" },
                { col1: "Bank Name", col2: "IDBI Bank" },
                { col1: "Branch", col2: "Sector V, Kolkata" },
                { col1: "A/C No", col2: "184104000054214" },
                { col1: "IFSC Code", col2: "IBKL0000184" },
              ]}
            />

            <BankDetails
              title="International Payments (USD)"
              icon={<DollarSign className="w-6 h-6" />}
              headerColor="from-green-500 to-green-600"
              datas={[
                { col1: "In the Favour of", col2: "Institute of Engineering and Management Trust" },
                { col1: "Bank Name", col2: "Indian Overseas Bank" },
                { col1: "Branch", col2: "Sector V, Kolkata" },
                { col1: "A/C No", col2: "164201000000488" },
                { col1: "IFSC Code", col2: "IOBA0001642" },
              ]}
            />
          </div>
        </div>

        {/* Important Notes */}
        <div className="w-full max-w-4xl">
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-8 text-white text-center shadow-xl">
            <Clock className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Important Registration Notes</h3>
            <div className="space-y-3 text-orange-100">
              <p>✅ Registration is mandatory for all accepted papers</p>
              <p>✅ Certificate and conference kit included with registration</p>
              <p>✅ Payments should be made as per the accepted paper category</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        {/* <div className="w-full max-w-4xl">
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl shadow-xl p-8 md:p-12 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Register?</h3>
            <p className="text-red-100 mb-8 text-lg">
              Complete your registration and secure your spot at IEM ICDC 2026
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/papers" 
                className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Submit Paper First
              </a>
              <a 
                href="mailto:icdc@iem.edu.in" 
                className="bg-red-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-900 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Contact for Registration
              </a>
            </div>
          </div>
        </div> */}

      </Container>
    </>
  );
}
