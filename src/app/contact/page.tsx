"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        const error = await response.json();
        alert(`Failed to send message: ${error.error || 'Please try again.'}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 py-16">
      <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h1 className="text-4xl font-extrabold text-[#0F172A] mb-2 text-center">
          Contact Us
        </h1>
        <p className="text-center text-neutral-600 mb-10">
          Have questions or want to get in touch with Howard DECA? Fill out the form below.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-md space-y-6">
          {submitted && (
            <div className="p-4 mb-4 text-green-800 bg-green-100 rounded-lg">
              Thank you! Your message has been sent.
            </div>
          )}

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={formData.name}
              onChange={handleChange}
              disabled={loading}
              className="mt-1 block w-full rounded-lg border border-neutral-300 px-4 py-2 shadow-sm focus:border-[#005399] focus:ring focus:ring-[#005399]/30 text-black disabled:bg-gray-100 disabled:cursor-not-allowed"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
              disabled={loading}
              className="mt-1 block w-full rounded-lg border border-neutral-300 px-4 py-2 shadow-sm focus:border-[#005399] focus:ring focus:ring-[#005399]/30 text-black disabled:bg-gray-100 disabled:cursor-not-allowed"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              value={formData.message}
              onChange={handleChange}
              disabled={loading}
              rows={6}
              className="mt-1 block w-full rounded-lg border border-neutral-300 px-4 py-2 shadow-sm focus:border-[#005399] focus:ring focus:ring-[#005399]/30 text-black disabled:bg-gray-100 disabled:cursor-not-allowed"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center rounded-lg bg-[#005399] px-6 py-3 text-white font-semibold shadow hover:bg-[#003E65] transition disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>

      
      </div>
    </div>
  );
}