import React from "react";
import {
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Contact = () => {
  // Array of sponsor logos with PSG logo
 

  return (
    <main className="bg-gradient-to-br from-blue-50 to-indigo-100 text-black min-h-screen py-12">
      <div className="container mx-auto px-4 py-36">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Information Section */}
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-xl shadow-2xl border border-gray-800">
            <h1 className="text-4xl font-dirty-brush mb-6 text-gray-800">Contact Us</h1>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <MapPin className="text-blue-400 flex-shrink-0" size={28} />
                <p className="text-gray-800 font-serif">
                  Department of Production Engineering,<br />
                  PSG College of Technology,
                  Coimbatore,<br /> Tamil Nadu, India
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <Mail className="text-red-400 font-serif flex-shrink-0" size={28} />
                <a
                  href="mailto:prod@psg.com"
                  className="text-blue-800 font-serif hover:text-blue-500 transition-colors"
                >
                  prod@psg.com
                </a>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Phone className="text-green-800 flex-shrink-0" size={28} />
                  <div>
                    <p className="text-gray-800 font-serif">
                      Arun Secretary-SME: +91 9876543210
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="text-green-800 flex-shrink-0" size={28} />
                  <div>
                    <p className="text-gray-800 font-serif">
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
                className="text-pink-800 hover:text-pink-500 hover:scale-110 transition-all"
              >
                <Instagram size={36} />
              </a>
              <a
                href="https://linkedin.com/school/psg-college-of-technology"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-800 hover:text-blue-800 hover:scale-110 transition-all"
              >
                <Linkedin size={36} />
              </a>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-xl shadow-2xl border border-gray-800">
            <h2 className="text-4xl font-dirty-brush mb-6 text-gray-800">Our Location</h2>
            <div className="w-full h-96 overflow-hidden rounded-lg border-2 border-gray-800">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28843.08245023544!2d77.01024003861126!3d11.020189989844441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8582f1435fa59%3A0x137d95bfd8909293!2sPSG%20College%20Of%20Technology!5e0!3m2!1sen!2sin!4v1732959892552!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="filter grayscale-[30%]"
              ></iframe>
            </div>
          </div>
        </div>

        
      </div>
    </main>
  );
};

export default Contact;
