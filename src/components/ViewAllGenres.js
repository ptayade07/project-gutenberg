import React from 'react';
import './ViewAllGenres.css'; // Import the CSS file

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

const ViewAllGenres = () => {
  return (
    <div className="view-all-genres">
      <h2>All Genres</h2>
      <div className="genres-grid">
        {genres.map(genre => (
          <div key={genre.id} className="genre-card">
            <i className={`fas fa-${genre.icon}`}></i>
            <h3>{genre.name}</h3>
            <span className="book-count">{genre.count.toLocaleString()} books</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewAllGenres;