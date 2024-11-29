import React, { useState } from 'react';

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



    // ... (same data as the original component)


// LinkedIn SVG Icon
const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-blue-500 hover:text-blue-700">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
);

// Filter Icon SVG
const FilterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-gray-500">
        <path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"/>
    </svg>
);

const Team = () => {
    const [selectedOrganization, setSelectedOrganization] = useState('All');
    const [selectedRole, setSelectedRole] = useState('All');

    const groupByRole = (members) => {
        return members.reduce((groups, member) => {
            if (!groups[member.role]) {
                groups[member.role] = [];
            }
            groups[member.role].push(member);
            return groups;
        }, {});
    };

    const filterMembers = (members) => {
        return members.filter(member => 
            (selectedOrganization === 'All' || member.organization === selectedOrganization) &&
            (selectedRole === 'All' || member.role === selectedRole)
        );
    };

    const uniqueOrganizations = ['All', ...new Set(combinedMembers.map(m => m.organization).filter(org => org))];
    const uniqueRoles = ['All', ...new Set(combinedMembers.map(m => m.role))];

    const groupedMembers = groupByRole(filterMembers(combinedMembers));

    return (
        <section id="team" className="py-16 bg-gradient-to-b from-white to-indigo-100">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
                        Our Exceptional Team
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Meet the talented individuals driving innovation in Production Engineering and Manufacturing
                    </p>
                </div>

                {/* Filter Section */}
                <div className="flex justify-center space-x-4 mb-8">
                    <div className="flex items-center space-x-2">
                        <FilterIcon />
                        <select 
                            value={selectedOrganization} 
                            onChange={(e) => setSelectedOrganization(e.target.value)}
                            className="p-2 border rounded-md shadow-sm"
                        >
                            {uniqueOrganizations.map(org => (
                                <option key={org} value={org}>{org}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FilterIcon />
                        <select 
                            value={selectedRole} 
                            onChange={(e) => setSelectedRole(e.target.value)}
                            className="p-2 border rounded-md shadow-sm"
                        >
                            {uniqueRoles.map(role => (
                                <option key={role} value={role}>{role}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {Object.keys(groupedMembers).map((role) => (
                    <div key={role} className="mb-12">
                        <h3 className="text-3xl font-semibold mb-6 text-center text-indigo-600 border-b-2 border-indigo-300 pb-2">
                            {role}
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                            {groupedMembers[role].map((member, index) => (
                                <div
                                    key={index}
                                    className="transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                                >
                                    <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                                        <div 
                                            className="h-64 bg-cover bg-center"
                                            style={{
                                                backgroundImage: `url(${member.image})`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center'
                                            }}
                                        />
                                        <div className="p-4 text-center bg-gradient-to-b from-white to-gray-100">
                                            <h4 className="text-lg font-bold text-indigo-700">{member.name}</h4>
                                            {member.organization && (
                                                <p className="text-sm text-gray-600 mb-2">{member.organization}</p>
                                            )}
                                            <a
                                                href={member.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-block p-2 rounded-full hover:bg-blue-50 transition"
                                            >
                                                <LinkedInIcon />
                                            </a>
                                        </div>
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