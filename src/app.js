import React from 'react';
import Navbar from './components/Navbar';
import FeaturedArticles from './components/FeaturedArticles';
import FeaturedTutorials from './components/FeaturedTutorials';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';
import headerImage from './images/university.png';

function App() {
    return (
        <div className="App">
            <Navbar />
            <div className="header-image-container">
                <img src={headerImage} alt="Header" className="header-image" />
            </div>
            <FeaturedArticles />
            <FeaturedTutorials />
            <Subscribe />
            <Footer />
        </div>
    );
}

export default App;