import React from "react";
import {
  MapPin,
  Phone,
  Clock,
  ArrowRight,
  Send,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import ContactForm from "./ContactForm";
import { NavLink } from "react-router-dom";
import NewsletterForm from "./NewsletterForm";

interface FooterProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const menuItems = [
  { label: "Home", key: "home" },
  { label: "About", key: "about" },
  { label: "Offerings", key: "offerings" },
  { label: "Gallery", key: "gallery" },
  { label: "Contact", key: "contact" },
];

const Footer: React.FC<FooterProps> = ({ currentPage, onNavigate }) => {
  return (
    <footer className="w-full bg-[#F2F7FD] overflow-x-hidden px-8">
      {/* Contact Form Section */}
      <div className="elementor-widget-wrap elementor-element-populated ml-[105px] mr-[105px]">
        <div className="elementor-widget-wrap elementor-element-populated p-[10px]">
          <div className="w-full bg-gradient-to-br from-[#FDC830] to-[#F37335] rounded-[30px] pt-[45px] pb-[30px] pl-[50px] pb-[50px]">
            <div className="container mx-auto flex flex-col md:flex-row items-start">
              <div className="w-full md:w-1/2 p-[10px]">
                <div className="mb-[20px]">
                  <h3 className="text-3xl md:text-4xl text-[#761587] font-poppins text-[45px] font-large leading-[50px]">
                    Reach us
                  </h3>
                </div>
                <div>
                  <p className="text-gray-800 mb-[14px] text-[16px] font-poppins">
                    Got questions or seeking more information? We're here to
                    help! Complete the form, and our dedicated team will swiftly
                    respond to your inquiries. Your curiosity matters to us, and
                    we look forward to assisting you on your journey. Let's
                    connect!
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 p-[10px]">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Main Footer Content */}
      <div className="mx-auto pl-[7rem] pr-[7rem] w-full py-4">
        <div className="grid grid-cols-[1fr_1fr_0.6fr_1fr] gap-6 text-gray-800">
          {/* Company Info */}
          <div className="flex flex-col space-y-4 p-[10px]">
            <div className="flex items-center">
              <div className="elementor-widget-container">
                <img
                  width="420"
                  height="130"
                  src="https://vismayee.com/wp-content/uploads/2023/11/Web-Logo-Trans.png"
                  className="attachment-full size-full wp-image-922"
                  alt=""
                  srcset="https://vismayee.com/wp-content/uploads/2023/11/Web-Logo-Trans.png 420w, https://vismayee.com/wp-content/uploads/2023/11/Web-Logo-Trans-300x93.png 300w"
                  sizes="(max-width: 420px) 100vw, 420px"
                />
              </div>
              {/* <div className="ml-3">
                <h2 className="text-green-600 font-bold text-xl">
                  SREE VISMAYEE
                </h2>
                <p className="text-yellow-600 text-xs uppercase tracking-wider">
                  SMART ACADEMY
                </p>
              </div> */}
            </div>
            <p className="text-[#575757] text-sm mt-4 font-normal font-['Questrial'] text-justify">
              “Our vision is to revolutionize the world of education through
              innovative technology solutions. We aim to empower learners of all
              ages and backgrounds to access high-quality, personalized
              education, breaking down traditional barriers and fostering a
              lifelong love for learning. Our commitment is to create a global
              community of empowered, skilled, and adaptable individuals who are
              prepared to excel in an ever-evolving digital age. We envision a
              future where education knows no bounds, and every learner has the
              tools and resources they need to succeed.”
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col space-y-4 text-[14px] font-semibold leading-[24px] font-['Questrial']">
            <h3 className="text-xl font-semibold text-purple-800">Contact</h3>

            <div className="flex items-start space-x-3">
              <Phone className="w-5 h-5 text-orange-500 mt-1" />
              <div>
                <p className="font-medium">Call / WhatsApp</p>
                <p className="text-gray-600">+91 79939 15888</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Clock className="w-5 h-5 text-orange-500 mt-1" />
              <div>
                <p className="font-medium">Working Hours</p>
                <p className="text-gray-600">Mon - Sun: 9 AM - 9 PM</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-orange-500 mt-1" />
              <div>
                <p className="font-medium">Office Address</p>
                <p className="text-gray-600">Nallagandla, Hyderabad</p>
                <p className="text-gray-600">Telangana - 500019</p>
                <p className="text-gray-500 text-sm">Aparna Cyberscape</p>
              </div>
            </div>

            <div className="w-full max-w-xs">
              <iframe
                loading="lazy"
                src="https://maps.google.com/maps?q=Sree%20Vismayee%20Edutek%20Pvt%20Ltd&amp;t=m&amp;z=15&amp;output=embed&amp;iwloc=near"
                title="Sree Vismayee Edutek Pvt Ltd"
                aria-label="Sree Vismayee Edutek Pvt Ltd"
                className="w-full h-40 rounded-md"
              />
            </div>
          </div>

          {/* Navigation Links and Newsletter */}
          <div className="flex flex-col space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-purple-800 mb-4">
                Our Links
              </h3>
              {/* Navigation Links Section */}
              <ul className="space-y-2">
                {menuItems.map((item) => (
                  <li key={item.key}>
                    <a
                      onClick={() => onNavigate(item.key)}
                      className={`${
                        currentPage === item.key
                          ? "text-orange-500 font-semibold"
                          : "text-gray-600"
                      }text-gray-600 hover:text-orange-500 cursor-pointer transition-colors`}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-300 to-orange-400 p-6 rounded-3xl p-[20px] w-[279px] h-[391px]">
            <h3 className="text-2xl font-bold text-purple-800 mb-3">
              Subscribe Now!
            </h3>
            <p className="text-black font-[Questrial] text-base font-normal">
              Subscribe now for exclusive updates, engaging content, and the
              latest insights! Join our community of learners and stay informed
              about exciting educational opportunities. Your journey to
              knowledge and discovery starts with a click.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center pb-[50px]">
            <p className="text-black font-questrial text-sm mb-4 md:mb-0">
              © 2023 Sree Vismayee Edutek Pvt Ltd. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/SreeVismayeeEdutek/"
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/sreevismayeeedutek/"
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-pink-600 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@SreeVismayeeEdutek"
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-red-600 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
