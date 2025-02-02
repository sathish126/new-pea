import React from 'react';
import { motion } from 'framer-motion';
import ParticlesComponent from './particles';

// Combined data for Production Engineering Association (PEA) and Society of Manufacturing Engineers (SME)
const combinedMembers = [
  // Secretary
  { name: "NITIS PRABU M", organization: "PEA", role: "Secretary", image: "/assets/img/Team/SEC/nitis_sec.jpg", linkedin: "https://www.linkedin.com/in/nitisprabu710?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
  { name: "ARUN K", organization: "SME", role: "Secretary", image: "/assets/img/Team/SEC/arun_sec.png", linkedin: "https://www.linkedin.com/in/arun-kumar-02a1771a7" },

  // Joint Secretaries
  { name: "B VIKASHINI", organization: "PEA", role: "Joint Secretary", image: "/assets/img/Team/JOINT_SEC/Vikashini.JPG", linkedin: "https://www.linkedin.com/in/vikashini-balasubramanian-96b90324a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
  { name: "BALAJI C", organization: "PEA", role: "Joint Secretary", image: "/assets/img/Team/JOINT_SEC/balaji.jpeg", linkedin: "https://www.linkedin.com/in/balaji-c-608b2925b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
  { name: "SUBIRAMANIAN V J", organization: "SME", role: "Joint Secretary", image: "/assets/img/Team/JOINT_SEC/subiramanian.jpeg", linkedin: "https://www.linkedin.com/in/subiramanian-v-j-878917249?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
  { name: "R S DIYA VISALI", organization: "SME", role: "Joint Secretary", image: "/assets/img/Team/JOINT_SEC/Diya.jpg", linkedin: "https://linkedin.com/in/smejoinsecretary2" },

  // Senior Executives
  { name: "R R DHIVAGARAN", organization: "PEA", role: "Senior Executive", image: "/assets/img/Team/SENIOR_EXE/dhivagar.JPG", linkedin: "https://linkedin.com/in/seniorexecutive1" },
  { name: "DHINNESH S", organization: "PEA", role: "Senior Executive", image: "/assets/img/Team/SENIOR_EXE/dhinnesh.jpeg", linkedin: "https://www.linkedin.com/in/dhinnesh-s" },
  { name: "SHANMUGAM S", organization: "PEA", role: "Senior Executive", image: "/assets/img/Team/SENIOR_EXE/shanmugam.jpg", linkedin: "https://www.linkedin.com/in/shanmugam-s-195477255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
  { name: "J DEVI SRI", organization: "PEA", role: "Senior Executive", image: "/assets/img/Team/SENIOR_EXE/devisri.jpeg", linkedin: "https://linkedin.com/in/seniorexecutive4" },
  { name: "NANDHAGOPAL S", organization: "SME", role: "Senior Executive", image: "/assets/img/Team/SENIOR_EXE/nandhagopal.jpg", linkedin: "https://www.linkedin.com/in/nandhagopal-sathasivam/" },
  { name: "KRUTHI T P", organization: "SME", role: "Senior Executive", image: "/assets/img/Team/SENIOR_EXE/kruthi.jpg", linkedin: "https://www.linkedin.com/in/kruthi03/" },
  { name: "V JAYASENTHILNATHAN", organization: "SME", role: "Senior Executive", image: "/assets/img/Team/SENIOR_EXE/senthi.jpg", linkedin: "https://www.linkedin.com/in/v-jayasenthil-nathan-2117k?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
  { name: "GOKUL RAMANA V", organization: "SME", role: "Senior Executive", image: "/assets/img/Team/SENIOR_EXE/gokul.JPG", linkedin: "https://www.linkedin.com/in/gokul-ramana-venkatesh-7292602b8" },

  // Junior Executives
  { name: "SUKANTH N R", organization: "PEA", role: "Junior Executive", image: "/assets/img/Team/JUNIOR_EXE/sukanth.jpg", linkedin: "https://linkedin.com/in/juniorexecutive1" },
  { name: "DEEPIKA S P", organization: "PEA", role: "Junior Executive", image: "/assets/img/Team/JUNIOR_EXE/Dheepika.jpg", linkedin: "https://linkedin.com/in/juniorexecutive2" },
  { name: "NHARGUNA NANGAI M B", organization: "PEA", role: "Junior Executive", image: "/assets/img/Team/JUNIOR_EXE/NN.jpeg", linkedin: "https://www.linkedin.com/in/nharguna-nangai-m-b-677b20298/" },
  { name: "NIMESHA S", organization: "PEA", role: "Junior Executive", image: "/assets/img/Team/JUNIOR_EXE/Nimesha.jpg", linkedin: "https://www.linkedin.com/in/nimesha20067872006787?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
  { name: "AISHAA NIHAR Z", organization: "PEA", role: "Junior Executive", image: "/assets/img/Team/JUNIOR_EXE/aisha.jpeg", linkedin: "https://www.linkedin.com/in/aishaa-nihar-z-7b83a4276?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
  { name: "KANCIA ROSLIN MARY", organization: "PEA", role: "Junior Executive", image: "/assets/img/Team/JUNIOR_EXE/Kancia.jpg", linkedin: "https://linkedin.com/in/juniorexecutive6" },
  { name: "RITHIKA G", organization: "SME", role: "Junior Executive", image: "/assets/img/Team/JUNIOR_EXE/rithika.jpg", linkedin: "https://www.linkedin.com/in/rithika-govindaraj08?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
  { name: "VINOTHINI D", organization: "SME", role: "Junior Executive", image: "/assets/img/Team/JUNIOR_EXE/Vinothini.jpg", linkedin: "https://linkedin.com/in/smejuniorexecutive2" },
  { name: "KRISITHA J S", organization: "SME", role: "Junior Executive", image: "/assets/img/Team/JUNIOR_EXE/Krisitha.jpg", linkedin: "https://www.linkedin.com/in/krisitha-j-s-b342562b3" },
  { name: "MOHAMED VASEEM J", organization: "SME", role: "Junior Executive", image: "/assets/img/Team/JUNIOR_EXE/vaseem.jpeg", linkedin: "https://www.linkedin.com/in/mohamed-vaseem-5bb31b28b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
  { name: "MANJUSWETHA S V", organization: "SME", role: "Junior Executive", image: "/assets/img/Team/JUNIOR_EXE/Manjuswetha.jpg", linkedin: "https://www.linkedin.com/in/manjuswetha-s-v-b981a42b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
  { name: "KISHORE KANΝΑΝ Β", organization: "SME", role: "Junior Executive", image: "/assets/img/Team/JUNIOR_EXE/kishorekannan.jpg", linkedin: "https://www.linkedin.com/in/kishore04k?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },

  // Common volunteers for both organizations
  { name: "THIRUSURIYAA S U", role: "Volunteer", image: "/assets/assets/img/volunteer1.jpg", linkedin: "https://linkedin.com/in/volunteer1" },
  { name: "N MUGILAN", role: "Volunteer", image: "/assets/img/volunteer2.jpg", linkedin: "https://linkedin.com/in/volunteer2" },
  { name: "GIRIDHARAN T", role: "Volunteer", image: "/assets/img/Team/VOLUNTEERS/giri.jpg", linkedin: "https://linkedin.com/in/volunteer3" },
  { name: "SABARISAN E",  role: "Volunteer", image: "/assets/img/Team/VOLUNTEERS/sabari.jpeg", linkedin: "https://linkedin.com/in/volunteer4" },
  { name: "ADHIYAN KHAN A", role: "Volunteer", image: "/assets/img/Team/VOLUNTEERS/adhiyan.jpg", linkedin: "https://linkedin.com/in/volunteer5" },
  { name: "NEKA S", role: "Volunteer", image: "/assets/img/Team/VOLUNTEERS/Neka.jpg", linkedin: "https://www.linkedin.com/in/neka-s-a81071325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
  { name: "RIVALIN R",  role: "Volunteer", image: "/assets/img/volunteer7.jpg", linkedin: "https://linkedin.com/in/volunteer7" },
  { name: "SRIVARDHNY D S", role: "Volunteer", image: "/assets/img/Team/VOLUNTEERS/sri.jpeg", linkedin: "https://linkedin.com/in/volunteer8" },
  { name: "ADITHYA R B", role: "Volunteer", image: "/assets/img/Team/VOLUNTEERS/adhithya.jpeg", linkedin: "https://linkedin.com/in/volunteer9" },
  { name: "SHARVESH D", role: "Volunteer", image: "/assets/img/volunteer10.jpg", linkedin: "https://linkedin.com/in/volunteer10" },
];

// LinkedIn SVG Icon
const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-blue-500 hover:text-blue-700">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

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
    <main className="relative min-h-screen overflow-hidden">
      {/* Particles background */}
      <ParticlesComponent />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-48 pt-36">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-6xl font-romanSD mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 animate-gradient-x">
            Our Exceptional Team
          </h2>
        </motion.div>

        {/* Team Members */}
        {Object.keys(groupedMembers).map((role) => (
          <motion.div
            key={role}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <h3 className="text-3xl font-serif mb-6 text-center text-indigo-600 border-b-2 border-indigo-300 pb-2">
              {role}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {groupedMembers[role].map((member, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
                >
                  {/* Image */}
                  <div 
                    className="h-64 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${member.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h4 className="text-lg font-bold">{member.name}</h4>
                      {member.organization && (
                        <p className="text-sm">{member.organization}</p>
                      )}
                      <p className="text-sm">{member.role}</p>
                    </div>
                  </div>

                  {/* LinkedIn Icon */}
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white transition"
                  >
                    <LinkedInIcon />
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
};

export default Team;