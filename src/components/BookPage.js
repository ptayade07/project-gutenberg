import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BookPage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  // Example book data
  const book = {
    title: "Harry Potter: Half Blood Prince",
    author: "JK Rowling",
    description: "The story takes place during Harry's sixth year at Hogwarts School of Witchcraft and Wizardry, where he discovers more about Lord Voldemort's past and the prophecy that foretells his defeat.",
    coverImage: "https://images-na.ssl-images-amazon.com/images/I/51uO1pQc5oL._SX329_BO1,204,203,200_.jpg",
    editors: ["JK Rowling (Author)", "Christopher Reath", "Alena Graedon", "Steve King"],
    language: "Standard English (USA & UK)",
    format: {
      type: "Paperback",
      details: "paper textured, full color, 345 pages",
      isbn: "987 3 32564 456 8"
    },
    reviews: [
      {
        author: "Roberto Jordan",
        text: "What a delightful magical book it is! It indeed transports readers to the wizarding world.",
        rating: 5
      },
      {
        author: "Sarah Mitchell",
        text: "The character development in this installment is phenomenal. The way Rowling weaves together the past and present is masterful.",
        rating: 5
      },
      {
        author: "Michael Chang",
        text: "A darker turn in the series that perfectly captures the growing stakes. The revelations about Voldemort's past are fascinating.",
        rating: 4
      },
      {
        author: "Emma Thompson",
        text: "The Half-Blood Prince adds layers of complexity to the wizarding world. The potions class scenes are particularly entertaining.",
        rating: 5
      },
      {
        author: "David Wilson",
        text: "This book sets up the finale perfectly. The ending left me emotionally stunned. Can't wait to read the next one.",
        rating: 5
      }
    ]
  };

  const similarBooks = [
    {
      id: 1,
      title: "Harry Potter and the Order of Phoenix",
      author: "JK Rowling",
      cover: "/images/book-cover-2.png",
      rating: 4.8
    },
    {
      id: 2,
      title: "Harry Potter and the Deathly Hallows",
      author: "JK Rowling",
      cover: "/images/book-cover-3.png",
      rating: 4.9
    },
    {
      id: 3,
      title: "Harry Potter and the Goblet of Fire",
      author: "JK Rowling",
      cover: "/images/book-cover-4.png",
      rating: 4.7
    },
    {
      id: 4,
      title: "The Chronicles of Narnia",
      author: "C.S. Lewis",
      cover: "/images/book-cover-5.png",
      rating: 4.6
    },
    {
      id: 5,
      title: "Percy Jackson & the Olympians",
      author: "Rick Riordan",
      cover: "/images/book-cover-6.png",
      rating: 4.7
    },
    {
      id: 6,
      title: "The Golden Compass",
      author: "Philip Pullman",
      cover: "/images/book-cover-1.png",
      rating: 4.5
    },
    {
      id: 7,
      title: "Artemis Fowl",
      author: "Eoin Colfer",
      cover: "/images/book-cover-2.png",
      rating: 4.4
    },
    {
      id: 8,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      cover: "/images/book-cover-3.png",
      rating: 4.8
    },
    {
      id: 9,
      title: "A Wizard of Earthsea",
      author: "Ursula K. Le Guin",
      cover: "/images/book-cover-4.png",
      rating: 4.6
    }
  ];

  const styles = {
    container: {
      minHeight: '100vh',
      background: '#090312',
      color: '#E2E8F0',
      padding: '2rem 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '2rem',
      position: 'relative',
      overflow: 'hidden',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: '0',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '1200px',
        height: '600px',
        background: 'radial-gradient(circle at center, rgba(139, 61, 255, 0.15), transparent 70%)',
        filter: 'blur(120px)',
        marginTop: '-25%'
      },
      '&::after': {
        content: '""',
        position: 'absolute',
        inset: '0',
        background: [
          'linear-gradient(to bottom, transparent, rgba(9, 3, 18, 0.7), #090312)',
          'radial-gradient(circle at top, rgba(139, 61, 255, 0.12), transparent 70%)',
          'radial-gradient(circle at 60% 0%, rgba(123, 43, 255, 0.08), transparent 50%)'
        ].join(','),
        pointerEvents: 'none'
      }
    },
    heroSection: {
      position: 'relative',
      width: '100%',
      height: '55vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'transparent',
      overflow: 'hidden',
      marginBottom: '1rem',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        height: '1px',
        background: 'linear-gradient(to right, transparent, rgba(139, 61, 255, 0.2), transparent)',
        pointerEvents: 'none'
      }
    },
    heroBackground: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundImage: `url(${book.coverImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      filter: 'blur(20px) brightness(0.1)',
      opacity: 0.4,
      transform: 'scale(1.1)',
      '&::after': {
        content: '""',
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        background: 'radial-gradient(circle at center, rgba(139, 61, 255, 0.05), #090312 80%)',
        pointerEvents: 'none'
      }
    },
    heroContent: {
      position: 'relative',
      zIndex: 1,
      width: '100%',
      maxWidth: '1100px',
      margin: '0 2rem',
      display: 'grid',
      gridTemplateColumns: '300px 1fr',
      gap: '3rem',
      alignItems: 'start'
    },
    bookCover: {
      width: '100%',
      aspectRatio: '2/3',
      borderRadius: '0.75rem',
      overflow: 'hidden',
      boxShadow: '0 15px 30px -10px rgba(0, 0, 0, 0.8)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      position: 'relative',
      transform: 'perspective(1000px) rotateY(5deg)',
      transition: 'transform 0.5s ease',
      backgroundColor: 'rgba(139, 61, 255, 0.05)',
      '&::before': {
        content: '""',
        position: 'absolute',
        inset: '0',
        borderRadius: '0.75rem',
        padding: '1px',
        background: 'linear-gradient(135deg, rgba(139, 61, 255, 0.2), transparent)',
        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        WebkitMaskComposite: 'xor',
        maskComposite: 'exclude',
        pointerEvents: 'none'
      }
    },
    bookInfo: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
      width: '100%'
    },
    heroDescription: {
      fontSize: '0.95rem',
      lineHeight: '1.6',
      color: '#E2E8F0',
      opacity: 0.9,
      marginTop: '1rem',
      paddingTop: '1rem',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      maxWidth: '600px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
    },
    updateToggle: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      padding: '0.5rem 1rem',
      backgroundColor: 'rgba(139, 61, 255, 0.05)',
      borderRadius: '2rem',
      border: '1px solid rgba(139, 61, 255, 0.1)',
      color: '#94A3B8',
      fontSize: '0.875rem',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      '&:hover': {
        backgroundColor: 'rgba(139, 61, 255, 0.1)',
        borderColor: 'rgba(139, 61, 255, 0.2)',
        color: '#fff'
      }
    },
    title: {
      fontSize: '3rem',
      fontWeight: '700',
      color: '#fff',
      marginBottom: '0.25rem',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      lineHeight: '1.1',
      letterSpacing: '-0.02em',
      textShadow: '0 0 30px rgba(139, 61, 255, 0.3)',
      position: 'relative',
      '&::after': {
        content: '""',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: -4,
        height: 2,
        background: 'linear-gradient(to right, rgba(139, 61, 255, 0.8), transparent)',
        borderRadius: '2px'
      }
    },
    author: {
      fontSize: '1.25rem',
      color: '#94A3B8',
      fontWeight: '500',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
    },
    statsBar: {
      position: 'relative',
      width: '100%',
      backgroundColor: 'rgba(139, 61, 255, 0.03)',
      backdropFilter: 'blur(20px)',
      borderRadius: '1rem',
      border: '1px solid rgba(255, 255, 255, 0.05)',
      padding: '1rem 0',
      display: 'flex',
      justifyContent: 'center',
      maxWidth: '400px',
      margin: '2rem auto 4rem',
      boxShadow: '0 8px 32px rgba(139, 61, 255, 0.1)',
      '&::before': {
        content: '""',
        position: 'absolute',
        inset: '0',
        borderRadius: '1rem',
        padding: '1px',
        background: 'linear-gradient(135deg, rgba(139, 61, 255, 0.1), transparent)',
        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        WebkitMaskComposite: 'xor',
        maskComposite: 'exclude',
        pointerEvents: 'none'
      }
    },
    statsContent: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      padding: '0 2rem'
    },
    mainContent: {
      width: '100%',
      maxWidth: '1100px',
      margin: '0 2rem',
      padding: '0',
      display: 'flex',
      flexDirection: 'column',
      gap: '4rem'
    },
    contentSection: {
      backgroundColor: 'rgba(139, 61, 255, 0.03)',
      backdropFilter: 'blur(20px)',
      borderRadius: '1rem',
      padding: '2rem',
      border: '1px solid rgba(255, 255, 255, 0.1)'
    },
    description: {
      fontSize: '1.125rem',
      lineHeight: '1.7',
      color: '#E2E8F0',
      fontWeight: '400',
      maxWidth: '700px'
    },
    actionButton: {
      backgroundColor: 'rgba(139, 61, 255, 0.15)',
      color: '#fff',
      padding: '0.75rem 2rem',
      borderRadius: '0.75rem',
      border: '1px solid rgba(139, 61, 255, 0.3)',
      fontSize: '0.875rem',
      fontWeight: '500',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      backdropFilter: 'blur(10px)',
      boxShadow: '0 0 20px rgba(139, 61, 255, 0.2)',
      transition: 'all 0.3s ease',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      '&:hover': {
        backgroundColor: 'rgba(139, 61, 255, 0.25)',
        boxShadow: '0 0 30px rgba(139, 61, 255, 0.3)'
      }
    },
    downloadSection: {
      display: 'flex',
      gap: '0.75rem',
      flexWrap: 'wrap'
    },
    downloadButton: {
      backgroundColor: 'rgba(139, 61, 255, 0.05)',
      color: '#94A3B8',
      padding: '0.5rem 1rem',
      borderRadius: '0.5rem',
      border: '1px solid rgba(139, 61, 255, 0.1)',
      fontSize: '0.75rem',
      fontWeight: '500',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      transition: 'all 0.2s ease',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      '&:hover': {
        backgroundColor: 'rgba(139, 61, 255, 0.1)',
        borderColor: 'rgba(139, 61, 255, 0.2)'
      }
    },
    socialShare: {
      display: 'flex',
      gap: '0.5rem',
      marginTop: '1rem'
    },
    shareButton: {
      padding: '0.5rem',
      borderRadius: '0.5rem',
      backgroundColor: 'rgba(139, 61, 255, 0.05)',
      border: '1px solid rgba(139, 61, 255, 0.1)',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      color: '#94A3B8',
      '&:hover': {
        backgroundColor: 'rgba(139, 61, 255, 0.1)',
        color: '#fff'
      }
    },
    newsletter: {
      marginTop: '1.5rem',
      padding: '1.5rem',
      backgroundColor: 'rgba(139, 61, 255, 0.03)',
      borderRadius: '0.75rem',
      border: '1px solid rgba(255, 255, 255, 0.1)'
    },
    input: {
      width: '100%',
      padding: '0.75rem',
      backgroundColor: 'rgba(139, 61, 255, 0.05)',
      border: '1px solid rgba(139, 61, 255, 0.1)',
      borderRadius: '0.5rem',
      color: '#fff',
      fontSize: '0.875rem',
      marginTop: '0.75rem',
      '&:focus': {
        borderColor: 'rgba(139, 61, 255, 0.3)',
        outline: 'none',
        backgroundColor: 'rgba(139, 61, 255, 0.08)'
      }
    },
    similarBooksGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
      gap: '1rem'
    },
    coverImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: '0.75rem',
      backgroundColor: 'rgba(139, 61, 255, 0.05)'
    },
    coverOverlay: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      padding: '2rem',
      background: 'linear-gradient(to top, rgba(15, 23, 42, 0.95), transparent)',
      backdropFilter: 'blur(10px)'
    },
    bookStats: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '1.5rem',
      backgroundColor: 'rgba(139, 61, 255, 0.03)',
      backdropFilter: 'blur(20px)',
      borderRadius: '1rem',
      border: '1px solid rgba(255, 255, 255, 0.1)'
    },
    statItem: {
      textAlign: 'center',
      padding: '0 1rem'
    },
    statValue: {
      fontSize: '1.75rem',
      fontWeight: '600',
      color: '#fff',
      marginBottom: '0.25rem',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
    },
    statLabel: {
      fontSize: '0.75rem',
      color: '#94A3B8',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      fontWeight: '500',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
    },
    similarBooksSection: {
      width: '100%'
    },
    similarBookCard: {
      backgroundColor: 'rgba(139, 61, 255, 0.03)',
      backdropFilter: 'blur(20px)',
      borderRadius: '1rem',
      padding: '1rem',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      transition: 'all 0.3s ease',
      '&:hover': {
        backgroundColor: 'rgba(139, 61, 255, 0.06)',
        transform: 'translateY(-4px)',
        boxShadow: '0 8px 32px rgba(139, 61, 255, 0.15)'
      }
    },
    similarBookCover: {
      width: '100%',
      aspectRatio: '2/3',
      borderRadius: '0.75rem',
      overflow: 'hidden',
      marginBottom: '1rem',
      border: '1px solid rgba(139, 61, 255, 0.1)',
      backgroundColor: 'rgba(139, 61, 255, 0.05)'
    },
    similarBookTitle: {
      fontSize: '0.875rem',
      fontWeight: '500',
      color: '#E2E8F0',
      marginBottom: '0.25rem',
      lineHeight: '1.4',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
    },
    similarBookAuthor: {
      fontSize: '0.75rem',
      color: '#94A3B8',
      fontWeight: '400',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
    },
    rating: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.25rem',
      marginTop: '0.75rem'
    },
    metadata: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '1.5rem',
      width: '100%',
      padding: '1.5rem',
      backgroundColor: 'transparent',
      borderRadius: '1rem',
      border: 'none'
    },
    metadataItem: {
      display: 'flex',
      gap: '0.75rem',
      alignItems: 'flex-start',
      padding: '1.25rem',
      backgroundColor: 'rgba(139, 61, 255, 0.03)',
      borderRadius: '0.75rem',
      border: '1px solid rgba(255, 255, 255, 0.05)',
      transition: 'all 0.2s ease',
      backdropFilter: 'blur(10px)',
      height: '100%',
      position: 'relative',
      overflow: 'hidden',
      '&::before': {
        content: '""',
        position: 'absolute',
        inset: '0',
        borderRadius: '0.75rem',
        padding: '1px',
        background: 'linear-gradient(135deg, rgba(139, 61, 255, 0.1), transparent)',
        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        WebkitMaskComposite: 'xor',
        maskComposite: 'exclude',
        pointerEvents: 'none'
      },
      '&:hover': {
        transform: 'translateY(-2px)',
        backgroundColor: 'rgba(139, 61, 255, 0.06)',
        boxShadow: '0 8px 32px rgba(139, 61, 255, 0.15)'
      }
    },
    metadataIcon: {
      width: '28px',
      height: '28px',
      padding: '0.4rem',
      borderRadius: '0.5rem',
      backgroundColor: 'rgba(59, 130, 246, 0.15)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      color: '#94A3B8'
    },
    metadataContent: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    },
    metadataTitle: {
      fontSize: '0.75rem',
      color: '#94A3B8',
      marginBottom: '0.5rem',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      fontWeight: '600',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
    },
    metadataText: {
      fontSize: '0.875rem',
      color: '#E2E8F0',
      lineHeight: '1.5',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
    },
    reviewsSection: {
      width: '100%',
      padding: '2rem',
      backgroundColor: 'rgba(139, 61, 255, 0.03)',
      backdropFilter: 'blur(20px)',
      borderRadius: '1rem',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      marginTop: '1rem'
    },
    reviewsHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '2rem'
    },
    reviewsTitle: {
      fontSize: '1.25rem',
      fontWeight: '600',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem'
    },
    reviewsCount: {
      padding: '0.25rem 0.75rem',
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      borderRadius: '1rem',
      fontSize: '0.875rem',
      color: '#94A3B8'
    },
    reviewsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '1.5rem'
    },
    reviewCard: {
      padding: '1.5rem',
      backgroundColor: 'rgba(139, 61, 255, 0.03)',
      borderRadius: '0.75rem',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      transition: 'transform 0.2s ease',
      '&:hover': {
        transform: 'translateY(-2px)',
        backgroundColor: 'rgba(139, 61, 255, 0.06)',
        boxShadow: '0 8px 32px rgba(139, 61, 255, 0.15)'
      }
    },
    reviewHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '1rem'
    },
    reviewAuthor: {
      fontSize: '0.875rem',
      color: '#fff',
      fontWeight: '500',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
    },
    reviewAvatar: {
      width: '24px',
      height: '24px',
      borderRadius: '50%',
      backgroundColor: 'rgba(139, 61, 255, 0.1)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#94A3B8'
    },
    reviewText: {
      color: '#E2E8F0',
      fontSize: '0.875rem',
      lineHeight: '1.6',
      position: 'relative',
      paddingLeft: '1rem',
      borderLeft: '2px solid rgba(139, 61, 255, 0.2)',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
    },
    reviewRating: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.25rem'
    },
    sectionTitle: {
      fontSize: '1.5rem',
      fontWeight: '600',
      color: '#fff',
      marginBottom: '2rem',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      position: 'relative',
      textShadow: '0 0 20px rgba(139, 61, 255, 0.2)',
      '&::after': {
        content: '""',
        position: 'absolute',
        left: 0,
        right: '70%',
        bottom: -8,
        height: 2,
        background: 'linear-gradient(to right, rgba(139, 61, 255, 0.8), transparent)',
        borderRadius: '2px'
      }
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }}
      style={styles.container}
    >
      <section style={styles.heroSection}>
        <div style={styles.heroBackground} />
        <div style={styles.heroContent}>
          <motion.div 
            whileHover={{ transform: 'perspective(1000px) rotateY(0deg)' }}
            style={styles.bookCover}
          >
            <img src={book.coverImage} alt={book.title} style={styles.coverImage} />
          </motion.div>
          <div style={styles.bookInfo}>
            <div>
              <motion.h1 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                style={styles.title}
              >
                {book.title}
              </motion.h1>
              <motion.h2 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                style={styles.author}
              >
                by {book.author}
              </motion.h2>
              <motion.p style={{color: '#94A3B8', fontSize: '0.875rem', marginTop: '0.5rem'}}>
                Genre: Fantasy, Young Adult • Published: June 2005
              </motion.p>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                style={styles.heroDescription}
              >
                {book.description}
              </motion.p>
            </div>
            <motion.div style={styles.downloadSection}>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={styles.actionButton}
              >
                Start Reading
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </motion.button>
              
              <motion.button style={styles.downloadButton}>
                PDF
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
                </svg>
              </motion.button>
              
              <motion.button style={styles.downloadButton}>
                EPUB
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
                </svg>
              </motion.button>
              
              <motion.button style={styles.downloadButton}>
                MOBI
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
                </svg>
              </motion.button>
            </motion.div>

            <motion.div style={styles.socialShare}>
              <motion.button style={styles.shareButton} aria-label="Share on Twitter">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                </svg>
              </motion.button>
              <motion.button style={styles.shareButton} aria-label="Share on Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </motion.button>
            </motion.div>

            <motion.div style={{display: 'flex', justifyContent: 'flex-end', marginTop: '1rem'}}>
              <motion.button 
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(59, 130, 246, 0.15)' }}
                style={styles.updateToggle}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M10 5a2 2 0 0 1 4 0v14a2 2 0 0 1-4 0z"/>
                  <path d="M20 12a2 2 0 0 0-4 0v7a2 2 0 0 0 4 0z"/>
                  <path d="M4 15a2 2 0 0 1 4 0v4a2 2 0 0 1-4 0z"/>
                </svg>
                Get Updates
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      <div style={styles.statsBar}>
        <div style={styles.statsContent}>
          <motion.div 
            style={styles.statItem}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div style={styles.statValue}>4.8</div>
            <div style={styles.statLabel}>Rating</div>
          </motion.div>
          <div style={{width: '1px', height: '2rem', backgroundColor: 'rgba(255, 255, 255, 0.1)'}} />
          <motion.div 
            style={styles.statItem}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div style={styles.statValue}>345</div>
            <div style={styles.statLabel}>Pages</div>
          </motion.div>
          <div style={{width: '1px', height: '2rem', backgroundColor: 'rgba(255, 255, 255, 0.1)'}} />
          <motion.div 
            style={styles.statItem}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div style={styles.statValue}>12K</div>
            <div style={styles.statLabel}>Readers</div>
          </motion.div>
        </div>
      </div>

      <main style={styles.mainContent}>
        <AnimatePresence mode="wait">
          {activeTab === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div style={styles.metadata}>
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  style={styles.metadataItem}
                >
                  <div style={styles.metadataIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
                    </svg>
                  </div>
                  <div style={styles.metadataContent}>
                    <h3 style={styles.metadataTitle}>Editors</h3>
                    <p style={styles.metadataText}>{book.editors.join(", ")}</p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  style={styles.metadataItem}
                >
                  <div style={styles.metadataIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21.21 15.89A10 10 0 1 1 8 2.83M22 12A10 10 0 0 0 12 2v10z"/>
                    </svg>
                  </div>
                  <div style={styles.metadataContent}>
                    <h3 style={styles.metadataTitle}>Language</h3>
                    <p style={styles.metadataText}>{book.language}</p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  style={styles.metadataItem}
                >
                  <div style={styles.metadataIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 0 6.5 22H20M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20"/>
                    </svg>
                  </div>
                  <div style={styles.metadataContent}>
                    <h3 style={styles.metadataTitle}>Format</h3>
                    <p style={styles.metadataText}>{book.format.details}</p>
                    <p style={styles.metadataText}>ISBN: {book.format.isbn}</p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  style={styles.metadataItem}
                >
                  <div style={styles.metadataIcon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                  </div>
                  <div style={styles.metadataContent}>
                    <h3 style={styles.metadataTitle}>Published</h3>
                    <p style={styles.metadataText}>June 2005</p>
                    <p style={styles.metadataText}>First Edition</p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  style={styles.metadataItem}
                >
                  <div style={styles.metadataIcon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                  </div>
                  <div style={styles.metadataContent}>
                    <h3 style={styles.metadataTitle}>Legal</h3>
                    <p style={styles.metadataText}>© 2005 JK Rowling. For personal use only.</p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  style={styles.metadataItem}
                >
                  <div style={styles.metadataIcon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <path d="M22 6l-10 7L2 6"/>
                    </svg>
                  </div>
                  <div style={styles.metadataContent}>
                    <h3 style={styles.metadataTitle}>Contact</h3>
                    <p style={styles.metadataText}>support@pottermore.com</p>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div style={styles.reviewsSection}>
                <div style={styles.reviewsHeader}>
                  <div style={styles.reviewsTitle}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                    </svg>
                    Reader Reviews
                    <span style={styles.reviewsCount}>{book.reviews.length}</span>
                  </div>
                  <div style={styles.reviewRating}>
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill={i < 4.8 ? "#FCD34D" : "none"} 
                        stroke="#FCD34D"
                        strokeWidth="2"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                      </svg>
                    ))}
                    <span style={{color: '#FCD34D', marginLeft: '0.5rem', fontSize: '0.875rem'}}>4.8</span>
                  </div>
                </div>

                <motion.div style={styles.reviewsGrid}>
                  {book.reviews.map((review, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                      style={styles.reviewCard}
                    >
                      <div style={styles.reviewHeader}>
                        <div style={styles.reviewAuthor}>
                          <div style={styles.reviewAvatar}>
                            {review.author.charAt(0)}
                          </div>
                          {review.author}
                        </div>
                        <div style={styles.reviewRating}>
                          {[...Array(5)].map((_, i) => (
                            <svg 
                              key={i} 
                              width="12" 
                              height="12" 
                              viewBox="0 0 24 24" 
                              fill={i < review.rating ? "#FCD34D" : "none"} 
                              stroke="#FCD34D"
                              strokeWidth="2"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                            </svg>
                          ))}
                        </div>
                      </div>
                      <p style={styles.reviewText}>
                        {review.text}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          )}

          {activeTab === 'similar' && (
            <motion.div
              key="similar"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              style={styles.contentSection}
            >
              <div style={styles.similarBooksGrid}>
                {similarBooks.map((similarBook, index) => (
                  <motion.div
                    key={similarBook.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    whileHover={{ y: -4, scale: 1.02 }}
                    style={styles.similarBookCard}
                  >
                    <div style={styles.similarBookCover}>
                      <img src={similarBook.cover} alt={similarBook.title} style={styles.coverImage} />
                    </div>
                    <h4 style={styles.similarBookTitle}>{similarBook.title}</h4>
                    <p style={styles.similarBookAuthor}>{similarBook.author}</p>
                    <div style={styles.rating}>
                      {[...Array(5)].map((_, i) => (
                        <svg 
                          key={i} 
                          width="12" 
                          height="12" 
                          viewBox="0 0 24 24" 
                          fill={i < Math.floor(similarBook.rating) ? "#FCD34D" : "none"} 
                          stroke="#FCD34D"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                        </svg>
                      ))}
                      <span style={{color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.75rem', marginLeft: '0.25rem'}}>
                        {similarBook.rating}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </motion.div>
  );
};

export default BookPage; 