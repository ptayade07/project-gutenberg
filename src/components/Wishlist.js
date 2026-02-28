import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaTrash } from 'react-icons/fa';

const Wishlist = () => {
  const navigate = useNavigate();
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      title: "The Love Hypothesis",
      author: "Ali Hazelwood",
      image: "/images/Book1.webp"
    },
    {
      id: 2,
      title: "The Unhoneymooners",
      author: "Christina Lauren",
      image: "/images/Book2.jpg"
    },
    {
      id: 3,
      title: "If He Had Been With Me",
      author: "Laura Nowlin",
      image: "/images/Book3.webp"
    },
    {
      id: 4,
      title: "Project Hail Mary",
      author: "Andy Weir",
      image: "/images/Book4.jpg"
    },
    {
      id: 5,
      title: "The Midnight Library",
      author: "Matt Haig",
      image: "/images/Book5.jpg"
    },
    {
      id: 6,
      title: "The Seven Husbands of Evelyn Hugo",
      author: "Taylor Jenkins Reid",
      image: "/images/Book6.jpg"
    },
    {
      id: 7,
      title: "The Silent Patient",
      author: "Alex Michaelides",
      image: "/images/Book7.jpg"
    },
    {
      id: 8,
      title: "Where the Crawdads Sing",
      author: "Delia Owens",
      image: "/images/Book8.jpg"
    },
    {
      id: 9,
      title: "The Invisible Life of Addie LaRue",
      author: "V.E. Schwab",
      image: "/images/Book9.jpg"
    },
    {
      id: 10,
      title: "Circe",
      author: "Madeline Miller",
      image: "/images/Book10.jpg"
    },
    {
      id: 11,
      title: "Daisy Jones & The Six",
      author: "Taylor Jenkins Reid",
      image: "/images/Book11.jpg"
    },
    {
      id: 12,
      title: "The Night Circus",
      author: "Erin Morgenstern",
      image: "/images/Book12.webp"
    }
  ]);

  useEffect(() => {
    // Load wishlist from local storage if needed
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    if (storedWishlist.length > 0) {
      setWishlistItems(storedWishlist);
    }
  }, []);

  const handleRemoveFromWishlist = (id) => {
    const updatedWishlist = wishlistItems.filter(item => item.id !== id);
    setWishlistItems(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  const handleNavigateToBook = (id) => {
    navigate(`/book/${id}`); // Assuming you have a route for book details
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
              Your Wishlist
            </h1>
            <p className="text-gray-400 text-lg font-light max-w-2xl mx-auto">
              Here are the books you've added to your wishlist.
            </p>
          </motion.div>

          {/* Wishlist Items */}
          {wishlistItems.length === 0 ? (
            <div className="text-center text-gray-400">
              <p>Your wishlist is empty. Start adding books!</p>
            </div>
          ) : (
            <div className="space-y-6">
              {wishlistItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-white/[0.02] backdrop-blur-2xl rounded-2xl p-6 border border-white/5 flex justify-between items-center"
                >
                  <div className="flex items-start gap-4" onClick={() => handleNavigateToBook(item.id)}>
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-20 h-30 rounded cursor-pointer object-cover" 
                      style={{ maxWidth: '80px', maxHeight: '120px' }} // Ensure the image fits well
                    />
                    <div>
                      <h3 className="text-xl font-medium text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-400">
                        by {item.author}
                      </p>
                    </div>
                  </div>
                  <button 
                    onClick={() => handleRemoveFromWishlist(item.id)}
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

export default Wishlist;
