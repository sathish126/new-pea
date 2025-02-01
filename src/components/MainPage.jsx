import React from 'react';
import ParticlesComponent from "./particles";
import { Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import SplashCursor from './SplashCursor';

const MainPage = () => {
  return (
    <main className="relative min-h-screen overflow-hidden flex flex-col justify-between">
      {/* Particles background */}
      <ParticlesComponent />

      {/* Hero Section */}
      <SplashCursor />
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="text-[10vw] sm:text-[8vw] md:text-[6vw] lg:text-[5vw] xl:text-[4.5vw] 
                       font-goodBrush tracking-wide text-transparent bg-clip-text 
                       bg-gradient-to-r from-yellow-300 via-red-500 to-purple-500 
                       animate-gradientShift mb-6 uppercase">
            P R O  D O T H O N '25
          </h1>

          {/* Subheader */}
          <p className="text-[5vw] sm:text-[3vw] md:text-[2.5vw] lg:text-[2vw] xl:text-[1.75vw] 
                       text-white mb-8 max-w-2xl mx-auto font-goodBrush animate-colorShift">
            Learn - innovate - impact
          </p>

          {/* Event Date */}
          <div className="mt-8">
            <h2 className="text-4xl sm:text-5xl font-goodBrush text-white mb-4">
              March 1 & 2, 2025
            </h2>
          </div>

          {/* Scroll Down Button */}
          <div className="mt-11 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 rounded-xl blur opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-x"></div>
            <a
              href="/path-to-your-brochure.pdf"
              download="Event_Brochure.pdf"
              className="relative flex items-center justify-center text-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg transform hover:scale-105 transition-all duration-200 font-semibold text-lg shadow-xl hover:shadow-purple-500/50"
            >
              <div className="flex items-center gap-2">
                <svg 
                  className="w-6 h-6 animate-bounce group-hover:animate-none" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                <span>Download Brochure</span>
              </div>
              <div className="absolute -right-1 -top-1 w-3 h-3 bg-white rounded-full opacity-70 animate-ping"></div>
            </a>
          </div>
        </div>
      </div>
      
      {/* About Section */}
      <div id="about" className="relative min-h-screen overflow-hidden">
        <ParticlesComponent />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl sm:text-5xl font-romanSD text-center mb-4 mt-28 bg-clip-text text-transparent 
            bg-gradient-to-r from-green-600 to-emerald-500 animate-gradient-x tracking-tight">
            About Prodothon
          </h1>
          <div className="bg-transparent backdrop-blur-lg shadow-xl rounded-3xl p-8 sm:p-12 space-y-12">
            {/* Prodothon Overview Section */}
            <section className="flex flex-col sm:flex-row items-start space-x-0 sm:space-x-6">
              <div className="w-16 h-16 bg-transparent rounded-full flex items-center justify-center mb-4 sm:mb-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-green-700 mb-4">
                  What is Prodothon?
                </h2>
                <p className="text-white leading-relaxed text-lg">
                  Prodothon is an Inter-College Festival at the Department of Production
                  Engineering, PSG College of Technology. Spanning two days, this event
                  is tailored for undergraduate students from the Mechanical Stream.
                  The festival aims to embrace the students’ spirit in the Mechanical
                  Stream with events, competitions, workshops, entrepreneur initiatives,
                  presentations, and exhibitions. It serves as a dynamic platform for
                  students to showcase their technical expertise, problem-solving skills,
                  and innovative thinking.
                </p>
              </div>
            </section>

            {/* Mission Section */}
            <section className="flex flex-col sm:flex-row items-start space-x-0 sm:space-x-6">
              <div className="w-16 h-16 bg-transparent rounded-full flex items-center justify-center mb-4 sm:mb-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-amber-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.192a3 3 0 01-4.243-4.243"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-amber-700 mb-4">
                  Our Mission
                </h2>
                <p className="text-white leading-relaxed text-lg">
                  To foster innovation, technical proficiency, and collaborative learning
                  among engineering students by providing a competitive platform that
                  emphasizes cutting-edge technologies, practical knowledge,
                  industry-relevant skills, and teamwork.
                </p>
              </div>
            </section>

            {/* Vision Section */}
            <section className="flex flex-col sm:flex-row items-start space-x-0 sm:space-x-6">
              <div className="w-16 h-16 bg-transparent rounded-full flex items-center justify-center mb-4 sm:mb-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.768-.231-1.48-.631-2.202M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.768.231-1.48.631-2.202M10 12a4 4 0 11-8 0 4 4 0 018 0zm4 4a4 4 0 100-8 4 4 0 000 8z"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-blue-700 mb-4">
                  Our Vision
                </h2>
                <p className="text-white leading-relaxed text-lg">
                  To become a flagship event that inspires the next generation of engineers
                  to embrace excellence in manufacturing and mechanical engineering,
                  bridging the gap between academic learning and industry practices while
                  promoting sustainable and innovative solutions. We aim to engage in
                  activities guided by values and ethics with a sense of responsibility
                  to society and the environment.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="relative min-h-screen overflow-hidden bg-transparent">
        <ParticlesComponent />
        <div className="relative z-10 container mx-auto px-4 py-36">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Contact Information Section */}
            <div className="bg-gradient-to-br from-purple-800/50 to-blue-800/50 p-8 rounded-3xl shadow-2xl border border-purple-500/20 backdrop-blur-lg hover:shadow-purple-500/40 transition-all">
              <h1 className="text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400 animate-gradient-x">
                Contact Us
              </h1>
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-center space-x-4">
                  <div>
                    <MapPin className="text-pink-400 flex-shrink-0" size={28} />
                  </div>
                  <p className="text-gray-200 font-serif">
                    Department of Production Engineering,<br />
                    PSG College of Technology,
                    Coimbatore,<br /> Tamil Nadu, India
                  </p>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-4">
                  <div>
                    <Mail className="text-red-400 font-serif flex-shrink-0" size={28} />
                  </div>
                  <a
                    href="mailto:prod@psg.com"
                    className="text-blue-300 font-serif hover:text-blue-100 transition-colors"
                  >
                    prod@psg.com
                  </a>
                </div>

                {/* Phone Numbers */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div>
                      <Phone className="text-green-400 flex-shrink-0" size={28} />
                    </div>
                    <div>
                      <p className="text-gray-200 font-serif">
                        Arun Secretary-SME: +91 9876543210
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div>
                      <Phone className="text-green-400 flex-shrink-0" size={28} />
                    </div>
                    <div>
                      <p className="text-gray-200 font-serif">
                        Nitish Secretary-PEA: +91 9876543210
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="mt-10 flex justify-center space-x-8">
                <a
                  href="https://instagram.com/psg_cet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-400 hover:text-pink-300 transition-all"
                >
                  <Instagram size={36} />
                </a>
                <a
                  href="https://linkedin.com/school/psg-college-of-technology"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-all"
                >
                  <Linkedin size={36} />
                </a>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="bg-gradient-to-br from-purple-800/50 to-blue-800/50 p-8 rounded-3xl shadow-2xl border border-purple-500/20 backdrop-blur-lg hover:shadow-purple-500/40 transition-all">
              <h2 className="text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400 animate-gradient-x">
                Our Location
              </h2>
              <div className="w-full h-96 overflow-hidden rounded-2xl border-2 border-purple-500/20">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28843.08245023544!2d77.01024003861126!3d11.020189989844441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8582f1435fa59%3A0x137d95bfd8909293!2sPSG%20College%20Of%20Technology!5e0!3m2!1sen!2sin!4v1732959892552!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="filter grayscale-[30%] hover:grayscale-0 transition-all"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainPage;