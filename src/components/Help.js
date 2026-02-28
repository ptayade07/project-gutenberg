import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaQuestionCircle, FaBook, FaHeadphones, FaUser, FaCog, FaSearch, FaBookmark } from 'react-icons/fa';

const Help = () => {
  const navigate = useNavigate();

  const faqItems = [
    {
      question: "How do I start reading a book?",
      answer: "Simply click on any book cover to open it. You can then start reading by scrolling through the pages. Your reading progress will be automatically saved.",
      icon: <FaBook className="text-purple-400" />
    },
    {
      question: "How do I listen to audiobooks?",
      answer: "Navigate to the Audio Books section and click the play button on any audiobook. You can control playback using the player controls at the bottom of the screen.",
      icon: <FaHeadphones className="text-purple-400" />
    },
    {
      question: "How do I manage my profile?",
      answer: "Click on your profile picture in the sidebar to access your profile settings. Here you can update your information, reading preferences, and view your reading history.",
      icon: <FaUser className="text-purple-400" />
    },
    {
      question: "How do I search for books?",
      answer: "Use the search bar in the top navigation to search for books by title, author, or genre. You can also use filters to narrow down your search results.",
      icon: <FaSearch className="text-purple-400" />
    },
    {
      question: "How do I save books for later?",
      answer: "Click the bookmark icon on any book to add it to your reading list. You can access your saved books from the Collections section in your profile.",
      icon: <FaBookmark className="text-purple-400" />
    },
    {
      question: "How do I customize my reading experience?",
      answer: "Go to Settings to adjust font size, background color, reading mode, and other preferences to make your reading experience more comfortable.",
      icon: <FaCog className="text-purple-400" />
    }
  ];

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
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex justify-center mb-4">
              <FaQuestionCircle className="text-6xl text-purple-400" />
            </div>
            <h1 className="text-4xl font-['General_Sans'] font-medium tracking-[-0.03em] text-white bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 mb-4">
              Help Center
            </h1>
            <p className="text-gray-400 text-lg font-light max-w-2xl mx-auto">
              Find answers to common questions and learn how to use our platform
            </p>
          </motion.div>

          {/* FAQ Section */}
          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/[0.02] backdrop-blur-2xl rounded-2xl p-6 border border-white/5 hover:border-purple-500/20 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="text-2xl">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-white mb-2">
                      {item.question}
                    </h3>
                    <p className="text-gray-400">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-400 mb-4">
              Still need help? Contact our support team
            </p>
            <button className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors duration-300">
              Contact Support
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Help; 