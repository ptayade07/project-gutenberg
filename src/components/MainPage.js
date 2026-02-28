import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './MainPage.css';

const popularBooks = [
  {
    id: 1,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    cover: "https://i.pinimg.com/736x/2a/04/ae/2a04ae4983816379ebb63440e9e55744.jpg",
    rating: 4.5,
    reviews: 2847,
    category: "Romance"
  },
  {
    id: 2,
    title: "Frankenstein",
    author: "Mary Shelley",
    cover: "https://i.pinimg.com/736x/b1/79/f6/b179f6c38d31946806ca193a3c490d65.jpg",
    rating: 4.3,
    reviews: 1923,
    category: "Gothic Fiction"
  },
  {
    id: 3,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    cover: "https://i.pinimg.com/736x/a9/99/2c/a9992ca0b0b9b5a294b72859458befac.jpg",
    rating: 4.7,
    reviews: 3156,
    category: "Literary Fiction"
  },
  {
    id: 4,
    title: "Dracula",
    author: "Bram Stoker",
    cover: "https://i.pinimg.com/736x/60/86/09/608609cb613363a4bec0992fd87c1f9f.jpg",
    rating: 4.4,
    reviews: 2134,
    category: "Horror"
  }
];

const genres = [
  { id: 1, name: "Fiction", count: 12453, icon: "book" },
  { id: 2, name: "Mystery", count: 5234, icon: "magnifying-glass" },
  { id: 3, name: "Romance", count: 3423, icon: "heart" },
  { id: 4, name: "Science Fiction", count: 2342, icon: "rocket" },
  { id: 5, name: "Fantasy", count: 4234, icon: "hat-wizard" },
  { id: 6, name: "Horror", count: 1234, icon: "ghost" },
  { id: 7, name: "Historical Fiction", count: 3000, icon: "clock" },
  { id: 8, name: "Thriller", count: 4500, icon: "skull" },
  { id: 9, name: "Biography", count: 2000, icon: "user" },
  { id: 10, name: "Self-Help", count: 1500, icon: "lightbulb" },
  { id: 11, name: "Children's", count: 5000, icon: "child" },
];

const authors = [
  {
    id: 1,
    name: "Charles Dickens",
    image: "https://hips.hearstapps.com/hmg-prod/images/english-novelist-charles-dickens-news-photo-1695141740.jpg",
    books: 43,
    readers: "2.1M",
    category: "Victorian Literature"
  },
  {
    id: 2,
    name: "Jane Austen",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFKbGCPnFgvs0PK7Qbz8t2tn8Aq62G-Irk_w&s",
    books: 12,
    readers: "1.8M",
    category: "Romance"
  },
  {
    id: 3,
    name: "Mark Twain",
    image: "https://m.media-amazon.com/images/M/MV5BMTc3NzcyMjU3MF5BMl5BanBnXkFtZTgwNDg2OTI1MDE@._V1_.jpg",
    books: 28,
    readers: "1.5M",
    category: "American Literature"
  }
];

const readingChallenges = [
  {
    id: 1,
    title: "Victorian Classics",
    description: "Read 5 Victorian era classics in 30 days",
    progress: 60,
    participants: 1234,
    daysLeft: 12
  },
  {
    id: 2,
    title: "Shakespeare's Plays",
    description: "Complete 3 Shakespeare plays this month",
    progress: 33,
    participants: 856,
    daysLeft: 18
  }
];

const collections = [
  {
    id: 1,
    title: "Essential Shakespeare",
    books: 12,
    image: "https://i.pinimg.com/736x/2d/39/20/2d3920aa90caa71dfc52db56a6bfef9d.jpg",
    category: "Plays"
  },
  {
    id: 2,
    title: "Gothic Horror Classics",
    books: 8,
    image: "https://i.pinimg.com/736x/8c/9e/3d/8c9e3d780610d31002d961f4b1e3d3ca.jpg",
    category: "Horror"
  },
  {
    id: 3,
    title: "Romance Through Ages",
    books: 15,
    image: "https://i.pinimg.com/736x/da/b5/47/dab547c5a3f6d41dbb6859be04ccd110.jpg",
    category: "Romance"
  }
];

