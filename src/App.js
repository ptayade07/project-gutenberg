import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './components/MainPage';
import About from './components/About';
import UserProfile from './components/UserProfile';
import Categories from './components/Categories';
import Settings from './components/Settings';
import Search from './components/Search';
import AudioBooks from './components/AudioBooks';
import Help from './components/Help';
import FrontPage2 from './components/FrontPage2';
import Login from './components/login';
import styles from './components/Login.module.css';
import Wishlist from './components/Wishlist';
import ReadingHistory from './components/ReadingHistory';
import Community from './components/Community';
import Subscription from './components/Subscription';
import Downloads from './components/Downloads';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<FrontPage2 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/home" element={<FrontPage2 />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/search" element={<Search />} />
          <Route path="/audiobooks" element={<AudioBooks />} />
          <Route path="/help" element={<Help />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/reading-history" element={<ReadingHistory />} />
          <Route path="/community" element={<Community />} />
          <Route path="/subscriptions" element={<Subscription />} />
          <Route path="/downloads" element={<Downloads/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;