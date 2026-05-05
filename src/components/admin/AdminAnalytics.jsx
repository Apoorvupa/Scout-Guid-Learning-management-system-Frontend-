import React from 'react';

const AdminAnalytics = () => {
  // Dummy data for analytics
  const stats = {
    registeredStudents: 1250,
    enrolledStudents: 850,
    totalCourses: 45,
    totalLessons: 320,
    completionRate: '68%',
    revenue: '₹ 4,25,000'
  };

  const recentEnrollments = [
    { id: 1, name: 'Rahul Sharma', course: 'Advanced React Patterns', date: '2026-05-01', status: 'Active' },
    { id: 2, name: 'Priya Patel', course: 'Fullstack Django & React', date: '2026-05-02', status: 'Active' },
    { id: 3, name: 'Amit Singh', course: 'UI/UX Design Masterclass', date: '2026-05-03', status: 'Active' },
    { id: 4, name: 'Sneha Gupta', course: 'Data Science Fundamentals', date: '2026-05-04', status: 'Completed' },
    { id: 5, name: 'Vikram Verma', course: 'Advanced React Patterns', date: '2026-05-05', status: 'Active' },
  ];

  const departmentData = [
    { name: 'Training', value: 450, color: 'bg-blue-500' },
    { name: 'Organization', value: 300, color: 'bg-purple-500' },
    { name: 'IT', value: 100, color: 'bg-emerald-500' },
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-800">Analytics Dashboard</h2>
        <p className="text-slate-500 mt-2">Overview of student registrations, enrollments, and platform activity.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-center space-x-4 hover:shadow-md transition-shadow">
          <div className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center text-2xl">
            👥
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">Registered Students</p>
            <h3 className="text-2xl font-bold text-slate-800">{stats.registeredStudents}</h3>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-center space-x-4 hover:shadow-md transition-shadow">
          <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center text-2xl">
            🎓
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">Enrolled Students</p>
            <h3 className="text-2xl font-bold text-slate-800">{stats.enrolledStudents}</h3>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-center space-x-4 hover:shadow-md transition-shadow">
          <div className="w-14 h-14 bg-violet-100 text-violet-600 rounded-xl flex items-center justify-center text-2xl">
            📚
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">Total Courses</p>
            <h3 className="text-2xl font-bold text-slate-800">{stats.totalCourses}</h3>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-center space-x-4 hover:shadow-md transition-shadow">
          <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center text-2xl">
            🎥
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">Total Lessons</p>
            <h3 className="text-2xl font-bold text-slate-800">{stats.totalLessons}</h3>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-center space-x-4 hover:shadow-md transition-shadow">
          <div className="w-14 h-14 bg-pink-100 text-pink-600 rounded-xl flex items-center justify-center text-2xl">
            📈
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">Completion Rate</p>
            <h3 className="text-2xl font-bold text-slate-800">{stats.completionRate}</h3>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-center space-x-4 hover:shadow-md transition-shadow">
          <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-2xl">
            💰
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">Total Revenue</p>
            <h3 className="text-2xl font-bold text-slate-800">{stats.revenue}</h3>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Department Analytics */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 col-span-1">
          <h3 className="text-xl font-bold text-slate-800 mb-6">Enrollments by Department</h3>
          <div className="space-y-6">
            {departmentData.map((dept, idx) => (
              <div key={idx}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-slate-700">{dept.name}</span>
                  <span className="text-sm font-bold text-slate-900">{dept.value}</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2.5">
                  <div className={`h-2.5 rounded-full ${dept.color}`} style={{ width: `${(dept.value / stats.enrolledStudents) * 100}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Enrollments */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 col-span-1 lg:col-span-2 overflow-hidden">
          <div className="p-6 border-b border-slate-100">
            <h3 className="text-xl font-bold text-slate-800">Recent Enrollments</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-50 text-slate-500 text-sm font-semibold">
                <tr>
                  <th className="py-4 px-6">Student Name</th>
                  <th className="py-4 px-6">Course</th>
                  <th className="py-4 px-6">Date</th>
                  <th className="py-4 px-6">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {recentEnrollments.map(enrollment => (
                  <tr key={enrollment.id} className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 font-medium text-slate-800">{enrollment.name}</td>
                    <td className="py-4 px-6 text-slate-600">{enrollment.course}</td>
                    <td className="py-4 px-6 text-slate-600">{enrollment.date}</td>
                    <td className="py-4 px-6">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${enrollment.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-blue-100 text-blue-700'}`}>
                        {enrollment.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAnalytics;
