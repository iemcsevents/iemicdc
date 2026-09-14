import React from "react";
import { Container } from "@/components/Container";
import SingleList from "./SingleList";

export const metadata = {
  title: "Committee | IEM-ICDC 2027",
  description: "IEM-ICDC 2027 Committee details.",
};

const patronMembers = [
  "Mrs. Banani Chakrabarti, President, IEM-UEM Group",
  "Dr. Satyajit Chakrabarti, Vice Chancellor, IEM-UEM Group",
  "Dr. Rajashree Paul, Director, IQAC, IEM-UEM Group"
];

const generalChairMembers = [
  "Dr. Moutushi Singh, Institute of Engineering & Management, Kolkata, India",
  "Dr. Baisakhi Das, Institute of Engineering & Management, Kolkata, India",
  "Dr. Sanchita Ghosh, Institute of Engineering & Management, Kolkata, India"
];

const advisoryCommitteeMembers = [
  "Dr. João Manuel R.S.Tavares, Universidade do Porto, Portugal",
  "Dr. Daniele Giusto, University of Cagliari, Italy",
  "Dr. Xiao-Zhi Gao, University of Eastern Finland",
  "Dr. Michael Sheng, Macquarie University, Australia",
  "Dr. Manuel Rincon, Instituto de Empresa Business School, Spain",
  "Dr. Saïd Mahmoudi, University of MONS Belgium",
  "Dr. Chayapol Kamyod, Mae Fah Luang University, Thailand",
  "Dr. Marcin Paprzycki, Systems Research Institute Polish Academy of Sciences, Poland",
  "Dr. Akshay Kumar Rathore, Singapore Institute of Technology, Singapore",
  "Dr. Nitin Kumar Tripathy, Asian Institute of Technology, Bangkok",
  "Dr. Biplab Sikdar, National University of Singapore",
  "Dr. Kaushik Rajashekara, University of Houston, USA",
  "Dr. Mainak Majumder, Monash University, Australia",
  "Dr. Lalit Garg, University of Malta",
  "Dr. Sivaji Bandyopadhyay, Jadavpur University",
  "Dr. Ling Liu, Georgia Institute of Technology, USA",
  "Dr. Karan Singh, Jawaharlal Nehru University, India",
  "Dr. Jacek Sroka, University of Warsaw",
  "Dr. Subir Kumar Sarkar, Jadavpur University",
  "Dr. Bharat Gupta, NIT, Patna India",
  "Dr. Indrajit Banerjee, IIEST, Shibpur",
  "Dr. P S M Tripathi, Ministry of Communications, Govt of India",
  "Dr. Subhadip Basu, Jadavpur University",
  "Dr. Om Pal, MEIT, Gov. of India",
  "Dr. Aprajita Ojha, IIITDM Jabalpur, India",
  "Dr. Malay Gangopadhyay, IEM Kolkata",
  "Dr. Raja Chakraborty, Jio Reliance Foundation",
  "Dr. Debotosh Bhattacharjee, Jadavpur University",
  "Dr. Arnab Sinha, Amazon, Seattle, USA",
  "Dr. Sujata Dash, Nagaland University",
  "Dr. Jyotsna Kumar Mandal, University of Kalyani",
  "Dr. Dipankar Chakrabarti, CtoE Consultancy Services",
  "Dr. Debashis De, MAKAUT",
  "Mr. Arpan Singha, Cognizant Technology Solutions"
];

const technicalCommitteeMembers = [
  "Dr Sandip Chakraborty, IIT Kharagpur",
  "Dr. Parth Gupta, Coupang, San Francisco USA",
  "Dr. Sanjay Chatterji, IIIT Kalyani",
  "Dr. Indrajit Banerjee, IIEST, Shibpur",
  "Dr. Sivaji Bandyopadhyay, Jadavpur University",
  "Dr. Abhishek Das, Alia University",
  "Dr. Sriparna Saha, MAKAUT",
  "Dr. Pratyusha Rakshit, Jadavpur University",
  "Dr. Anisha Halder Roy, University of Calcutta",
  "Dr. Swarnendu Kr Chakraborty, NIT, Arunachal Pradesh",
  "Dr. Dinesh Dash, NIT, Patna",
  "Dr. Indranil Mitra, PwC",
  "Dr. Somnath Banerjee, University of Tartu, Estonia",
  "Dr. Daniel Hahn, Quantum Servicios Maritimos, Chile",
  "Dr. Diptiman Banerji, IIM Raipur",
  "Dr. Kamarujjaman, MAKAUT",
  "Dr. Dipankar Das, Jadavpur University",
  "Dr. Anupama Mehra, Amity University, Noida",
  "Dr. Parag Kumar Guha Thakurta, NIT, Durgapur, West Bengal",
  "Dr. Anup Kumar Halder, Warsaw University of Technology, Poland",
  "Dr. Khondekar Lutful Hassan, Aliah University",
  "Dr. Souvik Sengupta, Aliah University",
  "Dr. Sourav Pramanik, University of Calcutta",
  "Dr. Samir Malakar, The Arctic University of Norway",
  "Dr. Joy Dutta, Khalifa University",
  "Dr. Deepak Kumar, NIT Meghalaya",
  "Dr. Prabir Kumar Saha, NIT Meghalaya",
  "Dr. Pratik Chattopadhyay, IIT (BHU) Varanasi",
  "Dr. Gopularam Bhanu Prakash, Apple India Pvt. Ltd",
  "Dr. Kaushik Mazumdar, IIT(ISM), Dhanbad"
];

