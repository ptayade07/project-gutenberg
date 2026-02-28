import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const UserProfile = () => {
  const navigate = useNavigate();
  const [hoveredBook, setHoveredBook] = useState(null);

  const achievements = [
    { id: 1, title: 'Bookworm', icon: '📚', description: 'Read 10 books' },
    { id: 2, title: 'Night Owl', icon: '🦉', description: 'Read past midnight' },
    { id: 3, title: 'Speed Reader', icon: '⚡', description: 'Read 100 pages in one day' },
    { id: 4, title: 'Genre Explorer', icon: '🌍', description: 'Read 5 different genres' },
  ];

  const readingHistory = [
    {
      id: 1,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      cover: 'https://m.media-amazon.com/images/I/71FTb9X6wsL._AC_UF1000,1000_QL80_.jpg',
      rating: 5,
      date: 'March 15, 2024',
      genre: 'Classic',
      progress: 100,
    },
    {
      id: 2,
      title: '1984',
      author: 'George Orwell',
      cover: 'https://m.media-amazon.com/images/I/71kxa1-0mfL._AC_UF1000,1000_QL80_.jpg',
      rating: 4,
      date: 'March 10, 2024',
      genre: 'Science Fiction',
      progress: 100,
    },
    {
      id: 3,
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      cover: 'https://m.media-amazon.com/images/I/71Q1tPupKjL._AC_UF1000,1000_QL80_.jpg',
      rating: 5,
      date: 'March 5, 2024',
      genre: 'Romance',
      progress: 100,
    },
  ];

  return (
    <div className="relative min-h-screen w-full bg-[#0A0A0F] overflow-hidden font-['Inter']">
      {/* Back Button */}
      <button 
        onClick={() => navigate('/main')}
        className="fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 bg-purple-500/10 text-purple-400 rounded-lg hover:bg-purple-500/20 transition-all duration-300"
      >
        <FaArrowLeft /> Back to Home
      </button>

      {/* Background gradient overlay */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-[#8B3DFF]/10 rounded-[600px] filter blur-[120px] transform -translate-y-1/4"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0F]/90 to-[#0A0A0F]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,61,255,0.08),transparent_70%)]"></div>
      </div>

      {/* Content container */}
      <div className="relative z-10 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Profile Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="p-6 mb-6"
          >
            <div className="flex items-center space-x-6">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/50 to-blue-500/50 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <img
                  className="h-24 w-24 rounded-full object-cover border-4 border-white/10 relative"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Profile"
                />
                <button 
                  className="absolute bottom-0 right-0 bg-purple-500/90 text-white rounded-full p-1.5 hover:bg-purple-500 transition-all duration-300 hover:scale-110"
                  onClick={() => {}}
                  aria-label="Update profile picture"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </button>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-3xl font-['General_Sans'] font-medium tracking-[-0.03em] text-white bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                      #User01
                    </h1>
                    <p className="text-gray-400 text-sm font-['Inter'] font-light tracking-wide">@devaindra</p>
                    <div className="mt-2 inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20">
                      <svg className="h-3 w-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      Premium Member
                    </div>
                  </div>
                  <button 
                    className="px-4 py-2 bg-purple-500/90 text-white rounded-full hover:bg-purple-500 transition-all duration-300 hover:shadow-lg hover:scale-105 text-sm font-medium"
                    onClick={() => {}}
                  >
                    Edit Profile
                  </button>
                </div>
                <p className="mt-4 text-sm text-gray-300 leading-relaxed font-['Inter'] font-light tracking-wide">
                  Passionate reader and book enthusiast. Love exploring different genres and sharing thoughts about literature.
                </p>
                <div className="mt-4 flex items-center space-x-6">
                  <div className="flex items-center group">
                    <div className="p-2 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors duration-300">
                      <svg className="h-4 w-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <span className="ml-2 text-sm text-gray-400 group-hover:text-purple-400 transition-colors duration-300 font-light">San Francisco, CA</span>
                  </div>
                  <div className="flex items-center group">
                    <div className="p-2 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors duration-300">
                      <svg className="h-4 w-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="ml-2 text-sm text-gray-400 group-hover:text-purple-400 transition-colors duration-300 font-light">Member since March 2024</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6"></div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Reading Statistics */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="backdrop-blur-2xl rounded-2xl p-8 border border-white/5 hover:border-white/10 transition-all duration-300"
              >
                <h2 className="text-2xl font-['General_Sans'] font-medium tracking-[-0.03em] text-white mb-8">Reading Statistics</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="relative bg-white/[0.02] p-4 rounded-xl group"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 mb-3 text-purple-400">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <p className="text-3xl font-['General_Sans'] font-medium text-white mb-1">24</p>
                      <p className="text-sm text-gray-400">Books Read</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="relative bg-white/[0.02] p-4 rounded-xl group"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 mb-3 text-purple-400">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="text-3xl font-['General_Sans'] font-medium text-white mb-1">4,832</p>
                      <p className="text-sm text-gray-400">Pages Read</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="relative bg-white/[0.02] p-4 rounded-xl group"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 mb-3 text-purple-400">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <p className="text-3xl font-['General_Sans'] font-medium text-white mb-1">48</p>
                      <p className="text-sm text-gray-400">Hours Read</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="relative bg-white/[0.02] p-4 rounded-xl group"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 mb-3 text-purple-400">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                        </svg>
                      </div>
                      <p className="text-3xl font-['General_Sans'] font-medium text-white mb-1">7</p>
                      <p className="text-sm text-gray-400">Day Streak</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Currently Reading */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="backdrop-blur-2xl rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300"
              >
                <h2 className="text-2xl font-['General_Sans'] font-medium tracking-[-0.03em] text-white mb-6">Currently Reading</h2>
                <div className="flex items-center space-x-6 p-4 bg-white/[0.03] backdrop-blur-sm rounded-xl">
                  <div className="relative group">
                    <img
                      className="h-24 w-16 object-cover rounded-lg shadow-lg transform group-hover:scale-105 transition-transform duration-300"
                      src="https://m.media-amazon.com/images/I/71FTb9X6wsL._AC_UF1000,1000_QL80_.jpg"
                      alt="Book cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 rounded-lg transition-opacity duration-300"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-white">The Great Gatsby</h3>
                    <p className="text-sm text-gray-400 mt-1 font-light">F. Scott Fitzgerald</p>
                    <div className="mt-4">
                      <div className="w-full bg-white/5 rounded-full h-2">
                        <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-500" style={{ width: '65%' }}></div>
                      </div>
                      <p className="text-xs text-gray-400 mt-1 font-light">65% complete</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Reading History */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="backdrop-blur-2xl rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300"
              >
                <h2 className="text-2xl font-['General_Sans'] font-medium tracking-[-0.03em] text-white mb-6">Reading History</h2>
                <div className="space-y-4">
                  {readingHistory.map((book) => (
                    <div
                      key={book.id}
                      className="flex items-center space-x-4 p-4 bg-white/[0.03] backdrop-blur-sm rounded-xl transform hover:scale-[1.02] transition-all duration-300"
                      onMouseEnter={() => setHoveredBook(book.id)}
                      onMouseLeave={() => setHoveredBook(null)}
                    >
                      <div className="relative">
                        <img
                          className="h-20 w-14 object-cover rounded-lg shadow-lg"
                          src={book.cover}
                          alt={book.title}
                        />
                        {hoveredBook === book.id && (
                          <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg flex items-center justify-center">
                            <button className="bg-white/10 backdrop-blur-sm text-purple-400 p-1.5 rounded-full hover:bg-white/20 transition-colors duration-300">
                              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                            </button>
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-white">{book.title}</h3>
                        <p className="text-xs text-gray-400 mt-1 font-light">{book.author}</p>
                        <div className="flex items-center mt-2">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                className={`h-3 w-3 ${i < book.rating ? 'text-yellow-400' : 'text-gray-600'}`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          <span className="ml-2 text-xs text-gray-400 font-light">Completed on {book.date}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Reading Goals */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="backdrop-blur-2xl rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300"
              >
                <h2 className="text-2xl font-['General_Sans'] font-medium tracking-[-0.03em] text-white mb-6">Reading Goals</h2>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-300">Books Read This Year</span>
                      <span className="text-sm font-medium text-gray-300">12/24</span>
                    </div>
                    <div className="w-full bg-white/5 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-500" style={{ width: '50%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-300">Pages Read This Month</span>
                      <span className="text-sm font-medium text-gray-300">1,200/2,000</span>
                    </div>
                    <div className="w-full bg-white/5 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-500" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Achievements */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="backdrop-blur-2xl rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300"
              >
                <h2 className="text-2xl font-['General_Sans'] font-medium tracking-[-0.03em] text-white mb-6">Achievements</h2>
                <div className="grid grid-cols-2 gap-4">
                  {achievements.map((achievement) => (
                    <div key={achievement.id} className="text-center group">
                      <div className="mx-auto w-12 h-12 bg-white/[0.03] backdrop-blur-sm rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                        <span className="text-xl">{achievement.icon}</span>
                      </div>
                      <p className="mt-3 text-sm font-medium text-white">{achievement.title}</p>
                      <p className="text-xs text-gray-400 mt-1 font-light">{achievement.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Reading Preferences */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="backdrop-blur-2xl rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300"
              >
                <h2 className="text-2xl font-['General_Sans'] font-medium tracking-[-0.03em] text-white mb-6">Reading Preferences</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400 font-light">Preferred Genres</span>
                    <button 
                      onClick={() => {}} 
                      className="text-sm text-purple-400 hover:text-purple-300 transition-colors duration-300 font-medium"
                    >
                      Edit
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['Fiction', 'Mystery', 'Science Fiction', 'History'].map((genre) => (
                      <button
                        key={genre}
                        onClick={() => {}}
                        className="px-3 py-1.5 bg-white/[0.03] backdrop-blur-sm text-purple-400 rounded-lg text-xs font-medium hover:bg-white/[0.05] transition-all duration-300"
                      >
                        {genre}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile; 