import React from 'react';
import react from '../images/react.png';
import nodejs from '../images/nodejs.png';
import reacthooks from '../images/reacthooks.png';
import '../css/Featured.css'

const articles = [
  {
    title: "React",
    description: "React or Voe",
    author: "Rajveer",
    rating: 5,
    image: react
  },
  {
    title: "NodeJS",
    description: "NodeJs learn",
    author: "Sunil Dhawan",
    rating: 4,
    image: nodejs
  },
  {
    title: "React Hooks",
    description: "React learn",
    author: "Sunil Dhawan",
    rating: 4,
    image: reacthooks
  },
];

const FeaturedArticles = () => {
  return (
    <section className="featured-section">
      <h1>Featured Articles</h1>
      <div className="article-list">
        {articles.map((article, index) => (
          <div className="card" key={index}>
            <div className="image">
              <img src={article.image} />
            </div>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <p>Author: {article.author}</p>
            <p>Rating: {article.rating} ⭐</p>
          </div>
        ))}
      </div>
      <button>See all articles</button>
    </section>
  );
};

export default FeaturedArticles;
