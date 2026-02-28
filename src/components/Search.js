import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaSearch, FaFilter, FaSort, FaBook, FaHeadphones, FaStar, FaClock } from 'react-icons/fa';

const Search = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [sortBy, setSortBy] = useState('relevance');

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'books', label: 'Books' },
    { id: 'audiobooks', label: 'Audiobooks' },
    { id: 'collections', label: 'Collections' }
  ];

  const sortOptions = [
    { id: 'relevance', label: 'Relevance' },
    { id: 'popularity', label: 'Popularity' },
    { id: 'rating', label: 'Rating' },
    { id: 'newest', label: 'Newest' }
  ];

  const searchResults = [
    {
      id: 1,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      type: "book",
      cover: "https://i.pinimg.com/736x/77/45/8e/77458e8fc680b3ba571999d6a37eb1f5.jpg",
      rating: 4.8,
      reviews: 2847,
      category: "Classics",
      year: 1813
    },
    {
      id: 2,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      type: "audiobook",
      cover: "https://i.pinimg.com/736x/aa/07/1d/aa071da3cd82abd527e73dd996b8d20f.jpg",
      narrator: "Jake Gyllenhaal",
      duration: "8h 30m",
      rating: 4.7,
      reviews: 3156,
      category: "Fiction",
      year: 1925
    },
    {
      id: 3,
      title: "1984",
      author: "George Orwell",
      type: "book",
      cover: "https://i.pinimg.com/736x/92/0e/ab/920eab6134c2d7e4d7515d8da8fd8810.jpg",
      rating: 4.9,
      reviews: 4123,
      category: "Science Fiction",
      year: 1949
    },
    {
      id: 4,
      title: "Essential Shakespeare Collection",
      type: "collection",
      cover: "https://i.pinimg.com/736x/af/3f/10/af3f10d8c3ebb337e96af5dd8e8f8002.jpg",
      books: 12,
      category: "Plays"
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
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-['General_Sans'] font-medium tracking-[-0.03em] text-white bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 mb-4">
              Search Library
            </h1>
            <p className="text-gray-400 text-lg font-light max-w-2xl mx-auto">
              Find books, audiobooks, and collections in our library
            </p>
          </motion.div>

          {/* Search Bar */}
          <div className="relative mb-8">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by title, author, or category..."
                className="w-full px-6 py-4 bg-white/[0.02] backdrop-blur-2xl rounded-2xl border border-white/5 focus:border-purple-500/20 focus:outline-none text-white placeholder-gray-400"
              />
              <FaSearch className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* Filters and Sort */}
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2">
              <FaFilter className="text-purple-400" />
              <span className="text-gray-400">Filter:</span>
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setSelectedFilter(filter.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedFilter === filter.id
                      ? 'bg-purple-500 text-white'
                      : 'bg-white/[0.02] text-gray-400 hover:bg-white/[0.05]'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <FaSort className="text-purple-400" />
              <span className="text-gray-400">Sort by:</span>
              {sortOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setSortBy(option.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    sortBy === option.id
                      ? 'bg-purple-500 text-white'
                      : 'bg-white/[0.02] text-gray-400 hover:bg-white/[0.05]'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Search Results */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {searchResults.map((result, index) => (
              <motion.div
                key={result.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/[0.02] backdrop-blur-2xl rounded-2xl p-6 border border-white/5 hover:border-purple-500/20 transition-all duration-300"
              >
                <div className="relative mb-4">
                  <img
                    src={result.cover}
                    alt={result.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  {result.type === 'audiobook' && (
                    <div className="absolute top-4 right-4 bg-purple-500/90 text-white px-3 py-1 rounded-full text-sm">
                      Audiobook
                    </div>
                  )}
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-medium text-white">{result.title}</h3>
                  {result.author && (
                    <p className="text-gray-400">by {result.author}</p>
                  )}
                  {result.type === 'audiobook' && (
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <FaHeadphones className="text-purple-400" />
                      <span>Narrated by {result.narrator}</span>
                    </div>
                  )}
                  {result.type === 'collection' && (
                    <div className="flex items-center gap-2 text-sm text-purple-400">
                      <FaBook className="text-purple-400" />
                      <span>{result.books} Books</span>
                    </div>
                  )}
                  <div className="flex items-center gap-4 text-sm">
                    {result.rating && (
                      <div className="flex items-center gap-1">
                        <FaStar className="text-yellow-400" />
                        <span className="text-white">{result.rating}</span>
                        <span className="text-gray-400">({result.reviews.toLocaleString()})</span>
                      </div>
                    )}
                    {result.duration && (
                      <div className="flex items-center gap-1">
                        <FaClock className="text-gray-400" />
                        <span className="text-gray-400">{result.duration}</span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FaBook className="text-purple-400" />
                      <span className="text-purple-400">{result.category}</span>
                    </div>
                    {result.year && (
                      <span className="text-gray-400">{result.year}</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search; 