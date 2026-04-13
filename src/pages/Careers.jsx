import React from 'react';

/**
 * Careers Page Component
 */
function Careers() {
  const jobs = [
    { title: "Senior UI/UX Designer", type: "Full-time", location: "Remote", dept: "Creative" },
    { title: "Full-Stack Developer", type: "Full-time", location: "Kochi, India", dept: "Engineering" },
    { title: "Marketing Strategist", type: "Contract", location: "Remote", dept: "Marketing" },
    { title: "Product Manager", type: "Full-time", location: "Hybrid", dept: "Product" }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="px-20 py-24 flex flex-col md:flex-row items-center justify-between gap-16 border-b border-gray-100">
        <div className="flex-1 max-w-2xl">
          <h1 className="text-6xl md:text-7xl font-semibold text-gray-900 leading-[1.1] tracking-tight">
            Build the <span className="text-blue-500 italic">future of Digital</span> with us.
          </h1>
        </div>
        <div className="flex-1 max-w-xl">
          <p className="text-xl text-gray-500 leading-relaxed">
            We're looking for passionate individuals who want to push the boundaries of what's possible in tech and design. Join our distributed team and make an impact.
          </p>
        </div>
      </section>


      {/* Jobs Listing */}
      <section className="px-20 pb-32">
        <div className="flex flex-col gap-6">
          {jobs.map((job, i) => (
            <div key={i} className="group p-10 bg-[#f5f5f7] border border-gray-100 rounded-[40px] flex items-center justify-between hover:-translate-y-3 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 cursor-pointer">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold text-blue-500 uppercase tracking-widest">{job.dept}</span>
                <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-blue-500 transition-colors tracking-tight">{job.title}</h3>
                <div className="flex gap-4 mt-2">
                  <span className="text-sm text-gray-400 font-medium">{job.type}</span>
                  <span className="text-sm text-gray-400 font-medium">•</span>
                  <span className="text-sm text-gray-400 font-medium">{job.location}</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center group-hover:translate-x-3 transition-all duration-500">
                <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Careers;
