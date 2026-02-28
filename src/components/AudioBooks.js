import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaPlay, FaPause, FaStar, FaClock, FaUser, FaBook, FaStepForward, FaStepBackward, FaVolumeUp } from 'react-icons/fa';

const AudioBooks = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);
  const [volume, setVolume] = useState(80);
  const [audioBooks, setAudioBooks] = useState([
    {
      id: 1,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      narrator: "Rosamund Pike",
      cover: "https://i.pinimg.com/736x/c8/80/e7/c880e74a8d465d5f707b981cbbe84505.jpg",
      duration: "12h 45m",
      rating: 4.8,
      reviews: 2847,
      category: "Classics",
      price: "Free",
      isPlaying: false,
      progress: 0
    },
    {
      id: 2,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      narrator: "Jake Gyllenhaal",
      cover: "https://i.pinimg.com/736x/71/3c/06/713c06dab6fa4db3f36763119c1fd7a4.jpg",
      duration: "8h 30m",
      rating: 4.7,
      reviews: 3156,
      category: "Fiction",
      price: "Free",
      isPlaying: false,
      progress: 0
    },
    {
      id: 3,
      title: "1984",
      author: "George Orwell",
      narrator: "Simon Prebble",
      cover: "https://i.pinimg.com/736x/fe/a1/84/fea1846aed387d82b9ba9c168e19be53.jpg",
      duration: "11h 15m",
      rating: 4.9,
      reviews: 4123,
      category: "Fiction",
      price: "Free",
      isPlaying: false,
      progress: 0
    },
    {
      id: 4,
      title: "The Adventures of Sherlock Holmes",
      author: "Arthur Conan Doyle",
      narrator: "Stephen Fry",
      cover: "https://i.pinimg.com/736x/48/71/26/487126d42632968c8a9f1d0aa65ce5de.jpg",
      duration: "15h 20m",
      rating: 4.6,
      reviews: 1892,
      category: "Mystery",
      price: "Free",
      isPlaying: false,
      progress: 0
    },
    {
      id: 5,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      narrator: "Sissy Spacek",
      cover: "https://i.pinimg.com/736x/21/7e/c7/217ec701ed017b31c2271181eaa1c275.jpg",
      duration: "12h 17m",
      rating: 4.9,
      reviews: 5234,
      category: "Classics",
      price: "Free",
      isPlaying: false,
      progress: 0
    },
    {
      id: 6,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      narrator: "Andy Serkis",
      cover: "https://i.pinimg.com/736x/18/af/7c/18af7c3fcadc1e851d39708fa8038c64.jpg",
      duration: "10h 25m",
      rating: 4.8,
      reviews: 3891,
      category: "Fantasy",
      price: "Free",
      isPlaying: false,
      progress: 0
    },
    {
      id: 7,
      title: "The Silent Patient",
      author: "Alex Michaelides",
      narrator: "Jack Hawkins",
      cover: "https://i.pinimg.com/736x/e0/66/7f/e0667f5ba35fa70aa6b764da696554be.jpg",
      duration: "8h 50m",
      rating: 4.5,
      reviews: 2156,
      category: "Mystery",
      price: "Free",
      isPlaying: false,
      progress: 0
    },
    {
      id: 8,
      title: "Becoming",
      author: "Michelle Obama",
      narrator: "Michelle Obama",
      cover: "https://i.pinimg.com/736x/f9/49/68/f949682356327a360b822b5036b7f6dc.jpg",
      duration: "19h 3m",
      rating: 4.9,
      reviews: 6789,
      category: "Biography",
      price: "Free",
      isPlaying: false,
      progress: 0
    },
    {
      id: 9,
      title: "The Psychology of Money",
      author: "Morgan Housel",
      narrator: "Chris Hill",
      cover: "https://i.pinimg.com/736x/a3/8c/89/a38c89018e964603909f55ed377a40ee.jpg",
      duration: "5h 48m",
      rating: 4.7,
      reviews: 3456,
      category: "Non-Fiction",
      price: "Free",
      isPlaying: false,
      progress: 0
    }
  ]);

  const categories = [
    { id: 'all', label: 'All Audiobooks' },
    { id: 'classics', label: 'Classics' },
    { id: 'fiction', label: 'Fiction' },
    { id: 'mystery', label: 'Mystery' },
    { id: 'fantasy', label: 'Fantasy' },
    { id: 'non-fiction', label: 'Non-Fiction' },
    { id: 'biography', label: 'Biography' }
  ];

  const handlePlayPause = (id) => {
    setCurrentlyPlaying(currentlyPlaying === id ? null : id);
    setAudioBooks(audioBooks.map(book => ({
      ...book,
      isPlaying: book.id === id ? !book.isPlaying : false
    })));
  };

  const handleVolumeChange = (e) => {
    setVolume(parseInt(e.target.value));
  };

  const handleProgressChange = (id, value) => {
    setAudioBooks(audioBooks.map(book => ({
      ...book,
      progress: book.id === id ? value : book.progress
    })));
  };

  const getCurrentBook = () => {
    return audioBooks.find(book => book.id === currentlyPlaying);
  };

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
              Audio Books
            </h1>
            <p className="text-gray-400 text-lg font-light max-w-2xl mx-auto">
              Listen to professionally narrated audiobooks from our collection
            </p>
          </motion.div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-purple-500 text-white'
                    : 'bg-white/[0.02] text-gray-400 hover:bg-white/[0.05]'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Audio Books Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {audioBooks
              .filter(book => 
                selectedCategory === 'all' || 
                book.category.toLowerCase() === selectedCategory
              )
              .map((book, index) => (
                <motion.div
                  key={book.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/[0.02] backdrop-blur-2xl rounded-2xl p-4 border border-white/5 hover:border-purple-500/20 transition-all duration-300 group"
                >
                  <div className="relative mb-3">
                    <img
                      src={book.cover}
                      alt={book.title}
                      className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    <button
                      onClick={() => handlePlayPause(book.id)}
                      className="absolute bottom-3 right-3 w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white hover:bg-purple-600 transition-colors duration-300 opacity-0 group-hover:opacity-100"
                    >
                      {book.isPlaying ? <FaPause /> : <FaPlay />}
                    </button>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium text-white line-clamp-1">{book.title}</h3>
                    <p className="text-sm text-gray-400 line-clamp-1">by {book.author}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <FaUser className="text-purple-400" />
                      <span className="line-clamp-1">Narrated by {book.narrator}</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs">
                      <div className="flex items-center gap-1">
                        <FaClock className="text-gray-400" />
                        <span className="text-gray-400">{book.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaStar className="text-yellow-400" />
                        <span className="text-white">{book.rating}</span>
                        <span className="text-gray-400">({book.reviews.toLocaleString()})</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <FaBook className="text-purple-400" />
                        <span className="text-purple-400 text-xs">{book.category}</span>
                      </div>
                      <span className="text-green-400 text-sm font-medium">{book.price}</span>
                    </div>
                    {book.isPlaying && (
                      <div className="space-y-1">
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={book.progress}
                          onChange={(e) => handleProgressChange(book.id, parseInt(e.target.value))}
                          className="w-full h-1 bg-white/10 rounded-full appearance-none cursor-pointer"
                        />
                        <div className="flex justify-between text-xs text-gray-400">
                          <span>{Math.floor(book.progress * 0.01 * parseInt(book.duration.split('h')[0]))}h {Math.floor((book.progress * 0.01 * parseInt(book.duration.split('h')[0])) * 60 % 60)}m</span>
                          <span>{book.duration}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
          </div>

          {/* Mini Player */}
          {currentlyPlaying && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="fixed bottom-0 left-0 right-0 bg-white/[0.02] backdrop-blur-2xl border-t border-white/5 p-4"
            >
              <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={getCurrentBook().cover}
                    alt={getCurrentBook().title}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="text-white font-medium">{getCurrentBook().title}</h3>
                    <p className="text-gray-400 text-sm">{getCurrentBook().author}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-4">
                    <button className="text-gray-400 hover:text-white transition-colors">
                      <FaStepBackward />
                    </button>
                    <button
                      onClick={() => handlePlayPause(getCurrentBook().id)}
                      className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white hover:bg-purple-600 transition-colors"
                    >
                      {getCurrentBook().isPlaying ? <FaPause /> : <FaPlay />}
                    </button>
                    <button className="text-gray-400 hover:text-white transition-colors">
                      <FaStepForward />
                    </button>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaVolumeUp className="text-gray-400" />
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={volume}
                      onChange={handleVolumeChange}
                      className="w-24 h-1 bg-white/10 rounded-full appearance-none cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AudioBooks; 