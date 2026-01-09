import React from 'react';
import { Link } from 'react-router-dom';

function Blogs() {
  const blogs = [
    {
      id: 1,
      title: 'Understanding React Hooks',
      body: 'React Hooks are functions that let you use state and other React features without writing a class.',
    },
    {
      id: 2,
      title: 'CSS Grid vs Flexbox',
      body: 'CSS Grid and Flexbox are powerful layout systems in CSS. Grid is better for 2D layouts, Flexbox for 1D.',
    },
    {
      id: 3,
      title: 'JavaScript ES6 Features',
      body: 'ES6 introduced many features like arrow functions, template literals, destructuring, and more.',
    },
    {
      id: 4,
      title: 'Introduction to TypeScript',
      body: 'TypeScript is a superset of JavaScript that adds static typing, making code more predictable and easier to debug.',
    },
    {
      id: 5,
      title: 'State Management in React',
      body: "State management can be done using React's built-in useState and useReducer, or with libraries like Redux or Zustand.",
    },
    {
      id: 6,
      title: 'Async/Await in JavaScript',
      body: 'Async/await syntax allows you to write asynchronous code in a more readable, synchronous-like manner.',
    },
    {
      id: 7,
      title: 'Building Responsive Layouts',
      body: 'Responsive design ensures that web pages look good on all devices using CSS media queries and flexible units.',
    },
    {
      id: 8,
      title: 'Using React Router',
      body: 'React Router enables client-side routing in React apps, letting you create single-page applications with multiple views.',
    },
    {
      id: 9,
      title: 'Introduction to Next.js',
      body: 'Next.js is a React framework for building server-side rendered and static web applications with ease.',
    },
    {
      id: 10,
      title: 'Optimizing Web Performance',
      body: 'Web performance optimization involves techniques like lazy loading, code splitting, and caching to speed up your app.',
    },
  ];

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
      {blogs.map((blog, index) => (
        <div
          key={index}
          style={{ width: '200px', border: '1px solid white', padding: '10px' }}
        >
          <Link to={`/blogdetails/${index}`}>
            <h2>{blog.title}</h2>
          </Link>
          <p>{blog.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Blogs;
