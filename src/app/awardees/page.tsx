import { Container } from "@/components/Container";
import { promises as fs } from 'fs';
import Image from "next/image";
import { Award, Star, Trophy, Medal } from "lucide-react";

export default async function Awardees() {
    const data: any = await fs.readFile(process.cwd() + '/data.json', 'utf8')
    const parsedData = JSON.parse(data)

    const awardIcons = [
        <Trophy key="trophy" className="w-8 h-8" />,
        <Medal key="medal" className="w-8 h-8" />,
        <Award key="award" className="w-8 h-8" />,
        <Star key="star" className="w-8 h-8" />
    ];

    return (
        <>
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-red-600 via-red-700 to-black text-white py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <div className="flex justify-center items-center space-x-4 mb-6">
                        <Trophy className="w-12 h-12 text-yellow-400" />
                        <h1 className="text-4xl md:text-6xl font-bold">Awardees</h1>
                        <Award className="w-12 h-12 text-yellow-400" />
                    </div>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                        Celebrating excellence and outstanding contributions to the field of engineering and technology
                    </p>
                </div>
            </div>

            <Container className="py-12 mt-12">
                {/* Introduction Section */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Distinguished Awardees</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        We honor exceptional individuals who have made remarkable contributions to their respective fields, 
                        advancing knowledge and inspiring future generations of researchers and innovators.
                    </p>
                </div>

                {/* Awardees Grid */}
                <div className="space-y-16">
                    {parsedData.Awardees.map(({ title, name, designation, description, image }: any, index: number) => (
                        <div key={index} className="relative">
                            {/* Award Badge */}
                            <div className="flex justify-center mb-8">
                                <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-full shadow-lg flex items-center space-x-3">
                                    <div className="text-yellow-300">
                                        {awardIcons[index % awardIcons.length]}
                                    </div>
                                    <span className="font-bold text-lg">{title}</span>
                                </div>
                            </div>

                            {/* Awardee Card */}
                            <div className={`flex flex-col lg:flex-row ${index % 2 === 1 && "lg:flex-row-reverse"} items-center gap-12 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12 hover:shadow-2xl transition-all duration-500`}>
                                
                                {/* Image Section */}
                                <div className="flex-shrink-0">
                                    <div className="relative group">
                                        <div className="absolute -inset-4 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                                        <div className="relative bg-white p-2 rounded-2xl shadow-lg">
                                            <Image 
                                                src={image} 
                                                width={400} 
                                                height={400} 
                                                alt={name}
                                                className="w-80 h-80 object-cover rounded-xl shadow-md" 
                                            />
                                        </div>
                                        <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-900 p-2 rounded-full shadow-lg">
                                            <Star className="w-6 h-6" />
                                        </div>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="flex-1 space-y-6">
                                    <div className="text-center lg:text-left">
                                        <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">{name}</h3>
                                        <div className="bg-gradient-to-r from-red-100 to-red-50 text-red-700 px-4 py-2 rounded-full inline-block font-semibold text-lg mb-4">
                                            {designation}
                                        </div>
                                    </div>
                                    
                                    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                                        <div 
                                            className="text-gray-700 leading-relaxed text-lg prose prose-lg max-w-none" 
                                            dangerouslySetInnerHTML={{ __html: description }}
                                        />
                                    </div>

                                    {/* Achievement Highlight */}
                                    <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl p-4">
                                        <div className="flex items-center space-x-2 text-yellow-700">
                                            <Medal className="w-5 h-5" />
                                            <span className="font-semibold">Distinguished Achievement</span>
                                        </div>
                                        <p className="text-yellow-600 mt-2">
                                            Recognized for exceptional contributions and leadership in advancing the field of technology and innovation.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="mt-20">
                    <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl shadow-xl p-8 md:p-12 text-white text-center">
                        <Trophy className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">Inspiring Excellence</h3>
                        <p className="text-red-100 mb-8 text-lg max-w-3xl mx-auto">
                            Our awardees represent the pinnacle of achievement in their respective fields. 
                            Their dedication and contributions continue to inspire and shape the future of technology and innovation.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a 
                                href="/papers" 
                                className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                Submit Your Research
                            </a>
                            <a 
                                href="/about" 
                                className="bg-red-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-900 transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                Learn More About IEM-ICDC
                            </a>
                        </div>
                    </div>
                </div>

            </Container>
        </>
    )
}