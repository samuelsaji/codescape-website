import React from 'react';

/**
 * Terms and Conditions Page Component
 */
function Terms() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="px-20 pt-32 pb-16 text-center">
        <h1 className="text-6xl md:text-7xl font-semibold text-gray-900 tracking-tight mb-8 leading-none">
          Terms and <span className="text-blue-500">Conditions.</span>
        </h1>
        <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
          Please read these terms and conditions carefully before using Our Service. These terms govern your use of the Codescape website and services.
        </p>
        <div className="mt-12 inline-flex items-center gap-2 px-6 py-2 bg-gray-50 border border-gray-100 rounded-full text-xs font-bold text-gray-400 uppercase tracking-widest">
          <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Last updated: October 24, 2023
        </div>
      </section>

      {/* Content Section */}
      <section className="px-20 pb-32">
        <div className="max-w-4xl mx-auto bg-white border border-gray-100 rounded-[60px] p-16 md:p-24 shadow-sm">

          {/* Section 1: Introduction */}
          <div className="mb-20">
            <h2 className="text-3xl font-semibold text-gray-900 mb-8 flex items-center gap-4 tracking-tight">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-blue-500 text-sm font-bold">1</span>
              Introduction
            </h2>
            <div className="space-y-6 text-gray-500 leading-relaxed font-medium">
              <p>
                Welcome to Codescape ("Company", "we", "our", "us"). These Terms and Conditions ("Terms", "Terms and Conditions") govern your use of our website located at codescape.com (together or individually "Service") operated by Codescape.
              </p>
              <p>
                By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.
              </p>
            </div>
          </div>

          {/* Section 2: Intellectual Property */}
          <div className="mb-20">
            <h2 className="text-3xl font-semibold text-gray-900 mb-8 flex items-center gap-4 tracking-tight">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-blue-500 text-sm font-bold">2</span>
              Intellectual Property
            </h2>
            <div className="space-y-6 text-gray-500 leading-relaxed font-medium">
              <p>
                The Service and its original content (excluding Content provided by users), features and functionality are and will remain the exclusive property of Codescape and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  "Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Codescape.",
                  "You may not copy, modify, distribute, sell, or lease any part of our Services or included software."
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Section 3: User Obligations */}
          <div className="mb-20">
            <h2 className="text-3xl font-semibold text-gray-900 mb-8 flex items-center gap-4 tracking-tight">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-blue-500 text-sm font-bold">3</span>
              User Obligations
            </h2>
            <div className="bg-[#f5f5f7] rounded-[40px] p-12 space-y-8">
              <p className="text-gray-900 font-bold">By using our Service, you represent and warrant that:</p>
              <div className="grid grid-cols-1 gap-6">
                {[
                  "You have the legal capacity and you agree to comply with these Terms.",
                  "You are not a minor in the jurisdiction in which you reside.",
                  "You will not access the Service through automated or non-human means.",
                  "Your use of the Service will not violate any applicable law or regulation."
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-500 font-medium leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section 4: Links To Other Web Sites */}
          <div className="mb-20">
            <h2 className="text-3xl font-semibold text-gray-900 mb-8 flex items-center gap-4 tracking-tight">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-blue-500 text-sm font-bold">4</span>
              Links To Other Web Sites
            </h2>
            <p className="text-gray-500 leading-relaxed font-medium">
              Our Service may contain links to third-party web sites or services that are not owned or controlled by Codescape. Codescape has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that Codescape shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.
            </p>
          </div>

          {/* Section 5: Termination */}
          <div className="mb-20">
            <h2 className="text-3xl font-semibold text-gray-900 mb-8 flex items-center gap-4 tracking-tight">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-blue-500 text-sm font-bold">5</span>
              Termination
            </h2>
            <p className="text-gray-500 leading-relaxed font-medium">
              We may terminate or suspend your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will immediately cease.
            </p>
          </div>

          {/* Contact Section */}
          <div className="pt-20 border-t border-gray-100">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 tracking-tight">Contact Us</h3>
            <p className="text-gray-500 font-medium mb-12">If you have any questions about these Terms, please contact us:</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Email Us", info: "contact@thecodescape.in", icon: "email" },
                { title: "Visit Website", info: "www.thecodescape.in", icon: "language" }
              ].map((contact, i) => (
                <div key={i} className="group p-8 bg-white border border-gray-100 rounded-[32px] hover:border-blue-500 transition-all cursor-pointer">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-500 mb-6 group-hover:bg-blue-500 group-hover:text-white transition-all">
                    {contact.icon === 'email' ? (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ) : (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    )}
                  </div>
                  <h4 className="text-sm font-bold text-gray-900 mb-1">{contact.title}</h4>
                  <p className="text-sm text-gray-400 font-medium">{contact.info}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Terms;
