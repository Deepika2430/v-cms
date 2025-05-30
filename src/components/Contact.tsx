import React from "react";
import { Phone, Clock, MapPin } from "lucide-react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className="py-16">
      <div className="mx-auto px-6 max-w-7xl font-questrial">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info (40%) */}
          <div className="w-full lg:w-2/5 space-y-6 pl-12">
            <h3 className="text-2xl font-extrabold text-purple-800">Our Contacts</h3>

            <div className="flex items-start space-x-3">
              <Phone className="w-5 h-5 text-orange-500 mt-1" />
              <div>
                <p className="font-extrabold text-base">Call Us</p>
                <p className="text-gray-600 font-extrabold text-sm">+91 79939 15888</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Clock className="w-5 h-5 text-orange-500 mt-1" />
              <div>
                <p className="font-extrabold text-base">Work Time</p>
                <p className="text-gray-600 font-extrabold text-sm">Mon - Sat: 9 AM - 9 PM</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-orange-500 mt-1" />
              <div>
                <p className="font-extrabold text-base">Address</p>
                <p className="text-gray-600 font-extrabold text-sm">
                  Nallagandla, Hyderabad<br />
                  Telangana 500019
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form (60%) */}
          <div className="w-full lg:w-3/5">
            <h3 className="text-2xl font-bold text-purple-800 mb-4">Send Message</h3>
            <ContactForm
              classNames={{
                nameInput: "border border-black",
                emailInput: "border border-black",
                messageInput: "border border-black",
              }}
            />
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-12 rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.220947971305!2d78.306984!3d17.463961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9397755b34e5%3A0x37d7dc6f22c75b1c!2sNallagandla%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1626434711556!5m2!1sen!2sin"
            width="100%"
            height="350"
            allowFullScreen
            loading="lazy"
            className="w-full border-0"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
