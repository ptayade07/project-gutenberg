import React from 'react';
import './About.css'; // Ensure this is imported
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full bg-[#0A0A0F] overflow-hidden font-['Inter']">
      {/* Back Button */}
      <button 
        onClick={() => navigate('/main')}
        className="fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 bg-purple-500/10 text-purple-400 rounded-lg hover:bg-purple-500/20 transition-all duration-300"
      >
        <FaArrowLeft /> Back to Main Page
      </button>

      {/* Background gradient overlay */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-[#8B3DFF]/10 rounded-[600px] filter blur-[120px] transform -translate-y-1/4"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0F]/90 to-[#0A0A0F]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,61,255,0.08),transparent_70%)]"></div>
      </div>

      {/* Content container */}
      <div className="relative z-10 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-['General_Sans'] font-medium tracking-[-0.03em] text-white bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 mb-4">
              About Project Gutenberg
            </h1>
            <p className="text-gray-400 text-lg font-light max-w-2xl mx-auto">
              Project Gutenberg is a digital library offering over 60,000 free eBooks, focusing on older literary works for which copyright has expired.
            </p>
          </motion.div>

          {/* About Sections */}
          <div className="about-content">
            <div className="about-section">
              <h2>Our Mission</h2>
              <p>
                Our mission is to encourage the creation and distribution of eBooks. We provide free access to a vast collection of literature, making it available to everyone.
              </p>
            </div>
            <div className="about-section">
              <h2>History</h2>
              <p>
                Founded in 1971, Project Gutenberg is the oldest digital library. It started with a single eBook and has grown to include thousands of titles across various genres.
              </p>
            </div>
            <div className="about-section">
              <h2>Contribute</h2>
              <p>
                You can help us by donating, volunteering, or simply spreading the word about Project Gutenberg. Every contribution helps us keep the library alive and growing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 