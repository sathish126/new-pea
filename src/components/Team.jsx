// src/components/Team.js
import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

// Combined data for Production Engineering Association (PEA) and Society of Manufacturing Engineers (SME)
const combinedMembers = [
    // Secretary
    { name: "NITIS PRABU M", organization: "PEA", role: "Secretary", image: "/assets/img/Team/SEC/nitis_sec.jpg", linkedin: "https://linkedin.com/in/peasecretary" },
    { name: "ARUN K", organization: "SME", role: "Secretary", image: "/assets/img/Team/SEC/arun_sec.png", linkedin: "https://linkedin.com/in/smesecetary" },

    // Joint Secretaries
    { name: "B VIKASHINI", organization: "PEA", role: "Joint Secretary", image: "/assets/img/Team/JOINT_SEC/Vikashini.JPG", linkedin: "https://linkedin.com/in/joinsecretary1" },
    { name: "BALAJI C", organization: "PEA", role: "Joint Secretary", image: "/assets/img/Team/JOINT_SEC/balaji.jpeg", linkedin: "https://linkedin.com/in/joinsecretary2" },
    { name: "SUBIRAMANIAN V J", organization: "SME", role: "Joint Secretary", image: "/assets/img/Team/JOINT_SEC/subiramanian.jpg", linkedin: "https://linkedin.com/in/smejoinsecretary1" },
    { name: "R S DIYA VISALI", organization: "SME", role: "Joint Secretary", image: "/assets/img/Team/JOINT_SEC/Diya.jpg", linkedin: "https://linkedin.com/in/smejoinsecretary2" },

    // Senior Executives
    { name: "R R DHIVAGARAN", organization: "PEA", role: "Senior Executive", image: "/assets/img/Team/SENIOR_EXE/dhivagar.JPG", linkedin: "https://linkedin.com/in/seniorexecutive1" },
    { name: "DHINNESH S", organization: "PEA", role: "Senior Executive", image: "/assets/img/Team/SENIOR_EXE/dhinnesh.jpeg", linkedin: "https://linkedin.com/in/seniorexecutive2" },
    { name: "SHANMUGAM S", organization: "PEA", role: "Senior Executive", image: "/assets/img/Team/SENIOR_EXE/shanmugam.jpg", linkedin: "https://linkedin.com/in/seniorexecutive3" },
    { name: "J DEVI SRI", organization: "PEA", role: "Senior Executive", image: "/assets/img/Team/SENIOR_EXE/devisri.jpg", linkedin: "https://linkedin.com/in/seniorexecutive4" },
    { name: "NANDHAGOPAL S", organization: "SME", role: "Senior Executive", image: "/assets/img/Team/SENIOR_EXE/nandhagopal.jpg", linkedin: "https://linkedin.com/in/smeseniorexecutive1" },
    { name: "KRUTHI T P", organization: "SME", role: "Senior Executive", image: "/assets/img/Team/SENIOR_EXE/kruthi.jpg", linkedin: "https://linkedin.com/in/smeseniorexecutive2" },
    { name: "V JAYASENTHILNATHAN", organization: "SME", role: "Senior Executive", image: "/assets/img/Team/SENIOR_EXE/senthi.jpg", linkedin: "https://linkedin.com/in/smeseniorexecutive3" },
    { name: "GOKUL RAMANA V", organization: "SME", role: "Senior Executive", image: "/assets/img/Team/SENIOR_EXE/gokul.JPG", linkedin: "https://linkedin.com/in/smeseniorexecutive4" },

    // Junior Executives
    { name: "SUKANTH N R", organization: "PEA", role: "Junior Executive", image: "/assets/img/Team/JUNIOR_EXE/Sukanth .jpg", linkedin: "https://linkedin.com/in/juniorexecutive1" },
    { name: "DEEPIKA S P", organization: "PEA", role: "Junior Executive", image: "/assets/img/Team/JUNIOR_EXE/Dheepika.jpg", linkedin: "https://linkedin.com/in/juniorexecutive2" },
    { name: "NHARGUNA NANGAI M B", organization: "PEA", role: "Junior Executive", image: "/assets/img/Team/JUNIOR_EXE/junior_executive3.jpg", linkedin: "https://linkedin.com/in/juniorexecutive3" },
    { name: "NIMESHA S", organization: "PEA", role: "Junior Executive", image: "/assets/img/Team/JUNIOR_EXE/Nimesha.jpg", linkedin: "https://linkedin.com/in/juniorexecutive4" },
    { name: "AISHAA NIHAR Z", organization: "PEA", role: "Junior Executive", image: "/assets/img/Team/JUNIOR_EXE/junior_executive5.jpg", linkedin: "https://linkedin.com/in/juniorexecutive5" },
    { name: "KANCIA ROSLIN MARY", organization: "PEA", role: "Junior Executive", image: "/assets/img/Team/JUNIOR_EXE/Kancia.jpg", linkedin: "https://linkedin.com/in/juniorexecutive6" },
    { name: "RITHIKA G", organization: "SME", role: "Junior Executive", image: "/assets/img/Team/JUNIOR_EXE/rithika.jpg", linkedin: "https://linkedin.com/in/smejuniorexecutive1" },
    { name: "VINOTHINI D", organization: "SME", role: "Junior Executive", image: "/assets/img/Team/JUNIOR_EXE/Vinothini.jpg", linkedin: "https://linkedin.com/in/smejuniorexecutive2" },
    { name: "KRISITHA J S", organization: "SME", role: "Junior Executive", image: "/assets/img/Team/JUNIOR_EXE/Krisitha.jpg", linkedin: "https://linkedin.com/in/smejuniorexecutive3" },
    { name: "MOHAMED VASEEM J", organization: "SME", role: "Junior Executive", image: "/assets/img/Team/JUNIOR_EXE/Mohamed Vaseem.jpg", linkedin: "https://linkedin.com/in/smejuniorexecutive4" },
    { name: "MANJUSWETHA S V", organization: "SME", role: "Junior Executive", image: "/assets/img/Team/JUNIOR_EXE/Manjuswetha.jpg", linkedin: "https://linkedin.com/in/smejuniorexecutive5" },
    { name: "KISHORE KANΝΑΝ Β", organization: "SME", role: "Junior Executive", image: "/assets/img/Team/JUNIOR_EXE/kishorekannan.jpg", linkedin: "https://linkedin.com/in/smejuniorexecutive6" },

    // Common volunteers for both organizations
    { name: "THIRUSURIYAA S U", role: "Volunteer", image: "/assets/assets/img/volunteer1.jpg", linkedin: "https://linkedin.com/in/volunteer1" },
    { name: "N MUGILAN", role: "Volunteer", image: "/assets/img/volunteer2.jpg", linkedin: "https://linkedin.com/in/volunteer2" },
    { name: "GIRIDHARAN T", role: "Volunteer", image: "/assets/img/Team/VOLUNTEERS/Giri Dharnan.jpg", linkedin: "https://linkedin.com/in/volunteer3" },
    { name: "SABARISAN E",  role: "Volunteer", image: "/assets/img/volunteer4.jpg", linkedin: "https://linkedin.com/in/volunteer4" },
    { name: "ADHIYAN KHAN A", role: "Volunteer", image: "/assets/img/volunteer5.jpg", linkedin: "https://linkedin.com/in/volunteer5" },
    { name: "NEKA S", role: "Volunteer", image: "/assets/img/Team/VOLUNTEERS/Neka.jpg", linkedin: "https://linkedin.com/in/volunteer6" },
    { name: "RIVALIN R",  role: "Volunteer", image: "/assets/img/volunteer7.jpg", linkedin: "https://linkedin.com/in/volunteer7" },
    { name: "SRIVARDHNY D S", role: "Volunteer", image: "/assets/img/volunteer8.jpg", linkedin: "https://linkedin.com/in/volunteer8" },
    { name: "ADITHYA R B", role: "Volunteer", image: "/assets/img/volunteer9.jpg", linkedin: "https://linkedin.com/in/volunteer9" },
    { name: "SHARVESH D", role: "Volunteer", image: "/assets/img/volunteer10.jpg", linkedin: "https://linkedin.com/in/volunteer10" },
];



