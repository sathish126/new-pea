import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import ParticlesComponent from "./particles";

const Accommodation = () => {
  // Add scroll progress using Framer Motion hooks
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <main className="relative min-h-screen overflow-hidden bg-transparent">
      {/* Smooth Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-purple-600 z-50"
        style={{ scaleX }}
      />

      {/* Particles background */}
      <ParticlesComponent />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 sm:py-24 lg:py-36">
        {/* Registration Fee Details Section */}
      

        {/* Accommodation Details Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center mb-8 sm:mb-16"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-romanSD mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400 animate-gradient-x">
            ACCOMMODATION DETAILS
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 font-serif">Your comfort is our priority</p>
        </motion.div>

        {/* Guidelines Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-br from-purple-800/70 to-blue-800/70 p-6 sm:p-8 rounded-3xl shadow-2xl border border-purple-500/20 backdrop-blur-lg hover:shadow-purple-500/40 transition-all mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-romanSD text-center mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400 animate-gradient-x">
            GUIDELINES
          </h2>
          <ul className="list-disc list-inside text-gray-200 font-medium space-y-2 sm:space-y-3 text-base sm:text-lg">
            <li>Participants who need hostel accommodation should inform us in advance.</li>
            <li>Participants can pay their accommodation fees while lodging (only cash is accepted).</li>
            <li>Participants should follow the hostel rules and regulations strictly.</li>
            <li>All students must carry a valid government ID card.</li>
            <li>Participants should follow the Hostel rules and regulations  strictly.</li>
          </ul>
        </motion.div>

        {/* Accommodation Details Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-br from-purple-800/70 to-blue-800/70 p-6 sm:p-8 rounded-3xl shadow-2xl border border-purple-500/20 backdrop-blur-lg hover:shadow-purple-500/40 transition-all mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-romanSD text-center mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400 animate-gradient-x">
            ACCOMMODATION FEES
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-purple-500/20 mt-4">
              <thead>
                <tr className="bg-purple-600/50">
                  <th className="border border-purple-500/20 p-2 sm:p-4 text-gray-200 font-medium text-lg sm:text-xl">BOYS HOSTEL</th>
                  <th className="border border-purple-500/20 p-2 sm:p-4 text-gray-200 font-medium text-lg sm:text-xl">GIRLS HOSTEL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-purple-500/20 p-2 sm:p-4 text-gray-200 font-medium">Food + 3 sharing room(common bath) - ₹400 / day</td>
                  <td className="border border-purple-500/20 p-2 sm:p-4 text-gray-200 font-medium">Food + 2 sharing room (common bath) - ₹400 / day</td>
                </tr>
                <tr>
                  <td className="border border-purple-500/20 p-2 sm:p-4 text-gray-200 font-medium">3 sharing room(common bath) - ₹250 / day</td>
                  <td className="border border-purple-500/20 p-2 sm:p-4 text-gray-200 font-medium">Food + 3 sharin groom (attached bath) - ₹750 / day</td>
                </tr>
                <tr>
                  <td className="border border-purple-500/20 p-2 sm:p-4 text-gray-200 font-medium">Dormitory room (8 sharing) - ₹50 / day</td>
                  <td className="border border-purple-500/20 p-2 sm:p-4 text-gray-200 font-medium">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
        {/* Hostel Rules Section */}
<motion.div
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.6 }}
  className="bg-gradient-to-br from-purple-800/70 to-blue-800/70 p-6 sm:p-8 rounded-3xl shadow-2xl border border-purple-500/20 backdrop-blur-lg hover:shadow-purple-500/40 transition-all mb-8 sm:mb-12"
>
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-romanSD text-center mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400 animate-gradient-x">
    HOSTEL RULES AND REGULATIONS
  </h2>
  <div className="space-y-4">
    <div className="grid grid-cols-1 gap-4">
      {[
        {
          id: 1,
          rule: "Participants should not enter into other blocks apart from the allotted place."
        },
        {
          id: 2,
          rule: "Participants are asked to take food in their respective mess only."
        },
        {
          id: 3,
          rule: "Participants are asked to contact the volunteers for any sort of help. They should not take their own actions."
        },
        {
          id: 4,
          rule: "Participants are asked to cooperate with block/mess supervisors in any kind of ID check."
        },
        {
          id: 5,
          rule: "Participants should not make any noise during the sleeping hours."
        },
        {
          id: 6,
          rule: "Participants should not enter into the hostel without registration in the hostel office. They should contact the allotted volunteers at the time of arrival at the hostel."
        },
        {
          id: 7,
          rule: "Participants should not damage any property given to them."
        }
      ].map((item) => (
        <div
          key={item.id}
          className="flex items-start gap-4 p-4 bg-purple-600/20 rounded-lg border border-purple-500/30 hover:border-purple-500/50 transition-all"
        >
         
          <p className="text-gray-200 font-medium leading-relaxed">{item.rule}</p>
        </div>
      ))}
    </div>
  </div>
</motion.div>

        {/* Payment Guidelines Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-br from-purple-800/70 to-blue-800/70 p-6 sm:p-8 rounded-3xl shadow-2xl border border-purple-500/20 backdrop-blur-lg hover:shadow-purple-500/40 transition-all mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-romanSD text-center mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400 animate-gradient-x">
            PAYMENT GUIDELINES
          </h2>
          <ul className="list-disc list-inside text-gray-200 font-medium space-y-2 sm:space-y-3 text-base sm:text-lg">
            <li>Prior registration to any event is required; on-spot registrations will be considered.</li>
            <li>Registration fee must be paid to the mentioned bank account.</li>
            <li>Once the registration fee is paid, it is non-refundable.</li>
            <li>The transaction ID and the screenshot of the payment must be entered and uploaded in Google Forms.</li>
            <li>In case of a team event, all members must register individually.</li>
            <li>A participant can participate in a maximum of 4 events.</li>
            <li>A confirmation mail will be sent upon successful payment and registration.</li>
          </ul>
        </motion.div>

        {/* Bank Details Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="bg-gradient-to-br from-purple-800/70 to-blue-800/70 p-6 sm:p-8 rounded-3xl shadow-2xl border border-purple-500/20 backdrop-blur-lg hover:shadow-purple-500/40 transition-all mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-romanSD text-center mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400 animate-gradient-x">
            BANK DETAILS
          </h2>
          <div className="text-gray-200 font-medium space-y-2 sm:space-y-3 text-base sm:text-lg">
            <p><strong className="text-pink-400">Name of Account Holder:</strong> PSG Center for Nonformal and Continuing Education</p>
            <p><strong className="text-pink-400">Account Number:</strong> 1481267367</p>
            <p><strong className="text-pink-400">IFSC Code:</strong> CBIN0280913</p>
            <p><strong className="text-pink-400">Bank Name:</strong> Central Bank of India</p>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default Accommodation;