import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaTrash } from 'react-icons/fa';

const ReadingHistory = () => {
  const navigate = useNavigate();
  const [readingHistory, setReadingHistory] = useState([
    {
      id: 1,
      title: "The Midnight Library",
      author: "Matt Haig",
      image: "/images/Book1.webp",
      dateRead: "2023-01-15",
      rating: 4.5
    },
    {
      id: 2,
      title: "Circe",
      author: "Madeline Miller",
      image: "/images/Book2.jpg",
      dateRead: "2023-02-10",
      rating: 4.7
    },
    {
      id: 3,
      title: "The Silent Patient",
      author: "Alex Michaelides",
      image: "/images/Book3.webp",
      dateRead: "2023-03-05",
      rating: 4.8
    },
    {
      id: 4,
      title: "Where the Crawdads Sing",
      author: "Delia Owens",
      image: "/images/Book4.jpg",
      dateRead: "2023-04-20",
      rating: 4.6
    },
    {
      id: 5,
      title: "The Invisible Life of Addie LaRue",
      author: "V.E. Schwab",
      image: "/images/Book5.jpg",
      dateRead: "2023-05-10",
      rating: 4.9
    },
    {
      id: 6,
      title: "Daisy Jones & The Six",
      author: "Taylor Jenkins Reid",
      image: "/images/Book6.jpg",
      dateRead: "2023-06-15",
      rating: 4.4
    },
    {
      id: 7,
      title: "The Night Circus",
      author: "Erin Morgenstern",
      image: "/images/Book12.webp",
      dateRead: "2023-07-01",
      rating: 4.6
    },
    {
      id: 8,
      title: "Educated",
      author: "Tara Westover",
      image: "/images/Book7.jpg",
      dateRead: "2023-07-20",
      rating: 4.8
    }
  ]);

  useEffect(() => {
    // Load reading history from local storage if needed
    const storedHistory = JSON.parse(localStorage.getItem('readingHistory')) || [];
    if (storedHistory.length > 0) {
      setReadingHistory(storedHistory);
    }
  }, []);

  const handleRemoveFromHistory = (id) => {
    const updatedHistory = readingHistory.filter(item => item.id !== id);
    setReadingHistory(updatedHistory);
    localStorage.setItem('readingHistory', JSON.stringify(updatedHistory));
  };

  const handleNavigateToBook = (id) => {
    navigate(`/book/${id}`); // Assuming you have a route for book details
  };

  const totalBooksRead = readingHistory.length;
  const averageRating = (readingHistory.reduce((acc, item) => acc + item.rating, 0) / totalBooksRead).toFixed(1);

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-[#0A0A0F] to-[#1A1A1F] overflow-hidden font-['Inter']">
      {/* Back Button */}
      <button 
        onClick={() => navigate('/main')}
        className="fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 bg-purple-500/10 text-purple-400 rounded-lg hover:bg-purple-500/20 transition-all duration-300"
      >
        <FaArrowLeft /> Back to Main Page
      </button>

      {/* Content container */}
      <div className="relative z-10 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-['General_Sans'] font-medium tracking-[-0.03em] text-white mb-4">
              Your Reading History
            </h1>
            <p className="text-gray-400 text-lg font-light max-w-2xl mx-auto">
              Here are the books you've read.
            </p>
            <div className="mt-4 text-gray-300">
              <p>Total Books Read: <span className="font-bold">{totalBooksRead}</span></p>
              <p>Average Rating: <span className="font-bold">{totalBooksRead > 0 ? averageRating : 'N/A'}</span></p>
            </div>
          </motion.div>

          {/* Reading History Items */}
          {readingHistory.length === 0 ? (
            <div className="text-center text-gray-400">
              <p>Your reading history is empty. Start reading books!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {readingHistory.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-white/[0.02] backdrop-blur-2xl rounded-2xl p-4 border border-white/5 flex flex-col items-center hover:shadow-lg transition-shadow duration-300"
                >
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-32 h-48 rounded mb-2 object-cover" 
                  />
                  <h3 className="text-xl font-medium text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 mb-1">
                    by {item.author}
                  </p>
                  <p className="text-gray-500 text-sm mb-1">
                    Read on: {new Date(item.dateRead).toLocaleDateString()}
                  </p>
                  <p className="text-yellow-400 text-sm mb-2">
                    Rating: {item.rating} ⭐
                  </p>
                  <button 
                    onClick={() => handleRemoveFromHistory(item.id)}
                    className="text-red-500 hover:text-red-700 transition duration-300"
                  >
                    <FaTrash />
                  </button>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReadingHistory; 