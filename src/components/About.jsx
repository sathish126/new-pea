import React from "react";

const About = () => (
  <div className="bg-gradient-to-br bg-white min-h-screen">
    <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-12">
      {/* Animated Heading */}
      <h1 className="text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent 
        bg-gradient-to-r from-green-600 to-emerald-500 
        animate-gradient-x tracking-tight">
        Shaping Future Innovators
      </h1>

      {/* Content Wrapper with Subtle Shadow and Rounded Corners */}
      <div className="bg-white/80 backdrop-blur-sm shadow-2xl rounded-3xl p-8 sm:p-12 space-y-10">
        {/* Sections with Modern Typography and Iconography */}
        <section className="flex items-start space-x-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Who We Are</h2>
            <p className="text-gray-700 leading-relaxed">
              We are passionate innovators from PSG College of Technology, driven by the Production Engineering Association (PEA) and Society of Manufacturing Engineers (SME). With over four decades of expertise, we transform technical education by bridging theory and practice.
            </p>
          </div>
        </section>

        <section className="flex items-start space-x-6">
          <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.192a3 3 0 01-4.243-4.243" />
            </svg>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-amber-700 mb-4">Prodothon: Innovation's Playground</h2>
            <p className="text-gray-700 leading-relaxed">
              Our signature event, Prodothon, is more than a competition—it's a launchpad for innovation. Through technical challenges, case studies, and hands-on learning, we transform students into industry-ready problem solvers.
            </p>
          </div>
        </section>

        <section className="flex items-start space-x-6">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.768-.231-1.48-.631-2.202M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.768.231-1.48.631-2.202M10 12a4 4 0 11-8 0 4 4 0 018 0zm4 4a4 4 0 100-8 4 4 0 000 8z" />
            </svg>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">Commitment to Excellence</h2>
            <p className="text-gray-700 leading-relaxed">
              We don't just teach engineering—we inspire future leaders. Through collaborative learning, industry connections, and innovative platforms like Prodothon, we're redefining technical education.
            </p>
          </div>
        </section>
      </div>
    </div>
  </div>
);

export default About;