const organizingChairsMembers = [
  "Dr. Moutushi Singh, Institute of Engineering & Management, Kolkata, India",
  "Dr. Baisakhi Das, Institute of Engineering & Management, Kolkata, India",
  "Dr. Sanchita Ghosh, Institute of Engineering & Management, Kolkata, India",
  "Dr. Amit Kumar Das, Institute of Engineering & Management, Kolkata, India"
];

const organizingCommitteeMembers = [
  "Dr. Sukanya Mukherjee, Institute of Engineering & Management, Kolkata, India",
  "Dr. Darothi Sarkar, Institute of Engineering & Management, Kolkata, India",
  "Dr. Anupam Mondal, Institute of Engineering & Management, Kolkata, India",
  "Dr. Sainik Kumar Mahata, Institute of Engineering & Management, Kolkata, India",
  "Dr. Prithwineel Paul, Institute of Engineering & Management, Kolkata, India",
  "Dr. Susovan Jana, Institute of Engineering & Management, Kolkata, India",
  "Dr. Rupayan Das, Institute of Engineering & Management, Kolkata, India",
  "Dr. Avijit Bose, Institute of Engineering & Management, Kolkata, India",
  "Dr. Soumyendu Sekhar Bandhopadhyay, Institute of Engineering & Management, Kolkata, India",
  "Dr. Soma Das, Institute of Engineering & Management, Kolkata, India",
  "Ms. Shreejita Mukherjee, Institute of Engineering & Management, Kolkata, India",
  "Ms. Shubhasri Roy, Institute of Engineering & Management, Kolkata, India",
  "Ms. Kajari Sur, Institute of Engineering & Management, Kolkata, India",
  "Dr. Sudipta Bhuyan, Institute of Engineering & Management, Kolkata, India",
  "Dr. Koushik Dutta, Institute of Engineering & Management, Kolkata, India",
  "Dr. Avipsita Chatterjee, Institute of Engineering & Management, Kolkata, India",
  "Ms. Bavrabi Ghosh, Institute of Engineering & Management, Kolkata, India",
  "Mr. Saikat Dutta, Institute of Engineering & Management, Kolkata, India",
  "Dr. Monalisa De, Institute of Engineering & Management, Kolkata, India",
  "Ms. Anindita Das Bhattacharjee, Institute of Engineering & Management, Kolkata, India",
  "Ms. Shreyashi Dutta, Institute of Engineering & Management, Kolkata, India",
  "Ms. Sayani Chatterjee, Institute of Engineering & Management, Kolkata, India",
  "Ms. Ankita Sen, Institute of Engineering & Management, Kolkata, India",
  "Ms. Sangeeta Sarkar, Institute of Engineering & Management, Kolkata, India",
  "Mr. Partha Chakraborty, Institute of Engineering & Management, Kolkata, India",
  "Mr. Kartik Ghosh, Institute of Engineering & Management, Kolkata, India",
  "Mr. Amit Kumar Roy, Institute of Engineering & Management, Kolkata, India",
  "Mr. Aishik Das, Institute of Engineering & Management, Kolkata, India",
  "Dr. Sourav Malakar, Institute of Engineering & Management, Kolkata, India"
];

export default function Page() {
  return (
    <Container className="flex flex-col items-center justify-start gap-12 pb-16 min-h-screen max-w-full overflow-hidden bg-[#fafafa] bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:40px_40px]">

      {/* Modern Header Section */}
      <div className="w-full max-w-7xl mt-24 px-4 flex flex-col gap-6">
        <div className="w-full flex flex-col items-center justify-center text-center bg-gradient-to-br from-purple-900 via-purple-800 to-black rounded-[2rem] p-10 md:p-16 relative overflow-hidden shadow-2xl border border-purple-500/20 group">

          <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-500/30 blur-[80px] rounded-full pointer-events-none transition-transform duration-700 group-hover:scale-150 z-0"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-600/20 blur-[100px] rounded-full pointer-events-none transition-transform duration-700 group-hover:scale-150 z-0"></div>

          <div className="relative z-10 flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tighter leading-tight mb-4 drop-shadow-lg">
              IEM-ICDC 2027 <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-200">Committee</span>
            </h1>
            <p className="text-lg text-purple-100 max-w-2xl leading-relaxed font-light mt-2">
              Meet the distinguished professionals, academicians, and leaders behind the successful organization of the conference.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl px-4 sm:px-8 flex flex-col pb-12">
        <SingleList title="Patron" members={patronMembers} />
        <SingleList title="General Chairs" members={generalChairMembers} />
        {/* <SingleList title="Advisory Committee" members={advisoryCommitteeMembers} /> */}
        {/* <SingleList title="Technical Committee" members={technicalCommitteeMembers} /> */}
        <SingleList title="Organizing Chairs" members={organizingChairsMembers} />
        <SingleList title="Organizing Committee" members={organizingCommitteeMembers} />
      </div>

    </Container>
  );
}
