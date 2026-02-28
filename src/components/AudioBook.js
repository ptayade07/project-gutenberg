import React from 'react';

const AudioBooks = () => {
  // Sample audio books data
  const audioBooks = [
    {
      id: 1,
      title: "The Love Hypothesis",
      author: "Ali Hazelwood",
      duration: "11h 8m",
      rating: "9.3",
      image: "/images/Book2.jpg"
    },
    {
      id: 2,
      title: "The Unhoneymooners",
      author: "Christina Lauren",
      duration: "9h 7m",
      rating: "8.3",
      image: "/images/Book3.jpg"
    },
    {
      id: 3,
      title: "If He Had Been With Me",
      author: "Laura Nowlin",
      duration: "10h 15m",
      rating: "8.0",
      image: "/images/Book4.jpg"
    },
    {
      id: 4,
      title: "It Starts With Us",
      author: "Colleen Hoover",
      duration: "8h 41m",
      rating: "8.4",
      image: "/images/Book5.jpg"
    },
    {
      id: 5,
      title: "The Why Cafe",
      author: "John Strelecky",
      duration: "6h 25m",
      rating: "7.6",
      image: "/images/Book6.jpg"
    },
    {
      id: 1,
      title: "The Love Hypothesis",
      author: "Ali Hazelwood",
      duration: "11h 8m",
      rating: "9.3",
      image: "/images/Book4.jpg"
    },
    {
      id: 2,
      title: "The Unhoneymooners",
      author: "Christina Lauren",
      duration: "9h 7m",
      rating: "8.3",
      image: "/images/Book6.jpg"
    },
    {
      id: 3,
      title: "If He Had Been With Me",
      author: "Laura Nowlin",
      duration: "10h 15m",
      rating: "8.0",
      image: "/images/Book8.jpg"
    },
    {
      id: 4,
      title: "It Starts With Us",
      author: "Colleen Hoover",
      duration: "8h 41m",
      rating: "8.4",
      image: "/images/Book9.jpg"
    },
    {
      id: 5,
      title: "The Why Cafe",
      author: "John Strelecky",
      duration: "6h 25m",
      rating: "7.6",
      image: "/images/Book11.jpg"
    }
  ];

  return (
    <div className="fiction-container">
      <div className="fiction-header">
        <h1>Project Gutenberg</h1>
        <div className="fiction-filters">
          <button className="filter-btn active">All</button>
          <button className="filter-btn">New Releases</button>
          <button className="filter-btn">Bestsellers</button>
          <button className="filter-btn">Top Rated</button>
          <button className="filter-btn">Free</button>
        </div>
      </div>

      <div className="fiction-grid">
        <div className="fiction-books-grid">
          {audioBooks.map((book) => (
            <div key={book.id} className="fiction-book-card">
              <div className="fiction-book-image">
                <img src={book.image} alt={book.title} />
              </div>
              <div className="fiction-book-info">
                <div className="fiction-book-rating">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                  </svg>
                  {book.rating}
                </div>
                <h3 className="fiction-book-title">{book.title}</h3>
                <p className="fiction-book-author">by {book.author}</p>
                <div className="duration" style={{ position: 'static', background: 'none', padding: 0, marginTop: '0.5rem', color: '#888', fontSize: '0.9rem' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                  </svg>
                  {book.duration}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AudioBooks;