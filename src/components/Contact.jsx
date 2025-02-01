import React from "react";
import ParticlesComponent from "./particles";
import { Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-transparent">
      {/* Particles background */}
      <ParticlesComponent />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-36">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Information Section */}
          <div className="bg-gradient-to-br from-purple-800/50 to-blue-800/50 p-8 rounded-3xl shadow-2xl border border-purple-500/20 backdrop-blur-lg hover:shadow-purple-500/40 transition-all">
            <h1 className="text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400 animate-gradient-x">
              Contact Us
            </h1>

            {/* Contact Details */}
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-center space-x-4">
                <div>
                  <MapPin className="text-pink-400 flex-shrink-0" size={28} />
                </div>
                <p className="text-gray-200 font-serif">
                  Department of Production Engineering,<br />
                  PSG College of Technology,
                  Peelamedu,<br />Coimbatore - 641004<br /> Tamil Nadu, India.
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
                      ARUN K : +91 9003585358
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div>
                    <Phone className="text-green-400 flex-shrink-0" size={28} />
                  </div>
                  <div>
                    <p className="text-gray-200 font-serif">
                      NITIS PRABU M : +91 9791947147
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-10 flex justify-center space-x-8">
              <a
                href="https://www.instagram.com/pea_sme?igsh=ZWpicjExYzZtYnl5"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 hover:text-pink-300 transition-all"
              >
                <Instagram size={36} />
              </a>
              <a
                href="https://www.linkedin.com/company/pea-sme-psg-tech/"
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
    </main>
  );
};

export default Contact;