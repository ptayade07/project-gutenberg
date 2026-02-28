import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Downloads = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const downloadItems = [
    {
      id: 1,
      title: "Pride and Prejudice",
      format: "PDF",
      size: "1.2 MB",
      link: "#", // Replace with actual download link
    },
    {
      id: 2,
      title: "Frankenstein",
      format: "EPUB",
      size: "1.5 MB",
      link: "#", // Replace with actual download link
    },
    {
      id: 3,
      title: "The Great Gatsby",
      format: "MOBI",
      size: "1.8 MB",
      link: "#", // Replace with actual download link
    },
  ];

  const filteredItems = downloadItems.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-[#0A0A0F] to-[#1A1A1F] overflow-hidden font-['Inter']">
      <div className="relative z-10 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <button 
            onClick={() => navigate('/main')}
            className="fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 bg-purple-500/10 text-purple-400 rounded-lg hover:bg-purple-500/20 transition-all duration-300"
          >
            Back
          </button>

          {/* Header */}
          <motion.h1 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }} 
            className="text-4xl font-['General_Sans'] font-medium tracking-[-0.03em] text-white text-center mb-4"
          >
            Downloads
          </motion.h1>
          <p className="text-gray-400 text-lg font-light max-w-2xl mx-auto text-center mb-8">
            Here are your downloadable items.
          </p>

          {/* Search Bar */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search downloads..."
              className="w-full p-3 rounded border border-white/50 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Featured Downloads Section */}
          <h2 className="text-3xl font-semibold text-white mb-4">Featured Downloads</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {filteredItems.slice(0, 3).map(item => (
              <motion.div 
                key={item.id} 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6 }} 
                className="bg-white/[0.02] backdrop-blur-2xl rounded-2xl p-6 border border-white/5 transition-transform duration-300 hover:scale-105"
              >
                <h3 className="text-2xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-lg text-purple-400 mb-4">{item.format}</p>
                <p className="text-gray-400 mb-4">Size: {item.size}</p>
                <a 
                  href={item.link} 
                  className="mt-4 px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition duration-300"
                  download
                >
                  Download
                </a>
              </motion.div>
            ))}
          </div>

          {/* Statistics Section */}
          <h2 className="text-3xl font-semibold text-white mb-4">Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/[0.02] backdrop-blur-2xl rounded-2xl p-6 border border-white/5">
              <h3 className="text-xl font-medium text-white">Total Downloads</h3>
              <p className="text-3xl font-bold text-white">1,204</p>
            </div>
            <div className="bg-white/[0.02] backdrop-blur-2xl rounded-2xl p-6 border border-white/5">
              <h3 className="text-xl font-medium text-white">Average File Size</h3>
              <p className="text-3xl font-bold text-white">1.5 MB</p>
            </div>
            <div className="bg-white/[0.02] backdrop-blur-2xl rounded-2xl p-6 border border-white/5">
              <h3 className="text-xl font-medium text-white">Active Users</h3>
              <p className="text-3xl font-bold text-white">2,500</p>
            </div>
          </div>

          {/* No Results Message */}
          {filteredItems.length === 0 && (
            <p className="text-gray-400 text-lg mt-4 text-center">No downloads found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Downloads;