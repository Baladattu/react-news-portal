import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import './index.css';
import Favorites from './components/Favorites';
import Header from './components/Header';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Navbar />
          <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/article/:title" element={<ArticlePage />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;