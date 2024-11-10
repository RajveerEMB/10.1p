import React from 'react';
import js6 from '../images/js6.png';
import reactroute from '../images/reactroute.png';
import express from '../images/expreess.png';
import '../css/Featured.css'

const tutorials = [
  {
    title: "JS6",
    description: "JS6 Tutorial",
    username: "Rajveer",
    rating: 4.9,
    image: js6
  },
  {
    title: "React Router",
    description: "React Router Tutorial",
    username: "Sunil Dhawan",
    rating: 5,
    image: reactroute
  },
  {
    title: "Express",
    description: "Express Tutorial",
    username: "Sunil Dhawan",
    rating: 4,
    image: express
  },
];

const FeaturedTutorials = () => {
  return (
    <section className="featured-section">
      <h2>Featured Tutorials</h2>
      <div className="tutorial-list">
        {tutorials.map((tutorial, index) => (
          <div className="card" key={index}>
            <div className="image">
              <img src={tutorial.image} />
            </div>
            <h3>{tutorial.title}</h3>
            <p>{tutorial.description}</p>
            <p>Username: {tutorial.username}</p>
            <p>Rating: {tutorial.rating} ⭐</p>
          </div>
        ))}
      </div>
      <button>See all tutorials</button>
    </section>
  );
};

export default FeaturedTutorials;
