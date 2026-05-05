import React, { useState } from 'react';

const StudentLogin = ({ onLoginSuccess }) => {
  const [mobile, setMobile] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(mobile.length >= 10) {
      onLoginSuccess();
    } else {
      alert("Please enter a valid mobile number.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 w-full">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full border border-slate-100">
        <div className="text-center mb-8">
          <div className="text-5xl mb-4">🎓</div>
          <h2 className="text-2xl font-bold text-slate-800">Student Login</h2>
          <p className="text-slate-500 mt-2">Enter your mobile number to access your portal</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Mobile Number</label>
            <input 
              type="text" 
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="e.g. 9876543210"
              required
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-emerald-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-500/30"
          >
            Login / Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default StudentLogin;