const Team = () => {
    const groupByRole = (members) => {
        return members.reduce((groups, member) => {
            if (!groups[member.role]) {
                groups[member.role] = [];
            }
            groups[member.role].push(member);
            return groups;
        }, {});
    };

    const groupedMembers = groupByRole(combinedMembers);

    return (
        <section id="team" className="py-12 bg-gradient-to-b from-white to-fuchsia-400">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-5xl font-bold text-center mb-12 text-black">Our People</h2>
                {Object.keys(groupedMembers).map((role) => (
                    <div key={role} className="mb-8">
                        <h3 className="text-2xl font-semibold mb-4 text-green-600">{role}</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                            {groupedMembers[role].map((member, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center"
                                >
                                    {/* Card with Full Image Background */}
                                    <div
                                        className="relative w-48 h-64 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 overflow-hidden"
                                    >
                                        {/* Background Image */}
                                        <div
                                            className="absolute inset-0 bg-cover bg-center"
                                            style={{
                                                backgroundImage: `url(${member.image})`,
                                            }}
                                        ></div>
                                    </div>

                                    {/* Name, Organization, and LinkedIn */}
                                    <div className="mt-4 text-center">
                                        <h3 className="text-lg font-semibold text-amber-500">{member.name} </h3>
                                        <p className="text-sm text-black">{member.organization}</p>
                                        <a
                                            href={member.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-1 inline-block text-blue-400 hover:text-blue-500 transition"
                                        >
                                            <FaLinkedin className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Team;
