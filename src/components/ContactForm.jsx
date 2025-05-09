import React from 'react'

const ContactForm = () => {
  return (
    <section className="p-10 text-center">
      <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
      <form className="max-w-md mx-auto space-y-4 text-left">
        <input className="w-full p-2 border" type="text" placeholder="Name" required />
        <input className="w-full p-2 border" type="email" placeholder="Email" required />
        <input className="w-full p-2 border" type="text" placeholder="Company" />
        <select className="w-full p-2 border" required>
          <option value="">License Type</option>
          <option>Windows</option>
          <option>Office</option>
          <option>Other</option>
        </select>
        <textarea className="w-full p-2 border" placeholder="Message" required />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm