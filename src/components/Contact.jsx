import React from "react";
import {
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Contact = () => {
  return (
    <main className="container  mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Contact Information Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-4xl font-bold mb-6 text-gray-800">Contact Us</h1>

          {/* Contact Details */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <MapPin className="text-blue-600" />
              <p className="text-gray-700">
                Department of Production Engineering,<br></br>
                PSG College of Technology,
                Coimbatore,<br></br> Tamil Nadu, India
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <Mail className="text-red-600" />
              <a
                href="mailto:contact@yourcompany.com"
                className="text-blue-600 hover:underline"
              >
                prod@psg.com
              </a>
            </div>

            <div className="flex items-center space-x-2">
              <Phone className="text-green-600" />
              <p className="text-gray-700">+91 9876543210<br></br>
              Arun Secretary-SME</p>
              <Phone className="text-green-600" />
              <p className="text-gray-700">+91 9876543210<br></br>
              Nitish Secretary-PEA</p>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="mt-8 flex justify-center space-x-6">
            <a
              href="https://instagram.com/yourcompany"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 hover:scale-110 transition-transform"
            >
              <Instagram size={32} />
            </a>
            <a
              href="https://linkedin.com/company/yourcompany"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-800 hover:scale-110 transition-transform"
            >
              <Linkedin size={32} />
            </a>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Location</h2>
          <div className="w-full h-96 overflow-hidden rounded-lg">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28843.08245023544!2d77.01024003861126!3d11.020189989844441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8582f1435fa59%3A0x137d95bfd8909293!2sPSG%20College%20Of%20Technology!5e0!3m2!1sen!2sin!4v1732959892552!5m2!1sen!2sin" width="100% "height="100%" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
