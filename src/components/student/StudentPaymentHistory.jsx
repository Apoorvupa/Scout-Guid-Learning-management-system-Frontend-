import React from 'react';

const StudentPaymentHistory = () => {
  const payments = [
    { id: 'INV-2026-001', date: '12 Jan 2026', course: 'Advanced React Patterns', amount: '₹ 4,500', status: 'Paid', method: 'Credit Card' },
    { id: 'INV-2026-002', date: '05 Mar 2026', course: 'Fullstack Django & React', amount: '₹ 8,000', status: 'Paid', method: 'UPI' },
    { id: 'INV-2026-003', date: '20 Apr 2026', course: 'Data Science Fundamentals', amount: '₹ 12,000', status: 'Failed', method: 'Net Banking' },
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-800">Payment History</h2>
        <p className="text-slate-500 mt-2">View your past transactions and download invoices.</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200">
              <tr>
                <th className="py-4 px-6">Invoice ID</th>
                <th className="py-4 px-6">Date</th>
                <th className="py-4 px-6">Course</th>
                <th className="py-4 px-6">Amount</th>
                <th className="py-4 px-6">Method</th>
                <th className="py-4 px-6">Status</th>
                <th className="py-4 px-6 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {payments.map(payment => (
                <tr key={payment.id} className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 font-medium text-slate-800">{payment.id}</td>
                  <td className="py-4 px-6 text-slate-600">{payment.date}</td>
                  <td className="py-4 px-6 text-slate-800 font-medium">{payment.course}</td>
                  <td className="py-4 px-6 font-bold text-slate-700">{payment.amount}</td>
                  <td className="py-4 px-6 text-slate-500">{payment.method}</td>
                  <td className="py-4 px-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      payment.status === 'Paid' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'
                    }`}>
                      {payment.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    {payment.status === 'Paid' && (
                      <button className="text-emerald-600 font-semibold hover:text-emerald-800 flex items-center justify-end w-full gap-1">
                        <span>⬇️</span> Invoice
                      </button>
                    )}
                  </td>
                </tr>
              ))}
              {payments.length === 0 && (
                <tr>
                   <td colSpan="7" className="p-10 text-center text-slate-500">No payment history found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentPaymentHistory;
