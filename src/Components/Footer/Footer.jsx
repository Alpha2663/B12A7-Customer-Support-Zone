import React from "react";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  const companyLinks = [
    { text: "About Us" },
    { text: "Our Mission", spacing: true },
    { text: "Contact Sales" }
  ];

  const servicesLinks = [
    { text: "Products & Services" },
    { text: "Customer Stories", spacing: true },
    { text: "Download Apps" }
  ];

  const infoLinks = [
    { text: "Privacy Policy" },
    { text: "Terms & Conditions", spacing: true },
    { text: "Join Us" }
  ];

  const socialLinks = [
    { icon: <RiTwitterXFill />, text: "@CS — Ticket System" },
    { icon: <FaLinkedinIn />, text: "@CS — Ticket System", spacing: true },
    { icon: <FaFacebookF />, text: "@CS — Ticket System" },
    { icon: <IoIosMail />, text: "support@cst.com", spacing: true }
  ];

  return (
    <footer className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-16">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-8">
          <div className="md:flex-1">
            <h2 className="text-xl font-bold mb-3">CS — Ticket System</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="md:flex-1 grid grid-cols-2 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-bold text-lg mb-3">Company</h3>
              <div className="space-y-2">
                {companyLinks.map((link, idx) => (
                  <div key={idx} className={link.spacing ? 'mb-1' : ''}>
                    <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                      {link.text}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3">Services</h3>
              <div className="space-y-2">
                {servicesLinks.map((link, idx) => (
                  <div key={idx} className={link.spacing ? 'mb-1' : ''}>
                    <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                      {link.text}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3">Information</h3>
              <div className="space-y-2">
                {infoLinks.map((link, idx) => (
                  <div key={idx} className={link.spacing ? 'mb-1' : ''}>
                    <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                      {link.text}
                    </a>
                  </div>
                ))}
              </div>
            </div>

          </div>
          <div className="md:w-48">
            <h3 className="font-bold text-lg mb-3">Social Links</h3>
            <div className="space-y-3">
              {socialLinks.map((social, index) => (
                <div key={index} className={`flex items-center gap-2 ${social.spacing ? 'mt-2' : ''}`}>
                  <span className="text-gray-300">{social.icon}</span>
                  <span className="text-gray-400 text-sm">{social.text}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
        <div className="border-t border-gray-700 pt-6 mt-6">
          <p className="text-gray-400 text-sm text-center">
            © 2025 CS — Ticket System. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;