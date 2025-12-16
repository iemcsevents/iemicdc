import { Container } from "@/components/Container";
import { promises as fs } from 'fs';
import { Users, Crown, Award, Star } from 'lucide-react';
import SingleList from "./SingleList";

const getCommitteeIcon = (title: string) => {
  if (title.toLowerCase().includes('chair') || title.toLowerCase().includes('general')) {
    return <Crown className="w-6 h-6 text-red-600" />;
  }
  if (title.toLowerCase().includes('advisory')) {
    return <Star className="w-6 h-6 text-red-600" />;
  }
  if (title.toLowerCase().includes('program')) {
    return <Award className="w-6 h-6 text-green-600" />;
  }
  return <Users className="w-6 h-6 text-purple-600" />;
};


const committeeList = {
  "Committees": {
    "Patron": [
      "Mrs. Banani Chakrabarti, President, IEM-UEM Group",
      "Dr. Satyajit Chakrabarti, Director, Institute of Engineering and Management, Kolkata",
      "Dr. Rajashree Paul, Director, IQAC, IEM-UEM Group"
    ],
    "General Chair": [
      "Dr. Moutushi Singh, Institute of Engineering and Management, Kolkata, India",
      "Dr. Baisakhi Das, Institute of Engineering and Management, Kolkata, India",
      "Dr. Sanchita Ghosh, Institute of Engineering and Management, Kolkata, India"
    ],
    "Advisory Committee": [
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
      "Dr. Karan Singh, Jawaharlal Nehru University,India",
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
    ],
    "Technical Committee": [
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
      "Dr. Kamarujjaman, MAKAUT",
      "Dr. Dipankar Das, Jadavpur University",
      "Dr. Anupama Mehra, Amity University, Noida",
      "Dr. Parag Kumar Guha Thakurta, NIT, Durgapur, West Bengal.",
      "Dr. Anup Kumar Halder, Warsaw University of Technology, Poland",
      "Dr. Khondekar Lutful Hassan, Aliah University",
      "Dr. Souvik Sengupta, Aliah University",
      "Dr. Sourav Pramanik, University of Calcutta",
      "Dr. Samir Malakar, The Arctic University of Norway,",
      "Dr. Joy Dutta, Khalifa University",
      "Dr. Deepak Kumar, NIT Meghalaya",
      "Dr. Prabir Kumar Saha, NIT Meghalaya",
      "Dr. Pratik Chattopadhyay, IIT (BHU) Varanasi",
      "Dr. Gopularam Bhanu Prakash, Apple India Pvt. Ltd",
      "Dr. Kaushik Mazumdar, IIT(ISM), Dhanbad"
    ],
    "Organizing Chairs": [
      "Dr. Moutushi Singh, Institute of Engineering and Management, Kolkata, India",
      "Dr. Baisakhi Das, Institute of Engineering and Management, Kolkata, India",
      "Dr. Sanchita Ghosh, Institute of Engineering and Management, Kolkata, India",
      "Dr. Amit Kumar Das, Institute of Engineering and Management, Kolkata, India"
    ],
    "Organizing Committee": [
      "Dr. Sukanya Mukherjee, Institute of Engineering and Management, Kolkata, India",
      "Dr. Darothi Sarkar, Institute of Engineering and Management, Kolkata, India",
      "Dr. Anupam Mondal, Institute of Engineering and Management, Kolkata, India",
      "Dr. Sainik Kumar Mahata, Institute of Engineering and Management, Kolkata, India",
      "Dr. Prithwineel Paul, Institute of Engineering and Management, Kolkata, India",
      "Dr. Susovan Jana, Institute of Engineering and Management, Kolkata, India",
      "Dr. Rupayan Das, Institute of Engineering and Management, Kolkata, India",
      "Dr. Subhabrata Sengupta, Institute of Engineering and Management, Kolkata, India",
      "Dr. Avijit Bose, Institute of Engineering and Management, Kolkata, India",
      "Dr. Soumyendu Sekhar Bandhopadhyay, Institute of Engineering and Management, Kolkata, India",
      "Dr. Soma Das, Institute of Engineering and Management, Kolkata, India",
      "Ms. Shreejita Mukherjee, Institute of Engineering and Management, Kolkata, India",
      "Ms. Shubhasri Roy, Institute of Engineering and Management, Kolkata, India",
      "Ms. Kajari Sur, Institute of Engineering and Management, Kolkata, India",
      "Dr. Sudipta Bhuyan. Institute of Engineering and Management, Kolkata, India",
      "Dr. Koushik Dutta. Institute of Engineering and Management, Kolkata, India",
      "Dr. Avipsita Chatterjee, Institute of Engineering and Management, Kolkata, India",
      "Ms. Shubhasri Roy, Institute of Engineering and Management, Kolkata, India",
      "Ms. Bavrabi Ghosh, Institute of Engineering and Management, Kolkata, India",
      "Mr. Saikat Dutta, Institute of Engineering and Management, Kolkata, India",
      "Dr. Monalisa De, Institute of Engineering and Management, Kolkata, India",
      "Ms. Anindita Das Bhattacharjee, Institute of Engineering and Management, Kolkata, India",
      "Ms. Shreyashi Dutta, Institute of Engineering and Management, Kolkata, India",
      "Dr. Tribikram Choudhury, Institute of Engineering and Management, Kolkata, India",
      "Mr. Koushik Banerjee, Institute of Engineering and Management, Kolkata, India",
      "Ms. Sayani Chatterjee, Institute of Engineering and Management, Kolkata, India",
      "Ms. Ankita Sen, Institute of Engineering and Management, Kolkata, India",
      "Ms. Sangeeta Sarkar, Institute of Engineering and Management, Kolkata, India",
      "Dr. Ardhendu Sarkar, Institute of Engineering and Management, Kolkata, India",
      "Dr. Suvojit Acharjee, Institute of Engineering and Management, Kolkata, India",
      "Dr. Swagatam Basu, Institute of Engineering and Management, Kolkata, India",
      "Mr. Pulak Baral, Institute of Engineering and Management, Kolkata, India",
      "Mr Subindu Saha, Institute of Engineering and Management, Kolkata, India",
      "Dr. Soumadip Biswas, Institute of Engineering and Management, Kolkata, India",
      "Mr. Rabi Narayan Behera, Institute of Engineering and Management, Kolkata, India",
      "Dr. Amit Kumar Mondal, Institute of Engineering and Management, Kolkata, India",
      "Mr. Partha Sarathi Paul, Institute of Engineering and Management, Kolkata, India",
      "Dr. Rakesh Das, Institute of Engineering and Management, Kolkata, India",
      "Dr. Ayan Chaudhuri, Institute of Engineering and Management, Kolkata, India",
      "Ms. Bijoyini Baghchi, Institute of Engineering and Management, Kolkata, India",
      "Dr. Sobya Devraj, Institute of Engineering and Management, Kolkata, India",
      "Mr. Apurba Paul, Institute of Engineering and Management, Kolkata, India",
      "Dr. Tanima Bhowmik, Institute of Engineering and Management, Kolkata, India",
      "Mr. Partha Chakraborty, Institute of Engineering and Management, Kolkata, India",
      "Ms. Mohuya Ghosh, Institute of Engineering and Management, Kolkata, India",
      "Mr. Kartik Ghosh, Institute of Engineering and Management, Kolkata, India",
      "Mr. Pinaki Karmakar, Institute of Engineering and Management, Kolkata, India",
      "Mr. Amit Kumar Roy, Institute of Engineering and Management, Kolkata, India",
      "Mr. Aishik Das, Institute of Engineering and Management, Kolkata, India",
      
    ]
  },
}
const CommitteeModule = ({ title, list }: { title: string; list: Array<string> }) => {
  const icon = getCommitteeIcon(title);

  return (
    <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl border border-gray-100 p-8 mb-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-center space-x-4 mb-6">
        <div className="p-3 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl">
          {icon}
        </div>
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">{title}</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full mt-2"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {list.map((item, index) => (
          <div
            key={index}
            className="group flex items-center space-x-3 p-4 bg-white rounded-xl border border-gray-100 hover:border-red-200 hover:bg-red-50/30 transition-all duration-200"
          >
            <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-red-600 rounded-full group-hover:scale-125 transition-transform duration-200"></div>
            <span className="text-gray-700 group-hover:text-gray-800 font-medium text-sm md:text-base leading-relaxed">
              {item}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-6 text-right">
        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
          {list.length} Member{list.length !== 1 ? 's' : ''}
        </span>
      </div>
    </div>
  );
};

export default async function Committee() {
  let data: any = await fs.readFile(process.cwd() + '/data_new.json', 'utf8')
  data = JSON.parse(data)

  const committeeEntries = Object.entries(data.Committees);
  const sections = committeeList.Committees;

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-red-600 via-red-700 to-black text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Committee</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Meet the distinguished organizing committee of IEM ICDC 2026
          </p>
        </div>
      </div>

      <Container className="flex flex-col items-center justify-start py-8 mt-12">

        {/* Stats Section */}
        {/* <div className="w-full max-w-6xl mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-6 text-white text-center shadow-lg">
              <div className="text-2xl md:text-3xl font-bold">{committeeEntries.length}</div>
              <div className="text-red-100 text-sm mt-1">Committees</div>
            </div>
            <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-6 text-white text-center shadow-lg">
              <div className="text-2xl md:text-3xl font-bold">
                {Object.values(data.Committees).flat().length}
              </div>
              <div className="text-red-100 text-sm mt-1">Total Members</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white text-center shadow-lg">
              <div className="text-2xl md:text-3xl font-bold">3</div>
              <div className="text-purple-100 text-sm mt-1">Days Event</div>
            </div>
          </div>
        </div> */}

        {/* Introduction */}
        <div className="w-full max-w-4xl mb-12 text-center">
          <h2 className="lg:text-5xl text-4xl font-bold text-gray-800">
            IEM ICDC 2026 Committee
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full mt-3"></div>
        </div>


        {/* Committee Sections */}
        {/* <div className="w-full max-w-6xl">
          {Object.entries(data.Committees).map(([key, list]: [string, any]) => (
            <CommitteeModule key={key} title={key} list={list} />
          ))}
        </div> */}

        <div className="w-full max-w-6xl">
          {Object.entries(sections).map(([title, members]) => (
            <SingleList key={title} title={title} members={members} />
          ))}
        </div>

        {/* Contact Section */}
        {/* <div className="w-full max-w-4xl mt-12">
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl shadow-xl p-8 md:p-12 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Get in Touch</h3>
            <p className="text-red-100 mb-8 text-lg">
              Have questions about the conference? Our organizing committee is here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:icdc@iem.edu.in" 
                className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Contact Committee
              </a>
              <a 
                href="/venue" 
                className="bg-red-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-900 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                View Venue Details
              </a>
            </div>
          </div>
        </div> */}

      </Container>
    </>
  );
}
