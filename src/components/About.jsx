import React from "react";

const About = () => (
  <div className="bg-gradient-to-b from-white to-green-400 min-h-screen">
    <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-12 text-gray-800">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-8 text-green-600">
        About Us
      </h1>
      <div className="space-y-8 sm:space-y-10">
        {/* Who We Are Section */}
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-amber-500 mb-3 sm:mb-4">
            Who We Are
          </h2>
          <p className="text-sm sm:text-base leading-relaxed">
            We are proud members of PSG College of Technology, representing the
            Production Engineering Association (PEA) & the Society of
            Manufacturing Engineers (SME), with an ambience of more than four
            decades. Our mission is to bridge the gap between theory and
            practice, providing an environment that fosters technical skills
            and critical thinking through innovative initiatives.
          </p>
        </section>

        {/* Prodothon Section */}
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-amber-500 mb-3 sm:mb-4">
            Prodothon: A Signature Event of Innovation
          </h2>
          <p className="text-sm sm:text-base leading-relaxed">
            Launched a year ago, Prodothon has quickly become one of the most
            awaited events on our campus. This event comprises technical and
            non-technical challenges, immersing students in the field of
            production engineering. Participants tackle practical technical
            competitions, real-life case studies, and delve into areas like lean
            manufacturing and industrial automation. Alongside, they develop
            teamwork and leadership skills. Prodothon fosters a hands-on
            understanding of classroom concepts by challenging students with
            engineering quizzes and industrial design challenges.
          </p>
        </section>

        {/* PEA & SME Section */}
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-amber-500 mb-3 sm:mb-4">
            PEA & SME: Excellence in Education
          </h2>
          <p className="text-sm sm:text-base leading-relaxed">
            Led by the Production Engineering Association (PEA) and the Society
            of Manufacturing Engineers (SME), PSG College of Technology has
            guided countless students into diverse academic and professional
            paths. Both societies uphold a commitment to academic excellence and
            relevance, inspiring students to engage with industry leaders to
            deepen their understanding of manufacturing principles.
          </p>
          <p className="text-sm sm:text-base leading-relaxed mt-4">
            Our recent event, <strong>PROFINITY</strong>, included a series of
            activities emphasizing sustainability and lean manufacturing. Our
            forums promote creative problem-solving skills, critical thinking
            about manufacturing practices, and the exploration of new
            technologies, transcending traditional academics.
          </p>
        </section>

        {/* Commitment to Excellence Section */}
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-amber-500 mb-3 sm:mb-4">
            Commitment to Excellence
          </h2>
          <p className="text-sm sm:text-base leading-relaxed">
            PSG College of Technology continuously strives to create an open
            and innovative learning environment. Initiatives such as Prodothon
            significantly contribute to innovation and professional growth,
            empowering students to realize their potential as future leaders in
            the production and manufacturing industries.
          </p>
        </section>
      </div>
    </div>
  </div>
);

export default About;
