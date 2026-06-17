import React, { useState, useEffect } from 'react';
import { client, isSanityConfigured } from '../sanityClient';
import Glance from '../components/Glance';

/**
 * Careers Page Component
 * Dynamic hiring page connected to Sanity CMS, with Zen Browser-style Glance
 * overlays for job details and a mailto Apply button.
 */
const fallbackJobs = [
  { title: "Senior UI/UX Designer", type: "Full-time", location: "Remote", dept: "Creative", salary: "₹15-22 LPA", qualification: "4+ years in UI/UX, Figma expertise" },
  { title: "Full-Stack Developer", type: "Full-time", location: "Kochi, India", dept: "Engineering", salary: "₹18-28 LPA", qualification: "B.Tech in CS, 3+ years React & Node.js" },
  { title: "Marketing Strategist", type: "Contract", location: "Remote", dept: "Marketing", salary: "₹10-15 LPA", qualification: "MBA in Marketing or equivalent experience" },
  { title: "Product Manager", type: "Full-time", location: "Hybrid", dept: "Product", salary: "₹20-30 LPA", qualification: "3+ years product management, Agile certified" }
];

function Careers() {
  const [jobs, setJobs] = useState(fallbackJobs);
  const [isLoading, setIsLoading] = useState(true);
  const [glanceJob, setGlanceJob] = useState(null);
  const [originRect, setOriginRect] = useState(null);

  useEffect(() => {
    if (!isSanityConfigured) {
      setIsLoading(false);
      return;
    }

    const fetchJobs = async () => {
      try {
        const jobsData = await client.fetch(`*[_type == "job"] { title, type, location, dept, salary, qualification }`);
        if (jobsData && jobsData.length > 0) {
          setJobs(jobsData);
        }
      } catch (error) {
        console.error("Failed to fetch jobs from Sanity, falling back to static local data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchJobs();
  }, []);

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
          {isLoading ? (
            Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="p-10 bg-[#f5f5f7]/60 border border-gray-100/50 rounded-[40px] flex items-center justify-between animate-pulse">
                <div className="flex flex-col gap-2.5 w-2/3">
                  <div className="w-24 h-4 bg-gray-200 rounded-full" />
                  <div className="w-64 h-8 bg-gray-200 rounded-2xl" />
                  <div className="flex gap-4 mt-2">
                    <div className="w-16 h-4 bg-gray-200 rounded" />
                    <div className="w-4 h-4 bg-gray-200 rounded-full" />
                    <div className="w-24 h-4 bg-gray-200 rounded" />
                  </div>
                </div>
                <div className="w-12 h-12 rounded-full bg-gray-200" />
              </div>
            ))
          ) : (
            jobs.map((job, i) => (
              <div
                key={i}
                className="group p-10 bg-[#f5f5f7] border border-gray-100 rounded-[40px] flex items-center justify-between hover:-translate-y-3 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 cursor-pointer"
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  setOriginRect({ top: rect.top, left: rect.left, width: rect.width, height: rect.height });
                  setGlanceJob(job);
                }}
              >
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
            ))
          )}
        </div>
      </section>

      {/* Job Glance Overlay */}
      <Glance isOpen={!!glanceJob} onClose={() => { setGlanceJob(null); setOriginRect(null); }} originRect={originRect}>
        {glanceJob && (
          <div>
            {/* Title */}
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight mb-10">{glanceJob.title}</h2>

            {/* Details list */}
            <div className="mb-10">
              <div className="flex justify-between items-baseline py-4 border-b border-gray-100">
                <span className="text-sm text-gray-400 font-medium">Location</span>
                <span className="text-gray-900 font-semibold">{glanceJob.location}</span>
              </div>
              <div className="flex justify-between items-baseline py-4 border-b border-gray-100">
                <span className="text-sm text-gray-400 font-medium">Role Type</span>
                <span className="text-gray-900 font-semibold">{glanceJob.type}</span>
              </div>
              <div className="flex justify-between items-baseline py-4 border-b border-gray-100">
                <span className="text-sm text-gray-400 font-medium">Salary</span>
                <span className="text-gray-900 font-semibold">{glanceJob.salary || 'Competitive'}</span>
              </div>
              <div className="flex justify-between items-baseline py-4">
                <span className="text-sm text-gray-400 font-medium">Qualification</span>
                <span className="text-gray-900 font-semibold text-right max-w-[60%]">{glanceJob.qualification || 'See job description'}</span>
              </div>
            </div>

            {/* Apply Button */}
            <a
              href={`mailto:gamerpayyan1@gmail.com?subject=Application for ${encodeURIComponent(glanceJob.title)}&body=Hi,%0D%0A%0D%0AI would like to apply for the ${encodeURIComponent(glanceJob.title)} position at Codescape.%0D%0A%0D%0AThank you.`}
              className="block w-full text-center px-10 py-4 bg-gray-900 text-white rounded-xl font-semibold hover:bg-black transition-colors duration-200 active:scale-[0.98]"
            >
              Apply Now
            </a>
          </div>
        )}
      </Glance>
    </div>
  );
}

export default Careers;
