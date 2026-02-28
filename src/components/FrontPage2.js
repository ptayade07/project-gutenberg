import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

// Animation keyframes for infinite scroll
const scrollLeftKeyframes = `
  @keyframes scroll-left {
    0% { transform: translateX(0); }
    100% { transform: translateX(-100%); }
  }
`;

const scrollRightKeyframes = `
  @keyframes scroll-right {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(0); }
  }
`;

const testimonialScrollKeyframes = `
  @keyframes testimonial-scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(calc(-350px * 4 - 24px * 4)); }
  }
`;

const style = document.createElement('style');
style.textContent = `${scrollLeftKeyframes} ${scrollRightKeyframes} ${testimonialScrollKeyframes}`;
document.head.appendChild(style);

const Accordion = ({ faq, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="bg-white/[0.02] hover:bg-white/[0.04] backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300 border border-white/5 hover:border-white/10">
      <motion.button
        initial={false}
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 px-6 focus:outline-none group"
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium text-white group-hover:text-white/90 text-left">{faq.question}</h3>
        <motion.div
          initial={false}
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="w-8 h-8 bg-white/5 group-hover:bg-white/10 rounded-full flex items-center justify-center transition-all duration-200"
        >
          <svg className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </motion.div>
      </motion.button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="px-6 pb-6"
            >
              <p className="text-white/60">{faq.answer}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FrontPage2 = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div className="relative min-h-screen w-full bg-[#090312] overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0">
        {/* Main centered purple glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-[#8B3DFF]/15 rounded-[600px] filter blur-[120px] transform -translate-y-1/4"></div>
        
        {/* Secondary glow for depth */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#7B2BFF]/10 rounded-full filter blur-[130px] transform translate-y-1/4"></div>
        
        {/* Rich gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#090312]/70 to-[#090312]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,61,255,0.12),transparent_70%)]"></div>
        
        {/* Additional purple atmosphere */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_0%,rgba(123,43,255,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 mix-blend-overlay opacity-20 bg-gradient-to-tr from-[#8B3DFF]/5 via-transparent to-[#8B3DFF]/5"></div>
      </div>
      {/* Content container */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="relative z-50 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <motion.div
                initial={{ rotate: -90 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 0.6 }}
                className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </motion.div>
              <span className="text-white text-xl font-medium">Project Gutenberg</span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              {['Home', 'Library', 'Categories', 'Authors', 'Reading List', 'Community'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <button 
                className="text-sm text-white/70 hover:text-white transition-colors"
                onClick={() => navigate('/login')} // Navigate to Login page
              >
                Sign In
              </button>
              <button 
                className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-[#0A0B14] hover:bg-white/90 transition-colors"
                onClick={() => navigate('/login')} // Navigate to Login page
              >
                Get started
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative pt-24 pb-40">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center bg-white/5 rounded-full px-4 py-2 mb-8">
                <svg className="w-4 h-4 text-purple-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-white/80">Discover Your Next Great Read</span>
              </div>

              <h1 className="text-[4.2rem] leading-[1.1] font-['Times_New_Roman'] font-normal tracking-[-0.02em] mb-4 text-white">
                "Get lost in the stories<br />
                that shape us."
              </h1>
              <p className="text-lg text-gray-300 mb-4">Join over 5 million readers who have discovered their next favorite book with us.</p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <button 
                  className="w-full sm:w-auto px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors"
                  onClick={() => navigate('/login')} // Navigate to Login page
                >
                  Get Started for Free
                </button>
              </div>

              {/* Email Input Section */}
              <div className="max-w-xl mx-auto mb-24">
                <div className="relative flex items-center">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full px-8 py-6 bg-[#1e1e2e]/50 border border-white/10 rounded-full text-white placeholder-white/50 focus:outline-none focus:border-purple-500 pr-44 text-base"
                  />
                  <button 
                    className="absolute right-2 px-8 py-4 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition-colors text-base"
                    onClick={() => navigate('/login')} // Navigate to Login page
                  >
                    Sign in
                  </button>
                </div>
                <div className="flex items-center justify-center gap-6 mt-4 text-sm text-white/60">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>No credit card required</span>
                  </div>
                  <span className="text-white/20">•</span>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>7 days free trial</span>
                  </div>
                </div>
              </div>

            </motion.div>
            
            {/* Scroll Down Arrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: [0, 10, 0] }}
              transition={{ 
                y: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                },
                opacity: { duration: 0.8 }
              }}
              className="absolute bottom-20 left-0 right-0 mx-auto text-center z-10"
            >
              <div className="inline-flex flex-col items-center">
                <div className="bg-purple-500 rounded-full w-12 h-12 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
                <p className="text-white/60 text-sm font-light">Scroll for more</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Common Use Cases Section */}
        <section className="relative py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-medium text-white mb-4">Reading Made Easy</h2>
              <p className="text-lg text-gray-400">Discover how thousands of readers are enhancing their reading experience.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Personalized Library Card */}
              <div className="bg-white/[0.02] backdrop-blur-2xl rounded-2xl p-8 border border-white/20 hover:border-white/30 transition-all duration-300 shadow-[0_8px_32px_rgba(139,61,255,0.1)] hover:shadow-[0_8px_32px_rgba(139,61,255,0.15)] group">
                <h3 className="text-xl font-medium text-white mb-3">Personalized Library</h3>
                <a href="#" className="text-purple-400 hover:text-purple-300 flex items-center gap-2 mb-8">
                  Learn more 
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <div className="relative h-48">
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {['fiction', 'mystery', 'romance', 'sci-fi', 'history', 'biography', 'fantasy', 'poetry', 'drama'].map((genre, i) => (
                      <div key={i} className="w-12 h-16 bg-white/[0.03] backdrop-blur-sm rounded-lg flex items-center justify-center transform hover:scale-105 transition-all hover:bg-white/[0.08] group-hover:shadow-[0_4px_12px_rgba(139,61,255,0.05)]">
                        <div className="w-8 h-12 bg-gradient-to-b from-purple-500/30 to-purple-600/20 rounded-md"></div>
                      </div>
                    ))}
                  </div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500/90 to-purple-600/90 rounded-xl flex items-center justify-center shadow-[0_8px_32px_rgba(139,61,255,0.3)]">
                      <svg className="w-8 h-8 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Reading Progress Card */}
              <div className="bg-white/[0.02] backdrop-blur-2xl rounded-2xl p-8 border border-white/20 hover:border-white/30 transition-all duration-300 shadow-[0_8px_32px_rgba(139,61,255,0.1)] hover:shadow-[0_8px_32px_rgba(139,61,255,0.15)] group">
                <h3 className="text-xl font-medium text-white mb-3">Track Your Progress</h3>
                <a href="#" className="text-purple-400 hover:text-purple-300 flex items-center gap-2 mb-8">
                  Learn more 
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <div className="relative h-48">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500/90 to-purple-600/90 rounded-xl flex items-center justify-center shadow-[0_8px_32px_rgba(139,61,255,0.3)] mb-4">
                      <svg className="w-8 h-8 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div className="w-1 h-16 bg-gradient-to-b from-purple-500/40 to-purple-600/5 rounded-full group-hover:from-purple-500/50"></div>
                    <div className="grid grid-cols-2 gap-8 mt-4">
                      <div className="flex flex-col items-center">
                        <div className="text-2xl font-bold text-white/90">85%</div>
                        <div className="text-sm text-white/50">Complete</div>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="text-2xl font-bold text-white/90">12</div>
                        <div className="text-sm text-white/50">Books</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Community Features Card */}
              <div className="bg-white/[0.02] backdrop-blur-2xl rounded-2xl p-8 border border-white/20 hover:border-white/30 transition-all duration-300 shadow-[0_8px_32px_rgba(139,61,255,0.1)] hover:shadow-[0_8px_32px_rgba(139,61,255,0.15)] group">
                <h3 className="text-xl font-medium text-white mb-3">Join Book Clubs</h3>
                <a href="#" className="text-purple-400 hover:text-purple-300 flex items-center gap-2 mb-8">
                  Learn more 
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <div className="relative h-48">
                  <div className="flex flex-col items-center">
                    <div className="flex -space-x-4 mb-4">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/90 to-purple-600/90 border border-white/[0.05] flex items-center justify-center shadow-[0_4px_12px_rgba(139,61,255,0.2)]">
                          <svg className="w-6 h-6 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                      ))}
                    </div>
                    <div className="text-center mt-4">
                      <div className="text-white/90 font-medium mb-2">Weekly Discussions</div>
                      <div className="text-sm text-white/50">Join readers worldwide in live book discussions</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Partners Section */}
        <section className="relative py-20 border-t border-white/5">
          {/* Decorative background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full filter blur-[100px] -translate-y-1/2 -translate-x-1/2"></div>
            <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full filter blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 relative">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center bg-white/5 rounded-full px-4 py-2 mb-6">
                <svg className="w-4 h-4 text-purple-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-white/80">Explore Your Interests</span>
              </div>
              <h2 className="text-4xl font-medium text-white mb-4">Discover Your Next Genre</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">Explore a diverse collection of literary worlds and find your perfect reading match</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Fiction */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="p-6 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-[#e9e1ff]/10 rounded-xl flex items-center justify-center mb-5">
                  <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-white mb-2">Fiction</h3>
                <p className="text-white/60 mb-3">Immerse yourself in captivating narratives and unforgettable characters that transport you to new worlds.</p>
                <span className="text-sm text-purple-400">2,500+ books</span>
              </motion.div>

              {/* Mystery */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="p-6 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-[#fff8e1]/10 rounded-xl flex items-center justify-center mb-5">
                  <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-white mb-2">Mystery</h3>
                <p className="text-white/60 mb-3">Solve puzzling crimes and follow detectives through thrilling investigations that keep you guessing.</p>
                <span className="text-sm text-amber-400">1,800+ books</span>
              </motion.div>

              {/* Romance */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="p-6 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-[#f8e1e1]/10 rounded-xl flex items-center justify-center mb-5">
                  <svg className="w-8 h-8 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-white mb-2">Romance</h3>
                <p className="text-white/60 mb-3">Experience the thrill of love, passion, and emotional connections that transcend time and circumstance.</p>
                <span className="text-sm text-pink-400">3,000+ books</span>
              </motion.div>

              {/* Sci-Fi */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="p-6 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-[#e1f1ff]/10 rounded-xl flex items-center justify-center mb-5">
                  <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-white mb-2">Science Fiction</h3>
                <p className="text-white/60 mb-3">Explore futuristic worlds, advanced technology, and thought-provoking scenarios that challenge reality.</p>
                <span className="text-sm text-blue-400">1,200+ books</span>
              </motion.div>

              {/* Fantasy */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="p-6 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-[#e1f8e2]/10 rounded-xl flex items-center justify-center mb-5">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-white mb-2">Fantasy</h3>
                <p className="text-white/60 mb-3">Discover magical realms, mythical creatures, and epic adventures that stretch the limits of imagination.</p>
                <span className="text-sm text-green-400">2,000+ books</span>
              </motion.div>

              {/* History */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="p-6 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-[#f8e1ff]/10 rounded-xl flex items-center justify-center mb-5">
                  <svg className="w-8 h-8 text-fuchsia-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-white mb-2">History</h3>
                <p className="text-white/60 mb-3">Journey through time to explore significant events and figures that shaped our world and civilization.</p>
                <span className="text-sm text-fuchsia-400">900+ books</span>
              </motion.div>
            </div>

            <div className="mt-12 text-center">
              <a href="#" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors group">
                <span className="text-sm font-medium">Explore All Categories</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Reader Reviews Section */}
        <section className="relative py-20 border-t border-white/5">
          {/* Decorative background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full filter blur-[120px] -translate-y-1/2 -translate-x-1/2"></div>
            <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-purple-600/5 rounded-full filter blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 relative">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center bg-white/5 rounded-full px-4 py-2 mb-6">
                <svg className="w-4 h-4 text-purple-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-white/80">Reader Reviews</span>
              </div>
              <h2 className="text-4xl font-medium text-white mb-4">What Our Community Says</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">Join thousands of readers who have found their next favorite book through our community recommendations</p>
            </motion.div>

            <div className="relative overflow-hidden py-10">
              {/* Forward Scrolling Row */}
              <div className="flex gap-6" style={{ animation: 'scroll-left 40s linear infinite' }}>
                {[...Array(2)].flatMap((_, dupIndex) => [
                  { text: "This platform has revolutionized how I discover new books. The recommendations are spot-on!", author: "Sarah Mitchell", role: "Book Enthusiast", rating: 5 },
                  { text: "I love how easy it is to track my reading progress and join discussion groups.", author: "James Wilson", role: "Literature Professor", rating: 5 },
                  { text: "The curated collections have helped me discover genres I never thought I'd enjoy.", author: "Emily Chen", role: "Aspiring Writer", rating: 4 },
                  { text: "The community features make reading a truly social experience.", author: "Michael Brown", role: "Book Club Leader", rating: 5 }
                ].map((review, i) => (
                  <motion.div
                    key={`${dupIndex}-${i}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex-none w-[350px]"
                  >
                    <div className="bg-white/[0.02] backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 shadow-[0_4px_16px_rgba(139,61,255,0.1)] hover:shadow-[0_4px_16px_rgba(139,61,255,0.2)] group h-[220px] flex flex-col justify-between">
                      <div>
                        <div className="flex items-center mb-3">
                          {[...Array(5)].map((_, idx) => (
                            <svg key={idx} className={`w-4 h-4 ${idx < review.rating ? 'text-purple-500' : 'text-purple-500/20'}`} fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                          <span className="ml-2 text-white/50 text-xs">{review.rating}.0</span>
                        </div>
                        <p className="text-white/80 text-base mb-4 leading-relaxed line-clamp-3">"{review.text}"</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500/30 to-purple-600/30 flex items-center justify-center shadow-[0_4px_12px_rgba(139,61,255,0.1)]">
                          <span className="text-white/90 text-lg font-medium">{review.author[0]}</span>
                        </div>
                        <div>
                          <h4 className="text-white/90 font-medium">{review.author}</h4>
                          <p className="text-white/50 text-sm">{review.role}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )))}
              </div>

              {/* Backward Scrolling Row */}
              <div className="flex gap-6 mt-6" style={{ animation: 'scroll-right 40s linear infinite' }}>
                {[...Array(2)].flatMap((_, dupIndex) => [
                  { text: "The personalized reading lists have helped me stay organized and motivated.", author: "David Park", role: "Avid Reader", rating: 5 },
                  { text: "I appreciate the diverse range of books and perspectives available here.", author: "Lisa Thompson", role: "Book Reviewer", rating: 4 },
                  { text: "The reading challenges have made my reading journey more exciting.", author: "Alex Rivera", role: "Fantasy Enthusiast", rating: 5 },
                  { text: "This platform has connected me with readers who share my interests.", author: "Rachel Kim", role: "Book Blogger", rating: 4 }
                ].map((review, i) => (
                  <motion.div
                    key={`${dupIndex}-${i}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                    className="flex-none w-[350px]"
                  >
                    <div className="bg-white/[0.02] backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 shadow-[0_4px_16px_rgba(139,61,255,0.1)] hover:shadow-[0_4px_16px_rgba(139,61,255,0.2)] group h-[220px] flex flex-col justify-between">
                      <div>
                        <div className="flex items-center mb-3">
                          {[...Array(5)].map((_, idx) => (
                            <svg key={idx} className={`w-4 h-4 ${idx < review.rating ? 'text-purple-500' : 'text-purple-500/20'}`} fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                          <span className="ml-2 text-white/50 text-xs">{review.rating}.0</span>
                        </div>
                        <p className="text-white/80 text-base mb-4 leading-relaxed line-clamp-3">"{review.text}"</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500/30 to-purple-600/30 flex items-center justify-center shadow-[0_4px_12px_rgba(139,61,255,0.1)]">
                          <span className="text-white/90 text-lg font-medium">{review.author[0]}</span>
                        </div>
                        <div>
                          <h4 className="text-white/90 font-medium">{review.author}</h4>
                          <p className="text-white/50 text-sm">{review.role}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )))}
              </div>
            </div>
          </div>
        </section>

        {/* Chapter Timeline Section */}
        <section className="relative py-20 border-t border-white/5">
          {/* Decorative background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full filter blur-[100px] translate-y-1/4"></div>
            <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/5 rounded-full filter blur-[100px]"></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 relative">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center bg-white/5 rounded-full px-4 py-2 mb-6">
                <svg className="w-4 h-4 text-purple-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-white/80">Reading Progress</span>
              </div>
              <h2 className="text-4xl font-medium text-white mb-4">Track Your Reading Journey</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">Keep track of your reading progress and explore chapters with our elegant timeline view</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Book Preview Column */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-white/[0.02] backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 shadow-[0_8px_32px_rgba(139,61,255,0.1)] hover:shadow-[0_8px_32px_rgba(139,61,255,0.2)] h-full"
                >
                  <div className="flex flex-col h-full">
                    <div className="flex-1">
                      <div className="aspect-[2/3] mx-auto mb-6 rounded-xl overflow-hidden relative max-w-[220px] shadow-[0_12px_32px_rgba(0,0,0,0.4)] group perspective transform hover:rotate-y-12 transition-all duration-700">
                        {/* Book cover texture */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-purple-700/20 to-purple-800/40"></div>
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48ZyBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiPjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiLz48cGF0aCBkPSJNMCAwaDIwdjIwSDB6TTIwIDIwaDIwdjIwSDIweiIvPjwvZz48L3N2Zz4=')] opacity-10"></div>
                        
                        {/* Book spine edge */}
                        <div className="absolute left-0 top-0 bottom-0 w-[6px] bg-gradient-to-r from-black/30 to-transparent"></div>
                        
                        {/* Book cover content */}
                        <div className="absolute inset-0 p-6 flex flex-col justify-between">
                          <div className="text-center">
                            <div className="text-xs text-white/50 uppercase tracking-widest mb-1">BESTSELLER</div>
                            <h3 className="text-xl font-medium text-white/90 mb-2 font-serif">The Art of Reading</h3>
                            <p className="text-sm text-white/70">By Michael Davidson</p>
                          </div>
                          
                          {/* Book cover illustration */}
                          <div className="relative h-20 my-4">
                            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-white/20"></div>
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-purple-400/80 to-purple-600/80 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(139,61,255,0.4)]">
                              <svg className="w-6 h-6 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                              </svg>
                            </div>
                          </div>
                          
                          <div className="bg-white/10 backdrop-blur-sm rounded-md p-3 border border-white/10">
                            <div className="text-xs text-white/70 mb-1">Reading Progress</div>
                            <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                              <div className="h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full shadow-[0_0_8px_rgba(139,61,255,0.5)]" style={{ width: '65%' }}></div>
                            </div>
                            <div className="flex justify-between mt-1">
                              <span className="text-xs text-white/50">Chapter 4</span>
                              <span className="text-xs text-white/50">65%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6">
                      <h4 className="text-white/90 font-medium text-lg mb-3 flex items-center">
                        <svg className="w-5 h-5 mr-2 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 2a1 1 0 00-1 1v1.323l-3.954 1.582a1 1 0 00-.646.934v9.322a1 1 0 00.648.937l3.95 1.576a1 1 0 00.746.001l3.95-1.575a1 1 0 00.648-.937v-9.32a1 1 0 00-.646-.934L11 4.323V3a1 1 0 00-1-1zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                        </svg>
                        Current Chapter
                      </h4>
                      <div className="bg-white/[0.03] backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-purple-500/20 transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,61,255,0.1)]">
                        <div className="flex items-center mb-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mr-2 animate-pulse"></div>
                          <h5 className="text-white/80 font-medium">Chapter 4: Deep Dive</h5>
                        </div>
                        <p className="text-white/60 text-sm leading-relaxed mb-4">Going deeper into the core concepts of literature analysis and critical thinking. Discover how advanced readers extract meaning from complex texts.</p>
                        <button className="mt-2 w-full py-3 bg-gradient-to-r from-purple-500/80 to-purple-600/80 hover:from-purple-500 hover:to-purple-600 rounded-lg text-white/90 font-medium transition-all duration-300 shadow-[0_4px_12px_rgba(139,61,255,0.2)] hover:shadow-[0_4px_20px_rgba(139,61,255,0.4)] flex items-center justify-center">
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                          Continue Reading
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Chapter Timeline Column */}
              <div className="lg:col-span-3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white/[0.02] backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 shadow-[0_8px_32px_rgba(139,61,255,0.1)] hover:shadow-[0_8px_32px_rgba(139,61,255,0.2)] h-full"
                >
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-white/90 font-medium text-xl flex items-center">
                      <svg className="w-5 h-5 mr-2 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                      </svg>
                      Book Chapters
                    </h3>
                    <span className="text-sm text-white/40 bg-white/5 px-3 py-1 rounded-full">8 chapters</span>
                  </div>
                  <div className="space-y-2 relative">
                    {/* Vertical line that connects all dots */}
                    <div className="absolute top-0 bottom-0 left-[19px] w-0.5 bg-gradient-to-b from-purple-500/50 via-white/10 to-white/5 rounded-full"></div>
                    
                    {[
                      { title: "Introduction", content: "An overview of what's to come in this book.", completed: true, duration: "15 min" },
                      { title: "Chapter 1: Getting Started", content: "Understanding the basics of our journey.", completed: true, duration: "25 min" },
                      { title: "Chapter 2: Deep Dive", content: "Going deeper into the core concepts.", completed: true, duration: "40 min" },
                      { title: "Chapter 3: Advanced Topics", content: "Exploring the complexities of the subject.", completed: true, duration: "35 min" },
                      { title: "Chapter 4: Real-World Applications", content: "Applying concepts in real-life situations.", active: true, completed: false, duration: "45 min" },
                      { title: "Chapter 5: Expert Insights", content: "Learning from industry professionals.", completed: false, duration: "30 min" },
                      { title: "Chapter 6: Common Mistakes", content: "Avoiding pitfalls during implementation.", completed: false, duration: "20 min" },
                      { title: "Chapter 7: Final Thoughts", content: "Wrapping up and reflecting on key takeaways.", completed: false, duration: "15 min" }
                    ].map((chapter, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                        className={`relative flex items-start px-5 py-3 ${chapter.active ? 'bg-white/[0.03]' : ''} rounded-xl transition-all duration-300 group hover:bg-white/[0.03] border border-transparent ${chapter.active ? 'border-white/10' : ''} hover:border-white/10 ${chapter.completed ? 'hover:border-purple-500/20' : ''}`}
                      >
                        <div className="flex flex-col items-center mr-4 relative z-10">
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center ${chapter.completed ? 'bg-purple-500 shadow-[0_0_10px_rgba(139,61,255,0.5)]' : chapter.active ? 'bg-white/10 border-2 border-purple-400' : 'bg-white/10'} transition-all duration-300 group-hover:scale-110`}>
                            {chapter.completed && (
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            )}
                            {chapter.active && (
                              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                            )}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                            <h4 className={`font-medium ${chapter.active ? 'text-purple-400' : chapter.completed ? 'text-white/80' : 'text-white/60'} group-hover:text-white/90 transition-colors`}>
                              {chapter.title}
                            </h4>
                            <div className="flex items-center gap-2">
                              <div className={`text-xs ${chapter.completed ? 'text-green-400' : chapter.active ? 'text-purple-400' : 'text-white/40'} group-hover:${chapter.completed ? 'text-green-300' : chapter.active ? 'text-purple-300' : 'text-white/60'} transition-colors`}>
                                {chapter.completed ? (
                                  <div className="flex items-center">
                                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    Completed
                                  </div>
                                ) : chapter.active ? 'In Progress' : 'Not Started'}
                              </div>
                              <div className="hidden sm:flex text-xs text-white/30 px-2 py-0.5 rounded-full bg-white/5">
                                {chapter.duration}
                              </div>
                            </div>
                          </div>
                          <p className="text-sm text-white/50 mb-2 group-hover:text-white/60 transition-colors">{chapter.content}</p>
                          {chapter.active && (
                            <div className="mt-3 bg-white/5 rounded-lg p-2">
                              <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full shadow-[0_0_5px_rgba(139,61,255,0.5)]" style={{ width: '65%' }}></div>
                              </div>
                              <div className="flex justify-between mt-1">
                                <span className="text-xs text-white/40">65% Complete</span>
                                <span className="text-xs text-white/40">35 min left</span>
                              </div>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="relative py-20 border-t border-white/5">
          {/* Decorative background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/3 left-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full filter blur-[120px] -translate-x-2/3"></div>
            <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-purple-600/5 rounded-full filter blur-[120px]"></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 relative">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center bg-white/5 rounded-full px-4 py-2 mb-6">
                <svg className="w-4 h-4 text-purple-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-white/80">Success Stories</span>
              </div>
              <h2 className="text-4xl font-medium text-white mb-4">Reader Testimonials</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">See what our dedicated community of readers has to say about their Project Gutenberg experience</p>
            </motion.div>

            <div className="relative overflow-hidden">
              <div className="flex gap-6 py-10 testimonials-container" style={{ animation: 'testimonial-scroll 40s linear infinite' }}>
                {[...Array(2)].flatMap((_, dupIndex) => [
                  {
                    title: "Reader's Paradise",
                    review: "As an avid book lover, Project Gutenberg has completely transformed how I discover and experience new stories. The personalized recommendations are uncannily accurate!",
                    author: "Olivia Denver",
                    company: "Book Club Organizer",
                  },
                  {
                    title: "Elegant Interface",
                    review: "I love how easy it is to use Project Gutenberg. The reading progress tracker helps me stay motivated, and the chapter timeline view is simply brilliant.",
                    author: "Peter Morgan",
                    company: "English Professor",
                  },
                  {
                    title: "Exceptional Experience",
                    review: "I stumbled upon Project Gutenberg and was blown away by the community features. Being able to discuss chapters with other readers has enhanced my reading experience tenfold.",
                    author: "Jason Moritz",
                    company: "Literature Enthusiast",
                  },
                  {
                    title: "Game Changer",
                    review: "I've tried many reading platforms, but Project Gutenberg stands out with its beautiful design and thoughtful features. The genre discovery section introduced me to styles I never thought I'd enjoy.",
                    author: "Benjamin Clay",
                    company: "Digital Librarian",
                  },
                ].map((testimonial, i) => (
                  <motion.div
                    key={`${dupIndex}-${i}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex-none w-[350px]"
                  >
                    <div className="bg-white/[0.03] backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-300 shadow-[0_8px_32px_rgba(139,61,255,0.1)] hover:shadow-[0_8px_32px_rgba(139,61,255,0.25)] group h-[320px] flex flex-col justify-between transform hover:-translate-y-1">
                      <div>
                        <h3 className="text-xl font-medium text-white/90 mb-2">{testimonial.title}</h3>
                        <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full mb-4"></div>
                        <p className="text-white/70 text-base mb-4 leading-relaxed line-clamp-5">"{testimonial.review}"</p>
                      </div>
                      <div className="mt-auto">
                        <h4 className="font-medium text-white/80">{testimonial.author}</h4>
                        <p className="text-purple-400/80 text-sm">{testimonial.company}</p>
                      </div>
                    </div>
                  </motion.div>
                )))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative py-20 border-t border-white/5">
          {/* Decorative background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full filter blur-[120px] -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-600/5 rounded-full filter blur-[120px] translate-y-1/2"></div>
          </div>

          <div className="max-w-3xl mx-auto px-6 relative">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-medium text-white mb-4">Frequently Asked <span className="text-gray-400">Questions</span></h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">Seamlessly use your preferred tools for unified reading, start to finish.</p>
            </motion.div>

            <div className="space-y-4">
              {[
                {
                  question: "What is Project Gutenberg?",
                  answer: "Project Gutenberg is a comprehensive digital reading platform that helps you discover, organize, and enjoy books. It offers personalized recommendations, reading progress tracking, and community features to enhance your reading experience."
                },
                {
                  question: "Integration details?",
                  answer: "Project Gutenberg integrates seamlessly with popular services like Goodreads, Amazon Kindle, Apple Books, and more. You can import your existing libraries, sync reading progress across devices, and share your favorite books on social media platforms."
                },
                {
                  question: "Main features?",
                  answer: "Our platform offers personalized book recommendations, reading progress tracking, community discussions, virtual book clubs, author spotlight events, reading challenges, and a comprehensive library management system."
                },
                {
                  question: "Mobile availability?",
                  answer: "Project Gutenberg is available on iOS and Android devices with a fully responsive design. Our mobile apps offer offline reading capabilities, synced progress across all your devices, and push notifications for book club events and discussions."
                },
                {
                  question: "Task sharing possible?",
                  answer: "Yes! Project Gutenberg allows you to share reading lists, book recommendations, and reading challenges with friends and family. You can also create collaborative reading lists and participate in group discussions about shared books."
                },
                {
                  question: "Customer support options?",
                  answer: "We provide 24/7 customer support through live chat, email, and an extensive knowledge base. Premium subscribers also have access to priority support and personalized assistance for any issues or questions."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Accordion faq={faq} index={index} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Login Section */}
        <section className="relative py-24">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-purple-600/10 rounded-full filter blur-[120px] -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-700/10 rounded-full filter blur-[100px] translate-y-1/4"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-6 relative">
            <div className="bg-[rgba(255,255,255,0.03)] backdrop-blur-lg rounded-3xl border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.3)] overflow-hidden">
              <div className="grid md:grid-cols-5 items-center">
                {/* Content Side */}
                <div className="md:col-span-3 p-10 md:p-16 relative z-10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="inline-flex items-center bg-white/5 rounded-full px-4 py-2 mb-6">
                      <svg className="w-4 h-4 text-purple-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-white/80">Welcome Back</span>
                    </div>
                    <h2 className="text-5xl font-bold text-white mb-4 leading-tight">Sign in to <span className="text-purple-400">Project Gutenberg</span></h2>
                    <h3 className="text-lg font-bold text-white mb-8">Your Digital Library</h3>
                    <p className="text-lg text-gray-300 mb-8 max-w-lg">
                      Access your personalized reading experience, track your progress, and connect with fellow book lovers.
                    </p>
                    
                    <div className="relative">
                      <div className="flex flex-col gap-4">
                        <div className="flex-1 relative group">
                          <input 
                            type="email" 
                            placeholder="Email address" 
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-purple-500 transition-all duration-300 group-hover:border-white/20 caret-purple-500 shadow-inner shadow-black/10"
                          />
                        </div>
                        <div className="flex-1 relative group">
                          <input 
                            type="password" 
                            placeholder="Password" 
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-purple-500 transition-all duration-300 group-hover:border-white/20 caret-purple-500 shadow-inner shadow-black/10"
                          />
                        </div>
                        <div className="flex items-center justify-between mb-2">
                          <label className="flex items-center">
                            <input type="checkbox" className="w-4 h-4 rounded border-white/10 bg-white/5 text-purple-500 focus:ring-purple-500"/>
                            <span className="ml-2 text-sm text-white/60">Remember me</span>
                          </label>
                          <a href="#" className="text-sm text-purple-400 hover:text-purple-300 transition-colors">Forgot password?</a>
                        </div>
                        <button className="w-full px-8 py-4 bg-white text-[#0A0B14] font-medium rounded-xl hover:bg-purple-500 hover:text-white transition-all duration-300 shadow-lg shadow-purple-900/20 hover:shadow-purple-800/30 flex items-center justify-center">
                          <span>Sign In</span>
                          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </button>
                      </div>
                      
                      <div className="mt-6">
                        <div className="relative">
                          <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-white/10"></div>
                          </div>
                          <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-[#090312] text-white/60">Or continue with</span>
                          </div>
                        </div>

                        <div className="mt-6 grid grid-cols-3 gap-3">
                          <button className="flex items-center justify-center px-4 py-3 border border-white/10 rounded-lg hover:bg-white/5 transition-all duration-300 group">
                            <svg className="h-5 w-5 text-white/60 group-hover:text-white/80" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                            </svg>
                          </button>
                          <button className="flex items-center justify-center px-4 py-3 border border-white/10 rounded-lg hover:bg-white/5 transition-all duration-300 group">
                            <svg className="h-5 w-5 text-white/60 group-hover:text-white/80" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                            </svg>
                          </button>
                          <button className="flex items-center justify-center px-4 py-3 border border-white/10 rounded-lg hover:bg-white/5 transition-all duration-300 group">
                            <svg className="h-5 w-5 text-white/60 group-hover:text-white/80" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.164 6.839 9.49.5.09.682-.218.682-.486 0-.236-.009-.866-.014-1.7-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .269.18.579.688.481C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                            </svg>
                          </button>
                        </div>
                      </div>

                      <div className="mt-6 text-center text-sm">
                        <span className="text-white/60">Don't have an account?</span>
                        <a href="#" className="ml-2 text-purple-400 hover:text-purple-300 transition-colors">Sign up for free</a>
                      </div>
                    </div>
                  </motion.div>
                </div>
                
                {/* Decorative Side */}
                <div className="hidden md:block md:col-span-2 h-full relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-800/20 to-purple-900/30"></div>
                  <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-white/0 via-white/10 to-white/0"></div>
                  
                  <div className="relative h-full p-16 flex items-center justify-center">
                    <div className="relative w-56 h-72 perspective-1000">
                      {/* Floating book */}
                      <motion.div
                        initial={{ rotateY: 15, rotateX: 15 }}
                        animate={{ rotateY: -5, rotateX: -5 }}
                        transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                        className="absolute inset-0 rounded-lg shadow-[0_20px_80px_rgba(139,61,255,0.3)] bg-gradient-to-br from-purple-900 to-purple-800 border border-white/10"
                      >
                        <div className="absolute left-0 top-0 bottom-0 w-[8px] bg-gradient-to-r from-black/30 to-transparent"></div>
                        <div className="absolute inset-0 p-8 flex flex-col justify-between">
                          <div className="text-center">
                            <div className="text-xs text-white/50 uppercase tracking-widest mb-2">Welcome</div>
                            <h3 className="text-lg font-medium text-white/90 mb-2 font-serif">Your Reading Journey</h3>
                            <div className="w-12 h-0.5 bg-white/20 mx-auto my-3"></div>
                            <p className="text-xs text-white/70">Continue where you left off</p>
                          </div>
                          
                          <div className="flex justify-center">
                            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                              <svg className="w-6 h-6 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                      
                      <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-40 h-8 bg-purple-900/20 filter blur-xl rounded-full"></div>
                    </div>
                    
                    <div className="absolute inset-0 overflow-hidden">
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ 
                            x: Math.random() * 100 - 50, 
                            y: Math.random() * 100 - 50,
                            opacity: Math.random() * 0.5 + 0.3,
                            scale: Math.random() * 0.5 + 0.5
                          }}
                          animate={{ 
                            y: Math.random() * 100 - 50,
                            opacity: Math.random() * 0.5 + 0.3,
                          }}
                          transition={{ 
                            duration: Math.random() * 4 + 6, 
                            repeat: Infinity, 
                            repeatType: "reverse",
                            ease: "easeInOut"
                          }}
                          className="absolute w-2 h-2 bg-purple-400/40 rounded-full filter blur-sm"
                          style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="relative pt-24 pb-12 border-t border-white/5">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-600/5 rounded-full filter blur-[150px] -translate-y-1/2"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-6 relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
              {/* Brand Column */}
              <div className="lg:col-span-4">
                <div className="mb-6">
                  <a href="#" className="inline-flex items-center">
                    <svg className="w-9 h-9 text-white" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36Z" fill="currentColor" fillOpacity="0.1"/>
                      <path d="M18 30C24.6274 30 30 24.6274 30 18C30 11.3726 24.6274 6 18 6C11.3726 6 6 11.3726 6 18C6 24.6274 11.3726 30 18 30Z" fill="url(#paint0_linear)"/>
                      <path d="M12 14C12 11.7909 13.7909 10 16 10H22C22.5523 10 23 10.4477 23 11V25C23 25.5523 22.5523 26 22 26H13C12.4477 26 12 25.5523 12 25V14Z" fill="currentColor"/>
                      <defs>
                        <linearGradient id="paint0_linear" x1="6" y1="6" x2="30" y2="30" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#A855F7"/>
                          <stop offset="1" stopColor="#6366F1"/>
                        </linearGradient>
                      </defs>
                    </svg>
                    <span className="ml-3 text-xl font-semibold text-white">Project Gutenberg</span>
                  </a>
                </div>
                <p className="text-white/60 mb-6 max-w-md">
                  Project Gutenberg is a modern digital reading platform where readers connect, discover new books, and track their reading journey in one beautiful experience.
                </p>
                <div className="flex space-x-5">
                  <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-white/70 hover:bg-white/10 hover:text-white transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-white/70 hover:bg-white/10 hover:text-white transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-white/70 hover:bg-white/10 hover:text-white transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-white/70 hover:bg-white/10 hover:text-white transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
              
              {/* Navigation Columns */}
              <div className="lg:col-span-2">
                <h3 className="text-white font-medium mb-5 text-lg">Explore</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-white/60 hover:text-white transition-colors">Books</a></li>
                  <li><a href="#" className="text-white/60 hover:text-white transition-colors">Authors</a></li>
                  <li><a href="#" className="text-white/60 hover:text-white transition-colors">Genres</a></li>
                  <li><a href="#" className="text-white/60 hover:text-white transition-colors">New Releases</a></li>
                  <li><a href="#" className="text-white/60 hover:text-white transition-colors">Bestsellers</a></li>
                </ul>
              </div>
              
              <div className="lg:col-span-2">
                <h3 className="text-white font-medium mb-5 text-lg">Company</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-white/60 hover:text-white transition-colors">About Us</a></li>
                  <li><a href="#" className="text-white/60 hover:text-white transition-colors">Careers</a></li>
                  <li><a href="#" className="text-white/60 hover:text-white transition-colors">Press</a></li>
                  <li><a href="#" className="text-white/60 hover:text-white transition-colors">Blog</a></li>
                  <li><a href="#" className="text-white/60 hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
              
              <div className="lg:col-span-2">
                <h3 className="text-white font-medium mb-5 text-lg">Support</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-white/60 hover:text-white transition-colors">Help Center</a></li>
                  <li><a href="#" className="text-white/60 hover:text-white transition-colors">Safety Center</a></li>
                  <li><a href="#" className="text-white/60 hover:text-white transition-colors">Community</a></li>
                  <li><a href="#" className="text-white/60 hover:text-white transition-colors">FAQs</a></li>
                </ul>
              </div>
              
              <div className="lg:col-span-2">
                <h3 className="text-white font-medium mb-5 text-lg">Legal</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-white/60 hover:text-white transition-colors">Terms of Service</a></li>
                  <li><a href="#" className="text-white/60 hover:text-white transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="text-white/60 hover:text-white transition-colors">Cookie Policy</a></li>
                  <li><a href="#" className="text-white/60 hover:text-white transition-colors">Copyright</a></li>
                  <li><a href="#" className="text-white/60 hover:text-white transition-colors">Accessibility</a></li>
                </ul>
              </div>
            </div>
            
            {/* Bottom Bar */}
            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-white/40 text-sm mb-4 md:mb-0">
                © {new Date().getFullYear()} Project Gutenberg. All rights reserved.
              </p>
              <div className="flex flex-wrap gap-x-8 gap-y-3 justify-center">
                <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Terms</a>
                <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Privacy</a>
                <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Cookies</a>
                <a href="#" className="text-white/60 hover:text-white transition-colors text-sm flex items-center">
                  <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>English (US)</span>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default FrontPage2; 