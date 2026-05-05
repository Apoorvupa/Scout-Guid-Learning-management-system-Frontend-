import React, { useState } from 'react';

const StudentContact = () => {
  const [formData, setFormData] = useState({
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully to BSGUP Support Team!');
    setFormData({ subject: '', message: '' });
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-slate-800">Contact BSGUP Team</h2>
        <p className="text-slate-500 mt-2">Have a question or need support? Reach out to us.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-1 space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <div className="text-3xl mb-4">📧</div>
            <h3 className="font-bold text-slate-800 mb-1">Email Support</h3>
            <p className="text-sm text-slate-500 mb-2">We aim to reply within 24 hours.</p>
            <a href="mailto:support@bsgup.org" className="text-emerald-500 font-semibold hover:underline">support@bsgup.org</a>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <div className="text-3xl mb-4">📞</div>
            <h3 className="font-bold text-slate-800 mb-1">Phone Support</h3>
            <p className="text-sm text-slate-500 mb-2">Mon-Fri from 9am to 6pm.</p>
            <a href="tel:+911234567890" className="text-emerald-500 font-semibold hover:underline">+91 123 456 7890</a>
          </div>
        </div>

        <div className="col-span-1 md:col-span-2">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="text-xl font-bold text-slate-800 mb-6 border-b pb-4">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Subject</label>
                <select name="subject" value={formData.subject} onChange={handleChange} required className="w-full border border-slate-300 p-3 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none">
                  <option value="">Select a subject</option>
                  <option value="course_issue">Issue with a Course</option>
                  <option value="payment">Payment/Invoice Inquiry</option>
                  <option value="technical">Technical Support</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Message</label>
                <textarea 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                  placeholder="Describe your issue or question in detail..."
                  className="w-full border border-slate-300 p-3 rounded-lg h-40 focus:ring-2 focus:ring-emerald-500 focus:outline-none resize-none"
                ></textarea>
              </div>
              <button type="submit" className="w-full bg-emerald-500 text-white font-bold py-3 rounded-lg hover:bg-emerald-600 transition-colors shadow-md">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentContact;
