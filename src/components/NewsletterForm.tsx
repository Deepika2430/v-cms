import React, { useState } from 'react';

const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would implement the actual newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className="w-full px-4 py-3 m-2 rounded-full bg-orange-50 border-none focus:ring-2 focus:ring-green-500 transition duration-200 pr-28"
        />
      </div>
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full transition duration-200"
        >
          Subscribe!
        </button>
    </form>
  );
};

export default NewsletterForm;