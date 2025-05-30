import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

type ContactFormProps = {
  namePlaceholder?: string;
  emailPlaceholder?: string;
  messagePlaceholder?: string;
  buttonText?: string;
  onSubmit?: (formData: { name: string; email: string; message: string }) => void;
  classNames?: {
    container?: string;
    nameInput?: string;
    emailInput?: string;
    messageInput?: string;
    button?: string;
  };
};

const ContactForm: React.FC<ContactFormProps> = ({
  namePlaceholder = 'Name',
  emailPlaceholder = 'Email',
  messagePlaceholder = 'Message',
  buttonText = 'Submit',
  onSubmit,
  classNames = {},
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    } else {
      console.log('Form submitted:', formData);
    }
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit} className={`w-full ${classNames.container || ''}`}>
      <div className="mr-[80px] mb-5">
        <div className="flex flex-wrap md:flex-nowrap">
          <div className="box-border relative min-h-[1px] flex flex-wrap items-center w-1/2 px-[10px] mb-5 font-open-sans text-[14px] font-normal bg-white/64 border-0 rounded-[25px]">
            <input
              type="text"
              name="name"
              size={1}
              value={formData.name}
              onChange={handleChange}
              placeholder={namePlaceholder}
              required
              className={`w-full px-4 py-3 rounded-3xl bg-[rgba(255,255,255,0.64)] focus:outline-none focus:ring-0   italic  transition duration-200 ${classNames.nameInput || ''}`}
            />
          </div>
          <div className="box-border relative min-h-[1px] flex flex-wrap items-center w-1/2 px-[10px] mb-5 font-open-sans text-[14px] font-normal text-[#575757] leading-[1.5] antialiased border-0 rounded-[25px]">
            <input
              type="email"
              name="email"
              size={2}
              value={formData.email}
              onChange={handleChange}
              placeholder={emailPlaceholder}
              required
              className={`w-full px-4 py-3 rounded-3xl focus:outline-none focus:ring-0 bg-[rgba(255,255,255,0.64)] italic transition duration-200 ${classNames.emailInput || ''}`}
            />
          </div>
        </div>
        <div className="box-border relative min-h-[1px] flex flex-wrap items-center w-full px-[10px] mb-5 rounded-4xl">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={messagePlaceholder}
            required
            rows={2}
            className={`w-full px-4 py-3 rounded-3xl bg-[rgba(255,255,255,0.64)]   focus:outline-none focus:ring-0 transition duration-200 resize-none ${classNames.messageInput || ''}`}
          />
        </div>
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className={`mt-4 mr-[80px] bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full flex items-center justify-center space-x-2 transition duration-200 shadow-md ${classNames.button || ''}`}
        >
          <span>{buttonText}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
