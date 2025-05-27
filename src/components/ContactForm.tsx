import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would implement the actual form submission
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="mr-[80px] mb-5">
        <div className="flex flex-wrap md:flex-nowrap">
        <div className="box-border relative min-h-[1px] flex flex-wrap items-center w-1/2 px-[10px] mb-5 font-open-sans text-[14px] font-normal bg-white/64 border-0 rounded-[25px]">
        <input
          type="text"
          name="name"
          size={1}
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
          className="w-full px-4 py-3 rounded-3xl bg-[rgba(255,255,255,0.64)] border-none italic focus:ring-2 focus:ring-green-500 transition duration-200"
        />
        </div>
        <div className="box-border relative min-h-[1px] flex flex-wrap items-center w-1/2 px-[10px] mb-5 font-open-sans text-[14px] font-normal text-[#575757] leading-[1.5] antialiased border-0 rounded-[25px]">
        <input
          type="email"
          name="email"
          size={2}
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="w-full px-4 py-3 rounded-3xl bg-[rgba(255,255,255,0.64)] border-none italic focus:ring-2 focus:ring-green-500 transition duration-200"
        />

          </div>
          </div>
        <div className="box-border relative min-h-[1px] flex flex-wrap items-center w-full px-[10px] mb-5 rounded-4xl">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          required
          rows={2}
          className="w-full px-4 py-3 rounded-3xl bg-[rgba(255,255,255,0.64)] border-none focus:ring-2 focus:ring-green-500 transition duration-200 resize-none"
        />
      </div>
      </div>
      <div className="flex justify-end">
  <button
    type="submit"
    className="mt-4 mr-[80px] bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full flex items-center justify-center space-x-2 transition duration-200 shadow-md"
  >
    <span>Submit</span>
    <ArrowRight className="w-4 h-4" />
  </button>
</div>

    </form>
  );
};

export default ContactForm;