import { useState, useEffect } from 'react';
import './Blogs.css';
import Footer from './components/Footer.jsx';
import Portfolio from './assets/PortfolioWebsite1.png';

const blogPosts = [
    {
        title: "Building My Portfolio Website",
        date: "February 3rd 2025",
        content: "I just transferred my portfolio website from AWS to GitHub Pages. It was a great learning experience to understand how to host a website on a different platform. I also updated the UI/UX to make it more interactive and user-friendly. I'm excited to continue adding more projects and blog posts to my website.",
        image: Portfolio, // No image for this post
    },
];

function Blogs() {
    return (
        <>
            <div className="blogs-container">
                <h1 className="Title">My Blog</h1>
                <div className="timeline">
                    {blogPosts.map((post, index) => (
                        <div key={index} className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}>
                            <div className="content">
                                <h2>{post.title}</h2>
                                <span className="date">{post.date}</span>
                                <p>{post.content}</p>

                                {/* Conditionally render the image if it exists */}
                                {post.image && (
                                    <img 
                                        src={post.image} 
                                        alt={post.title} 
                                        className="blog-image"
                                    />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Blogs;