const continueReading = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    cover: "https://www.gutenberg.org/cache/epub/64317/pg64317.cover.medium.jpg",
    progress: 75,
  },
  {
    id: 2,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    cover: "https://www.gutenberg.org/cache/epub/1342/pg1342.cover.medium.jpg",
    progress: 50,
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    cover: "https://www.gutenberg.org/cache/epub/37431/pg37431.cover.medium.jpg",
    progress: 30,
  },
  {
    id: 4,
    title: "Moby Dick",
    author: "Herman Melville",
    cover: "https://www.gutenberg.org/cache/epub/2701/pg2701.cover.medium.jpg",
    progress: 20,
  },
];

const MainPage = () => {
  const navigate = useNavigate();
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Adjust this number based on your needs

  // Calculate the index of the first and last item on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Assuming popularBooks is the list you want to paginate
  const currentItems = popularBooks.slice(indexOfFirstItem, indexOfLastItem);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calculate total pages
  const totalPages = Math.ceil(popularBooks.length / itemsPerPage);

  return (
    <div className="main-layout">
      {/* Sidebar Navigation */}
      <nav className="sidebar">
        <div className="nav-item" onClick={() => navigate('/')}>
          <i className="fas fa-home"></i>
          Home
        </div>
        <div className="nav-item" onClick={() => navigate('/categories')}>
          <i className="fas fa-book"></i>
          Categories
        </div>
        <div className="nav-item" onClick={() => navigate('/audiobooks')}>
          <i className="fas fa-headphones"></i>
          Audio Books
        </div>
        <div className="nav-item" onClick={() => navigate('/search')}>
          <i className="fas fa-search"></i>
          Search
        </div>
        <div className="nav-item" onClick={() => navigate('/help')}>
          <i className="fas fa-question-circle"></i>
          Help
        </div>
        <div className="nav-item" onClick={() => navigate('/settings')}>
          <i className="fas fa-cog"></i>
          Settings
        </div>
        <div className="nav-item" onClick={() => navigate('/about')}>
          <i className="fas fa-info-circle"></i>
          About
        </div>
        <div className="nav-item" onClick={() => navigate('/wishlist')}>
          <i className="fas fa-heart"></i>
          Wishlist
        </div>
        <div className="nav-item" onClick={() => navigate('/reading-history')}>
          <i className="fas fa-book-open"></i>
          Reading History
        </div>
        <div className="nav-item" onClick={() => navigate('/community')}>
          <i className="fas fa-users"></i>
          Community
        </div>
        <div className="nav-item" onClick={() => navigate('/subscriptions')}>
          <i className="fas fa-bell"></i>
          Subscriptions
        </div>
        <div className="nav-item" onClick={() => navigate('/downloads')}>
          <i className="fas fa-download"></i>
          Downloads
        </div>
        <div className="nav-item logout">
          <i className="fas fa-sign-out-alt"></i>
          Log Out
        </div>
        <div className="nav-item" onClick={() => navigate('/profile')}>
          <i className="fas fa-user"></i>
          Profile
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="main-content">
        {/* Header Section */}
        <header className="main-header">
          <div className="logo-text">
            <i className="fas fa-book-open"></i>
            <span>Project Gutenberg</span>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search books..." />
          </div>
          <div className="user-section">
            <button className="settings-btn">
              <i className="fas fa-cog"></i>
            </button>
            <Link to="/profile" className="profile-btn">
              <i className="fas fa-user-circle"></i>
            </Link>
          </div>
        </header>

        {/* Hero Section */}
        <div className="hero-container">
          <div className="hero-content">
            <h1>
              <span>Welcome to</span>
              <span className="gradient-text">Project Gutenberg</span>
              <span>Your Digital Library</span>
            </h1>
            <p>Thousands of classic books. Free to read. Available anywhere.</p>
            <div className="hero-buttons">
              <button className="browse-btn">Browse Library</button>
              <button className="info-btn">More Info</button>
            </div>
          </div>
          <div className="hero-image">
            <img 
              src="https://i.pinimg.com/736x/80/8b/44/808b44b81dadb3002d5361e5b3bda52a.jpg" 
              alt="Featured Book" 
              className="featured-book"
            />
          </div>
        </div>

        {/* Featured Authors Section */}
        <section className="authors-section">
          <div className="section-header">
            <h2>Featured Authors</h2>
            <button className="view-all-btn">View All Authors</button>
          </div>
          <div className="authors-grid">
            {authors.map(author => (
              <div key={author.id} className="author-card">
                <div className="author-image">
                  <img src={author.image} alt={author.name} />
                </div>
                <div className="author-info">
                  <h3>{author.name}</h3>
                  <span className="author-category">{author.category}</span>
                  <div className="author-stats">
                    <div className="stat">
                      <span className="stat-value">{author.books}</span>
                      <span className="stat-label">Books</span>
                    </div>
                    <div className="stat">
                      <span className="stat-value">{author.readers}</span>
                      <span className="stat-label">Readers</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Reading Challenges Section */}
        <section className="challenges-section">
          <div className="section-header">
            <h2>Reading Challenges</h2>
            <button className="view-all-btn">View All Challenges</button>
          </div>
          <div className="challenges-grid">
            {readingChallenges.map(challenge => (
              <div key={challenge.id} className="challenge-card">
                <div className="challenge-info">
                  <h3>{challenge.title}</h3>
                  <p>{challenge.description}</p>
                  <div className="challenge-progress">
                    <div className="progress-bar">
                      <div 
                        className="progress" 
                        style={{ width: `${challenge.progress}%` }}
                      ></div>
                    </div>
                    <span className="progress-text">{challenge.progress}% Complete</span>
                  </div>
                  <div className="challenge-meta">
                    <span>{challenge.participants.toLocaleString()} participants</span>
                    <span>{challenge.daysLeft} days left</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Genres Section */}
        <section className="genres-section">
          <div className="section-header">
            <h2>Browse by Genre</h2>
            <button className="view-all-btn">View All</button>
          </div>
          <div className="genres-grid">
            {genres.map(genre => (
              <div key={genre.id} className="genre-card">
                <i className={`fas fa-${genre.icon}`}></i>
                <h3>{genre.name}</h3>
                <span className="book-count">{genre.count.toLocaleString()} books</span>
              </div>
            ))}
          </div>
        </section>

        {/* Book Collections Section */}
        <section className="collections-section">
          <div className="section-header">
            <h2>Curated Collections</h2>
            <button className="view-all-btn">Browse Collections</button>
          </div>
          <div className="collections-grid">
            {collections.map(collection => (
              <div key={collection.id} className="collection-card">
                <div className="collection-cover">
                  <img src={collection.image} alt={collection.title} />
                  <div className="collection-overlay">
                    <span className="book-count">{collection.books} Books</span>
                    <button className="view-collection-btn">View Collection</button>
                  </div>
                </div>
                <div className="collection-info">
                  <h3>{collection.title}</h3>
                  <span className="collection-category">{collection.category}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Popular Classics Section */}
        <section className="popular-section">
          <div className="section-header">
            <h2>Popular Classics</h2>
            <div className="view-options">
              <button className="view-option active">All</button>
              <button className="view-option">Fiction</button>
              <button className="view-option">Non-Fiction</button>
              <button className="view-option">Poetry</button>
              <button className="view-option">Romance</button>
              <button className="view-option">Mystery</button>
              <button className="view-option">Thriller</button>
            </div>
          </div>
          <div className="books-grid">
            {currentItems.map(book => (
              <div key={book.id} className="book-card">
                <div className="book-cover">
                  <img src={book.cover} alt={book.title} />
                  <div className="book-overlay">
                    <button className="play-btn">
                      <i className="fas fa-play"></i>
                    </button>
                  </div>
                </div>
                <div className="book-info">
                  <h3 className="book-title">{book.title}</h3>
                  <p className="book-author">{book.author}</p>
                  <div className="book-meta">
                    <span className="book-rating">
                      <i className="fas fa-star"></i>
                      {book.rating}
                    </span>
                    <span className="book-reviews">
                      ({book.reviews.toLocaleString()} reviews)
                    </span>
                  </div>
                  <span className="book-category">{book.category}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="pagination-controls">
            {Array.from({ length: totalPages }, (_, index) => (
              <button 
                key={index + 1} 
                onClick={() => handlePageChange(index + 1)} 
                className={`page-button ${currentPage === index + 1 ? 'active' : ''}`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default MainPage;