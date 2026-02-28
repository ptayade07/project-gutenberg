import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaSearch, FaFilter, FaBook, FaStar, FaUsers } from 'react-icons/fa';

const Categories = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

const categories = [
  {
    id: 1,
      name: 'Fiction',
      description: 'Explore imaginative worlds and compelling stories',
      icon: '📚',
      bookCount: 245,
      color: 'from-purple-500/20 to-blue-500/20',
      gradient: 'from-purple-500 to-blue-500',
      subcategories: ['Literary Fiction', 'Contemporary', 'Historical', 'Classics'],
      featuredBooks: [
        { title: 'The Midnight Library', author: 'Matt Haig', rating: 4.5 },
        { title: 'The Seven Husbands of Evelyn Hugo', author: 'Taylor Jenkins Reid', rating: 4.8 },
        { title: 'Tomorrow, and Tomorrow', author: 'Gabrielle Zevin', rating: 4.2 }
      ]
  },
  {
    id: 2,
      name: 'Mystery',
      description: 'Unravel intriguing puzzles and thrilling mysteries',
      icon: '🔍',
      bookCount: 189,
      color: 'from-red-500/20 to-orange-500/20',
      gradient: 'from-red-500 to-orange-500',
      subcategories: ['Crime', 'Thriller', 'Detective', 'Suspense'],
      featuredBooks: [
        { title: 'The Silent Patient', author: 'Alex Michaelides', rating: 4.6 },
        { title: 'Gone Girl', author: 'Gillian Flynn', rating: 4.7 },
        { title: 'The Girl with the Dragon Tattoo', author: 'Stieg Larsson', rating: 4.4 }
      ]
  },
  {
    id: 3,
      name: 'Science Fiction',
      description: 'Journey through space, time, and alternate realities',
      icon: '🚀',
      bookCount: 156,
      color: 'from-cyan-500/20 to-blue-500/20',
      gradient: 'from-cyan-500 to-blue-500',
      subcategories: ['Space Opera', 'Cyberpunk', 'Dystopian', 'Time Travel'],
      featuredBooks: [
        { title: 'Project Hail Mary', author: 'Andy Weir', rating: 4.9 },
        { title: 'The Three-Body Problem', author: 'Cixin Liu', rating: 4.5 },
        { title: 'Neuromancer', author: 'William Gibson', rating: 4.3 }
      ]
  },
  {
    id: 4,
      name: 'Romance',
      description: 'Experience love stories and emotional journeys',
      icon: '❤️',
      bookCount: 312,
      color: 'from-pink-500/20 to-red-500/20',
      gradient: 'from-pink-500 to-red-500',
      subcategories: ['Contemporary', 'Historical', 'Paranormal', 'Erotic'],
      featuredBooks: [
        { title: 'The Love Hypothesis', author: 'Ali Hazelwood', rating: 4.7 },
        { title: 'It Ends with Us', author: 'Colleen Hoover', rating: 4.6 },
        { title: 'The Hating Game', author: 'Sally Thorne', rating: 4.5 }
      ]
  },
  {
    id: 5,
      name: 'Fantasy',
      description: 'Enter magical realms and epic adventures',
      icon: '⚔️',
      bookCount: 178,
      color: 'from-yellow-500/20 to-orange-500/20',
      gradient: 'from-yellow-500 to-orange-500',
      subcategories: ['High Fantasy', 'Urban Fantasy', 'Dark Fantasy', 'Epic Fantasy'],
      featuredBooks: [
        { title: 'The Name of the Wind', author: 'Patrick Rothfuss', rating: 4.8 },
        { title: 'Mistborn', author: 'Brandon Sanderson', rating: 4.7 },
        { title: 'A Court of Thorns and Roses', author: 'Sarah J. Maas', rating: 4.6 }
      ]
  },
  {
    id: 6,
      name: 'Non-Fiction',
      description: 'Discover real-world knowledge and insights',
      icon: '📖',
      bookCount: 423,
      color: 'from-green-500/20 to-emerald-500/20',
      gradient: 'from-green-500 to-emerald-500',
      subcategories: ['Biography', 'History', 'Science', 'Self-Help'],
      featuredBooks: [
        { title: 'Sapiens', author: 'Yuval Noah Harari', rating: 4.7 },
        { title: 'Atomic Habits', author: 'James Clear', rating: 4.8 },
        { title: 'The Psychology of Money', author: 'Morgan Housel', rating: 4.6 }
      ]
  },
  {
    id: 7,
      name: 'Biography',
      description: 'Read about remarkable lives and achievements',
      icon: '👤',
      bookCount: 167,
      color: 'from-indigo-500/20 to-purple-500/20',
      gradient: 'from-indigo-500 to-purple-500',
      subcategories: ['Memoir', 'Autobiography', 'Historical Figures', 'Celebrity'],
      featuredBooks: [
        { title: 'Becoming', author: 'Michelle Obama', rating: 4.8 },
        { title: 'Steve Jobs', author: 'Walter Isaacson', rating: 4.6 },
        { title: 'Educated', author: 'Tara Westover', rating: 4.7 }
      ]
    },
    {
      id: 8,
      name: 'History',
      description: 'Explore the past and its impact on the present',
      icon: '⏳',
      bookCount: 234,
      color: 'from-amber-500/20 to-yellow-500/20',
      gradient: 'from-amber-500 to-yellow-500',
      subcategories: ['Ancient History', 'Modern History', 'Military History', 'Cultural History'],
      featuredBooks: [
        { title: 'Sapiens', author: 'Yuval Noah Harari', rating: 4.7 },
        { title: 'Guns, Germs, and Steel', author: 'Jared Diamond', rating: 4.5 },
        { title: 'A People\'s History of the United States', author: 'Howard Zinn', rating: 4.6 }
      ]
    }
  ];

  const filteredCategories = categories.filter(category => 
    category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-['General_Sans'] font-medium tracking-[-0.03em] text-white bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 mb-4">
              Book Categories
            </h1>
            <p className="text-gray-400 text-lg font-light max-w-2xl mx-auto">
              Explore our curated collection of books across various genres and categories
            </p>
          </motion.div>

          {/* Search and Filter Section */}
          <div className="mb-8 flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/[0.02] backdrop-blur-2xl rounded-xl border border-white/5 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 transition-all duration-300"
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setSelectedFilter('all')}
                className={`px-4 py-3 rounded-xl border transition-all duration-300 ${
                  selectedFilter === 'all'
                    ? 'bg-purple-500/20 border-purple-500/50 text-purple-400'
                    : 'bg-white/[0.02] border-white/5 text-gray-400 hover:border-white/10'
                }`}
              >
                All
        </button>
            <button 
                onClick={() => setSelectedFilter('popular')}
                className={`px-4 py-3 rounded-xl border transition-all duration-300 ${
                  selectedFilter === 'popular'
                    ? 'bg-purple-500/20 border-purple-500/50 text-purple-400'
                    : 'bg-white/[0.02] border-white/5 text-gray-400 hover:border-white/10'
                }`}
              >
                Popular
            </button>
            </div>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className={`absolute -inset-1 bg-gradient-to-r ${category.color} rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200`}></div>
                <div className="relative h-full bg-white/[0.02] backdrop-blur-2xl rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-4xl">{category.icon}</span>
                    <span className="text-sm text-gray-400 font-light">{category.bookCount} books</span>
                  </div>
                  <h3 className="text-xl font-['General_Sans'] font-medium text-white mb-2">{category.name}</h3>
                  <p className="text-sm text-gray-400 font-light mb-4">{category.description}</p>
                  
                  {/* Subcategories */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {category.subcategories.slice(0, 3).map((sub, i) => (
                        <span key={i} className="text-xs px-2 py-1 bg-white/5 rounded-full text-gray-400">
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Featured Books */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-white mb-2">Featured Books</h4>
                    <div className="space-y-2">
                      {category.featuredBooks.map((book, i) => (
                        <div key={i} className="flex items-center justify-between text-sm">
                          <span className="text-gray-400 truncate">{book.title}</span>
                          <span className="text-purple-400">{book.rating}</span>
                        </div>
          ))}
        </div>
                  </div>

                  <button 
                    className={`w-full px-4 py-2 bg-gradient-to-r ${category.color} text-white rounded-lg hover:opacity-90 transition-all duration-300 text-sm font-medium`}
                    onClick={() => navigate(`/category/${category.id}`)}
                  >
                    Explore Category
        </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Category Statistics */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="bg-white/[0.02] backdrop-blur-2xl rounded-2xl p-6 border border-white/5">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                  <FaBook className="text-2xl text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white">Total Books</h3>
                  <p className="text-gray-400">Across all categories</p>
                </div>
              </div>
              <p className="text-3xl font-bold text-white">1,904</p>
            </div>
            <div className="bg-white/[0.02] backdrop-blur-2xl rounded-2xl p-6 border border-white/5">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                  <FaStar className="text-2xl text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white">Average Rating</h3>
                  <p className="text-gray-400">Based on reader reviews</p>
                </div>
              </div>
              <p className="text-3xl font-bold text-white">4.6</p>
            </div>
            <div className="bg-white/[0.02] backdrop-blur-2xl rounded-2xl p-6 border border-white/5">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                  <FaUsers className="text-2xl text-purple-400" />
        </div>
                <div>
                  <h3 className="text-xl font-medium text-white">Active Readers</h3>
                  <p className="text-gray-400">In the last 30 days</p>
                </div>
              </div>
              <p className="text-3xl font-bold text-white">12.5K</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Categories;